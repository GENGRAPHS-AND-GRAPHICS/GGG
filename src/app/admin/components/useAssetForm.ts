"use client";

import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getUploadUrlAction, createPostAction, updatePostAction } from "../actions";

export const getCleanFilename = (path: string) => {
    const base = path.split("/").pop() || "Uploaded Archive";
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-/i.test(base)) {
        return base.substring(37);
    }
    return base;
};

export interface ChecklistItem {
    id: string;
    label: string;
    completed: boolean;
    required: boolean;
}

export function useAssetForm(editingPost: any | null, onSaveSuccess?: () => void) {
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Form states
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [assetType, setAssetType] = useState<"powerbi" | "uiux">("powerbi");
    const [sourceLink, setSourceLink] = useState("");
    const [aspect, setAspect] = useState<"horizontal" | "vertical">("horizontal");
    const [url, setUrl] = useState("");
    const [thumbnails, setThumbnails] = useState<string[]>([]);
    const [activeThumbnailIndex, setActiveThumbnailIndex] = useState<number>(0);
    const [zipFileKey, setZipFileKey] = useState<string | null>(null);
    const [zipFileName, setZipFileName] = useState<string | null>(null);
    const [zipFileSize, setZipFileSize] = useState<number | null>(null);
    const [uploadingZipProgress, setUploadingZipProgress] = useState<number | null>(null);
    const [uploadingImageProgress, setUploadingImageProgress] = useState<number | null>(null);
    const [tags, setTags] = useState<string[]>([]);
    const [tempPostId, setTempPostId] = useState("");
    
    // Reference links state
    const [references, setReferences] = useState<{ label: string; url: string }[]>([]);
    const [refLabelInput, setRefLabelInput] = useState("");
    const [refUrlInput, setRefUrlInput] = useState("");

    // Initialize state
    useEffect(() => {
        setTempPostId(editingPost?.id || crypto.randomUUID());
        if (editingPost) {
            setTitle(editingPost.title || "");
            setDescription(editingPost.description || "");
            setPrice(editingPost.price ? editingPost.price.toString() : "");
            setAssetType(editingPost.assetType || "powerbi");
            setSourceLink(editingPost.sourceLink || "");
            setAspect(editingPost.aspect || "horizontal");
            setUrl(editingPost.url || "");
            setThumbnails(editingPost.thumbnails?.length ? editingPost.thumbnails : (editingPost.imageUrl ? [editingPost.imageUrl] : []));
            setActiveThumbnailIndex(editingPost.activeThumbnailIndex || 0);
            setTags(editingPost.tags || []);
            setReferences(editingPost.references || []);
            setZipFileKey(editingPost.fileUrl || null);
            setZipFileName(editingPost.fileUrl ? getCleanFilename(editingPost.fileUrl) : null);
            setZipFileSize(null);
            setUploadingZipProgress(null);
            setUploadingImageProgress(null);
        } else {
            setTitle("");
            setDescription("");
            setPrice("");
            setAssetType("powerbi");
            setSourceLink("");
            setAspect("horizontal");
            setUrl("");
            setThumbnails([]);
            setActiveThumbnailIndex(0);
            setTags([]);
            setReferences([]);
            setZipFileKey(null);
            setZipFileName(null);
            setZipFileSize(null);
            setUploadingZipProgress(null);
            setUploadingImageProgress(null);
        }
        setRefLabelInput("");
        setRefUrlInput("");
    }, [editingPost]);

    // Handle cleanup of timers
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // File handlers
    async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file && thumbnails.length < 10) {
            setIsLoading(true);
            setUploadingImageProgress(0);
            try {
                const uploadData = await getUploadUrlAction(file.name, file.type || "image/png", true, tempPostId);
                const xhr = new XMLHttpRequest();
                xhr.open("PUT", uploadData.uploadUrl, true);
                xhr.setRequestHeader("Content-Type", file.type || "image/png");
                
                xhr.upload.onprogress = (event) => {
                    if (event.lengthComputable) {
                        const percentComplete = Math.round((event.loaded / event.total) * 100);
                        setUploadingImageProgress(percentComplete);
                    }
                };
                
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        setThumbnails(prev => [...prev, uploadData.fileKey]);
                        setUploadingImageProgress(null);
                        toast.success("Image uploaded successfully!");
                    } else {
                        setUploadingImageProgress(null);
                        toast.error("Failed to upload image.");
                    }
                };
                
                xhr.onerror = () => {
                    setUploadingImageProgress(null);
                    toast.error("An error occurred during image upload.");
                };
                
                xhr.send(file);
            } catch (err: any) {
                setUploadingImageProgress(null);
                toast.error(err.message || "Failed to start image upload.");
            } finally {
                setIsLoading(false);
            }
        }
    }

    async function handleZipChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsLoading(true);
        setUploadingZipProgress(0);
        setZipFileName(file.name);
        setZipFileSize(file.size);

        try {
            const uploadData = await getUploadUrlAction(file.name, file.type || "application/zip", false, tempPostId);
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", uploadData.uploadUrl, true);
            xhr.setRequestHeader("Content-Type", file.type || "application/zip");

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percentComplete = Math.round((event.loaded / event.total) * 100);
                    setUploadingZipProgress(percentComplete);
                }
            };

            xhr.onload = () => {
                if (xhr.status === 200) {
                    setZipFileKey(uploadData.fileKey);
                    setUploadingZipProgress(null);
                    toast.success("ZIP archive uploaded successfully!");
                } else {
                    setUploadingZipProgress(null);
                    setZipFileName(null);
                    setZipFileSize(null);
                    toast.error("Failed to upload ZIP archive.");
                }
            };

            xhr.onerror = () => {
                setUploadingZipProgress(null);
                setZipFileName(null);
                setZipFileSize(null);
                toast.error("An error occurred during ZIP upload.");
            };

            xhr.send(file);
        } catch (err: any) {
            setUploadingZipProgress(null);
            setZipFileName(null);
            setZipFileSize(null);
            toast.error(err.message || "Failed to start ZIP upload.");
        } finally {
            setIsLoading(false);
        }
    }

    function removeZipFile() {
        setZipFileKey(null);
        setZipFileName(null);
        setZipFileSize(null);
        setUploadingZipProgress(null);
    }

    function removeThumbnail(index: number) {
        setThumbnails(prev => prev.filter((_, i) => i !== index));
        if (activeThumbnailIndex === index) {
            setActiveThumbnailIndex(0);
        } else if (activeThumbnailIndex > index) {
            setActiveThumbnailIndex(activeThumbnailIndex - 1);
        }
    }

    function handleAddReference() {
        const label = refLabelInput.trim();
        const urlStr = refUrlInput.trim();
        if (label && urlStr) {
            try {
                new URL(urlStr);
                setReferences([...references, { label, url: urlStr }]);
                setRefLabelInput("");
                setRefUrlInput("");
            } catch (e) {
                toast.error("Please enter a valid URL including protocol (e.g. https://)");
            }
        } else {
            toast.warning("Both label and URL are required to add a reference.");
        }
    }

    async function handleSave() {
        if (!title.trim()) {
            toast.error("Asset Title is required.");
            return;
        }

        setIsLoading(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("assetType", assetType);
        formData.append("sourceLink", sourceLink);
        formData.append("aspect", aspect);
        formData.append("url", url);
        formData.append("activeThumbnailIndex", activeThumbnailIndex.toString());
        formData.append("thumbnails", JSON.stringify(thumbnails));
        formData.append("tags", JSON.stringify(tags));
        formData.append("references", JSON.stringify(references));
        
        if (zipFileKey) {
            formData.append("fileUrl", zipFileKey);
        }
        
        if (editingPost) formData.append("id", editingPost.id);

        try {
            if (editingPost) {
                await updatePostAction(formData);
                toast.success('Configuration updated successfully!');
            } else {
                await createPostAction(formData);
                toast.success('Configuration published successfully!');
            }
            
            queryClient.invalidateQueries({ queryKey: ['adminPosts'] });
            
            if (onSaveSuccess) {
                timeoutRef.current = setTimeout(() => { onSaveSuccess(); }, 1000);
            }
        } catch (error: any) {
            toast.error(error.message || 'Failed to process request');
        } finally {
            setIsLoading(false);
        }
    }

    // Dynamic readiness checklist
    const checklist: ChecklistItem[] = [
        {
            id: "title",
            label: "Asset title defined",
            completed: !!title.trim(),
            required: true
        },
        {
            id: "desc",
            label: "Supplemental details added",
            completed: !!description && description !== "<p></p>",
            required: false
        },
        {
            id: "thumb",
            label: "At least one thumbnail snapshot",
            completed: thumbnails.length > 0,
            required: true
        },
        {
            id: "file",
            label: "ZIP / PBIX blueprint uploaded",
            completed: !!zipFileKey,
            required: assetType === "powerbi"
        },
        {
            id: "url",
            label: "Live preview interface URL set",
            completed: !!url.trim(),
            required: true
        },
        {
            id: "tags",
            label: "Tags/categories classified",
            completed: tags.length > 0,
            required: false
        }
    ];

    // Progress metrics per step
    const getBasicsProgress = () => {
        let score = 0;
        if (title.trim()) score += 50;
        if (description && description !== "<p></p>") score += 50;
        return score;
    };

    const getMediaProgress = () => {
        let score = 0;
        if (thumbnails.length > 0) score += 50;
        if (zipFileKey) score += 50;
        return score;
    };

    const getPricingProgress = () => {
        let score = 0;
        if (url.trim()) score += 60;
        if (aspect) score += 40;
        return score;
    };

    const getTagsProgress = () => {
        let score = 0;
        if (tags.length > 0) score += 50;
        if (references.length > 0) score += 50;
        return score;
    };

    const overallProgress = Math.round(
        (getBasicsProgress() + getMediaProgress() + getPricingProgress() + getTagsProgress()) / 4
    );

    const isReadyToPublish = checklist.filter(item => item.required).every(item => item.completed);

    return {
        // States
        title, setTitle,
        description, setDescription,
        price, setPrice,
        assetType, setAssetType,
        sourceLink, setSourceLink,
        aspect, setAspect,
        url, setUrl,
        thumbnails, setThumbnails,
        activeThumbnailIndex, setActiveThumbnailIndex,
        zipFileKey, setZipFileKey,
        zipFileName, setZipFileName,
        zipFileSize, setZipFileSize,
        uploadingZipProgress, setUploadingZipProgress,
        uploadingImageProgress, setUploadingImageProgress,
        tags, setTags,
        tempPostId,
        references, setReferences,
        refLabelInput, setRefLabelInput,
        refUrlInput, setRefUrlInput,
        isLoading,

        // Handlers
        handleImageChange,
        handleZipChange,
        removeZipFile,
        removeThumbnail,
        handleAddReference,
        handleSave,

        // Checklist & Progress
        checklist,
        isReadyToPublish,
        overallProgress,
        stepsProgress: {
            basics: getBasicsProgress(),
            media: getMediaProgress(),
            pricing: getPricingProgress(),
            tags: getTagsProgress(),
        }
    };
}

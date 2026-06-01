"use client";

import React from "react";
import { Upload, Plus, X, Loader2, CheckCircle2 } from "lucide-react";
import { getMediaUrl } from "@/lib/utils";

interface SectionMediaProps {
    assetType: "powerbi" | "uiux";
    thumbnails: string[];
    activeThumbnailIndex: number;
    setActiveThumbnailIndex: (index: number) => void;
    removeThumbnail: (index: number) => void;
    uploadingImageProgress: number | null;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    zipFileKey: string | null;
    zipFileName: string | null;
    zipFileSize: number | null;
    uploadingZipProgress: number | null;
    handleZipChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    removeZipFile: () => void;
}

export function SectionMedia({
    assetType,
    thumbnails,
    activeThumbnailIndex,
    setActiveThumbnailIndex,
    removeThumbnail,
    uploadingImageProgress,
    handleImageChange,
    zipFileKey,
    zipFileName,
    zipFileSize,
    uploadingZipProgress,
    handleZipChange,
    removeZipFile
}: SectionMediaProps) {
    return (
        <div className="space-y-6">
            {/* THUMBNAILS UPLOAD */}
            <div className="space-y-2">
                <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">
                        Thumbnails (Max 10) *
                    </label>
                    <p className="text-[11px] text-muted-foreground">Select one as primary to display on the marketplace grid card.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {thumbnails.map((thumb, idx) => (
                        <div 
                            key={idx} 
                            className={`relative rounded-xl overflow-hidden aspect-video border group/thumb transition-all duration-200 ${
                                activeThumbnailIndex === idx 
                                    ? 'border-amber-500 ring-2 ring-amber-500/30' 
                                    : 'border-[#3E291F] hover:border-[#5C3E30]'
                            }`}
                        >
                            <img 
                                src={getMediaUrl(thumb)} 
                                alt={`Thumbnail ${idx + 1}`} 
                                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300" 
                            />
                            <div className="absolute top-1.5 right-1.5 flex gap-1 z-30 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                <button 
                                    type="button" 
                                    onClick={() => removeThumbnail(idx)} 
                                    className="bg-black/80 hover:bg-red-500 p-1.5 rounded-lg text-white transition-colors cursor-pointer"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <button 
                                type="button" 
                                onClick={() => setActiveThumbnailIndex(idx)} 
                                className="absolute inset-0 z-10 flex items-end justify-center p-1.5 cursor-pointer bg-gradient-to-t from-black/60 via-transparent to-transparent"
                            >
                                {activeThumbnailIndex === idx ? (
                                    <span className="bg-amber-500 text-black text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(245,158,11,0.4)]">Primary</span>
                                ) : (
                                    <span className="text-white text-[8px] bg-black/40 px-1.5 py-0.5 rounded opacity-0 group-hover/thumb:opacity-100 transition-opacity">Set Primary</span>
                                )}
                            </button>
                        </div>
                    ))}
                    {uploadingImageProgress !== null && (
                        <div className="relative rounded-xl overflow-hidden aspect-video border border-[#3E291F] bg-[#130B09]/40 flex flex-col items-center justify-center animate-pulse">
                            <Loader2 className="w-4 h-4 animate-spin text-amber-500 mb-1" />
                            <span className="text-[9px] font-mono text-amber-400 font-bold">{uploadingImageProgress}%</span>
                        </div>
                    )}
                    {thumbnails.length < 10 && uploadingImageProgress === null && (
                        <div className="relative rounded-xl border border-dashed border-[#3E291F] hover:border-amber-500/50 bg-[#130B09]/40 hover:bg-[#130B09]/80 flex flex-col items-center justify-center aspect-video cursor-pointer transition-all duration-200 group">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                            />
                            <Plus className="w-5 h-5 text-muted-foreground group-hover:text-amber-500 transition-colors" />
                            <span className="text-[9px] font-medium text-muted-foreground group-hover:text-amber-400 mt-1 transition-colors">Add Image</span>
                        </div>
                    )}
                </div>
            </div>

            {/* ZIP UPLOAD */}
            <div className="space-y-2 border-t border-[#3E291F]/30 pt-5">
                <div>
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">
                        Source Blueprint Archive {assetType === 'powerbi' ? "*" : "(Optional)"}
                    </label>
                    <p className="text-[11px] text-muted-foreground">Upload the functional archive (.zip, .pbix, etc.) for buyer downloads.</p>
                </div>
                
                <div className="relative border border-dashed border-[#3E291F] hover:border-amber-500/50 bg-[#0E0907] hover:bg-[#130B09]/60 rounded-xl transition-all duration-200 cursor-pointer group">
                    <input
                        type="file"
                        disabled={uploadingZipProgress !== null}
                        accept={assetType === 'powerbi' ? ".zip,application/zip,.pbix" : ".zip,application/zip,.fig,.psd,.ai,.xd"}
                        onChange={handleZipChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
                    />
                    <div className="flex items-center gap-3.5 px-4 py-3.5 pointer-events-none">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500/35 flex items-center justify-center shrink-0 transition-all duration-200">
                            {uploadingZipProgress !== null ? (
                                <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                            ) : (
                                <Upload className="w-4 h-4 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-white/70 group-hover:text-white transition-colors leading-none">
                                {zipFileKey ? "Replace Blueprint File" : "Upload source archive (.zip, .pbix, .fig)"}
                            </p>
                            <p className="text-[10px] text-white/30 mt-1 leading-none">
                                {uploadingZipProgress !== null ? `Uploading: ${uploadingZipProgress}%` : "Drag & drop, or click Browse"}
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 text-[10px] font-semibold text-amber-400 group-hover:text-amber-300 transition-all duration-200 shrink-0">
                            Browse
                        </span>
                    </div>
                </div>

                {/* Upload Progress Bar */}
                {uploadingZipProgress !== null && (
                    <div className="flex flex-col gap-1.5 bg-[#130B09]/40 border border-[#3E291F] rounded-xl px-3.5 py-3 animate-pulse">
                        <div className="flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2 min-w-0">
                                <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500 shrink-0" />
                                <span className="text-white/70 font-semibold truncate max-w-[240px]">{zipFileName}</span>
                            </div>
                            <span className="text-amber-400 font-bold font-mono">{uploadingZipProgress}%</span>
                        </div>
                        <div className="w-full bg-[#1F1613] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full transition-all duration-150" style={{ width: `${uploadingZipProgress}%` }} />
                        </div>
                    </div>
                )}

                {/* Uploaded File indicator card */}
                {zipFileKey && uploadingZipProgress === null && (
                    <div className="flex items-center gap-3 bg-[#0D1F15] border border-emerald-500/25 rounded-xl px-4 py-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-emerald-300 truncate leading-none mb-1">{zipFileName}</p>
                            <p className="text-[9px] text-emerald-500/60 leading-none">
                                {zipFileSize ? `${(zipFileSize / 1024).toFixed(0)} KB · ` : ""}Source ready for catalog distribution
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={removeZipFile}
                            className="w-6 h-6 rounded-md bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors cursor-pointer shrink-0"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

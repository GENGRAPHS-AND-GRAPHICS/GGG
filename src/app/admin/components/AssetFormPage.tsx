"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2, CheckCircle2, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAssetForm } from "./useAssetForm";
import { AssetFormSidebar, FormStep } from "./AssetFormSidebar";
import { AssetPreviewRail } from "./AssetPreviewRail";
import { AssetFormFooter } from "./AssetFormFooter";
import { SectionBasics } from "./sections/SectionBasics";
import { SectionMedia } from "./sections/SectionMedia";
import { SectionPricing } from "./sections/SectionPricing";
import { SectionTagsRefs } from "./sections/SectionTagsRefs";

interface AssetFormPageProps {
    editingPost: any | null;
}

export function AssetFormPage({ editingPost }: AssetFormPageProps) {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState<FormStep>("basics");
    const [navbarHeight, setNavbarHeight] = useState(88);
    
    React.useEffect(() => {
        const updateHeight = () => {
            const isMobile = window.innerWidth < 640;
            const isScrolled = window.scrollY > 10;
            if (isScrolled) {
                setNavbarHeight(64);
            } else {
                setNavbarHeight(isMobile ? 76 : 88);
            }
        };
        
        window.addEventListener("scroll", updateHeight);
        window.addEventListener("resize", updateHeight);
        updateHeight();
        
        return () => {
            window.removeEventListener("scroll", updateHeight);
            window.removeEventListener("resize", updateHeight);
        };
    }, []);
    
    // Instantiate core form state & XHR upload machine
    const form = useAssetForm(editingPost, () => {
        router.push("/admin");
    });

    const handleBackToDashboard = () => {
        if (form.isLoading) return;
        router.push("/admin");
    };

    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative select-none">
            {/* Header / Top Bar */}
            <div 
                className="fixed left-0 right-0 h-16 bg-[#0E0A09]/90 backdrop-blur-md border-b border-[#3E291F]/30 z-[40] transition-all duration-500 ease-out shadow-lg"
                style={{ top: `${navbarHeight}px` }}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    {/* Left: Breadcrumbs & Back */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={handleBackToDashboard}
                            disabled={form.isLoading}
                            className="w-8 h-8 rounded-xl border border-[#3E291F]/50 bg-[#1D1412] hover:bg-[#251A17] hover:border-[#5C3E30] flex items-center justify-center text-muted-foreground hover:text-white transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div className="leading-tight">
                            <div className="flex items-center gap-1.5 text-[9px] uppercase font-bold tracking-widest text-muted-foreground">
                                <span>Admin</span>
                                <span>/</span>
                                <span className="hover:text-amber-400 cursor-pointer" onClick={handleBackToDashboard}>Portfolio</span>
                                <span>/</span>
                                <span className="text-amber-500 font-extrabold">{editingPost ? "Edit" : "New"}</span>
                            </div>
                            <h1 className="text-[12px] font-bold uppercase tracking-wider text-white mt-0.5">
                                {editingPost ? 'Edit Asset Configuration' : 'Release New Asset Blueprint'}
                            </h1>
                        </div>
                    </div>

                    {/* Right: Persistent Action Triggers */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={form.handleSave}
                            disabled={!form.isReadyToPublish || form.isLoading}
                            className={`h-8.5 px-4.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 border select-none ${
                                !form.isReadyToPublish
                                    ? 'bg-[#2D1D17] text-amber-500 border-amber-500/20 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold shadow-[0_4px_15px_rgba(245,158,11,0.15)] border-transparent active:scale-95'
                            }`}
                        >
                            {form.isLoading ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                                <>
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    {editingPost ? "Update Template" : "Publish Template"}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Three Column Page Workspace */}
            <main 
                className="max-w-7xl mx-auto px-6 pb-12 transition-all duration-500 ease-out" 
                style={{ paddingTop: `${navbarHeight + 80}px` }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Sidebar (Width: 3 cols) */}
                    <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-[144px]">
                        <div className="flex items-center gap-2 px-1">
                            <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                                <LayoutGrid className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Workspace Sections</span>
                        </div>
                        <AssetFormSidebar 
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            stepsProgress={form.stepsProgress}
                            overallProgress={form.overallProgress}
                        />
                    </div>

                    {/* Center Column: Focused Form Section (Width: 6 cols) */}
                    <div className="lg:col-span-6 bg-gradient-to-b from-[#18110E] to-[#0E0A09] border border-[#3E291F]/50 rounded-2xl p-5 lg:p-6 shadow-xl relative min-h-[480px] flex flex-col justify-between">
                        {/* Decorative top border glow */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                        
                        <div className="space-y-6 flex-1">
                            {/* Step Title Header */}
                            <div className="border-b border-[#3E291F]/30 pb-3 flex items-center justify-between">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                                    {activeStep === "basics" && "Step 1: Basics Information"}
                                    {activeStep === "media" && "Step 2: Media & Archives"}
                                    {activeStep === "pricing" && "Step 3: Pricing & Aspect Ratio"}
                                    {activeStep === "tags" && "Step 4: Classification & Tags"}
                                </h3>
                                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                                    {activeStep === "basics" && "01 / 04"}
                                    {activeStep === "media" && "02 / 04"}
                                    {activeStep === "pricing" && "03 / 04"}
                                    {activeStep === "tags" && "04 / 04"}
                                </span>
                            </div>

                            {/* Section Renders with Slide-up Animation */}
                            <div className="relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {activeStep === "basics" && (
                                            <SectionBasics 
                                                assetType={form.assetType}
                                                setAssetType={form.setAssetType}
                                                title={form.title}
                                                setTitle={form.setTitle}
                                                description={form.description}
                                                setDescription={form.setDescription}
                                            />
                                        )}

                                        {activeStep === "media" && (
                                            <SectionMedia 
                                                assetType={form.assetType}
                                                thumbnails={form.thumbnails}
                                                activeThumbnailIndex={form.activeThumbnailIndex}
                                                setActiveThumbnailIndex={form.setActiveThumbnailIndex}
                                                removeThumbnail={form.removeThumbnail}
                                                uploadingImageProgress={form.uploadingImageProgress}
                                                handleImageChange={form.handleImageChange}
                                                zipFileKey={form.zipFileKey}
                                                zipFileName={form.zipFileName}
                                                zipFileSize={form.zipFileSize}
                                                uploadingZipProgress={form.uploadingZipProgress}
                                                handleZipChange={form.handleZipChange}
                                                removeZipFile={form.removeZipFile}
                                            />
                                        )}

                                        {activeStep === "pricing" && (
                                            <SectionPricing 
                                                assetType={form.assetType}
                                                price={form.price}
                                                setPrice={form.setPrice}
                                                aspect={form.aspect}
                                                setAspect={form.setAspect}
                                                url={form.url}
                                                setUrl={form.setUrl}
                                                sourceLink={form.sourceLink}
                                                setSourceLink={form.setSourceLink}
                                            />
                                        )}

                                        {activeStep === "tags" && (
                                            <SectionTagsRefs 
                                                tags={form.tags}
                                                setTags={form.setTags}
                                                references={form.references}
                                                setReferences={form.setReferences}
                                                refLabelInput={form.refLabelInput}
                                                setRefLabelInput={form.setRefLabelInput}
                                                refUrlInput={form.refUrlInput}
                                                setRefUrlInput={form.setRefUrlInput}
                                                handleAddReference={form.handleAddReference}
                                            />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Stepper Footer Controls */}
                        <div className="mt-8">
                            <AssetFormFooter 
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                                isLoading={form.isLoading}
                                isReadyToPublish={form.isReadyToPublish}
                                handleSave={form.handleSave}
                                editingPost={editingPost}
                            />
                        </div>
                    </div>

                    {/* Right Column: Preview & Checklist (Width: 3 cols) */}
                    <div className="lg:col-span-3 lg:sticky lg:top-[144px] space-y-6">
                        <AssetPreviewRail 
                            assetType={form.assetType}
                            title={form.title}
                            description={form.description}
                            price={form.price}
                            aspect={form.aspect}
                            url={form.url}
                            thumbnails={form.thumbnails}
                            activeThumbnailIndex={form.activeThumbnailIndex}
                            tags={form.tags}
                            checklist={form.checklist}
                        />
                    </div>

                </div>
            </main>
        </div>
    );
}

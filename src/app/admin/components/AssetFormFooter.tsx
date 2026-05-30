"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Save, CloudLightning } from "lucide-react";
import { FormStep } from "./AssetFormSidebar";

interface AssetFormFooterProps {
    activeStep: FormStep;
    setActiveStep: (step: FormStep) => void;
    isLoading: boolean;
    isReadyToPublish: boolean;
    handleSave: () => void;
    editingPost: any | null;
}

export function AssetFormFooter({
    activeStep,
    setActiveStep,
    isLoading,
    isReadyToPublish,
    handleSave,
    editingPost
}: AssetFormFooterProps) {
    const stepsOrder: FormStep[] = ["basics", "media", "pricing", "tags"];
    const currentIndex = stepsOrder.indexOf(activeStep);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setActiveStep(stepsOrder[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (currentIndex < stepsOrder.length - 1) {
            setActiveStep(stepsOrder[currentIndex + 1]);
        }
    };

    const isFirstStep = currentIndex === 0;
    const isLastStep = currentIndex === stepsOrder.length - 1;

    return (
        <div className="flex items-center justify-between border-t border-[#3E291F]/30 pt-5 relative z-10">
            {/* Auto-save notification / draft state */}
            <div className="flex items-center gap-2 text-muted-foreground/60 text-[10px] uppercase font-bold tracking-wider font-mono">
                <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <CloudLightning className="w-3.5 h-3.5 text-amber-500" />
                Auto-saved as draft
            </div>

            {/* Stepper buttons */}
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isFirstStep || isLoading}
                    className={`h-9 px-3.5 rounded-xl border flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none ${
                        isFirstStep
                            ? 'bg-[#18110E]/10 border-[#3E291F]/15 text-muted-foreground/35 cursor-not-allowed'
                            : 'bg-[#1D1412] hover:bg-[#251A17] text-muted-foreground hover:text-white border-[#3E291F] active:scale-95'
                    }`}
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Previous
                </button>

                {isLastStep ? (
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={!isReadyToPublish || isLoading}
                        className={`h-9 px-4.5 rounded-xl flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none border ${
                            !isReadyToPublish
                                ? 'bg-[#2D1D17] text-amber-500 border-amber-500/20 cursor-not-allowed'
                                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold shadow-[0_4px_15px_rgba(245,158,11,0.15)] border-transparent active:scale-95'
                        }`}
                    >
                        <Save className="w-3.5 h-3.5" />
                        {editingPost ? "Update Template" : "Publish Template"}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={isLoading}
                        className="h-9 px-4 rounded-xl bg-[#1D1412] hover:bg-[#251A17] border border-[#3E291F] text-muted-foreground hover:text-white flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none active:scale-95"
                    >
                        Next Section
                        <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>
        </div>
    );
}

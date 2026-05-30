"use client";

import React from "react";
import { Info, Image, DollarSign, Tag, Check } from "lucide-react";

export type FormStep = "basics" | "media" | "pricing" | "tags";

interface AssetFormSidebarProps {
    activeStep: FormStep;
    setActiveStep: (step: FormStep) => void;
    stepsProgress: {
        basics: number;
        media: number;
        pricing: number;
        tags: number;
    };
    overallProgress: number;
}

export function AssetFormSidebar({
    activeStep,
    setActiveStep,
    stepsProgress,
    overallProgress
}: AssetFormSidebarProps) {
    const steps = [
        {
            id: "basics" as FormStep,
            label: "Basic Details",
            desc: "Asset title and details",
            icon: <Info className="w-4 h-4" />,
            progress: stepsProgress.basics
        },
        {
            id: "media" as FormStep,
            label: "Visuals & Files",
            desc: "Snapshots and source archive",
            icon: <Image className="w-4 h-4" />,
            progress: stepsProgress.media
        },
        {
            id: "pricing" as FormStep,
            label: "Format & Price",
            desc: "Price, aspect, live demo URL",
            icon: <DollarSign className="w-4 h-4" />,
            progress: stepsProgress.pricing
        },
        {
            id: "tags" as FormStep,
            label: "Taxonomy & Context",
            desc: "Tags and supplementary links",
            icon: <Tag className="w-4 h-4" />,
            progress: stepsProgress.tags
        }
    ];

    return (
        <div className="space-y-6">
            {/* Total Completion Progress Gauge */}
            <div className="bg-[#18110E] border border-[#3E291F]/40 p-4.5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white uppercase tracking-wider">Overall Readiness</span>
                    <span className="font-bold font-mono text-amber-400">{overallProgress}%</span>
                </div>
                <div className="w-full bg-[#1F1613] h-2 rounded-full overflow-hidden border border-[#3E291F]/20">
                    <div 
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-500" 
                        style={{ width: `${overallProgress}%` }}
                    />
                </div>
            </div>

            {/* Vertical Steps Navigation */}
            <nav className="space-y-2">
                {steps.map((step) => {
                    const isActive = activeStep === step.id;
                    const isCompleted = step.progress === 100;
                    
                    return (
                        <button
                            key={step.id}
                            type="button"
                            onClick={() => setActiveStep(step.id)}
                            className={`w-full text-left flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 group cursor-pointer ${
                                isActive
                                    ? 'bg-amber-500/10 border-amber-500/35 text-white shadow-md'
                                    : 'bg-card/30 border-[#3E291F]/30 text-muted-foreground hover:bg-[#1C120F]/50 hover:text-white'
                            }`}
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors shrink-0 ${
                                    isActive
                                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-500'
                                        : 'bg-muted/30 border-[#3E291F]/40 text-muted-foreground group-hover:border-amber-500/20'
                                }`}>
                                    {step.icon}
                                </div>
                                <div className="truncate leading-none">
                                    <p className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-white' : 'text-foreground/80 group-hover:text-amber-400'}`}>
                                        {step.label}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground mt-1 truncate">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Completeness circle / Check */}
                            <div className="shrink-0 ml-2">
                                {isCompleted ? (
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                ) : (
                                    <div className="text-[10px] font-bold font-mono text-muted-foreground bg-[#1A110E] border border-[#3E291F]/40 w-8 text-center py-0.5 rounded-md">
                                        {step.progress}%
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

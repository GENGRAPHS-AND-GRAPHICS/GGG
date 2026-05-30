"use client";

import React from "react";
import { Laptop, ImageIcon, Check, AlertCircle, HelpCircle } from "lucide-react";
import { ContentRenderer } from "@/components/tiptap/ContentRenderer";
import { getMediaUrl } from "@/lib/utils";
import { ChecklistItem } from "./useAssetForm";

interface AssetPreviewRailProps {
    assetType: "powerbi" | "uiux";
    title: string;
    description: string;
    price: string;
    aspect: "horizontal" | "vertical";
    url: string;
    thumbnails: string[];
    activeThumbnailIndex: number;
    tags: string[];
    checklist: ChecklistItem[];
}

export function AssetPreviewRail({
    assetType,
    title,
    description,
    price,
    aspect,
    url,
    thumbnails,
    activeThumbnailIndex,
    tags,
    checklist
}: AssetPreviewRailProps) {
    return (
        <div className="space-y-6">
            {/* Visualizer card container */}
            <div className="bg-gradient-to-br from-[#1C120E] via-[#0E0A08] to-[#050303] p-4.5 rounded-2xl border border-[#3E291F]/40 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(#3E291F_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4 z-10">
                    <span className="text-[10px] text-amber-500/80 uppercase font-bold tracking-widest flex items-center gap-1.5 leading-none">
                        <Laptop className="w-3.5 h-3.5" /> Canvas Preview
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#18100E] border border-[#3E291F] text-[9px] font-mono text-muted-foreground uppercase tracking-wider leading-none shadow-sm">
                        Live Preview
                    </span>
                </div>

                <div className="flex-1 flex items-center justify-center py-4 z-10">
                    <div className="w-full max-w-[210px] rounded-xl border border-[#3E291F] bg-[#110A08]/90 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 group">
                        <div className={`w-full ${aspect === 'vertical' ? 'aspect-[3/4]' : 'aspect-video'} bg-[#1A1210] relative flex items-center justify-center border-b border-[#3E291F] overflow-hidden`}>
                            {thumbnails.length > 0 ? (
                                <img 
                                    src={getMediaUrl(thumbnails[activeThumbnailIndex] || thumbnails[0])} 
                                    alt="Snapshot Preview" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-1.5 text-muted-foreground/35 font-mono text-[9px] select-none">
                                    <ImageIcon className="w-5 h-5 text-[#3E291F]" />
                                    <span>NO SNAPSHOT</span>
                                </div>
                            )}
                            {url && (
                                <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[8px] font-bold text-blue-300 uppercase tracking-wide shadow-sm backdrop-blur-sm">
                                    Live Link
                                </span>
                            )}
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#0F0A09]/80 border border-[#3E291F] text-[8px] uppercase tracking-wider text-amber-400 font-bold font-mono shadow-sm">
                                {aspect}
                            </span>
                        </div>
                        <div className="p-3 space-y-1.5">
                            <div className="flex items-start justify-between gap-2.5">
                                <h2 className="font-bold text-xs text-foreground/90 truncate flex-1 group-hover:text-amber-400 transition-colors leading-none">
                                    {title || (assetType === 'powerbi' ? "Untitled Blueprint" : "Untitled Design")}
                                </h2>
                                <span className="text-[10px] font-mono text-amber-500 font-bold bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded shadow-sm leading-none">
                                    {price ? `$${parseFloat(price).toFixed(2)}` : "Free"}
                                </span>
                            </div>
                            <div className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed min-h-[30px]">
                                {description ? (
                                    <ContentRenderer content={description} className="[&>p]:m-0 [&>p]:inline text-[9px]" />
                                ) : (
                                    `No supplemental details provided for this ${assetType === 'powerbi' ? 'blueprint' : 'design'} asset.`
                                )}
                            </div>
                            
                            {tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-[#3E291F]/30">
                                    {tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-[8px] font-semibold text-[#A08B7E] bg-[#1D1412] px-1.5 py-0.5 rounded border border-[#3E291F]/30">
                                            #{tag}
                                        </span>
                                    ))}
                                    {tags.length > 2 && (
                                        <span className="text-[8px] text-muted-foreground/50 font-mono leading-none">
                                            +{tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center text-[9px] text-muted-foreground/35 font-mono tracking-wider pt-2 border-t border-[#3E291F]/30 z-10">
                    PREVIEW CONTAINER v1.2
                </div>
            </div>

            {/* Checklist items container */}
            <div className="bg-[#18110E] border border-[#3E291F]/40 p-4.5 rounded-2xl space-y-3">
                <label className="text-[10px] font-bold text-white uppercase tracking-widest block border-b border-[#3E291F]/30 pb-2">
                    Release Readiness
                </label>
                <ul className="space-y-2.5 text-[11px]">
                    {checklist.map((item) => (
                        <li key={item.id} className="flex items-start gap-2.5">
                            {item.completed ? (
                                <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                                </div>
                            ) : item.required ? (
                                <div className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                                    <AlertCircle className="w-2.5 h-2.5 stroke-[2.5]" />
                                </div>
                            ) : (
                                <div className="w-4 h-4 rounded-full bg-muted/20 border border-[#3E291F]/60 flex items-center justify-center text-muted-foreground shrink-0 mt-0.5">
                                    <HelpCircle className="w-2.5 h-2.5" />
                                </div>
                            )}
                            <div className="leading-tight">
                                <p className={`font-medium ${item.completed ? 'text-white/80' : item.required ? 'text-red-400/90 font-semibold' : 'text-muted-foreground/80'}`}>
                                    {item.label}
                                </p>
                                {item.required && !item.completed && (
                                    <span className="text-[8px] uppercase tracking-wider text-red-500/70 font-bold font-mono">Required</span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SectionPricingProps {
    assetType: "powerbi" | "uiux";
    price: string;
    setPrice: (val: string) => void;
    aspect: "horizontal" | "vertical";
    setAspect: (val: "horizontal" | "vertical") => void;
    url: string;
    setUrl: (val: string) => void;
    sourceLink: string;
    setSourceLink: (val: string) => void;
}

export function SectionPricing({
    assetType,
    price,
    setPrice,
    aspect,
    setAspect,
    url,
    setUrl,
    sourceLink,
    setSourceLink
}: SectionPricingProps) {
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Price ($)</label>
                    <Input 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        placeholder="Free (Leave empty)" 
                        className="w-full h-10 px-3 bg-[#130B09] border border-[#3E291F] rounded-xl text-xs text-white placeholder:text-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 transition-all outline-none duration-150" 
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Layout Format *</label>
                    <Select 
                        value={aspect} 
                        onValueChange={(val) => setAspect(val as "horizontal" | "vertical")}
                    >
                        <SelectTrigger className="w-full bg-[#130B09] border border-[#3E291F] rounded-xl text-xs h-10 px-3 text-white focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 transition-all outline-none duration-150">
                            <SelectValue placeholder="Format *" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#18110E] border border-[#3E291F] text-white text-xs shadow-xl rounded-xl ring-1 ring-black/40">
                            <SelectItem value="horizontal" className="hover:bg-amber-500/10 hover:text-amber-400 focus:bg-amber-500/10 focus:text-amber-400 text-xs py-2 rounded-lg cursor-pointer text-white">Horizontal (16:9)</SelectItem>
                            <SelectItem value="vertical" className="hover:bg-amber-500/10 hover:text-amber-400 focus:bg-amber-500/10 focus:text-amber-400 text-xs py-2 rounded-lg cursor-pointer text-white">Vertical (9:16)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Live Sandbox URL *</label>
                <Input 
                    type="url" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder={
                        assetType === 'powerbi' 
                            ? "Power BI Embedded / Publish to Web Link (https://...)" 
                            : "Web Live Preview or Figma Prototype Link (https://...)"
                    } 
                    className="w-full h-10 px-3 bg-[#130B09] border border-[#3E291F] rounded-xl text-xs text-white placeholder:text-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 transition-all outline-none duration-150" 
                />
            </div>

            {assetType === 'uiux' && (
                <div className="space-y-1.5 border-t border-[#3E291F]/30 pt-4">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Figma Source URL</label>
                    <Input 
                        type="url" 
                        value={sourceLink} 
                        onChange={(e) => setSourceLink(e.target.value)} 
                        placeholder="Figma Canvas Edit / Template Link (https://...)" 
                        className="w-full h-10 px-3 bg-[#130B09] border border-[#3E291F] rounded-xl text-xs text-white placeholder:text-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 transition-all outline-none duration-150" 
                    />
                </div>
            )}
        </div>
    );
}

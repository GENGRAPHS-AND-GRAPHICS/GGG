"use client";

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/tiptap/Editor";

interface SectionBasicsProps {
    assetType: "powerbi" | "uiux";
    setAssetType: (val: "powerbi" | "uiux") => void;
    title: string;
    setTitle: (val: string) => void;
    description: string;
    setDescription: (val: string) => void;
}

export function SectionBasics({
    assetType,
    setAssetType,
    title,
    setTitle,
    description,
    setDescription
}: SectionBasicsProps) {
    return (
        <div className="space-y-5">
            <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Asset Classification *</label>
                <Select 
                    value={assetType} 
                    onValueChange={(val) => setAssetType(val as "powerbi" | "uiux")}
                >
                    <SelectTrigger className="w-full bg-[#130B09] border border-[#3E291F] rounded-xl text-xs h-10 px-3 text-white focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 transition-all outline-none cursor-pointer">
                        <SelectValue placeholder="Asset Type *" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#18110E] border border-[#3E291F] text-white text-xs shadow-xl rounded-xl ring-1 ring-black/40 z-[200]">
                        <SelectItem value="powerbi" className="hover:bg-amber-500/10 focus:bg-amber-500/10 text-white text-xs py-2 rounded-lg cursor-pointer">Power BI Dashboard</SelectItem>
                        <SelectItem value="uiux" className="hover:bg-amber-500/10 focus:bg-amber-500/10 text-white text-xs py-2 rounded-lg cursor-pointer">UX/UI & Graphic Design</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Template Title *</label>
                <Input 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="e.g. Executive Business Intelligence Board" 
                    className="w-full h-10 px-3 bg-[#130B09] border border-[#3E291F] rounded-xl text-xs text-white placeholder:text-white/40 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 transition-all outline-none duration-150" 
                />
            </div>

            <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Supplemental Description</label>
                <div className="border border-[#3E291F] rounded-xl overflow-hidden focus-within:border-amber-500/50 focus-within:ring-2 focus-within:ring-amber-500/10 transition-all bg-[#161616]">
                    <div className="px-3 py-2 text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider bg-[#0E0907] border-b border-[#3E291F]">Description Editor</div>
                    <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                        <Editor content={description} onChange={setDescription} />
                    </div>
                </div>
            </div>
        </div>
    );
}

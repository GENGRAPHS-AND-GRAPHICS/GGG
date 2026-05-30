"use client";

import React from "react";
import { Link as LinkIcon, Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AdminTagSelector } from "../AdminTagSelector";

interface SectionTagsRefsProps {
    tags: string[];
    setTags: (tags: string[]) => void;
    references: { label: string; url: string }[];
    setReferences: (refs: { label: string; url: string }[]) => void;
    refLabelInput: string;
    setRefLabelInput: (val: string) => void;
    refUrlInput: string;
    setRefUrlInput: (val: string) => void;
    handleAddReference: () => void;
}

export function SectionTagsRefs({
    tags,
    setTags,
    references,
    setReferences,
    refLabelInput,
    setRefLabelInput,
    refUrlInput,
    setRefUrlInput,
    handleAddReference
}: SectionTagsRefsProps) {
    return (
        <div className="space-y-6">
            {/* TAGS */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Classifications & Tags</label>
                <AdminTagSelector tags={tags} setTags={setTags} />
            </div>

            {/* REFERENCES */}
            <div className="space-y-3 border-t border-[#3E291F]/30 pt-5">
                <div className="flex items-center justify-between">
                    <div>
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                            <LinkIcon className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                            Reference & Educational Links
                        </label>
                        <p className="text-[11px] text-muted-foreground">Attach external context, databases, or documentation (optional).</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#A08B7E] bg-[#1D1412] px-2 py-0.5 rounded-lg border border-[#3E291F]/30">
                        {references.length} added
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
                    <div className="md:col-span-4">
                        <Input 
                            type="text" 
                            value={refLabelInput}
                            onChange={(e) => setRefLabelInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddReference();
                                }
                            }}
                            placeholder="e.g. Gartner Retail Metrics" 
                            className="w-full h-9 px-2.5 bg-[#130B09] border border-[#3E291F] rounded-xl text-[11px] text-white placeholder:text-white/40 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 outline-none transition-all duration-150" 
                        />
                    </div>
                    <div className="md:col-span-6">
                        <Input 
                            type="url" 
                            value={refUrlInput}
                            onChange={(e) => setRefUrlInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddReference();
                                }
                            }}
                            placeholder="https://example.com/metrics" 
                            className="w-full h-9 px-2.5 bg-[#130B09] border border-[#3E291F] rounded-xl text-[11px] text-white placeholder:text-white/40 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/10 focus-visible:ring-amber-500/10 focus-visible:border-amber-500/50 outline-none transition-all duration-150" 
                        />
                    </div>
                    <div className="md:col-span-2">
                        <button 
                            type="button" 
                            onClick={handleAddReference}
                            className="w-full h-9 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 hover:border-amber-500/40 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer shadow-sm hover:shadow-[0_2px_8px_rgba(245,158,11,0.1)]"
                        >
                            <Plus className="w-3.5 h-3.5" /> Add
                        </button>
                    </div>
                </div>

                {/* List of references */}
                {references.length > 0 && (
                    <div className="space-y-1.5 max-h-[160px] overflow-y-auto bg-[#130B09]/30 border border-[#3E291F]/40 p-2 rounded-2xl custom-scrollbar">
                        {references.map((ref, idx) => (
                            <div key={idx} className="flex items-center justify-between gap-3 bg-[#18110E] border border-[#3E291F]/30 px-3.5 py-2 rounded-xl group/ref text-[11px] hover:border-amber-500/20 transition-all duration-200">
                                <div className="flex items-center gap-2.5 min-w-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                                    <p className="font-semibold text-white/90 truncate max-w-[180px]">{ref.label}</p>
                                    <span className="text-white/30 text-[9px] font-mono truncate max-w-[280px]">{ref.url}</span>
                                </div>
                                <button 
                                    type="button" 
                                    onClick={() => setReferences(references.filter((_, i) => i !== idx))} 
                                    className="w-5.5 h-5.5 rounded-lg bg-red-500/5 hover:bg-red-500/20 border border-red-500/15 hover:border-red-500/30 flex items-center justify-center text-red-400 hover:text-white transition-all cursor-pointer shrink-0"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

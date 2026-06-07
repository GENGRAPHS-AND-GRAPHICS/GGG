"use client";

import React, { useState } from 'react';
import { CATEGORIES } from '@/components/SidebarFilter';
import { ChevronDown, Tags, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminTagSelectorProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export function AdminTagSelector({ tags, setTags }: AdminTagSelectorProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    business_domain: false,
    industry: false,
    visualization_type: false
  });
  const [searchQueries, setSearchQueries] = useState<Record<string, string>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    setSearchQueries(prev => ({ ...prev, [id]: '' }));
  };

  const handleToggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="space-y-3 bg-[#130B09] border border-[#3E291F] rounded-xl p-4 transition-all duration-150">
      <div className="flex items-center gap-2 mb-2">
        <Tags className="w-4 h-4 text-amber-500" />
        <h4 className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">Select Tags</h4>
      </div>

      <div className="space-y-3">
        {CATEGORIES.map((category) => {
          const searchQuery = searchQueries[category.id] || '';
          const filteredOptions = category.options.filter(option =>
            option.toLowerCase().includes(searchQuery.toLowerCase())
          );
          const hasManyOptions = category.options.length > 8;

          return (
            <div key={category.id} className="border border-[#3E291F]/50 rounded-lg overflow-hidden bg-[#0E0907]">
              <button 
                type="button"
                onClick={() => toggleSection(category.id)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-white/70 hover:text-amber-500 hover:bg-[#1D1412] transition-colors"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  {category.label}
                </div>
                <motion.div animate={{ rotate: openSections[category.id] ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openSections[category.id] && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-[#3E291F]/30"
                  >
                    <div className="p-3 bg-[#130B09]/50 space-y-2.5">
                      {hasManyOptions && (
                        <div className="relative flex items-center">
                          <Search className="absolute left-3 w-3.5 h-3.5 text-white/40" />
                          <input
                            type="text"
                            placeholder={`Search ${category.label.toLowerCase()}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQueries(prev => ({ ...prev, [category.id]: e.target.value }))}
                            className="w-full pl-9 pr-8 py-1.5 h-8 text-[11px] bg-[#1D1412] hover:bg-[#251A17] focus:bg-[#2A1D1A] border border-[#3E291F]/60 focus:border-amber-500/50 rounded-md outline-none text-white transition-all placeholder:text-white/40"
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQueries(prev => ({ ...prev, [category.id]: '' }))}
                              className="absolute right-3 text-white/40 hover:text-white transition-colors p-0.5 rounded cursor-pointer"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      )}
                      
                      <div className={`flex flex-wrap gap-1.5 custom-scrollbar ${
                        hasManyOptions 
                          ? 'max-h-40 overflow-y-auto pr-1' 
                          : ''
                      }`}>
                        {filteredOptions.length > 0 ? (
                          filteredOptions.map((option) => {
                            const isChecked = tags.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleToggleTag(option)}
                                className={`relative px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                                  isChecked 
                                    ? 'bg-amber-500 text-black font-semibold shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
                                    : 'bg-[#1D1412] text-white/60 hover:text-white hover:bg-[#251A17] border border-[#3E291F]/50 hover:border-amber-500/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })
                        ) : (
                          <p className="text-[11px] text-white/40 italic py-1 pl-1">No tags match search</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

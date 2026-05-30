"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Settings, PieChart, X, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CATEGORIES = [
  {
    id: 'business_domain',
    label: 'Business Domain',
    icon: <Briefcase className="w-4 h-4" />,
    options: [
      'Sales', 'Accounting & Finance', 'Project Management', 'Marketing', 
      'Human Resources', 'Research', 'CRM', 'Support', 'Customer experience'
    ]
  },
  {
    id: 'industry',
    label: 'Industry',
    icon: <Settings className="w-4 h-4" />,
    options: [
      'Information Technology', 'Real Estate', 'Logistics', 'KPI', 'Education', 
      'Healthcare', 'Transportation', 'Banking', 'Oil & Energy', 'Ecommerce', 
      'Crime analytics', 'Retail', 'Manufacturing', 'Pharmacy', 'Sports', 'Christmas'
    ]
  },
  {
    id: 'visualization_type',
    label: 'Visualization Type',
    icon: <PieChart className="w-4 h-4" />,
    options: [
      'Donut', 'Pie', 'Combo', 'Combo Bar', 'TimeSeries', 'Timeline', 
      'Map', 'Graph', 'Network', 'Waterfall', 'Scatter', 'Bubble', 'Line'
    ]
  }
];

interface SidebarFilterProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

export function SidebarFilter({ selectedTags, onChange }: SidebarFilterProps) {
  // Only the first section (Business Domain) is open by default
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    business_domain: true,
    industry: false,
    visualization_type: false
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter(t => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  const handleClearAll = () => {
    onChange([]);
  };

  return (
    <div className="w-64 shrink-0 border border-border bg-card/40 backdrop-blur-xl rounded-2xl p-5 h-fit hidden md:block shadow-xl shadow-black/10 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
          <Settings className="w-3.5 h-3.5 text-amber-500" />
          Intelligence Filter
        </h3>
      </div>

      <AnimatePresence>
        {selectedTags.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 pb-5 border-b border-border/40 relative z-10 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80 flex items-center gap-1.5">
                Active Filters
                <span className="flex items-center justify-center min-w-4 h-4 px-1.5 rounded-full bg-amber-500/10 text-amber-500 text-[9px] font-mono font-bold border border-amber-500/20">
                  {selectedTags.length}
                </span>
              </span>
              <button 
                onClick={handleClearAll}
                className="text-[9px] uppercase tracking-wider font-bold text-amber-500/90 hover:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 px-2.5 py-1 rounded-md transition-all duration-300 flex items-center gap-1 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                Reset All
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-500/20 scrollbar-track-transparent">
              {selectedTags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-medium bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/25 transition-all hover:bg-amber-500/15"
                >
                  {tag}
                  <button
                    onClick={() => handleToggleTag(tag)}
                    className="hover:bg-amber-500/20 rounded-md p-0.5 text-amber-500 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="space-y-6 relative z-10">
        {CATEGORIES.map((category) => (
          <div key={category.id} className="border-b border-border/40 pb-5 last:border-0 last:pb-0">
            <button 
              onClick={() => toggleSection(category.id)}
              className="w-full flex items-center justify-between text-xs font-bold text-foreground/90 hover:text-amber-500 transition-colors uppercase tracking-wider group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-muted-foreground group-hover:text-amber-500 transition-colors">
                  {category.icon}
                </span>
                {category.label}
              </div>
              <motion.div
                animate={{ rotate: openSections[category.id] ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-amber-500" />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {openSections[category.id] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.options.map((option) => {
                      const isChecked = selectedTags.includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => handleToggleTag(option)}
                          className={`relative px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-300 overflow-hidden group ${
                            isChecked 
                              ? 'text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                              : 'text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-transparent hover:border-border'
                          }`}
                        >
                          {isChecked && (
                            <motion.div 
                              layoutId={`bg-${category.id}-${option}`}
                              className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 z-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center gap-1.5">
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

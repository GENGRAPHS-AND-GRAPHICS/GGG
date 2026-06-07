"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Settings, PieChart, X, RotateCcw, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CATEGORIES = [
  {
    id: 'business_domain',
    label: 'Business Domain',
    icon: <Briefcase className="w-4 h-4" />,
    options: [
      'Marketing',
      'Accounts and Finance',
      'Project Management',
      'Sales',
      'Research',
      'CRM',
      'IT/Tech Support',
      'Customer Experience',
      'Human Resources',
      'Operations',
      'OTHERS'
    ]
  },
  {
    id: 'industry',
    label: 'Industry',
    icon: <Settings className="w-4 h-4" />,
    options: [
      'Banking, Financial Services & Insurance (BFSI)',
      'Healthcare & Healthtech',
      'Retail & E-Commerce',
      'Manufacturing',
      'Education',
      'Tourism',
      'Media & Entertainment',
      'Real Estate & Construction',
      'Energy & Utilities',
      'Logistics & Supply Chain',
      'Government & Public Sector',
      'Professional Services',
      'Agriculture & AgriTech',
      'Telecommunications',
      'Non Profit & NGOs',
      'Biotechnology & Pharmaceuticals',
      'Hospitality & Leisure',
      'Aerospace & Defence',
      'Automotive',
      'Fashion',
      'OTHERS'
    ]
  },
  {
    id: 'visualization_type',
    label: 'Visualization Type',
    icon: <PieChart className="w-4 h-4" />,
    options: [
      '100% Stacked Area Chart',
      '100% Stacked Bar Charts (Horizontal)',
      '100% Stacked Column Charts',
      '3D Donut Charts',
      '3D Half-Donut',
      'Key Influencers Visuals (Categorical and Continuous)',
      'ArcGIS for Power BI',
      'Trend Charts',
      'Area Chart',
      'Azure Maps',
      'Bar Charts (Horizontal)',
      'Bubble Chart',
      'Bullet Chart',
      'Butterfly Charts (Mirrored Bar Charts)',
      'Button Slicer',
      'Card',
      'Clustered Bar Charts (Horizontal)',
      'Clustered Column Chart',
      'Column Charts with Error Bars',
      'Custom Button & Dropdown Slicers (Country, Year, Stock Movement)',
      'Custom Button Slicers (Quarter, Month, Business Line)',
      'Custom Expandable Filter Pane',
      'Custom Hexagon KPI Cards',
      'Custom Pill Slicers (Category Selection)',
      'Custom Slicer Panel (Vertical Dropdowns)',
      'Custom Text Boxes / Definition Cards',
      'Custom Vertical Navigation Buttons',
      'Custom Vertical Navigation Menu',
      'Decomposition Tree',
      'Donut Chart',
      'Dropdown Slicers / Button Slicers',
      'Dropdown Slicers / Filters',
      'Dynamic Column Charts (within Key Influencers)',
      'Funnel',
      'Gauge/Circular',
      'Geospatial Map (Bubble Map)',
      'Geospatial Map / Shape Map Visual',
      'Geospatial Map Visual',
      'Goals',
      'Image',
      'Input Slicer',
      'Interactive Toggle Buttons',
      'KPI Cards',
      'KPI Cards (standard and with trend arrows)',
      'KPI Cards (Standard, SLA target progress bars, and trend sparklines)',
      'KPI Cards (with star/percentage indicators)',
      'KPI Cards (with YoY % indicators and Dynamic Selection)',
      'Line / Area Chart (Time Series)',
      'Line and Area Charts (with threshold lines and data markers)',
      'Line and Clustered Column Chart (Combo Chart)',
      'Line and Stacked Column Chart (Combo Chart)',
      'List Slicer',
      'Lollipop / Bubble Ranking Charts (within Key Influencers)',
      'Map (OpenStreetMap)',
      'Map (Satellite View)',
      'Matrix',
      'Heatmap',
      'Matrix / Table (with conditional Data Bars)',
      'Matrix / Table (with conditional formatting data bars)',
      'Multi-Row / Custom Text Cards',
      'Multi-row Card / Text Table',
      'Narrative',
      'Network',
      'Paginated Report',
      'Pie Chart',
      'Power Automate for Power BI',
      'Python Visual',
      'R Script Visual',
      'Radar / Spider Chart',
      'Radio Button Slicer (Product Selection)',
      'Sankey Diagram',
      'Scatter Plot',
      'Search Bar / Text Filter',
      'Slicer',
      'Stacked Area Chart',
      'Stacked Bar Chart (Horizontal)',
      'Stacked Column Chart',
      'Standard Bar Charts (Horizontal)',
      'Standard Column Charts (Vertical)',
      'Static Iconography / Image Integration',
      'Table',
      'Treemap',
      'Waterfall Chart'
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
  const [searchQueries, setSearchQueries] = useState<Record<string, string>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    setSearchQueries(prev => ({ ...prev, [id]: '' }));
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
        <h3 className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
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
        {CATEGORIES.map((category) => {
          const searchQuery = searchQueries[category.id] || '';
          const filteredOptions = category.options.filter(option =>
            option.toLowerCase().includes(searchQuery.toLowerCase())
          );
          const hasManyOptions = category.options.length > 8;

          return (
            <div key={category.id} className="border-b border-border/40 pb-5 last:border-0 last:pb-0">
              <button 
                onClick={() => toggleSection(category.id)}
                className="w-full flex items-center justify-between text-sm font-bold text-white hover:text-amber-500 transition-colors uppercase tracking-wider group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-white/60 group-hover:text-amber-500 transition-colors">
                    {category.icon}
                  </span>
                  {category.label}
                </div>
                <motion.div
                  animate={{ rotate: openSections[category.id] ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 text-white/60 group-hover:text-amber-500" />
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
                    {hasManyOptions && (
                      <div className="relative mt-3 mb-1.5 flex items-center">
                        <Search className="absolute left-3 w-3.5 h-3.5 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder={`Search ${category.label.toLowerCase()}...`}
                          value={searchQuery}
                          onChange={(e) => setSearchQueries(prev => ({ ...prev, [category.id]: e.target.value }))}
                          className="w-full pl-9 pr-8 py-1.5 h-8 text-[11px] bg-muted/30 hover:bg-muted/40 focus:bg-muted/50 border border-border/60 hover:border-border focus:border-amber-500/50 rounded-lg outline-none text-foreground transition-all placeholder:text-muted-foreground/60"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQueries(prev => ({ ...prev, [category.id]: '' }))}
                            className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    )}
                    <div className={`flex flex-wrap gap-1.5 mt-3 custom-scrollbar ${
                      hasManyOptions 
                        ? 'max-h-48 overflow-y-auto pr-1' 
                        : ''
                    }`}>
                      {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => {
                          const isChecked = selectedTags.includes(option);
                          return (
                            <button
                              key={option}
                              onClick={() => handleToggleTag(option)}
                              className={`relative px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-300 overflow-hidden group cursor-pointer ${
                                isChecked 
                                  ? 'text-black shadow-[0_0_15px_rgba(245,158,11,0.3)] font-bold' 
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
                        })
                      ) : (
                        <p className="text-[11px] text-muted-foreground/50 italic py-2 pl-1">No tags match search</p>
                      )}
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

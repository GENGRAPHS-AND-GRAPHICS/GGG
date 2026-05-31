"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-16 lg:pt-22 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        >
          <source src="/video/bg_video.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0B0908]/60 to-[#0B0908]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full max-w-7xl mx-auto px-4 lg:px-8 relative">

        {/* Left Column: Text & Actions */}
        <div className="flex flex-col justify-center order-1 lg:order-1 z-20 lg:pr-8">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-16 sm:pt-0 text-[42px] sm:text-[64px] md:text-[84px] lg:text-[100px] xl:text-[115px] font-serif tracking-tight font-semibold mb-6 leading-[0.95]"
            style={{ fontFamily: 'var(--font-serif), Garamond, Georgia, serif' }}
          >
            <span className="text-[#E0A154]">GENGRAPHS</span> <br />
            <span className="text-[#414141] dark:text-[#525252] transition-colors">AND GRAPHICS PVT. LTD.</span>
            <sup className="text-[0.3em] text-[#414141] dark:text-[#525252] ml-[0.05em] font-sans font-normal align-super">
              ®
            </sup>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 max-w-[520px]"
          >
            <p className="text-muted-foreground text-[13px] lg:text-[14px] leading-relaxed font-light italic">
              <strong className="text-[#E0A154] not-italic font-semibold">Founder’s note:</strong> “Established in 2025, GENGRAPHS AND GRAPHICS PVT. LTD. is a dynamic business solutions provider dedicated to empowering both B2B and B2C clients through tailored, high-impact strategies. We specialize in the seamless integration of Data Analytics, Graphic Design, and Project Management, transforming complex data into actionable insights and visually compelling narratives. By bridging the gap between technical analytics and creative design, and backing it with rigorous project execution, our team delivers custom-engineered solutions designed to drive growth, streamline operations, and elevate your brand's competitive edge in the modern market.”
            </p>
            <div className="mt-2 flex items-center justify-end gap-2">
              <span className="text-muted-foreground text-[13px] lg:text-[14px]">—</span>
              <a 
                href="https://www.linkedin.com/in/mohit-bhardwaj-7b1863120/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] lg:text-[14px] font-semibold text-[#E0A154] hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
              >
                Mohit Bhardwaj
                <svg className="w-4 h-4 text-[#0A66C2] dark:text-[#0A66C2] hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <button onClick={()=>router.push("/products")} className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-black text-sm font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_10px_25px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 cursor-pointer">
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Right Column: Subject Image with Orbiting Circles */}
<div className="relative order-2 lg:order-2 flex items-center justify-center lg:justify-end min-h-[440px] sm:min-h-[500px] lg:min-h-[750px] w-full">

  {/* Person Image — orbits live inside here so they're always aligned to the face */}
  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 flex items-end lg:items-center justify-center w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] pointer-events-none z-40">
    
    {/* Orbiting Circles — positioned at face level (top 15-20% of container) */}
    <div className="absolute top-[15%] lg:top-[20%] left-1/2 -translate-x-1/2 -ml-6 sm:-ml-8 lg:-ml-10 z-[30] pointer-events-none">
      {/* Inner Orbit */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={25}
        radius={isMobile ? 90 : 130}
        iconSize={isMobile ? 20 : 32}
        path={false}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src="https://api.iconify.design/logos:jira.svg" alt="Jira" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="https://api.iconify.design/logos:airtable.svg" alt="Airtable" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="https://api.iconify.design/logos:adobe-photoshop.svg" alt="Adobe Photoshop" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="/icons/adobe-express-icon.svg" alt="Adobe Express" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="/icons/adobe-animate-icon.svg" alt="Adobe Animate" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="https://api.iconify.design/logos:figma.svg" alt="Figma" className="w-8 h-8 object-contain" />
        </div>
      </OrbitingCircles>

      {/* Outer Orbit */}
      <OrbitingCircles
        className="border-none bg-transparent"
        radius={isMobile ? 125 : 190}
        duration={30}
        reverse
        iconSize={isMobile ? 24 : 40}
        path={false}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src="/icons/power-bi-icon.svg" alt="Power BI" className="w-10 h-10 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="/icons/tableau.svg" alt="Tableau" className="w-10 h-10 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="https://api.iconify.design/vscode-icons:file-type-excel.svg" alt="Microsoft Excel" className="w-10 h-10 object-contain" />
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img src="/icons/sql.svg" alt="SQL" className="w-10 h-10 object-contain" />
        </div>
      </OrbitingCircles>
    </div>

    <img
      src="/images/sample_nobg_cropped.png"
      alt="Power BI Creator"
      className="w-full object-contain object-bottom relative z-[45] pointer-events-auto"
    />
    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-[260px] lg:h-[320px] bg-gradient-to-t from-[#0B0908] via-[#0B0908]/95 via-40% to-transparent z-[46] pointer-events-none" />
  </div>

  {/* Mobile side fades */}
  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0B0908] to-transparent z-50 pointer-events-none lg:hidden" />
  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0B0908] to-transparent z-50 pointer-events-none lg:hidden" />
</div>

      </div>
      <div className="absolute w-[200vw] left-[-50vw] bottom-[-2px] h-[500px] lg:h-[600px] bg-gradient-to-t from-[#0B0908] via-[#0B0908] via-50% to-transparent pointer-events-none z-10" />
    </div>
  );
}

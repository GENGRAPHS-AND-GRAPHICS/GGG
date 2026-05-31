"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface HighlighterProps {
  children: ReactNode;
  action?: "highlight" | "underline" | "strike-through" | "box" | "circle";
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  delay?: number;
  className?: string;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 2,
  animationDuration = 800,
  delay = 100,
  className = "",
}: HighlighterProps) {
  if (action === "underline") {
    return (
      <span className={`relative inline-block ${className}`}>
        <span className="relative z-10">{children}</span>
        <svg
          className="absolute left-0 bottom-[-4px] w-full h-[8px] pointer-events-none overflow-visible"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          {/* First Stroke: High-to-Low curve */}
          <motion.path
            d="M 2 3 C 35 6, 65 3, 98 5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: animationDuration / 1000,
              ease: "easeOut",
              delay: delay / 1000,
            }}
          />
          {/* Second Stroke: Low-to-High curve (Crosses the first stroke) */}
          <motion.path
            d="M 3 7 C 30 4, 70 7, 97 3"
            stroke={color}
            strokeWidth={strokeWidth * 0.85}
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: (animationDuration * 1.15) / 1000,
              ease: "easeOut",
              delay: (delay + 100) / 1000,
            }}
          />
        </svg>
      </span>
    );
  }

  // Fallback to "highlight" action
  // We use a CSS-based linear gradient animation to support perfect line-wrapping
  return (
    <motion.span
      className={`inline [box-decoration-break:clone] [-webkit-box-decoration-break:clone] px-1 py-0.5 rounded-sm ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${color}2a, ${color}2a)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "0% 100%",
      }}
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true }}
      transition={{
        duration: animationDuration / 1000,
        ease: "easeInOut",
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.span>
  );
}

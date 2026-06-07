"use client";

import React, { useState } from 'react';
import { Shield, Mail, Phone, X, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      // In a real app we'd show a success toast here
    }, 1000);
  };

  return (
    <>
      <footer className="border-t border-border bg-card/30 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-xs">
          
          {/* Top Row: 3 Grid Columns for Directories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-4">

            {/* Column 1: Navigation Workspace & Secure Settlement */}
            <div className="space-y-6">
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Navigation Workspace</h4>
                <div className="flex flex-col gap-1.5 text-muted-foreground/80">
                  <Link href="/" className="hover:text-foreground transition-colors text-xs">Showroom Matrix</Link>
                  <Link href="#live-demo" className="hover:text-foreground transition-colors text-xs">Active Blueprints</Link>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Hub */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Contact Hub</h4>
              <div className="flex flex-col gap-2 text-muted-foreground/80">
                <a href="mailto:info@gengraphsandgraphics.com" className="flex items-center gap-2 hover:text-foreground transition-colors text-xs">
                  <Mail className="w-3.5 h-3.5" /> info@gengraphsandgraphics.com
                </a>
                <a href="tel:+919211217121" className="flex items-center gap-2 hover:text-foreground transition-colors text-xs">
                  <Phone className="w-3.5 h-3.5" /> +91 9211217121
                </a>
              </div>
            </div>

            {/* Column 3: GENGRAPHS AND GRAPHICS */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">GENGRAPHS AND GRAPHICS</h4>
              <div className="flex flex-col gap-1.5 text-muted-foreground/80">
                <Link href="/about" className="hover:text-foreground transition-colors text-xs">About Us</Link>
                <Link href="/policies" className="hover:text-foreground transition-colors text-xs">Policies</Link>
                <Link href="/faq" className="hover:text-foreground transition-colors text-xs">FAQ</Link>
                <Link href="/contact" className="hover:text-foreground transition-colors text-xs">Contact Us</Link>
              </div>
            </div>

          </div>

          {/* Border Divider */}
          <div className="border-t border-border/40 my-4" />

          {/* Middle Row: Logo on left, long paragraph on right */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 justify-between">
            <div className="flex items-center gap-3 shrink-0">
              <img src="/icons/logo.png" alt="Logo" className="h-9 w-auto object-contain drop-shadow-sm" />
              <BrandLogo size="md" />
            </div>
            
            <p className="flex-1 text-xs text-muted-foreground/75 leading-relaxed text-justify max-w-4xl font-sans">
              GENGRAPHS AND GRAPHICS is committed to bringing ideas to life by making high-quality, impactful design accessible to individuals, brands, and businesses around the world. We do this by delivering tailored creative solutions that blend artistic vision with strategic thinking. Our custom graphics, branding packages, and visual storytelling services help clients communicate their message effectively, elevate their brand identity, and captivate their audiences.
            </p>
          </div>

          {/* Border Divider */}
          <div className="border-t border-border/40 my-6" />

          {/* Bottom Section: Cookie/Notice Links, Copyright, and centered Social Icons */}
          <div className="flex flex-col items-center justify-center space-y-4">
            
            {/* Compliance Links */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground/60 font-medium">
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
              <span className="text-border/60">|</span>
              <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
              <span className="text-border/60">|</span>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <span className="text-border/60">|</span>
              <Link href="/report-vulnerability" className="hover:text-foreground transition-colors">Report a Vulnerability</Link>
              <span className="text-border/60">|</span>
              <Link href="/accessibility-policy" className="hover:text-foreground transition-colors">Accessibility Policy</Link>
            </div>

            {/* Copyright Statement */}
            <p className="text-center text-[10px] text-muted-foreground/50 font-mono tracking-wide">
              © {new Date().getFullYear()} GENGRAPHS AND GRAPHICS PVT LTD™. ALL RIGHTS RESERVED.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-[#3b5998] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/gengraphs_and_graphics?igsh=MWxvZHc2Y2g0YjVpNQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/gengraphs-and-graphics-pvt-ltd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              {/* X (formerly Twitter) */}
              <a 
                href="https://x.com/GENGRAPHS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-neutral-800/40 flex items-center justify-center text-zinc-700 hover:text-zinc-500 hover:scale-105 transition-all shadow-sm"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@GENGRAPHS_AND_GRAPHICS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-[#a82020] flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-sm"
              >
                <div className="flex flex-col items-center justify-center leading-none text-center font-sans select-none scale-90">
                  <span className="text-white text-[9px] font-black uppercase tracking-tight">You</span>
                  <span className="bg-white text-[#a82020] px-0.5 py-px rounded-[2px] text-[7px] font-bold uppercase tracking-tighter mt-0.5">Tube</span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </footer>

      {/* Assistance Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border w-full max-w-md rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="p-6 space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-lg font-serif font-bold text-foreground">Assistance Request</h3>
                <p className="text-xs text-muted-foreground">Please fill out the form below and our team will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-amber-500 transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-amber-500 transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Mobile Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-amber-500 transition-shadow"
                    placeholder="+91 9000000000"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Message</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-amber-500 transition-shadow min-h-[100px] resize-y"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:opacity-90 disabled:opacity-50 text-xs text-white font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-md mt-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

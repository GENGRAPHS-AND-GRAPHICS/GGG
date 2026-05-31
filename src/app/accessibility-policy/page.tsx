import Link from 'next/link';
import { ArrowLeft, Eye, Keyboard, FileText, Compass, Palette, Layers, Film, Heart, Mail } from 'lucide-react';

export const metadata = {
  title: "Accessibility Policy - GENGRAPHS AND GRAPHICS PVT LTD®",
  description: "Read our WCAG 2.1 digital accessibility commitments, high contrast ratios, alt-text standards, and screen reader compatibility protocols.",
};

export default function AccessibilityPolicyPage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-amber-500/30 flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[55%] h-[50%] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="relative z-10 flex-grow pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4 select-none leading-tight">
              <span className="text-[#E0A154]">ACCESSIBILITY</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                INCLUSION CHARTER
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our ongoing commitment to WCAG standards, contrast thresholds, and adaptive visual design frameworks.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="space-y-8">
            <section className="rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              
              {/* Policy Header Details */}
              <div className="flex items-center gap-3 pb-6 border-b border-border/40 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-foreground tracking-wide">
                    Inclusive Web &amp; Visual Design Standards
                  </h2>
                  <p className="text-[10px] text-muted-foreground/60 font-mono">Last updated: Monday, June 1, 2026</p>
                </div>
              </div>

              {/* Policy Content */}
              <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans">
                
                {/* Intro */}
                <p className="text-foreground/90 font-medium">
                  At <span className="text-foreground font-semibold">GENGRAPHS AND GRAPHICS PVT. LTD</span>, we believe that complex data and compelling visual stories should be accessible to everyone. We are committed to ensuring our digital portfolio, services, and the visual products we create provide an inclusive experience for all users, including those with visual, auditory, cognitive, or motor disabilities.
                </p>

                {/* Section 1: Our Digital Accessibility Standards */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">1.</span> Our Digital Accessibility Standards
                  </h3>
                  <p>
                    We continuously strive to align our website and digital content with the Web Content Accessibility Guidelines (WCAG) to ensure a seamless experience for all visitors. Our ongoing efforts focus on the following core areas:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 rounded-2xl bg-card border border-border/40 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                        <Keyboard className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-foreground font-sans">Navigability</h4>
                      <p className="text-[11px] text-muted-foreground/80 leading-normal">
                        We design our website to be easily navigable using standard keyboard controls, clear focus rings, and screen readers.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border border-border/40 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-foreground font-sans">Structure &amp; Readability</h4>
                      <p className="text-[11px] text-muted-foreground/80 leading-normal">
                        We utilize semantic HTML and structured headings to ensure our content is logically organized and readable by assistive technologies.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border border-border/40 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                        <Compass className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-foreground font-sans">Flexible Viewing</h4>
                      <p className="text-[11px] text-muted-foreground/80 leading-normal">
                        We aim to support user-defined preferences for zoom, browser default font scaling, and custom accessibility tools.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Accessible Data & Visual Media */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">2.</span> Accessible Data &amp; Visual Media
                  </h3>
                  <p>
                    Because our core focus is on transforming data into cinematic visual designs, we pay special attention to how visual information is consumed:
                  </p>

                  <div className="space-y-4 pl-4 border-l border-amber-500/20">
                    <div className="flex gap-3.5 items-start">
                      <div className="w-7 h-7 rounded-lg bg-card border border-border/60 flex items-center justify-center text-amber-500 shrink-0 mt-0.5 shadow-sm">
                        <Palette className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-foreground block text-xs mb-0.5">Color and Contrast</strong>
                        <p className="text-[13px]">
                          We are committed to using color palettes in our charts, graphs, and animations that maintain high contrast ratios, ensuring information is distinguishable for users with color vision deficiencies.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="w-7 h-7 rounded-lg bg-card border border-border/60 flex items-center justify-center text-amber-500 shrink-0 mt-0.5 shadow-sm">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-foreground block text-xs mb-0.5">Alternative Text (Alt-Text)</strong>
                        <p className="text-[13px]">
                          We aim to provide descriptive alternative text (alt-text) for our portfolio images, data visualizations, and graphic assets so that the core insights are conveyed to users relying on screen readers.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <div className="w-7 h-7 rounded-lg bg-card border border-border/60 flex items-center justify-center text-amber-500 shrink-0 mt-0.5 shadow-sm">
                        <Film className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-foreground block text-xs mb-0.5">Multimedia &amp; Animation</strong>
                        <p className="text-[13px]">
                          For cinematic video reveals and animations, we strive to ensure that key brand information is communicated not just through rapid visual changes (like flashes or complex assembly animations), but also through clear, readable text elements and appropriate pacing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Continuous Improvement */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">3.</span> Continuous Improvement
                  </h3>
                  <p>
                    Digital accessibility is an ongoing journey. As we grow and integrate new technologies into our platform, we will continue to evaluate and improve our accessibility practices to provide the best possible experience for our clients and visitors.
                  </p>
                </div>

                {/* Section 4: We Welcome Your Feedback */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">4.</span> We Welcome Your Feedback
                  </h3>
                  <p>
                    If you encounter any accessibility barriers on <strong className="text-foreground">www.gengraphsandgraphics.com</strong>, or if you need assistance accessing any of our data insights or visual portfolio pieces, please reach out. Your feedback is vital to helping us improve.
                  </p>
                </div>

                {/* Contact Desk */}
                <div className="p-5 rounded-2xl bg-amber-950/15 border border-amber-500/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-6">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-[#E0A154] flex items-center gap-1.5 uppercase tracking-wide font-mono">
                      <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Inclusion Support Desk
                    </h4>
                    <p className="text-[11px] text-muted-foreground/80">
                      Reach out directly if you experience any navigation or visualization barriers:
                    </p>
                  </div>
                  
                  <a href="mailto:info@gengraphsandgraphics.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/60 hover:border-amber-500/20 text-xs font-bold text-foreground hover:text-[#E0A154] shrink-0 shadow-sm transition-all">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>info@gengraphsandgraphics.com</span>
                  </a>
                </div>

              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

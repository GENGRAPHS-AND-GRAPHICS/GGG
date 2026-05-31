import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Scale, ExternalLink, Copyright, MapPin, Landmark } from 'lucide-react';

export const metadata = {
  title: "Disclaimer & Professional Liability - GENGRAPHS AND GRAPHICS PVT LTD®",
  description: "Review our professional services disclaimer, limitations of liability, copyright bounds, and Haryana jurisdiction compliance.",
};

export default function DisclaimerPage() {
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
              <span className="text-[#E0A154]">WARRANTY &amp;</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                SERVICE DISCLAIMER
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Legal boundaries, professional services liability limits, and India Information Technology Act compliance.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="space-y-8">
            <section className="rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              
              {/* Policy Header Details */}
              <div className="flex items-center gap-3 pb-6 border-b border-border/40 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-foreground tracking-wide">
                    Liability Limitation &amp; Disclaimers
                  </h2>
                  <p className="text-[10px] text-muted-foreground/60 font-mono">Last updated: Monday, June 1, 2026</p>
                </div>
              </div>

              {/* Policy Content */}
              <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans">
                
                {/* Intro */}
                <p className="text-foreground/90 font-medium">
                  The information provided by <span className="text-foreground font-semibold">GENGRAPHS AND GRAPHICS</span> is for general informational and promotional purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information or services provided on the Site.
                </p>

                {/* Section 1: Professional Services Disclaimer */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">1.</span> Professional Services Disclaimer
                  </h3>
                  <p>
                    Our website offers services and information related to data analytics, graphic design, brand identity creation, and business management. Please note the following regarding these specific services:
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="p-5 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          Data &amp; Visuals
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-foreground font-sans">Data Analytics &amp; Visualizations</h4>
                      <p className="text-[12px] leading-relaxed text-muted-foreground/80">
                        The dashboards, charts, data models, and analytical insights we provide are designed to serve as decision-support tools. While we strive for accuracy in data interpretation and visualization, we do not guarantee specific financial, operational, or business outcomes resulting from the use of our analytics. Business decisions made based on our data reports are made at your own risk.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Subjective Art
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-foreground font-sans">Graphic Design &amp; Brand Identity</h4>
                      <p className="text-[12px] leading-relaxed text-muted-foreground/80">
                        Creative services, including but not limited to logo design, cinematic animations, and brand identity development, are inherently subjective. We provide these services based on industry standards and client briefs. Final deliverables are subject to the specific terms, revision policies, and approval processes outlined in individual client contracts.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          No Formal Advice
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-foreground font-sans">Business Management Consulting</h4>
                      <p className="text-[12px] leading-relaxed text-muted-foreground/80">
                        Any strategic guidance, management frameworks, or operational advice provided through our website or services does not constitute legal, financial, or formal regulatory advice. You should consult with an independent financial advisor, legal counsel, or relevant professional before making major business decisions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Limitation of Liability */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">2.</span> Limitation of Liability
                  </h3>
                  <p>
                    Under no circumstance shall Gen Graphs and Graphics, nor its directors, employees, partners, or agents, have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or our services, or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
                  </p>
                  <p>
                    In no event will we be liable for indirect, incidental, consequential, or punitive damages arising out of your use of our services, including but not limited to loss of profits, data corruption, or business interruption.
                  </p>
                </div>

                {/* Section 3: External Links Disclaimer */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">3.</span> External Links Disclaimer
                  </h3>
                  <p>
                    The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties (such as embedded portfolio platforms, software providers, or external reference materials). Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                  </p>
                  <p className="text-xs italic pl-4 border-l border-amber-500/20">
                    We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site.
                  </p>
                </div>

                {/* Section 4: Intellectual Property */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">4.</span> Intellectual Property
                  </h3>
                  <p className="flex items-start gap-3">
                    <Copyright className="w-4 h-4 shrink-0 text-amber-500 mt-1" />
                    <span>
                      Unless otherwise stated, all original content, interactive dashboards, cinematic animations, designs, and materials created by Gen Graphs and Graphics on this website are our intellectual property and are protected by applicable copyright and trademark laws. You may not reproduce, distribute, or exploit this content without our express written permission.
                    </span>
                  </p>
                </div>

                {/* Section 5: Governing Law and Jurisdiction */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">5.</span> Governing Law and Jurisdiction
                  </h3>
                  <p>
                    This Disclaimer, and any disputes related to it or your use of the website, shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Specifically, our operations comply with the relevant provisions of the Information Technology Act, 2000 and applicable rules thereunder.
                  </p>
                  
                  <div className="p-5 rounded-2xl bg-amber-950/15 border border-amber-500/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-4">
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-[#E0A154] flex items-center gap-1.5 uppercase tracking-wide font-mono">
                        <Landmark className="w-3.5 h-3.5" /> Jurisdiction Designation
                      </h4>
                      <p className="text-[11px] text-muted-foreground/80">
                        Any legal action or proceeding related to this website shall be brought exclusively in:
                      </p>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-border/60 text-xs font-bold text-foreground shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>Faridabad, Haryana, India</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

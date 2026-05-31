import Link from 'next/link';
import { ArrowLeft, Cookie, Mail, Globe, Shield, ExternalLink, Settings } from 'lucide-react';

export const metadata = {
  title: "Cookie Policy - GENGRAPHS AND GRAPHICS PVT LTD®",
  description: "Learn how we use cookies and tracking technology to deliver a secure and optimized user experience.",
};

export default function CookiePolicyPage() {
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
              <span className="text-[#E0A154]">COOKIE</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                POLICY REGISTRY
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Transparent specifications regarding cookie technology and site telemetry used by GENGRAPHS AND GRAPHICS.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="space-y-8">
            <section className="rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              
              {/* Policy Header Details */}
              <div className="flex items-center gap-3 pb-6 border-b border-border/40 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-foreground tracking-wide">
                    Cookie Telemetry &amp; Usage
                  </h2>
                  <p className="text-[10px] text-muted-foreground/60 font-mono">Effective: Monday, June 1, 2026</p>
                </div>
              </div>

              {/* Policy Content */}
              <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans">
                
                {/* Intro */}
                <p className="text-foreground/90 font-medium">
                  At <span className="text-foreground font-semibold">GENGRAPHS AND GRAPHICS PVT. LTD.</span>, we believe in being clear and open about how we collect and use data related to you. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
                </p>

                {/* Section 1: What are Cookies? */}
                <div className="space-y-4">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">1.</span> What are Cookies?
                  </h3>
                  <p>
                    Cookies are small text files placed on your computer or mobile device when you visit a website. They serve various functions, such as enabling smooth navigation between pages, remembering your preferences, and enhancing your overall browsing experience. Additionally, cookies may be used to deliver advertisements that are more relevant to your interests.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        First-Party
                      </span>
                      <h4 className="text-xs font-bold text-foreground font-sans">First-party cookies</h4>
                      <p className="text-[11px] leading-normal text-muted-foreground/80">
                        These are cookies set by the website you are visiting directly. They help the site remember your preferences and improve your user experience during and between visits.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Third-Party
                      </span>
                      <h4 className="text-xs font-bold text-foreground font-sans">Third-party cookies</h4>
                      <p className="text-[11px] leading-normal text-muted-foreground/80">
                        These are cookies set by domains other than the one you are visiting. They are typically used for tracking and advertising purposes across different websites.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Targeting
                      </span>
                      <h4 className="text-xs font-bold text-foreground font-sans">Advertising cookies</h4>
                      <p className="text-[11px] leading-normal text-muted-foreground/80">
                        These cookies are used to deliver advertisements that are more relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase bg-teal-500/10 text-teal-400 border border-teal-500/20">
                        Lifespan
                      </span>
                      <h4 className="text-xs font-bold text-foreground font-sans">Session &amp; Persistent</h4>
                      <p className="text-[11px] leading-normal text-muted-foreground/80">
                        <strong>Session cookies</strong> are deleted when your browser closes. <strong>Persistent cookies</strong> remain until deleted or expired, remembering preferences across visits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: How GENGRAPHS AND GRAPHICS Uses Cookies */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">2.</span> How GENGRAPHS AND GRAPHICS Uses Cookies
                  </h3>
                  <p>
                    We use cookies to ensure our website functions properly, to understand how visitors interact with our portfolio of visual designs and data analytics, and to improve our services. The cookies we use generally fall into the following categories:
                  </p>

                  <ul className="space-y-3.5 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <div>
                        <strong className="text-foreground">Essential/Strictly Necessary Cookies:</strong> These are required for the operation of our website. They enable core functions like security, network management, and accessibility. You cannot opt out of these cookies.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <div>
                        <strong className="text-foreground">Performance and Analytics Cookies:</strong> These cookies allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works, ensuring you easily find the design services or interactive dashboards you are looking for.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <div>
                        <strong className="text-foreground">Functionality Cookies:</strong> These are used to recognize you when you return to our website. They enable us to personalize our content for you and remember your preferences (for example, your choice of language or region).
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Section 3: Third-Party Cookies */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">3.</span> Third-Party Cookies
                  </h3>
                  <p>
                    In some cases, we also use cookies provided by trusted third parties. This is especially relevant if you are interacting with embedded content on our site:
                  </p>

                  <div className="space-y-3.5 pl-4 border-l border-amber-500/20">
                    <div>
                      <strong className="text-foreground block mb-1">Embedded Media and Portfolios:</strong>
                      <p className="text-[13px]">
                        When you view our interactive data visualizations (such as embedded Tableau dashboards) or our cinematic logo animations, the platforms hosting this content may set their own cookies to track engagement.
                      </p>
                    </div>
                    <div>
                      <strong className="text-foreground block mb-1">Site Analytics:</strong>
                      <p className="text-[13px]">
                        We may use third-party analytics tools (like Google Analytics) to help us understand how you use the site and ways we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Managing Your Cookies */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">4.</span> Managing Your Cookies
                  </h3>
                  <p>
                    Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
                  </p>
                  
                  <div className="p-5 rounded-2xl bg-amber-950/15 border border-amber-500/10 space-y-3 mt-4">
                    <h4 className="text-xs font-bold text-[#E0A154] flex items-center gap-1.5 uppercase tracking-wide font-mono">
                      <Settings className="w-3.5 h-3.5" /> Browser-Specific Help Guides
                    </h4>
                    <p className="text-xs text-muted-foreground/90">
                      To learn more about how to manage and delete cookies, refer to the documentation of your specific browser:
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-mono">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-card border border-border/40">
                        <span className="text-foreground">Google Chrome</span>
                        <span className="text-muted-foreground/50">Settings &gt; Privacy</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-card border border-border/40">
                        <span className="text-foreground">Mozilla Firefox</span>
                        <span className="text-muted-foreground/50">Settings &gt; Cookies</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-card border border-border/40">
                        <span className="text-foreground">Apple Safari</span>
                        <span className="text-muted-foreground/50">Preferences &gt; Privacy</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-card border border-border/40">
                        <span className="text-foreground">Microsoft Edge</span>
                        <span className="text-muted-foreground/50">Settings &gt; Cookies</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5: Updates to This Policy */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">5.</span> Updates to This Policy
                  </h3>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay aware of any changes.
                  </p>
                </div>

                {/* Section 6: Contact Us */}
                <div className="space-y-4 pt-6 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">6.</span> Contact Us
                  </h3>
                  <p>
                    If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <a href="mailto:info@gengraphsandgraphics.com" className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/40 hover:border-amber-500/20 hover:bg-amber-500/5 transition-all text-foreground group">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground font-mono">Direct Email</span>
                        <span className="text-xs font-semibold group-hover:text-[#E0A154] transition-colors">info@gengraphsandgraphics.com</span>
                      </div>
                    </a>

                    <a href="https://www.gengraphsandgraphics.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/40 hover:border-amber-500/20 hover:bg-amber-500/5 transition-all text-foreground group">
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground font-mono">Official Website</span>
                        <span className="text-xs font-semibold flex items-center gap-1 group-hover:text-[#E0A154] transition-colors">
                          www.gengraphsandgraphics.com <ExternalLink className="w-3 h-3 opacity-50" />
                        </span>
                      </div>
                    </a>
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

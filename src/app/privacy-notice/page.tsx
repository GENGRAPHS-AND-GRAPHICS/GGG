import Link from 'next/link';
import { Lock, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Privacy Notice - GENGRAPHS AND GRAPHICS PVT LTD®",
  description: "Learn how we protect, process, and handle corporate data and transaction details.",
};

export default function PrivacyNoticePage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-amber-500/30 flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[55%] h-[50%] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="relative z-10 flex-grow pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <Link href="/" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-xs font-medium transition-colors mb-6 self-center group">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" /> Back to Workspace
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4 select-none leading-tight">
              <span className="text-[#E0A154]">PRIVACY</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                NOTICE REGISTRY
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Detailed breakdown of data boundaries, encryption methods, and privacy scopes.
            </p>
          </div>

          {/* Policy Detail Sections */}
          <div className="space-y-8">
            <section className="rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-3 pb-6 border-b border-border/40 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-foreground tracking-wide">
                    Data Safety &amp; Protection
                  </h2>
                  <p className="text-[10px] text-muted-foreground/60 font-mono">Last updated: May 2026</p>
                </div>
              </div>

              <div className="space-y-6 text-xs text-muted-foreground leading-relaxed font-sans">
                <p>
                  GENGRAPHS AND GRAPHICS is committed to data security. We do not inspect, capture, or mirror any corporate database connections inside downloaded Power BI templates. All analytical telemetry stays strictly within your organization&apos;s active Microsoft tenant or local workspaces.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-4 rounded-2xl bg-card border border-border/40 space-y-2">
                    <h3 className="text-xs font-bold text-foreground">Zero Cloud Storage</h3>
                    <p className="text-[11px] text-muted-foreground/80">
                      Your database files, excel links, and model properties operate entirely in memory or your own Azure workspace.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/40 space-y-2">
                    <h3 className="text-xs font-bold text-foreground">Encrypted Identity</h3>
                    <p className="text-[11px] text-muted-foreground/80">
                      Customer login and download authorization tokens are securely hashed using modern cryptographic algorithms.
                    </p>
                  </div>
                </div>

                <p className="pt-4 text-xs italic">
                  Additional Privacy Notice elements will be added at a later date as requested.
                </p>
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Cookie, ShieldAlert, Scale, Lock, Eye } from 'lucide-react';

export const metadata = {
  title: "Compliance & Corporate Policies Hub - GENGRAPHS AND GRAPHICS PVT LTD™",
  description: "Official legal registry for GENGRAPHS AND GRAPHICS (OPC) PVT. LTD. Access our Terms, Cookie Policy, Disclaimer, Security Disclosure, and Accessibility Charter.",
};

const policyHubItems = [
  {
    id: "cookie-policy",
    icon: Cookie,
    title: "Cookie Policy",
    link: "/cookie-policy",
    summary: "Details how we deploy first/third-party cookies and tracking technology to deliver a secure, optimized visualization matrix.",
    keyPoints: [
      "First-party cookies remember user preferences.",
      "Embedded Tableau & media track engagement safely.",
      "Zero invasive advertising cookies on our dashboards."
    ]
  },
  {
    id: "disclaimer",
    icon: ShieldAlert,
    title: "Disclaimer & Liability",
    link: "/disclaimer",
    summary: "Limits company liability for professional B2B analytics, strategic consulting models, and creative brand designs.",
    keyPoints: [
      "Analytics dashboards serve as decision-support tools.",
      "Subjective branding assets governed by client briefs.",
      "Exclusive Faridabad, Haryana jurisdiction for disputes."
    ]
  },
  {
    id: "terms-of-service",
    icon: Scale,
    title: "Terms of Service",
    link: "/terms-of-service",
    summary: "Governs general site access, milestone-based wire transfer structures, client responsibilities, and intellectual property terms.",
    keyPoints: [
      "Strict milestone-based payments (Wire Transfer only).",
      "All deposits and milestone payments are non-refundable.",
      "IP transferred only upon final secure project settlement."
    ]
  },
  {
    id: "report-vulnerability",
    icon: Lock,
    title: "Report a Vulnerability",
    link: "/report-vulnerability",
    summary: "Ethical disclosure program for security researchers to report platform vulnerabilities, database loop bypasses, or bugs.",
    keyPoints: [
      "Zero customer data inspection/mirroring allowed.",
      "Responsible disclosure with 12-hour acknowledgment SLA.",
      "No paid bug bounty program operated at this time."
    ]
  },
  {
    id: "accessibility-policy",
    icon: Eye,
    title: "Accessibility Policy",
    link: "/accessibility-policy",
    summary: "Outlines our commitments to WCAG AA digital standards, color vision deficiency optimization, and dashboard navigability.",
    keyPoints: [
      "Semantic HTML & keyboard navigation focus states.",
      "Contrast ratios designed for visual clarity & colorblindness.",
      "Descriptive alt-text for interactive dashboard assets."
    ]
  }
];

export default function PoliciesPage() {
  return (
    <div className="relative w-full min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-amber-500/30 flex flex-col justify-between">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[55%] h-[50%] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[45%] h-[45%] bg-amber-600/5 blur-[110px] rounded-full pointer-events-none" />

      <main className="relative z-10 flex-grow pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4 select-none leading-tight">
              <span className="text-[#E0A154]">GENGRAPHS</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                POLICIES &amp; REGISTRY
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We operate under transparent, compliant, and professional frameworks to protect your data, deliver robust analytics, and ensure project success.
            </p>
          </div>

          {/* Policy Registry Hub Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {policyHubItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  className="rounded-3xl bg-card/60 border border-border/80 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-amber-500/20 hover:bg-amber-500/5 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon & Action */}
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <Link 
                        href={item.link}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-[#E0A154] transition-colors"
                      >
                        Read Full Page <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                    {/* Policy Title & Summary */}
                    <div className="space-y-1.5">
                      <h2 className="text-base font-serif font-bold text-foreground group-hover:text-[#E0A154] transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-[12px] text-muted-foreground leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Core Registry Guidelines */}
                    <ul className="space-y-1.5 pt-3 border-t border-border/30 text-[11px] text-muted-foreground/80 list-none pl-0">
                      {item.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link 
                      href={item.link}
                      className="w-full h-9 rounded-xl bg-card border border-border/80 hover:border-amber-500/30 flex items-center justify-center text-xs font-semibold text-foreground group-hover:text-amber-500 transition-all font-sans"
                    >
                      View Policy Registry
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Support / Contact Section */}
          <div className="mt-16 max-w-xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-br from-amber-950/20 via-card to-background border border-border/60 shadow-xl backdrop-blur-md">
            <h3 className="font-serif font-bold text-lg text-foreground mb-2">Have a question about our policies?</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              If you have any doubts regarding our milestone payments, licenses, or security reporting, feel free to contact us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-xs text-black font-bold tracking-wide hover:opacity-90 transition-all shadow-md"
            >
              Contact Compliance Team
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';
import { Shield, FileText, Lock, Scale, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Policies - GENGRAPHS AND GRAPHICS PVT LTD®",
  description: "Review the Privacy Policy, Terms of Service, Refund Policy, and Delivery Terms for GENGRAPHS AND GRAPHICS PVT LTD®.",
};

const policySections = [
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy Policy",
    lastUpdated: "May 2026",
    intro: "We value your trust and security. This Privacy Policy details how we collect, process, and protect your information when utilizing our Power BI templates, consulting services, and platform.",
    points: [
      {
        heading: "1. Data Collection & Usage",
        description: "We collect basic identifying details (such as name, corporate email, and transaction records) solely to process orders, grant access to secure templates, and provide support SLAs."
      },
      {
        heading: "2. Security & Ledger Integrity",
        description: "All payment transactions and downloads are handled via encrypted ledger gateways. We do not store financial credentials or private database connection details on our servers."
      },
      {
        heading: "3. No Third-Party Tracking",
        description: "Your corporate data is yours alone. We do not sell, rent, or trade user analytics or business information to any external data aggregators or advertising networks."
      }
    ]
  },
  {
    id: "terms",
    icon: Scale,
    title: "Terms of Service",
    lastUpdated: "May 2026",
    intro: "By accessing Gengraphs & Graphics tools, premium templates, and remote design services, you agree to comply with our commercial terms and operational guidelines.",
    points: [
      {
        heading: "1. Licensing & Usage Scope",
        description: "Purchased Power BI templates (.pbix) are licensed for internal corporate use. Reselling, distributing, or whitelabeling our template assets as raw standalone templates is strictly prohibited."
      },
      {
        heading: "2. Consulting & Service SLA",
        description: "Custom design and analytical contracts operate under agreed statement of works (SOW). We offer a guaranteed 12-hour response SLA on all operational and revision tasks."
      },
      {
        heading: "3. Liability Limits",
        description: "While we build highly optimized, secure, and robust layouts, GENGRAPHS AND GRAPHICS is not responsible for analytical errors arising from external database modifications or user-altered DAX code."
      }
    ]
  },
  {
    id: "refund",
    icon: Shield,
    title: "Refund & Cancellation Policy",
    lastUpdated: "May 2026",
    intro: "Please review our refund parameters regarding digital assets, high-fidelity mockups, and corporate BI implementations.",
    points: [
      {
        heading: "1. Digital Downloads",
        description: "Due to the non-returnable nature of downloadable digital files (.pbix, Figma, or Adobe XD assets), standard digital template purchases are generally non-refundable once downloaded."
      },
      {
        heading: "2. Custom Project Milestones",
        description: "For custom dashboards and premium graphic designs, clients are billed according to progressive milestones. Cancellations will cease future work, but completed milestones remain non-refundable."
      },
      {
        heading: "3. Dedicated Support Cases",
        description: "If you experience any technical integration issues or compatibility errors with your template setup, our dedicated support engineering team will resolve the issue or provide alternative credit options."
      }
    ]
  },
  {
    id: "delivery",
    icon: FileText,
    title: "Delivery & Fulfillment Policy",
    lastUpdated: "May 2026",
    intro: "How we fulfill and deliver digital templates, mockups, and remote visualization consultancy services.",
    points: [
      {
        heading: "1. Instant Digital Delivery",
        description: "Upon verified secure settlement, all standard Power BI template packages are instantly available for download via your unique encrypted gateway link and automated email invoice."
      },
      {
        heading: "2. Custom Design Blueprints",
        description: "UX/UI designs, brand-aligned graphics, and custom dashboards are built and delivered progressively according to the timelines specified in your custom engagement agreement."
      },
      {
        heading: "3. Future Support & Updates",
        description: "Minor updates, code patches, and visual refinements are pushed directly to original secure download repositories, keeping your active blueprints aligned with current Next.js and Power BI releases."
      }
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
            <Link href="/" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-xs font-medium transition-colors mb-6 self-center group">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" /> Back to Workspace
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4 select-none leading-tight">
              <span className="text-[#E0A154]">GENGRAPHS</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                COMPANY POLICIES
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We operate under transparent, secure, and professional frameworks to deliver top-tier Business Intelligence blueprints and design services.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl mx-auto">
            {policySections.map((sect) => (
              <a
                key={sect.id}
                href={`#${sect.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/40 hover:border-amber-500/30 bg-card/40 hover:bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-amber-500 transition-all backdrop-blur-md cursor-pointer"
              >
                <sect.icon className="w-3.5 h-3.5 shrink-0" />
                <span>{sect.title}</span>
              </a>
            ))}
          </div>

          {/* Policy Detail Sections */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {policySections.map((sect) => {
              const IconComp = sect.icon;
              return (
                <section
                  key={sect.id}
                  id={sect.id}
                  className="scroll-mt-24 rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-border/100"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500 shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-serif font-bold text-foreground tracking-wide">
                          {sect.title}
                        </h2>
                        <p className="text-[10px] text-muted-foreground/60 font-mono">Last updated: {sect.lastUpdated}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-sans">
                    {sect.intro}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sect.points.map((point, index) => (
                      <div key={index} className="space-y-2 p-4 rounded-2xl bg-card border border-border/40 hover:border-border/60 transition-colors">
                        <h3 className="text-xs font-bold text-foreground">
                          {point.heading}
                        </h3>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Support / Contact Section */}
          <div className="mt-16 max-w-xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-br from-amber-950/20 via-card to-background border border-border/60 shadow-xl backdrop-blur-md">
            <h3 className="font-serif font-bold text-lg text-foreground mb-2">Have a question about our policies?</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              If you have any doubts regarding our licenses, cancellations, or custom deliverables, feel free to contact us.
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

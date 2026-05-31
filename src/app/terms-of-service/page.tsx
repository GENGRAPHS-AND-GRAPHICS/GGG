import Link from 'next/link';
import { ArrowLeft, Scale, Calendar, Building2, Globe, CreditCard, ShieldAlert, BadgeHelp, CheckCircle2, UserCheck, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: "Terms of Service - GENGRAPHS AND GRAPHICS (OPC) PVT. LTD.",
  description: "Read the governing terms, scope of services, milestone payment policy, and IP transfer details of GENGRAPHS AND GRAPHICS (OPC) PVT. LTD.",
};

export default function TermsOfServicePage() {
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
              <span className="text-[#E0A154]">TERMS OF</span> <br />
              <span className="bg-gradient-to-r from-[#414141] to-neutral-400 bg-clip-text text-transparent">
                SERVICE AGREEMENT
              </span>
            </h1>
            
            <p className="max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Rules, payment milestones, liabilities, and intellectual rights governing data visualizations and designs.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="space-y-8">
            <section className="rounded-3xl bg-card/60 border border-border/80 p-6 sm:p-8 backdrop-blur-xl shadow-sm">
              
              {/* Policy Header Details */}
              <div className="flex items-center gap-3 pb-6 border-b border-border/40 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-foreground tracking-wide">
                    Terms &amp; Engagement Policies
                  </h2>
                  <p className="text-[10px] text-muted-foreground/60 font-mono">Effective Date: Monday, June 1, 2026</p>
                </div>
              </div>

              {/* Corporate Metadata Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-card border border-border/40 font-mono text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-muted-foreground/50">Company Entity</span>
                    <span className="font-semibold text-foreground">GENGRAPHS AND GRAPHICS (OPC) PVT. LTD.</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-muted-foreground/50">Incorporation Date</span>
                    <span className="font-semibold text-foreground">25/07/2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="block text-[8px] uppercase tracking-wider text-muted-foreground/50">Official Website</span>
                    <span className="font-semibold text-foreground">www.gengraphsandgraphics.com</span>
                  </div>
                </div>
              </div>

              {/* Policy Content */}
              <div className="space-y-8 text-sm text-muted-foreground leading-relaxed font-sans">
                
                {/* Intro */}
                <p>
                  Welcome to <strong className="text-foreground">GENGRAPHS AND GRAPHICS (OPC) PVT. LTD.</strong> These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, as well as the engagement of our professional data analytics, visualization, and graphic design services (collectively, the &quot;Services&quot;). By engaging our Services, you (&quot;the Client&quot;) agree to be bound by these Terms.
                </p>

                {/* Section 1: Scope of Services */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">1.</span> Scope of Services
                  </h3>
                  <p>
                    GENGRAPHS AND GRAPHICS PVT. LTD specializes in data visualization, custom Power BI &amp; Tableau dashboard development, cinematic visual design, and brand identity creation. The specific details, deliverables, and timelines for each project will be outlined in a separate Statement of Work (SOW) or formal project proposal agreed upon by both parties before work commences.
                  </p>
                </div>

                {/* Section 2: Payment Policy and Financial Terms */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">2.</span> Payment Policy and Financial Terms
                  </h3>
                  <p className="text-foreground/90 font-medium">
                    To ensure the highest quality of work and dedicated resource allocation, we enforce a strict milestone-based payment structure.
                  </p>
                  
                  {/* Wire Transfer Alert */}
                  <div className="p-4 rounded-2xl bg-amber-950/10 border border-amber-500/10 flex gap-3 items-start my-3">
                    <CreditCard className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-[#E0A154] uppercase tracking-wide font-mono">Wire Transfer (Bank Transfer) Required</h4>
                      <p className="text-[12px] text-muted-foreground/80">
                        All project payments must be made exclusively via Bank Transfer. We do not accept credit cards, checks, or digital wallet payments for project invoices unless explicitly agreed upon in writing.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-amber-500/20">
                    <div>
                      <strong className="text-foreground block text-xs tracking-wide uppercase mb-1">2.1 Milestone Payments</strong>
                      <p className="text-[13px]">
                        Payments are not collected as a single lump sum at the end of a project. Instead, fees are divided and must be released at subsequent, predefined stages of project completion. A typical project schedule includes:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-[12px]">
                        <li><strong className="text-foreground">Project Initiation (Deposit):</strong> An initial upfront payment required to commence work and secure your project slot.</li>
                        <li><strong className="text-foreground">Mid-Project Milestones:</strong> Subsequent payments triggered by the delivery and approval of specific project phases (e.g., initial draft, structural approval, or dashboard wireframes).</li>
                        <li><strong className="text-foreground">Final Delivery:</strong> The remaining balance is due prior to the handover of the final, unwatermarked source files or live publication.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/15">
                      <strong className="text-red-400 block text-xs tracking-wide uppercase mb-1 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4" /> 2.2 Strict Non-Refundable Policy
                      </strong>
                      <p className="text-[12px] text-muted-foreground/90">
                        Due to the custom nature of data visualization, design, and animation, all payments made—including initial deposits and subsequent milestone payments—are strictly non-refundable. Once a phase of work has begun or been completed, the associated fees compensate for the time, labor, and expertise already rendered.
                      </p>
                    </div>

                    <div>
                      <strong className="text-foreground block text-xs tracking-wide uppercase mb-1">2.3 Accepted Payment Methods</strong>
                      <p className="text-[13px]">
                        All project payments must be made exclusively via Wire Transfer (Bank Transfer) to the corporate bank account details provided on your invoice.
                      </p>
                    </div>

                    <div>
                      <strong className="text-foreground block text-xs tracking-wide uppercase mb-1 flex items-center gap-1.5 text-orange-400">
                        <AlertTriangle className="w-4 h-4" /> 2.4 Late Payments
                      </strong>
                      <p className="text-[13px]">
                        Failure to release milestone payments within 7 days of the invoice date will result in an immediate pause on all project work until the balance is cleared.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Client Responsibilities */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">3.</span> Client Responsibilities
                  </h3>
                  <p>
                    The successful and timely completion of our Services relies on active client collaboration:
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-2 text-xs">
                      <UserCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>The Client agrees to provide all necessary raw data, brand assets, logos, and specific requirements in a timely manner.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs">
                      <UserCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>The Client is responsible for ensuring they have the legal right to share any proprietary data or assets provided to GENGRAPHS AND GRAPHICS PVT. LTD.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs">
                      <UserCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>Delays in client feedback or failure to provide required assets may result in adjusted project timelines.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 4: Revisions and Scope Creep */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">4.</span> Revisions and Scope Creep
                  </h3>
                  <p>
                    Each project phase includes a specific number of revision rounds, which will be detailed in the SOW. Revisions must be requested within 7 business days of receiving a draft. Requests for features, visual assets, or data integration outside the original SOW will be considered &quot;Scope Creep&quot; and will require a separate quote and additional billing before execution.
                  </p>
                </div>

                {/* Section 5: Intellectual Property */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">5.</span> Intellectual Property
                  </h3>
                  <p>
                    Upon receipt of full and final payment for the project, GENGRAPHS AND GRAPHICS PVT. LTD. assigns the final deliverables (e.g., exported videos, final dashboards, flattened graphics) to the Client.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs">
                    <li>GENGRAPHS AND GRAPHICS PVT. LTD. retains the right to use the completed project materials (excluding sensitive/confidential Client data) in our portfolio, case studies, and marketing materials unless a strict Non-Disclosure Agreement (NDA) is signed prior to the project start.</li>
                    <li>Working files, proprietary templates, and preliminary concepts remain the intellectual property of GenGraphs and Graphics and are not transferred unless explicitly purchased.</li>
                  </ul>
                </div>

                {/* Section 6: Confidentiality */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">6.</span> Confidentiality
                  </h3>
                  <p>
                    We take your data seriously. GENGRAPHS AND GRAPHICS PVT. LTD. agrees to keep all proprietary business information and raw datasets provided by the Client strictly confidential and will not share them with unauthorized third parties.
                  </p>
                </div>

                {/* Section 7: Termination */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">7.</span> Termination
                  </h3>
                  <p>
                    Either party may terminate the project with written notice if the other party breaches these Terms. In the event of termination by the Client before project completion, the Client forfeits any payments already made and will be invoiced for any work completed up to the date of cancellation that exceeds the current paid milestones.
                  </p>
                </div>

                {/* Section 8: Limitation of Liability */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">8.</span> Limitation of Liability
                  </h3>
                  <p>
                    In no event shall GENGRAPHS AND GRAPHICS PVT. LTD. be liable for any indirect, incidental, or consequential damage, including loss of profits, data, or business opportunities, arising from the use of our deliverables. Our maximum liability under any circumstance is strictly limited to the total amount paid by the Client for the specific project in question.
                  </p>
                </div>

                {/* Section 9: Governing Law */}
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <h3 className="text-base font-serif font-bold text-foreground flex items-center gap-2">
                    <span className="text-[#E0A154] font-mono">9.</span> Governing Law and Jurisdiction
                  </h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Faridabad, Haryana, India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Faridabad, Haryana, India.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-2 pt-6 border-t border-border/40 text-center sm:text-left">
                  <p className="text-xs">
                    If you have any questions regarding these Terms, please contact us at:
                  </p>
                  <p className="text-base font-serif font-bold text-[#E0A154]">
                    info@gengraphsandgraphics.com
                  </p>
                </div>

              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

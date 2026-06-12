"use client";

import { motion } from "framer-motion";
import { ChartColumn, Users, TrendingUp, Eye, BarChart3 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getMarketplaceStatsAction } from "@/app/admin/actions";
import { formatViews } from "@/lib/utils";
import { isStripped } from "@/lib/config";

export function TransitionSection() {
  const { data: dbStats = { templatesCount: 0, creatorsCount: 0, newMonthlyReports: 0, reportViews: 0 }, isLoading } = useQuery({
    queryKey: ['marketplace-stats'],
    queryFn: () => getMarketplaceStatsAction(),
    staleTime: 5 * 60_000, // Stats change rarely
  });

  const statsData = [
    {
      icon: <ChartColumn className="w-4 h-4 text-amber-400" />,
      value: isLoading ? "..." : formatViews(dbStats.templatesCount),
      label: "Power BI Templates",
      desc: "Interactive enterprise blueprints ready to deploy."
    },
    {
      icon: <Users className="w-4 h-4 text-amber-400" />,
      value: isLoading ? "..." : formatViews(dbStats.creatorsCount),
      label: "Active Creators",
      desc: "Verified analytics developers collaborating on layouts."
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-amber-400" />,
      value: isLoading ? "..." : formatViews(dbStats.newMonthlyReports),
      label: "New Reports (30d)",
      desc: "High-fidelity workspaces launched in the last month."
    },
    {
      icon: <Eye className="w-4 h-4 text-amber-400" />,
      value: isLoading ? "..." : formatViews(dbStats.reportViews),
      label: "Total Views",
      desc: "Cumulative visual intelligence insights rendered."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 bg-transparent selection:bg-amber-500/30">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.03),_transparent_60%)] pointer-events-none" />

      {/* Grid Pattern Overlay for Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading & Pitch */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold text-amber-400 backdrop-blur-md uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Performance Matrix</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
              Empowering Decision <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Makers in Real-Time
              </span>
            </h2>

            <p className="text-base text-neutral-400 leading-relaxed max-w-sm">
              {isStripped ? (

                "I have built"
              ) : (
                "At GENGRAPHS AND GRAPHICS , We build")} highperformance workspaces where advanced <strong> Data Analytics </strong>, premium <strong> Graphic Design </strong>, and rigorous <strong> Business Management </strong> converge. Leveraging sophisticated DAX modeling, Story Telling,  usercentric interfaces, and strategic operational frameworks, we deliver custom environments that are fast, robust, and visually compelling—giving you absolute precision in every real-time decision."

            </p>
          </div>

          {/* Right Column: Dynamic Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-amber-500/20 p-4 flex flex-col justify-between space-y-4 transition-all duration-300"
              >
                {/* Glow behind icon */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-lg bg-amber-500/5 blur-md pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] group-hover:border-amber-500/30 flex items-center justify-center shrink-0 relative z-10 transition-colors">
                  {stat.icon}
                </div>

                <div className="space-y-1 relative z-10">
                  <div className="text-2xl font-mono font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-bold text-amber-300/90 tracking-wider uppercase">
                    {stat.label}
                  </div>
                  <p className="text-[12px] text-neutral-400 leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

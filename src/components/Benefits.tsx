"use client";
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export function Benefits() {
  const items = [
    {
      icon: <Eye className="w-5 h-5 text-amber-500" />,
      title: "OUR MISSION",
      subtitle: "Client-Centric Engineering",
      desc: "We are committed to a customer-first approach that transforms complex data into your ultimate competitive advantage."
    },
    {
      icon: <Target className="w-5 h-5 text-amber-500" />,
      title: "OUR VISION",
      subtitle: "Mutual Success",
      desc: "We envision a business landscape driven by true collaboration and shared growth."
    }
  ];

  return (
    <section className="py-16 border-t border-border/10 relative z-10 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/40 backdrop-blur-sm border border-border/60 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md hover:border-amber-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-amber-500 uppercase tracking-widest leading-none">{item.title}</span>
                  <span className="text-xs font-semibold text-foreground mt-1.5 tracking-tight">{item.subtitle}</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


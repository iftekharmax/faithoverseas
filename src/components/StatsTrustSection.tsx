import { motion } from 'motion/react';
import { ShieldCheck, Compass, Users2, Target } from 'lucide-react';
import { STATS } from '../data/content';

const statIcons = [
  <Compass className="w-6 h-6 text-[#C3161C]" />,
  <Users2 className="w-6 h-6 text-amber-500" />,
  <ShieldCheck className="w-6 h-6 text-[#C3161C]" />,
  <Target className="w-6 h-6 text-rose-500" />,
];

export function StatsTrustSection() {
  return (
    <section className="py-20 bg-white text-slate-900 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C3161C] bg-rose-50 px-3 py-1 rounded-md">
            QUALITATIVE EXCELLENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Candidates Choose Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Grounded in rigorous preparation, disciplined coaching, and measurable candidate development.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#C3161C]/40 hover:bg-rose-50/20 transition-all duration-300 shadow-sm hover:shadow-md text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100">
                    {statIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <div className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>

                <h3 className="text-sm font-bold text-slate-800 mt-2">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

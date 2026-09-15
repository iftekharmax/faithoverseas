import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Sparkles, 
  Award, 
  Mic, 
  ShieldCheck, 
  Globe2, 
  CheckCircle,
  ArrowUpRight 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

const iconComponentMap: Record<string, ReactNode> = {
  Users: <Users className="w-6 h-6 text-[#C3161C]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
  Award: <Award className="w-6 h-6 text-rose-500" />,
  Mic: <Mic className="w-6 h-6 text-orange-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
  Globe2: <Globe2 className="w-6 h-6 text-[#C3161C]" />,
};

interface WhyChooseUsProps {
  onLearnMore?: () => void;
}

export function WhyChooseUs({ onLearnMore }: WhyChooseUsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial energy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C3161C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <span>THE FAITH OVERSEAS ADVANTAGE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            More Than Application Processing
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We prepare candidates for the complete journey — from profile assessment to international career.
          </p>
        </div>

        {/* 6 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((card, index) => {
            const isHovered = hoveredCard === card.number;

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCard(card.number)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group rounded-2xl p-7 bg-slate-950/80 border border-slate-800 hover:border-[#C3161C]/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#C3161C]/20 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Glow accent in corner on hover */}
                <div 
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#C3161C]/20 to-amber-500/20 rounded-full blur-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-amber-400 transition-colors duration-300">
                      {card.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-[#C3161C]/50 group-hover:bg-rose-950/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-inner">
                      {iconComponentMap[card.icon] || <Award className="w-6 h-6 text-rose-500" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-200 transition-colors duration-300 mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill & Interactive Detail Reveal */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>{card.highlight}</span>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-slate-900 group-hover:bg-[#C3161C] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Assurance Footer */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-950/80 text-rose-400 border border-rose-800/50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Genuine Candidate Preparation</p>
              <p className="text-xs text-slate-400">Every candidate is equipped with authentic skills and professional readiness.</p>
            </div>
          </div>

          <a
            href="#process"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl border border-rose-900/60 transition-colors"
          >
            <span>View Complete Process</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

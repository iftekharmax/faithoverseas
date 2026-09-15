import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onStartJourney: () => void;
  onTalkToTeam: () => void;
}

export function FinalCTA({ onStartJourney, onTalkToTeam }: FinalCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
      {/* Full-width professional international career background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85"
          alt="International team celebrating successful career milestones"
          className="w-full h-full object-cover object-center brightness-40"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered deep navy & cyan gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-rose-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#C3161C]/25 via-transparent to-transparent" />
      </div>

      {/* Floating subtle ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#C3161C]/60 blur-xs animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-400/50 blur-xs animate-pulse" />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-rose-400/60 blur-xs" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FAITH OVERSEAS LTD.</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          Your Skills. Your Ambition.{' '}
          <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-amber-200 text-gradient">
            Your Global Career.
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Let us help you prepare for the opportunities ahead.
        </motion.p>

        {/* Dual Primary / Secondary Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            id="final-cta-btn-start"
            onClick={onStartJourney}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-bold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] rounded-xl shadow-xl shadow-[#C3161C]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="final-cta-btn-talk"
            onClick={onTalkToTeam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-amber-400" />
            <span>Talk to Our Team</span>
          </button>
        </motion.div>

        {/* Reassuring Regulatory Line */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Professional Preparation • Strict Transparency • No False Promises</span>
        </div>

      </div>
    </section>
  );
}

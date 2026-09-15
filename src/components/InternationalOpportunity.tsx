import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Globe2, Plane, Sparkles } from 'lucide-react';

interface InternationalOpportunityProps {
  onStartJourney: () => void;
  onTalkToConsultant: () => void;
}

export function InternationalOpportunity({
  onStartJourney,
  onTalkToConsultant,
}: InternationalOpportunityProps) {
  return (
    <section className="relative py-28 lg:py-36 bg-slate-950 text-white overflow-hidden">
      {/* Immersive Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=85"
          alt="International travel and global city skyline"
          className="w-full h-full object-cover object-center brightness-50 contrast-125"
          referrerPolicy="no-referrer"
        />

        {/* Multi-tier gradient overlay to ensure WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-rose-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Floating Accent Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg"
        >
          <Plane className="w-4 h-4 text-amber-400" />
          <span>GLOBAL HORIZONS</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          Your Skills Can{' '}
          <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-amber-200 text-gradient">
            Travel Further
          </span>
        </motion.h2>

        {/* Overlay Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Ready to take the next step toward an international career? With systematic preparation, your trade skills and professional ambitions can open doors across borders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            id="intl-btn-start-journey"
            onClick={onStartJourney}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] rounded-xl shadow-xl shadow-[#C3161C]/40 hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>Start Your Career Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="intl-btn-talk-consultant"
            onClick={onTalkToConsultant}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-amber-400" />
            <span>Talk to a Consultant</span>
          </button>
        </motion.div>

        {/* Bottom Micro Details */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-amber-400" />
            Direct Employer Job Specifications
          </span>
          <span>•</span>
          <span>Verified Procedural Guidance</span>
          <span>•</span>
          <span>Pre-Departure Orientation</span>
        </div>

      </div>
    </section>
  );
}

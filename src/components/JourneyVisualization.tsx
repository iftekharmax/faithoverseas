import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  ShieldCheck, 
  Compass, 
  Award,
  FileCheck,
  Video,
  FileText,
  Target,
  UserCheck,
  Briefcase
} from 'lucide-react';

interface JourneyVisualizationProps {
  onStartConsultation: () => void;
}

const journeyStages = [
  { step: '01', title: 'Profile Assessment', icon: <UserCheck className="w-4 h-4" /> },
  { step: '02', title: 'Job Matching', icon: <Target className="w-4 h-4" /> },
  { step: '03', title: 'Professional CV', icon: <FileText className="w-4 h-4" /> },
  { step: '04', title: 'Candidate Video', icon: <Video className="w-4 h-4" /> },
  { step: '05', title: 'Job Training', icon: <Award className="w-4 h-4" /> },
  { step: '06', title: 'Mock Interview', icon: <Briefcase className="w-4 h-4" /> },
  { step: '07', title: 'Employer Interview', icon: <ShieldCheck className="w-4 h-4" /> },
  { step: '08', title: 'Documentation', icon: <FileCheck className="w-4 h-4" /> },
  { step: '09', title: 'Visa Guidance', icon: <Compass className="w-4 h-4" /> },
  { step: '10', title: 'Pre-Departure', icon: <Sparkles className="w-4 h-4" /> },
  { step: '11', title: 'International Career', icon: <Globe2 className="w-4 h-4" /> },
];

export function JourneyVisualization({ onStartConsultation }: JourneyVisualizationProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background connecting energy */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-950/20 via-slate-950 to-slate-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <span>PIPELINE OVERVIEW</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Journey to a Global Career
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            A cohesive, progressive path engineered to eliminate uncertainty and build verified readiness.
          </p>
        </div>

        {/* Sequential Progression Flow with Animated Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden xl:block absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-[#C3161C] via-[#E0262D] to-amber-400 opacity-40 z-0" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-3 relative z-10">
            {journeyStages.map((stage, idx) => {
              const isFinal = idx === journeyStages.length - 1;
              const isHovered = hoveredIdx === idx;

              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative p-3 rounded-xl border flex flex-col items-center text-center transition-all duration-300 cursor-default ${
                    isFinal
                      ? 'bg-gradient-to-b from-[#C3161C]/40 to-amber-950/60 border-amber-400/50 shadow-lg shadow-amber-500/20'
                      : isHovered
                      ? 'bg-slate-900 border-[#C3161C] scale-105 shadow-md shadow-[#C3161C]/25'
                      : 'bg-slate-900/70 border-slate-800'
                  }`}
                >
                  {/* Icon circle */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-all ${
                      isFinal
                        ? 'bg-amber-500 text-white shadow-md'
                        : isHovered
                        ? 'bg-gradient-to-tr from-[#C3161C] to-amber-500 text-white shadow-sm'
                        : 'bg-slate-800 text-rose-400'
                    }`}
                  >
                    {stage.icon}
                  </div>

                  {/* Step Number */}
                  <span className="text-[10px] font-mono font-bold text-slate-400 mb-0.5">
                    {stage.step}
                  </span>

                  {/* Title */}
                  <span className={`text-[11px] font-bold leading-tight ${isFinal ? 'text-amber-300' : 'text-slate-200'}`}>
                    {stage.title}
                  </span>

                  {/* Subtle arrow indicator for mobile continuity */}
                  {!isFinal && (
                    <div className="xl:hidden mt-2 text-slate-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            id="journey-btn-begin"
            onClick={onStartConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#C3161C] hover:bg-[#A81016] shadow-lg shadow-[#C3161C]/30 hover:shadow-[#C3161C]/50 transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>Take Step 01: Profile Assessment Today</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

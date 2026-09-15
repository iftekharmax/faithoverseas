import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, 
  Target, 
  FileText, 
  Video, 
  BookOpen, 
  MessageSquare, 
  Briefcase, 
  FileCheck, 
  Compass, 
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { WORK_PROCESS_STAGES } from '../data/content';

interface WorkProcessTimelineProps {
  onStartPreparation?: () => void;
  activeStageId?: string;
}

const stepIconMap: Record<string, ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

const mockFlow = [
  'Personal Questions',
  'Work Experience',
  'Job Responsibilities',
  'Technical Questions',
  'Situational Questions',
  'Workplace Communication',
  'Employer-Specific Preparation',
];

const finalReadinessPillars = [
  { label: 'Ready to Apply', desc: 'Targeted CV & certified credentials' },
  { label: 'Ready to Interview', desc: 'Poised verbal delivery & on-camera confidence' },
  { label: 'Ready to Work', desc: 'Practical trade standards & safety mastery' },
  { label: 'Ready to Succeed', desc: 'Long-term international career sustainability' },
];

export function WorkProcessTimeline({ onStartPreparation }: WorkProcessTimelineProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStage = WORK_PROCESS_STAGES[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C3161C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <span>METHODICAL 10-STAGE ROADMAP</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Candidate to Global Career
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured preparation journey designed to prepare you at every important stage.
          </p>
        </div>

        {/* Desktop Stage Selector Bar (Stages 01 through 10) */}
        <div className="hidden lg:block mb-10">
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#C3161C] via-[#E0262D] to-amber-400 -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${(activeStepIndex / (WORK_PROCESS_STAGES.length - 1)) * 100}%` }}
            />

            {/* 10 Step Trigger Pills */}
            <div className="relative z-10 flex items-center justify-between">
              {WORK_PROCESS_STAGES.map((stage, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;

                return (
                  <button
                    key={stage.step}
                    id={`timeline-step-btn-${stage.step}`}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#C3161C] to-[#E0262D] text-white shadow-lg shadow-[#C3161C]/40 scale-110 ring-4 ring-[#C3161C]/25'
                          : isPassed
                          ? 'bg-rose-950 text-rose-200 border border-rose-800'
                          : 'bg-slate-950 text-slate-400 border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-200'
                      }`}
                    >
                      {stage.step}
                    </div>

                    <span 
                      className={`text-[11px] font-medium mt-2 max-w-[80px] text-center leading-tight truncate ${
                        isActive ? 'text-amber-300 font-bold' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      {stage.title.split(' ')[0]} {stage.title.split(' ')[1] || ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <motion.div
          key={currentStage.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Stage Details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Step indicator */}
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black font-mono bg-gradient-to-r from-rose-400 to-amber-300 text-gradient">
                  STAGE {currentStage.step}
                </span>
                <div className="h-4 w-px bg-slate-700" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {currentStage.subtitle}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {currentStage.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStage.description}
              </p>

              {/* Evaluation / Action Points */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Milestones in This Stage:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStage.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage-Specific Visual: Step 06 (Mini Mock Flow) */}
              {currentStage.step === '06' && (
                <div className="mt-4 p-4 rounded-2xl bg-rose-950/40 border border-rose-800/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      7-Tier Simulated Progression Flow
                    </span>
                    <span className="text-[11px] text-slate-400">Step-by-step interview simulation</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    {mockFlow.map((flowItem, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1">
                        <span className="px-2 py-1 rounded bg-slate-900 text-amber-200 border border-rose-800/40 font-medium">
                          {flowItem}
                        </span>
                        {fIdx < mockFlow.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stage-Specific Visual: Step 10 (Ready to Global Career Visual) */}
              {currentStage.step === '10' && (
                <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-rose-950/60 via-slate-900 to-amber-950/40 border border-rose-600/40 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    The Culmination of Complete Preparation
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {finalReadinessPillars.map((pillar, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <span className="block text-xs font-bold text-white mb-0.5">{pillar.label}</span>
                        <span className="block text-[10px] text-slate-400">{pillar.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Controls between stages */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  id="btn-timeline-prev"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Stage
                </button>

                <span className="text-xs text-slate-400">
                  Step {activeStepIndex + 1} of {WORK_PROCESS_STAGES.length}
                </span>

                <button
                  id="btn-timeline-next"
                  disabled={activeStepIndex === WORK_PROCESS_STAGES.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(WORK_PROCESS_STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#C3161C] hover:bg-[#A81016] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  Next Stage →
                </button>
              </div>

            </div>

            {/* Right Column: Stage Visual Illustration Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 shadow-inner flex flex-col items-center text-center space-y-6">
                
                {/* Visual Icon Halo */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#C3161C] to-amber-500 flex items-center justify-center text-white shadow-xl shadow-[#C3161C]/30">
                    {stepIconMap[currentStage.icon] || <Award className="w-8 h-8" />}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-slate-950 border border-amber-400 flex items-center justify-center font-mono text-xs font-bold text-amber-300">
                    {currentStage.step}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">
                    {currentStage.title}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    {currentStage.subtitle}
                  </p>
                </div>

                {/* Quick Call to Action */}
                <div className="w-full pt-2">
                  <button
                    id="btn-start-preparation-from-process"
                    onClick={onStartPreparation}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] shadow-md shadow-[#C3161C]/30 cursor-pointer transition-all"
                  >
                    <span>Get Prepared for this Stage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* Mobile Accordion / Vertical List view for touchscreens */}
        <div className="lg:hidden mt-8 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-2">
            All 10 Preparation Steps
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {WORK_PROCESS_STAGES.map((stg, i) => (
              <button
                key={stg.step}
                onClick={() => setActiveStepIndex(i)}
                className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                  activeStepIndex === i 
                    ? 'bg-rose-950/80 border-rose-500 text-white' 
                    : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-amber-400">
                    {stg.step}
                  </span>
                  <span className="text-xs font-semibold truncate max-w-[190px]">
                    {stg.title}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

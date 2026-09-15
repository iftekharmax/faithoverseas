import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';
import { READINESS_CHECKLIST } from '../data/content';

interface CandidateReadinessProps {
  onCheckReadiness: () => void;
}

export function CandidateReadiness({ onCheckReadiness }: CandidateReadinessProps) {
  // Candidate can check the items they have already prepared
  const [checkedIds, setCheckedIds] = useState<string[]>(['cv', 'skills']);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const checkedCount = checkedIds.length;
  const totalCount = READINESS_CHECKLIST.length;
  const progressFraction = checkedCount / totalCount;
  const strokeDashoffset = 440 - 440 * progressFraction;

  const getStatusText = () => {
    if (checkedCount <= 2) return 'Initial Assessment Phase';
    if (checkedCount <= 5) return 'Active Preparation Needed';
    if (checkedCount <= 7) return 'Strong Foundational Base';
    return 'Comprehensive Candidate Readiness';
  };

  const getStatusDescription = () => {
    if (checkedCount <= 2) {
      return 'You have the raw ambition — our 10-step preparation process will build your missing modules.';
    }
    if (checkedCount <= 5) {
      return 'Great starting points! Let us refine your CV, mock interviews, and on-camera presentation.';
    }
    return 'Outstanding! Your baseline is solid. We can fast-track your profile matching with overseas employer briefs.';
  };

  return (
    <section id="readiness" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <span>SELF-ASSESSMENT BENCHMARK</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Are You Ready for the Global Workplace?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Test your current international preparation against our 8 workplace readiness benchmarks. Click any item to evaluate your profile status.
          </p>
        </div>

        {/* Interactive Layout: Left Checklist (4 items), Center Meter, Right Checklist (4 items) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Checklist (Items 1 - 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            {READINESS_CHECKLIST.slice(0, 4).map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  id={`readiness-chk-${item.id}`}
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 cursor-pointer ${
                    isChecked
                      ? 'bg-rose-950/70 border-[#C3161C] text-white shadow-md shadow-[#C3161C]/15'
                      : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isChecked ? 'text-white' : 'text-slate-200'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Circular Progress Indicator (Non-percentage qualitative visual) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl text-center space-y-5">
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* SVG Circular Progress Track */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-slate-800"
                  fill="transparent"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="url(#progressGradient)"
                  strokeWidth="10"
                  strokeDasharray="440"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                  fill="transparent"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C3161C" />
                    <stop offset="60%" stopColor="#E0262D" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content Inside Circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <ShieldCheck className="w-7 h-7 text-amber-400 mb-1" />
                <span className="font-heading text-lg font-bold text-white leading-tight">
                  {checkedCount} of {totalCount}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Verified Ready
                </span>
              </div>
            </div>

            {/* Status Label */}
            <div className="space-y-1.5 px-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-950/70 text-rose-200 border border-rose-700/50">
                {getStatusText()}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                {getStatusDescription()}
              </p>
            </div>

            {/* CTA Button */}
            <button
              id="readiness-btn-action"
              onClick={onCheckReadiness}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] shadow-lg shadow-[#C3161C]/30 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Check Your Readiness</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Checklist (Items 5 - 8) */}
          <div className="lg:col-span-4 space-y-3.5">
            {READINESS_CHECKLIST.slice(4, 8).map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  id={`readiness-chk-${item.id}`}
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 cursor-pointer ${
                    isChecked
                      ? 'bg-rose-950/70 border-[#C3161C] text-white shadow-md shadow-[#C3161C]/15'
                      : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isChecked ? 'text-white' : 'text-slate-200'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

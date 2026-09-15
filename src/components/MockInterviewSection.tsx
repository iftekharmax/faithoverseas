import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  Volume2, 
  Video, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Play, 
  RotateCcw,
  CheckCircle2,
  Users
} from 'lucide-react';
import { MOCK_INTERVIEW_QUESTIONS } from '../data/content';

interface MockInterviewSectionProps {
  onScheduleMock?: () => void;
}

export function MockInterviewSection({ onScheduleMock }: MockInterviewSectionProps) {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const currentQ = MOCK_INTERVIEW_QUESTIONS[activeQuestionIdx];

  const floatingCategories = [
    { title: 'Technical Questions', color: 'border-blue-500/50 bg-blue-950/40 text-blue-300' },
    { title: 'Situational Questions', color: 'border-amber-500/50 bg-amber-950/40 text-amber-300' },
    { title: 'Communication', color: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-300' },
    { title: 'Work Experience', color: 'border-indigo-500/50 bg-indigo-950/40 text-indigo-300' },
    { title: 'Job Responsibilities', color: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300' },
    { title: 'Employer-Specific Questions', color: 'border-purple-500/50 bg-purple-950/40 text-purple-300' },
  ];

  return (
    <section id="mock-interview" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#C3161C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <span>REAL-WORLD INTERVIEW SIMULATION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Practice Before You Perform
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate nervousness and conquer international interviews with our realistic 1-on-1 mock simulation lab. We test your trade knowledge, behavioral communication, and situational composure before you face real employers.
          </p>
        </div>

        {/* Floating Category Pills Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {floatingCategories.map((cat, idx) => (
            <motion.button
              key={cat.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveQuestionIdx(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                activeQuestionIdx === idx
                  ? 'border-[#C3161C] bg-rose-950/80 text-rose-200 ring-2 ring-[#C3161C]/30 shadow-lg shadow-[#C3161C]/20'
                  : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700'
              }`}
            >
              {cat.title}
            </motion.button>
          ))}
        </div>

        {/* Visual Mock Interview Interface */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Video Call Bar */}
          <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">
                Faith Overseas • Simulated International Panel
              </span>
              <span className="text-slate-400 font-mono hidden sm:inline">
                Session ID: FO-MOCK-2026
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-200 font-mono font-medium border border-rose-800/40">
                Live Simulation
              </span>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono">Stereo Audio</span>
              </div>
            </div>
          </div>

          {/* Main Interface Content: Split Video Tiles */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tile 1: Senior Consultant / Employer Panel View */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 h-64 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
                  alt="Senior International Recruitment Evaluator"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Tile Header */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-[11px] font-medium text-slate-200 border border-white/10 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-rose-400" />
                  <span>Lead Evaluator (Mock Panel)</span>
                </div>

                {/* Animated Waveform at Bottom of Evaluator Tile */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Mic className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px] text-amber-200">Asking Interview Prompt</span>
                  </div>
                  
                  {/* Subtle Waveform Animation */}
                  <div className="flex items-center gap-1 h-3.5">
                    {[60, 90, 40, 100, 70, 85, 30, 95].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 bg-amber-400 rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tile 2: Candidate Practicing In Live View */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 h-64 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
                  alt="Candidate responding to interview panel questions"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-[11px] font-medium text-slate-200 border border-white/10 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>Candidate Live Camera</span>
                </div>

                {/* Framing Target Box */}
                <div className="absolute inset-8 border border-dashed border-amber-400/30 rounded-xl pointer-events-none flex items-center justify-center">
                  <span className="text-[10px] text-amber-400/60 font-mono tracking-widest uppercase">
                    Optimal Eye Level Frame
                  </span>
                </div>

                {/* Candidate Assessment Meter */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-300">Confidence Metric:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-4/5" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-400">Strong</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Active Question Prompt Display Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuestionIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Prompt: {currentQ.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-rose-950 text-rose-200 border border-rose-800/40">
                    Focus: {currentQ.badge}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                  “{currentQ.question}”
                </p>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1 text-rose-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Evaluator assesses: clarity, specific examples, technical terminology & posture</span>
                  </div>

                  <button
                    onClick={() => setActiveQuestionIdx((prev) => (prev + 1) % MOCK_INTERVIEW_QUESTIONS.length)}
                    className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-semibold cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Next Question</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Over 90% of candidates who complete all 7 mock stages report high confidence when facing international employers.
              </p>

              <button
                id="btn-schedule-mock"
                onClick={onScheduleMock}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] shadow-lg shadow-[#C3161C]/30 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Book a Mock Interview Session</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

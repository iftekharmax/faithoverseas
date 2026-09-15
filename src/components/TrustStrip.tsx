import type { ReactNode } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/content';

interface TrustStripProps {
  onSelectStage?: (stageId: string) => void;
}

const iconMap: Record<string, ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />,
  Target: <Target className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />,
  FileText: <FileText className="w-5 h-5 text-[#C3161C] group-hover:scale-110 transition-transform" />,
  Video: <Video className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />,
  BookOpen: <BookOpen className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#C3161C] group-hover:scale-110 transition-transform" />,
  FileCheck: <FileCheck className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />,
  Compass: <Compass className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />,
};

export function TrustStrip({ onSelectStage }: TrustStripProps) {
  return (
    <section 
      id="trust-strip"
      className="relative z-20 bg-slate-900 border-y border-slate-800 shadow-xl py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800/80 mb-5 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C3161C] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              End-to-End Preparation Ecosystem
            </span>
          </div>
          <span className="text-xs text-slate-400">
            From initial consultation to global workplace onboarding
          </span>
        </div>

        {/* 9 Value Items: Scrollable on mobile/tablet, Grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-9 gap-3 overflow-x-auto pb-3 md:pb-0 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 snap-x snap-mandatory">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <a
              key={item.id}
              href="#process"
              onClick={() => onSelectStage && onSelectStage(item.id)}
              className="group flex-shrink-0 w-64 md:w-auto p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/90 border border-slate-800/80 hover:border-[#C3161C]/60 transition-all duration-300 snap-start flex flex-col justify-between hover:shadow-lg hover:shadow-[#C3161C]/15 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-rose-800/50 transition-colors">
                    {iconMap[item.icon] || <UserCheck className="w-5 h-5 text-rose-400" />}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-amber-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-xs font-bold text-white group-hover:text-rose-200 transition-colors leading-snug">
                  {item.title}
                </h2>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-medium text-slate-400 group-hover:text-amber-300">
                <span>Explore Step</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-2 text-[11px] text-slate-400">
          <span>← Swipe horizontally to see all 9 preparation stages →</span>
        </div>
      </div>
    </section>
  );
}

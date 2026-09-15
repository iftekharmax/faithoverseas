import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hotel, 
  Hammer, 
  Sparkles, 
  Wrench, 
  Cpu, 
  HeartHandshake, 
  Headphones, 
  Utensils, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Globe2, 
  Briefcase 
} from 'lucide-react';
import { SECTORS } from '../data/content';
import { Sector } from '../types';

interface SectorsSectionProps {
  onApplyForSector: (sectorName: string) => void;
}

const sectorIconMap: Record<string, ReactNode> = {
  Hotel: <Hotel className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  Sparkle: <Sparkles className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
};

export function SectorsSection({ onApplyForSector }: SectorsSectionProps) {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

  return (
    <section id="sectors" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-200 text-xs font-bold uppercase tracking-wider">
            <span>HIGH-DEMAND GLOBAL INDUSTRIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore Your Career Sector
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Opportunities across multiple industries based on available positions and overseas employer requirements.
          </p>
        </div>

        {/* 8 Sector Image-Rich Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#C3161C]/60 shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Background Image with Deep Gradient Overlay */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

                {/* Top Category Badge & Icon */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-rose-400 flex items-center justify-center shadow-lg">
                    {sectorIconMap[sector.icon] || <Briefcase className="w-5 h-5" />}
                  </div>
                  
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-slate-300 border border-white/10">
                    {sector.category}
                  </span>
                </div>

                {/* Sector Title on Image bottom */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                    {sector.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-slate-950 space-y-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sector.description}
                </p>

                {/* Subtle Sample Roles Pill Tags */}
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1.5">
                    Sample Roles:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sector.roles.slice(0, 3).map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {role}
                      </span>
                    ))}
                    {sector.roles.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-rose-950/60 text-rose-200 border border-rose-800/40">
                        +{sector.roles.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Micro CTA: Explore Opportunities */}
                <div className="pt-2 border-t border-slate-800/80">
                  <button
                    id={`btn-sector-${sector.id}`}
                    onClick={() => setSelectedSector(sector)}
                    className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-slate-900 hover:bg-[#C3161C] text-xs font-semibold text-slate-200 hover:text-white transition-all duration-300 cursor-pointer group/btn shadow-sm"
                  >
                    <span>Explore Opportunities</span>
                    <ArrowRight className="w-3.5 h-3.5 text-rose-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regulatory & Matching Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            * All sector opportunities are subject to current overseas employer demand, formal visa eligibility criteria, trade certifications, and relevant statutory regulations.
          </p>
        </div>

      </div>

      {/* Sector Deep Dive Modal */}
      <AnimatePresence>
        {selectedSector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-left"
            >
              {/* Modal Banner Header */}
              <div className="relative h-44 w-full">
                <img
                  src={selectedSector.image}
                  alt={selectedSector.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                
                <button
                  onClick={() => setSelectedSector(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#C3161C] text-white uppercase tracking-wider shadow-md">
                    {selectedSector.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">
                    {selectedSector.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedSector.description}
                </p>

                {/* Roles List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-2">
                    Available Candidate Profiles & Typical Positions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSector.roles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Competencies Evaluated */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                    Core Technical & Workplace Competencies Evaluated
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedSector.keyCompetencies.map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Global Demand Overview */}
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/40 flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">International Market Context</p>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{selectedSector.demandOverview}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedSector(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedSector.name;
                      setSelectedSector(null);
                      onApplyForSector(name);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] shadow-lg shadow-[#C3161C]/30 cursor-pointer"
                  >
                    <span>Assess Profile for this Sector</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

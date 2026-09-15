import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Compass, 
  CheckCircle2, 
  Plane, 
  Briefcase, 
  ChevronDown, 
  Award,
  Globe
} from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExploreProcess: () => void;
}

export function Hero({ onStartJourney, onExploreProcess }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Photography with Sophisticated Dark Royal Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=85"
          alt="International airport and global travel opportunities"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Multilayer gradient overlays for text readability & modern energy */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-rose-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C3161C]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-transparent" />
        
        {/* Subtle grid pattern for structured consultancy aesthetic */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-700/50 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C3161C] animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-semibold text-rose-200">
                SKILLED MIGRATION • GLOBAL CAREERS • INTERNATIONAL OPPORTUNITIES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Turn Your Skills Into a{' '}
              <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-rose-200 text-gradient">
                Global Career
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Professional preparation, international job matching and career guidance designed to help skilled, semi-skilled and professional candidates move confidently toward global opportunities.
            </motion.p>

            {/* Tagline Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3 text-sm text-amber-300/95 font-medium"
            >
              <div className="h-px w-6 bg-[#C3161C]" />
              <span>“Your Skills. Our Preparation. Global Opportunities.”</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-btn-start"
                onClick={onStartJourney}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] rounded-xl shadow-xl shadow-[#C3161C]/35 hover:shadow-[#C3161C]/55 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-process"
                onClick={onExploreProcess}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-rose-700/60 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
              >
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Explore Our Process</span>
              </button>
            </motion.div>

            {/* Micro Credibility Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certified CV & Video Preparation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Structured 7-Step Mock Interview</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Regulatory Guidance</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Composite Card with Candidate Preparation Spotlight */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C3161C] to-amber-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-rose-900/40 bg-slate-900 shadow-2xl">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                    alt="Candidate preparing for international career interview"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                    <Plane className="w-3.5 h-3.5 text-rose-400" />
                    <span>Global Career Pathways</span>
                  </div>

                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active Intake</span>
                  </div>
                </div>

                {/* Card Bottom Content Strip */}
                <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-rose-900/30 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                        <span>Candidate-Focused Preparation</span>
                        <Award className="w-4 h-4 text-amber-400" />
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Profile Assessment • CV Formatting • Mock Simulation
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-rose-950/70 text-rose-200 text-xs font-semibold rounded border border-rose-800/50">
                      360° Readiness
                    </span>
                  </div>

                  {/* Visual Readiness Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>Interview & Workplace Preparedness</span>
                      <span className="text-amber-400 font-bold">100% Prepared</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#C3161C] via-[#E0262D] to-amber-400 rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Card 1: Job Matching */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-slate-900/95 backdrop-blur-md border border-rose-600/30 p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-700/50 flex items-center justify-center text-rose-300 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Targeted Matching</p>
                  <p className="text-[11px] text-slate-400">Directly matched with international employer briefs</p>
                </div>
              </motion.div>

              {/* Floating Decorative Card 2: Overseas Confidence */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-amber-500/30 p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white leading-tight">Global Mobility</span>
                  <span className="block text-[10px] text-slate-400">8+ High-Demand Sectors</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          href="#trust-strip"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer group"
          aria-label="Scroll to services overview"
        >
          <span className="text-[11px] uppercase tracking-widest font-medium opacity-70 group-hover:opacity-100">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-rose-400" />
        </a>
      </div>
    </section>
  );
}

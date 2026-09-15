import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users2, 
  Globe2,
  Award
} from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/content';

interface AboutSectionProps {
  onDiscoverProcess: () => void;
}

export function AboutSection({ onDiscoverProcess }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Authentic Professional Photography Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image: Candidate Consultation & Advisory */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                  alt="Faith Overseas professional candidate consultation and career advisory session"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#C3161C] text-[11px] font-semibold tracking-wide uppercase shadow-md">
                    Personalized Guidance
                  </span>
                  <p className="text-sm font-semibold mt-1">One-on-One Career Advisory & Profile Mapping</p>
                </div>
              </div>

              {/* Secondary Overlapping Image: International Workplace */}
              <div className="absolute -bottom-10 -right-4 sm:-right-8 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
                  alt="International professional team in modern overseas workplace"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-bold flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                    Global Workplace Standards
                  </p>
                </div>
              </div>

              {/* Tertiary Floating Metric Card */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl p-3.5 border border-slate-100 flex items-center gap-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-[#C3161C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Dedicated Support</p>
                  <p className="text-[11px] text-slate-500">End-to-End Compliance</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative Content & Visual Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-100/70 text-[#C3161C] text-xs font-bold tracking-wider uppercase">
              <Users2 className="w-3.5 h-3.5" />
              <span>WHO WE ARE</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Connecting Skilled People With{' '}
              <span className="text-[#C3161C]">Global Opportunities</span>
            </h2>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>Faith Overseas Ltd.</strong> is a professional education and career consultancy committed to creating international opportunities for individuals seeking to build successful careers abroad.
              </p>
              <p className="text-slate-600">
                Alongside study abroad services, <strong>Skilled Migration</strong> and overseas career opportunities are among our key areas of expertise.
              </p>
              <p className="text-slate-600 text-base">
                We support skilled, semi-skilled and professional candidates throughout their overseas employment journey with integrity, rigorous preparation, and transparent guidance.
              </p>
            </div>

            {/* Highlighted Visual Feature Points with Checks */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Preparation Capabilities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_HIGHLIGHTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-rose-300 hover:bg-rose-50/50 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C3161C] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                id="btn-discover-preparation"
                onClick={onDiscoverProcess}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#C3161C] hover:bg-[#A81016] shadow-lg shadow-[#C3161C]/25 hover:shadow-[#C3161C]/45 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>Discover How We Prepare Candidates</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

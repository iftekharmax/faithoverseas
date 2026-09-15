import { motion } from 'motion/react';
import { 
  FileText, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Mic2, 
  Camera, 
  Eye, 
  Languages 
} from 'lucide-react';

interface CvVideoPrepSectionProps {
  onPrepareProfile: () => void;
}

const prepFeatures = [
  {
    title: 'Job-focused CV',
    desc: 'Structured according to destination country and employer recruitment standards with ATS compliance.',
    icon: <FileText className="w-4 h-4 text-[#C3161C]" />,
  },
  {
    title: 'Professional Self-Introduction',
    desc: 'Scripted and rehearsed 60–90 second pitch presenting personal drive, punctuality, and credentials.',
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
  },
  {
    title: 'Experience Presentation',
    desc: 'Highlighting practical duties, equipment handled, and verifiable project accomplishments clearly.',
    icon: <CheckCircle2 className="w-4 h-4 text-[#C3161C]" />,
  },
  {
    title: 'Skills Presentation',
    desc: 'Direct alignment of trade certifications, manual agility, and workplace problem-solving.',
    icon: <Mic2 className="w-4 h-4 text-emerald-500" />,
  },
  {
    title: 'Body Language Guidance',
    desc: 'Professional eye contact, open posture, composed hand gestures, and professional presence.',
    icon: <Eye className="w-4 h-4 text-rose-500" />,
  },
  {
    title: 'English Communication',
    desc: 'Accent clarity, workplace vocabulary, situational phrasing, and active listening etiquette.',
    icon: <Languages className="w-4 h-4 text-amber-600" />,
  },
  {
    title: 'Camera Positioning & Studio Setup',
    desc: 'Optimized lighting, clean background framing, high-definition audio, and correct eye level.',
    icon: <Camera className="w-4 h-4 text-[#C3161C]" />,
  },
  {
    title: 'Employer-Focused Presentation',
    desc: 'Tailored directly to the specific job specifications and cultural expectations of the hiring firm.',
    icon: <Video className="w-4 h-4 text-[#C3161C]" />,
  },
];

export function CvVideoPrepSection({ onPrepareProfile }: CvVideoPrepSectionProps) {
  return (
    <section id="cv-video" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Mockup of Candidate Interview / Video Prep Setup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C3161C] to-amber-500 rounded-3xl blur-xl opacity-15" />

              {/* Mockup Video Interface Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
                
                {/* Simulated Camera Feed */}
                <div className="relative h-80 sm:h-96 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
                    alt="Candidate rehearsing professional self introduction with video recording coaching"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                  {/* On-Screen Recording Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C3161C] text-white text-[11px] font-bold tracking-wider uppercase shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      REC 01:24
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[11px] font-semibold border border-white/10">
                      1080p HD Studio Feed
                    </span>
                  </div>

                  {/* Audio Wave Visualizer Simulation */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mic2 className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-semibold text-white">Audio Quality: Excellent</span>
                    </div>
                    {/* Simulated bars */}
                    <div className="flex items-end gap-1 h-4">
                      {[40, 70, 95, 60, 85, 100, 75, 50, 90, 65].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-amber-400 rounded-full animate-pulse"
                          style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Control Feedback Ribbon */}
                <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-rose-400" />
                    <span>Candidate Framing: Centered & Balanced</span>
                  </div>
                  <span className="text-amber-400 font-semibold font-mono">Faith Overseas Studio</span>
                </div>

              </div>

              {/* Floating CV Mini Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px]">
                <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#C3161C] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">ATS Optimized CV</p>
                  <p className="text-[10px] text-slate-500">International European Format</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-100 text-[#C3161C] text-xs font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>DIGITAL CANDIDATE PRESENTATION</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Present Yourself With Confidence
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Faith Overseas Ltd. helps candidates prepare professional CVs and high-impact candidate videos designed specifically around the target position. We turn raw capability into compelling international proof.
            </p>

            {/* 8 Feature Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {prepFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#C3161C]/40 hover:bg-rose-50/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {feat.icon}
                    <h3 className="text-xs font-bold text-slate-900">{feat.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="pt-3">
              <button
                id="btn-prepare-profile"
                onClick={onPrepareProfile}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] shadow-lg shadow-[#C3161C]/25 hover:shadow-[#C3161C]/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Prepare Your Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

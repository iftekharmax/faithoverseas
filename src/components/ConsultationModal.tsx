import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Briefcase 
} from 'lucide-react';
import { SECTORS } from '../data/content';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSector?: string;
}

export function ConsultationModal({ isOpen, onClose, preselectedSector }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    sector: preselectedSector || SECTORS[0].name,
    experienceYears: '1-3',
    highestEducation: 'Diploma / Technical Certificate',
    englishLevel: 'Intermediate (Conversational)',
    hasPassport: true,
    notes: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8 text-left"
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-amber-950 px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
              Candidate Profile Assessment
            </span>
            <h2 className="font-heading text-xl font-bold text-white">
              Start Your Journey with Faith Overseas
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                Assessment Request Received
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.fullName || 'Candidate'}</span>. A senior career advisor from Faith Overseas Ltd. will review your background in the <strong>{formData.sector}</strong> sector and contact you within 24 business hours.
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-left space-y-1.5 max-w-md mx-auto">
                <p className="font-semibold text-slate-300">Next Steps Prepared for You:</p>
                <p>1. Primary verification of trade credentials & experience.</p>
                <p>2. Invitation for an initial 15-minute introductory orientation.</p>
                <p>3. Review of your CV format and target employer briefs.</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#C3161C] hover:bg-[#A81016] transition-colors cursor-pointer"
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete this initial profile questionnaire. Our advisory team will benchmark your credentials against active overseas employer requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Rahman"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white placeholder:text-slate-400"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. david@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Phone / WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +44 7123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white placeholder:text-slate-400"
                  />
                </div>

                {/* Target Sector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    <span>Target Career Sector *</span>
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white"
                  >
                    {SECTORS.map((sec) => (
                      <option key={sec.id} value={sec.name}>
                        {sec.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Experience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Verifiable Experience:
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white"
                  >
                    <option value="Entry / Under 1 year">Entry / Under 1 year</option>
                    <option value="1-3">1 to 3 Years</option>
                    <option value="3-5">3 to 5 Years</option>
                    <option value="5+">5+ Years (Senior / Lead)</option>
                  </select>
                </div>

                {/* English Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Spoken English Level:
                  </label>
                  <select
                    value={formData.englishLevel}
                    onChange={(e) => setFormData({ ...formData, englishLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white"
                  >
                    <option value="Basic (Simple instructions)">Basic (Simple instructions)</option>
                    <option value="Intermediate (Conversational)">Intermediate (Conversational)</option>
                    <option value="Fluent / Professional">Fluent / Professional</option>
                  </select>
                </div>
              </div>

              {/* Passport Checkbox */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Do you hold a valid international passport?</p>
                  <p className="text-[11px] text-slate-400">Required for international processing</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.hasPassport}
                  onChange={(e) => setFormData({ ...formData, hasPassport: e.target.checked })}
                  className="w-4 h-4 rounded text-[#C3161C] focus:ring-[#C3161C] bg-slate-900 border-slate-700"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Specific Skills, Certifications or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Certified ARC welder with 4 years shipyard experience, seeking opportunities in Europe."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#C3161C] focus:outline-none text-xs text-white placeholder:text-slate-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] shadow-lg shadow-[#C3161C]/30 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Profile for Assessment</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Strict privacy: Your information is treated in complete confidentiality.</span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

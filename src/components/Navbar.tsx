import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ArrowRight, 
  Globe2, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenBlueprint?: () => void;
}

export function Navbar({ onOpenConsultation, onOpenBlueprint }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Career Sectors', href: '#sectors' },
    { label: 'Our Process', href: '#process' },
    { label: 'CV & Video Prep', href: '#cv-video' },
    { label: 'Mock Interview', href: '#mock-interview' },
    { label: 'Readiness Test', href: '#readiness' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>+44 20 7946 0921</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>consult@faithoverseas.com</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Candidate Consultation: Mon – Sat (9am – 6pm)</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Licensed Overseas Career Advisory</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-rose-950/80 py-3.5'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C3161C] via-[#DC2626] to-[#F59E0B] flex items-center justify-center shadow-lg shadow-[#C3161C]/30 group-hover:scale-105 transition-transform duration-300">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold font-heading text-white tracking-tight">
                  Faith Overseas
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 bg-rose-950/80 px-1.5 py-0.5 rounded border border-rose-800/60">
                  Ltd.
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                Skilled Migration & Global Careers
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="nav-btn-consultation"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] hover:from-[#A81016] hover:to-[#C3161C] px-5 py-2.5 rounded-xl shadow-lg shadow-[#C3161C]/30 hover:shadow-[#C3161C]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-slate-200 hover:text-amber-300 hover:bg-rose-950/40 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
              <button
                id="mobile-btn-consultation"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-[#C3161C] via-[#D81E24] to-[#E0262D] rounded-xl shadow-md shadow-[#C3161C]/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2 text-xs text-slate-400">
                <span>Direct Line: +44 20 7946 0921</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

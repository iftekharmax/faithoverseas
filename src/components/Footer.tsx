import { 
  Globe2, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ShieldAlert, 
  ArrowUp, 
  Code2 
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenBlueprint: () => void;
}

export function Footer({ onOpenConsultation, onOpenBlueprint }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Skilled Migration Guidance', href: '#sectors' },
    { label: 'Overseas Career Matching', href: '#sectors' },
    { label: 'Candidate Profile Preparation', href: '#about' },
    { label: 'International CV Preparation', href: '#cv-video' },
    { label: 'Mock Interview Simulation', href: '#mock-interview' },
    { label: 'Job Training & Development', href: '#process' },
  ];

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C3161C] to-amber-500 flex items-center justify-center text-white shadow-lg shadow-[#C3161C]/30">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-white tracking-tight">
                  Faith Overseas Ltd.
                </span>
                <p className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                  Education & Career Consultancy
                </p>
              </div>
            </div>

            <p className="text-slate-300 font-medium text-sm leading-relaxed">
              “Your Skills. Our Preparation. Global Opportunities.”
            </p>

            <p className="text-slate-400 text-xs leading-relaxed">
              Connecting skilled, semi-skilled and professional talent with verified international career opportunities through meticulous candidate coaching and employer alignment.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C3161C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C3161C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C3161C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C3161C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#C3161C] hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Specialized Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Office
            </h3>
            
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  Suite 602, Global Trade Tower, Financial District, London / Regional Liaison Office, Dhaka
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="tel:+442079460921" className="hover:text-white transition-colors">
                  +44 20 7946 0921 / +880 1712-345678
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="mailto:consult@faithoverseas.com" className="hover:text-white transition-colors">
                  consult@faithoverseas.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-btn-assessment"
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#C3161C] hover:bg-[#A81016] shadow-md transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Ethical Transparency & Non-Guarantee Statement */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Regulatory & Transparency Notice:</strong> Faith Overseas Ltd. is a dedicated training, candidate preparation, and career consultancy. We do not sell visas or guarantee job placement. All overseas employment opportunities and visa outcomes depend strictly upon employer selection, candidate eligibility, trade verification, and destination country immigration authority regulations.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Faith Overseas Ltd. All rights reserved. Designed with Elementor WordPress architecture.
          </p>

          <div className="flex items-center space-x-4">
            <button
              id="footer-btn-blueprint"
              onClick={onOpenBlueprint}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors text-xs font-medium cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Elementor Specs</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

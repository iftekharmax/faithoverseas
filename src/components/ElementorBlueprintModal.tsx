import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Code2, 
  Copy, 
  Check, 
  Layers, 
  Smartphone, 
  Monitor, 
  Palette, 
  ExternalLink 
} from 'lucide-react';
import { ELEMENTOR_BLUEPRINT } from '../data/content';

interface ElementorBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ElementorBlueprintModal({ isOpen, onClose }: ElementorBlueprintModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const colorPaletteTokens = [
    { name: 'Primary Crimson (Brand Core)', hex: '#C3161C', role: 'Primary buttons, active indicators & main brand' },
    { name: 'Dark Crimson / Wine (Deep Contrast)', hex: '#9E1015', role: 'Card borders, shadows & depth layers' },
    { name: 'Warm Amber Gold (Prestige Accent)', hex: '#F59E0B', role: 'Badges, star ratings, alert highlights' },
    { name: 'Deep Slate Navy (Canvas Foundation)', hex: '#0B1120', role: 'Main dark theme backdrop' },
    { name: 'Warm Off-White / Pearl', hex: '#F8FAFC', role: 'Light cards, contrast text & surfaces' },
    { name: 'Soft Rose Neutral (Border / Accents)', hex: '#FFE4E6', role: 'Delicate light theme borders & chips' },
  ];

  const typographySpecs = [
    { level: 'Headings (H1, H2, H3)', font: 'Outfit / Plus Jakarta Sans', weights: 'Bold 700, ExtraBold 800', elementorSetting: 'Site Settings > Typography > Primary' },
    { level: 'Body & Paragraphs', font: 'Plus Jakarta Sans', weights: 'Regular 400, Medium 500', elementorSetting: 'Site Settings > Typography > Text' },
    { level: 'Numbers & Step Badges', font: 'Courier / Monospace / Outfit', weights: 'Black 900', elementorSetting: 'Custom CSS font-mono' },
  ];

  const handleCopySpecs = () => {
    const text = JSON.stringify(ELEMENTOR_BLUEPRINT, null, 2);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8 text-left"
      >
        {/* Header */}
        <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-950/60 text-amber-400 flex items-center justify-center border border-rose-800/40">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block font-bold">
                WordPress & Elementor Spec Sheet
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
                Elementor Container & Widget Blueprint
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Briefing Note */}
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 text-xs text-slate-300 space-y-1">
            <p className="font-bold text-white flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              Direct Mapping for Elementor Page Builder
            </p>
            <p className="text-slate-400 leading-relaxed">
              Every section in this landing page was deliberately mapped to native Elementor Flexbox Containers, CSS Grid Containers, standard widgets (Heading, Text Editor, Icon Box, Image Box, Tabs, Progress), and responsive breakpoints (1024px tablet, 767px mobile).
            </p>
          </div>

          {/* Section by Section Mapping Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-300">
                1. Container & Widget Architecture
              </h3>
              <button
                onClick={handleCopySpecs}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded border border-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied JSON' : 'Copy Specs'}</span>
              </button>
            </div>

            <div className="border border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3">Landing Section</th>
                    <th className="p-3">Elementor Container Type</th>
                    <th className="p-3">Recommended Widgets</th>
                    <th className="p-3">Responsive Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
                  {ELEMENTOR_BLUEPRINT.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-bold text-white whitespace-nowrap">
                        {item.sectionName}
                      </td>
                      <td className="p-3 text-rose-300 font-mono text-[11px]">
                        {item.elementorContainer}
                      </td>
                      <td className="p-3 text-slate-300">
                        <ul className="list-disc list-inside space-y-0.5">
                          {item.widgets.map((w, wIdx) => (
                            <li key={wIdx}>{w}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-3 text-slate-400 text-[11px]">
                        {item.responsiveNotes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Color Palette Tokens */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              <span>2. Global Colors (Elementor Site Settings &gt; Global Colors)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {colorPaletteTokens.map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg shrink-0 border border-white/20 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="block text-xs font-bold text-white font-mono">{c.hex}</span>
                    <span className="block text-[10px] text-slate-400 truncate">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Tokens */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5" />
              <span>3. Typography Hierarchy (Elementor Global Fonts)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {typographySpecs.map((t, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <p className="text-xs font-bold text-white">{t.level}</p>
                  <p className="text-[11px] text-rose-300 font-mono">{t.font}</p>
                  <p className="text-[10px] text-slate-400">{t.weights}</p>
                  <p className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">{t.elementorSetting}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Exported for Faith Overseas Ltd. • Ready for WordPress 6.x + Elementor 3.x
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#C3161C] hover:bg-[#A81016] font-bold text-white cursor-pointer transition-colors"
          >
            Close Blueprint
          </button>
        </div>
      </motion.div>
    </div>
  );
}

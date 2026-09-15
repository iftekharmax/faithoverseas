import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SectorsSection } from './components/SectorsSection';
import { WorkProcessTimeline } from './components/WorkProcessTimeline';
import { JourneyVisualization } from './components/JourneyVisualization';
import { CvVideoPrepSection } from './components/CvVideoPrepSection';
import { MockInterviewSection } from './components/MockInterviewSection';
import { InternationalOpportunity } from './components/InternationalOpportunity';
import { StatsTrustSection } from './components/StatsTrustSection';
import { CandidateReadiness } from './components/CandidateReadiness';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ElementorBlueprintModal } from './components/ElementorBlueprintModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [preselectedSector, setPreselectedSector] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (sector?: string) => {
    if (sector) {
      setPreselectedSector(sector);
    } else {
      setPreselectedSector(undefined);
    }
    setIsConsultationOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#C3161C] selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onStartJourney={() => handleOpenConsultation()}
          onExploreProcess={() => scrollToSection('process')}
        />

        {/* 2. Trust / Quick Value Strip (Immediately below hero) */}
        <TrustStrip onSelectStage={() => scrollToSection('process')} />

        {/* 3. About Us Section (Split screen) */}
        <AboutSection
          onDiscoverProcess={() => scrollToSection('process')}
        />

        {/* 4. Why Faith Overseas (6 Interactive Cards) */}
        <WhyChooseUs onLearnMore={() => scrollToSection('process')} />

        {/* 5. Sectors We Work With (8 Interactive Sector Cards) */}
        <SectorsSection
          onApplyForSector={(sectorName) => handleOpenConsultation(sectorName)}
        />

        {/* 6. Complete Work Process (10 Stages Interactive Timeline) */}
        <WorkProcessTimeline
          onStartPreparation={() => handleOpenConsultation()}
        />

        {/* 7. Journey Visualization (Connected Pipeline) */}
        <JourneyVisualization
          onStartConsultation={() => handleOpenConsultation()}
        />

        {/* 8. Professional CV & Video Preparation */}
        <CvVideoPrepSection
          onPrepareProfile={() => handleOpenConsultation()}
        />

        {/* 9. Training & Mock Interview Simulation (Dark Immersive Section) */}
        <MockInterviewSection
          onScheduleMock={() => handleOpenConsultation()}
        />

        {/* 10. International Opportunity Showcase */}
        <InternationalOpportunity
          onStartJourney={() => handleOpenConsultation()}
          onTalkToConsultant={() => handleOpenConsultation()}
        />

        {/* 11. Why Candidates Choose Us (Statistics / Trust Section) */}
        <StatsTrustSection />

        {/* 12. Candidate Readiness Checklist & Dynamic Meter */}
        <CandidateReadiness
          onCheckReadiness={() => handleOpenConsultation()}
        />

        {/* 13. Final CTA Section */}
        <FinalCTA
          onStartJourney={() => handleOpenConsultation()}
          onTalkToTeam={() => handleOpenConsultation()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedSector={preselectedSector}
      />

      <ElementorBlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
      />
    </div>
  );
}

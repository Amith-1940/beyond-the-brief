import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Philosophy from "./components/sections/Philosophy";
import Process from "./components/sections/Process";
import SelectedWork from "./components/sections/SelectedWork";
import CampaignSection from "./components/sections/CampaignSection";
import EditorialSection from "./components/sections/EditorialSection";
import PackagingBanners from "./components/sections/PackagingBanners";
import DigitalExperiences from "./components/sections/DigitalExperiences";
import CrossPlatform from "./components/sections/CrossPlatform";
import ApproachSection from "./components/sections/ApproachSection";
import ContactSection from "./components/sections/ContactSection";
import { Project } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-warm-off-white text-charcoal-black font-sans">
      <Header />
      <main>
      

        <Hero />
        <Philosophy />
        <Process />
        <SelectedWork onSelectProject={setSelectedProject} />
        <CampaignSection />
        <EditorialSection />
        <PackagingBanners />
        <DigitalExperiences />
        <CrossPlatform />
        <ApproachSection />
        <ContactSection />
      </main>

      {/* Footer can be simple */}
      <footer className="py-8 bg-charcoal-black text-warm-off-white/40 text-center text-xs font-mono uppercase tracking-widest border-t border-warm-off-white/10">
        © 2026 Beyond the Brief Studio. All rights reserved.
      </footer>
    </div>
  );
}

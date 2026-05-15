import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "@/App.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WorkflowSection from "@/components/WorkflowSection";
import VoiceWorkflowSection from "@/components/VoiceWorkflowSection";
import DashboardSection from "@/components/DashboardSection";
import PoliciesSection from "@/components/PoliciesSection";
import PricingSection from "@/components/PricingSection";
import WaitlistModal from "@/components/WaitlistModal";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const openWaitlist = () => setWaitlistOpen(true);

  return (
    <div className="min-h-screen bg-[#050505] noise-overlay relative overflow-x-hidden">
      <Navbar onOpenWaitlist={openWaitlist} />
      <main>
        <HeroSection onOpenWaitlist={openWaitlist} />
        <SocialProofSection />
        <ProblemSection />
        <SolutionSection />
        <WorkflowSection />
        <VoiceWorkflowSection />
        <DashboardSection />
        <PoliciesSection />
        <PricingSection onOpenWaitlist={openWaitlist} />
        <FAQSection />
        <CTASection onOpenWaitlist={openWaitlist} />
        <FooterSection />
      </main>
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <Analytics />
    </div>
  );
}

export default App;

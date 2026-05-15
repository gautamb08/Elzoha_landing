"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DemoWorkflowSection from "@/components/sections/DemoWorkflowSection";
import OneMessageTaskSection from "@/components/sections/OneMessageTaskSection";
import VoiceWorkflowSection from "@/components/sections/VoiceWorkflowSection";
import InvoicePreviewSection from "@/components/sections/InvoicePreviewSection";
import PoliciesSection from "@/components/sections/PoliciesSection";
import ProblemSection from "@/components/sections/ProblemSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <>
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />
      <main className="flex min-h-screen flex-col overflow-x-hidden">
        <HeroSection onOpenWaitlist={() => setWaitlistOpen(true)} />
        <DemoWorkflowSection />
        <OneMessageTaskSection />
        <VoiceWorkflowSection />
        <InvoicePreviewSection />
        <PoliciesSection />
        <ProblemSection />
        <UseCasesSection />
        <FAQSection />
        <CTASection onOpenWaitlist={() => setWaitlistOpen(true)} />
      </main>
      <Footer />
      
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
}

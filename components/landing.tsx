import React from "react";
import { IntroSection } from "./intro-section";
import { SpecExamples } from "./spec-examples";
import { GoalsSection } from "./goals-section";
import { DetailedIntroSection } from "./detailed-intro-section";
import { HeroSection } from "./hero-section";
import { FeaturesGrid } from "./features-grid";
import { InteractiveDemo } from "./interactive-demo";
import { CallToAction } from "./call-to-action";
import { AIIntegrationSection } from "./ai-integration-section";

export default function OpenUILandingPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <FeaturesGrid />
        <IntroSection />
        <AIIntegrationSection />
        <InteractiveDemo />
        <SpecExamples />
        <GoalsSection />
        <DetailedIntroSection />
        <CallToAction />
      </div>
    </div>
  );
}

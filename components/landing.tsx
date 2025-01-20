import React from "react";
import { SpecExamples } from "./spec-examples";
import { GoalsSection } from "./goals-section";
import { DetailedIntroSection } from "./detailed-intro-section";
import { HeroSection } from "./hero-section";
import { FeaturesGrid } from "./features-grid";
import { CallToAction } from "./call-to-action";

export default function OpenUILandingPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <SpecExamples />
        <FeaturesGrid />
        <GoalsSection />
        <DetailedIntroSection />
        <CallToAction />
      </div>
    </div>
  );
}

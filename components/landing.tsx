import React from "react";
import { IntroSection } from "./intro-section";
import { SpecExamples } from "./spec-examples";
import { GoalsSection } from "./goals-section";
import { DetailedIntroSection } from "./detailed-intro-section";

export default function OpenUILandingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 space-y-16">
        <IntroSection />
        <SpecExamples />
        <GoalsSection />
        <DetailedIntroSection />
      </div>
    </div>
  );
}

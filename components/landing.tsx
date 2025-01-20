import React from "react";
import { IntroSection } from "./intro-section";
import { SpecExamples } from "./spec-examples";
import { GoalsSection } from "./goals-section";
import { DetailedIntroSection } from "./detailed-intro-section";

export default function OpenUILandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <IntroSection />
        <SpecExamples />
        <GoalsSection />
        <DetailedIntroSection />
      </main>
    </div>
  );
}

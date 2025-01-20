import React from "react";
import { IntroSection } from "./intro-section";
import { SampleSpecsSection } from "./sample-specs-section";
import { GoalsSection } from "./goals-section";
import { DetailedIntroSection } from "./detailed-intro-section";

export default function OpenUILandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <IntroSection />
        <SampleSpecsSection />
        <GoalsSection />
        <DetailedIntroSection />
      </main>
    </div>
  );
}

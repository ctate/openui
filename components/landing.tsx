import React from "react";
import { SpecExamples } from "./spec-examples";
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
        <CallToAction />
      </div>
    </div>
  );
}

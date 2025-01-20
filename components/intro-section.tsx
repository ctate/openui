import React from "react";
import { SpecTitle } from "./spec-title";

export function IntroSection() {
  return (
    <section className="mb-12">
      <SpecTitle title="What is OpenUI?" showBadge={false} />
      <p className="max-w-2xl">
        OpenUI is a specification for standardizing UI components across
        different libraries and frameworks. It promotes interoperability and
        consistent user experiences by defining common properties and behaviors
        for UI elements.
      </p>
    </section>
  );
}

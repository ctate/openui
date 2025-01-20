import React from "react";

export function GoalsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Goals of OpenUI</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="font-bold mr-2 text-primary">1.</span>
          <span className="text-muted-foreground">
            Standardize UI component libraries
          </span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2 text-primary">2.</span>
          <span className="text-muted-foreground">
            Interoperability across frameworks
          </span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2 text-primary">3.</span>
          <span className="text-muted-foreground">
            Built-in accessibility and validation
          </span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2 text-primary">4.</span>
          <span className="text-muted-foreground">
            Support web and native platforms
          </span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2 text-primary">5.</span>
          <span className="text-muted-foreground">
            Doc + test + code generation
          </span>
        </li>
      </ul>
    </section>
  );
}

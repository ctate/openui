import React from "react";

export function GoalsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Goals of OpenUI</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <span className="font-bold mr-2">1.</span>
          <span>Standardize UI component libraries</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">2.</span>
          <span>Interoperability across frameworks</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">3.</span>
          <span>Built-in accessibility and validation</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">4.</span>
          <span>Support web and native platforms</span>
        </li>
        <li className="flex items-start">
          <span className="font-bold mr-2">5.</span>
          <span>Doc + test + code generation</span>
        </li>
      </ul>
    </section>
  );
}

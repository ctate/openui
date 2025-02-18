import { parse } from "yaml";

import type { Spec } from "@/interfaces/Spec";

import specString from "../../../specs/react-spectrum/openui.yaml";
import { Preview } from "@/components/preview";
import { SpecTitle } from "@/components/spec-title";

const spec = parse(specString) as Spec;

export default function SpecsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="React Spectrum" showBadge={true} />
        <Preview spec={spec} specString={specString} />
      </main>
    </div>
  );
}

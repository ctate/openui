import { parse } from "yaml";
import type { Metadata } from "next";

import type { Spec } from "@/interfaces/Spec";

import specString from "../../../specs/material-ui/openui.yaml";
import { Preview } from "@/components/preview";
import { SpecTitle } from "@/components/spec-title";

const spec = parse(specString) as Spec;

export const metadata: Metadata = {
  title: "Material UI Specification",
  description: "OpenUI specification for Material UI components",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Material UI Specification&description=OpenUI for Material UI components",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function MaterialUISpecPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="Material UI" showBadge={true} />
        <Preview spec={spec} specString={specString} />
      </main>
    </div>
  );
}

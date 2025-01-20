import { parse } from "yaml";
import type { Metadata } from "next";

import type { Spec } from "@/interfaces/Spec";

import specString from "../../../specs/chakra-ui/openui.yaml";
import { Preview } from "@/components/preview";
import { SpecTitle } from "@/components/spec-title";

const spec = parse(specString) as Spec;

export const metadata: Metadata = {
  title: "Chakra UI Specification",
  description: "OpenUI specification for Chakra UI components",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Chakra UI Specification&description=OpenUI for Chakra UI components",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ChakraUISpecPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="Chakra UI" showBadge={true} />
        <Preview spec={spec} specString={specString} />
      </main>
    </div>
  );
}

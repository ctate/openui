import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, Check } from "lucide-react";

import shadcnSpec from "../specs/shadcn/openui-sample.yaml";
import muiSpec from "../specs/material-ui/openui-sample.yaml";
import chakraSpec from "../specs/chakra-ui/openui-sample.yaml";
import spectrumSpec from "../specs/react-spectrum/openui.yaml";

const librarySpecs = {
  "shadcn/ui": {
    spec: shadcnSpec,
    url: "/examples/shadcn-ui",
  },
  "Material UI": {
    spec: muiSpec,
    url: "/examples/material-ui",
  },
  "Chakra UI": {
    spec: chakraSpec,
    url: "/examples/chakra-ui",
  },
  Spectrum: {
    spec: spectrumSpec,
    url: "/examples/react-spectrum",
  },
};

export function SampleSpecsSection() {
  const [activeLibrary, setActiveLibrary] = useState("shadcn/ui");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = async (text: string, library: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [library]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [library]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Sample OpenUI Specs</h2>
      <p className="mb-4">
        Toggle between different UI libraries to see how OpenUI standardizes
        their component specifications:
      </p>
      <Tabs value={activeLibrary} onValueChange={setActiveLibrary}>
        <TabsList className="mb-4">
          {Object.keys(librarySpecs).map((library) => (
            <TabsTrigger
              key={library}
              value={library}
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              {library}
            </TabsTrigger>
          ))}
        </TabsList>
        <Link className="ml-4" href="/examples">
          View All
        </Link>
        {Object.entries(librarySpecs).map(([libraryName, library]) => (
          <TabsContent key={libraryName} value={libraryName}>
            <div className="bg-white rounded-lg overflow-hidden relative">
              <SyntaxHighlighter
                language="yaml"
                style={atomDark}
                customStyle={{
                  fontSize: 12,
                  margin: 0,
                  padding: "1rem",
                  backgroundColor: "black",
                }}
                wrapLongLines={false}
              >
                {library.spec}
              </SyntaxHighlighter>
              <button
                onClick={() => copyToClipboard(library.spec, libraryName)}
                className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copiedStates[libraryName] ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Clipboard className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            <Link className="ml-4" href={library.url}>
              Show Full Spec
            </Link>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

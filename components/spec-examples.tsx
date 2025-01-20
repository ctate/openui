"use client";

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
    spec: `name: shadcn/ui
version: 0.1.0
description: A collection of re-usable components built using Radix UI and Tailwind CSS.

components:
  Button:
    description: Displays a button or a component that looks like a button.
    props:
      variant:
        type: string
        description: The variant of the button.
        enum:
          - default
          - destructive
          - outline
          - secondary
          - ghost
          - link
      size:
        type: string
        description: The size of the button.
        enum:
          - default
          - sm
          - lg
          - icon
      asChild:
        type: boolean
        description: Whether to render as a child component.
        default: false`,
    url: "/examples/shadcn-ui",
  },
  "Material UI": {
    spec: `name: Material UI
version: 5.0.0
description: React components that implement Google's Material Design.

components:
  Button:
    description: Buttons allow users to take actions, and make choices, with a single tap.
    props:
      variant:
        type: string
        description: The variant to use.
        enum:
          - text
          - outlined
          - contained
      color:
        type: string
        description: The color of the component.
        enum:
          - primary
          - secondary
          - success
          - error
          - info
          - warning
      size:
        type: string
        description: The size of the component.
        enum:
          - small
          - medium
          - large`,
    url: "/examples/material-ui",
  },
  "Chakra UI": {
    spec: `name: Chakra UI
version: 2.0.0
description: A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

components:
  Button:
    description: Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
    props:
      variant:
        type: string
        description: The visual variant of the button.
        enum:
          - solid
          - outline
          - ghost
          - link
      colorScheme:
        type: string
        description: The color scheme of the button.
        enum:
          - blue
          - red
          - green
          - yellow
      size:
        type: string
        description: The size of the button.
        enum:
          - xs
          - sm
          - md
          - lg`,
    url: "/examples/chakra-ui",
  },
  Spectrum: {
    spec: spectrumSpec,
    url: "/examples/react-spectrum",
  },
};

export function SpecExamples() {
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
      <h2 className="text-2xl font-semibold mb-4">OpenUI Examples</h2>
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
                type="button"
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

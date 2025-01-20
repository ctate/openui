"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { SharedSyntaxHighlighter } from "./shared-syntax-highlighter";

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

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">OpenUI Examples</h2>
      <p className="mb-4 text-muted-foreground">
        Toggle between different UI libraries to see how OpenUI standardizes
        their component specifications:
      </p>
      <Tabs value={activeLibrary} onValueChange={setActiveLibrary}>
        <TabsList className="mb-4">
          {Object.keys(librarySpecs).map((library) => (
            <TabsTrigger
              key={library}
              value={library}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {library}
            </TabsTrigger>
          ))}
        </TabsList>
        <Link className="ml-4 text-blue-400 hover:underline" href="/examples">
          View All
        </Link>
        {Object.entries(librarySpecs).map(([libraryName, library]) => (
          <TabsContent key={libraryName} value={libraryName}>
            <div className="bg-gray-900 rounded-lg overflow-hidden relative shadow-lg border border-gray-700">
              <SharedSyntaxHighlighter code={library.spec} />
            </div>
            <Link
              className="mt-4 inline-block text-blue-400 hover:underline"
              href={library.url}
            >
              Show Full Spec
            </Link>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { Spec } from "@/interfaces/Spec";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SharedSyntaxHighlighter } from "./shared-syntax-highlighter";

function Content({ spec }: { spec: Spec }) {
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <>
      <h3 className="text-2xl">{spec.name}</h3>
      <p>{spec.description}</p>
      <div className="flex flex-col gap-4 mt-4">
        {Object.entries(spec.components).map(([componentName, component]) => (
          <div
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-900 shadow-lg"
            key={componentName}
          >
            <button
              className="block text-left w-full"
              onClick={() => {
                if (expanded.includes(componentName)) {
                  const newExpanded = expanded.slice();
                  newExpanded.splice(newExpanded.indexOf(componentName), 1);
                  setExpanded(newExpanded);
                } else {
                  setExpanded([...expanded, componentName]);
                }
              }}
              type="button"
            >
              <div className="text-lg font-semibold text-black dark:text-white">
                {componentName}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {component.description}
              </div>
            </button>
            {expanded.includes(componentName) && (
              <div className="border-t border-gray-300 dark:border-gray-700 flex flex-col gap-4 pt-4 mt-4 bg-gray-50 dark:bg-gray-800 -mx-4 -mb-4 px-4 pb-4 rounded-b-xl">
                {Object.entries(component.props).map(([propName, prop]) => (
                  <div className="text-sm" key={propName}>
                    <div className="flex mb-2 gap-4 items-center">
                      <div className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-blue-600 dark:text-blue-300">
                        {propName}
                      </div>
                      {prop.default && (
                        <div className="text-gray-600 dark:text-gray-400 text-xs">
                          Default: {prop.default}
                        </div>
                      )}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {prop.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export function Preview({
  spec,
  specString,
}: {
  spec: Spec;
  specString: string;
}) {
  const [tab, setTab] = useState<"preview" | "spec">("preview");

  return (
    <>
      <Tabs
        className="md:hidden"
        value={tab}
        onValueChange={(value) => setTab(value as "preview" | "spec")}
      >
        <TabsList className="mb-4">
          <TabsTrigger
            value="preview"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="spec"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Spec
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Content spec={spec} />
        </TabsContent>
        <TabsContent value="spec">
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
            <SharedSyntaxHighlighter code={specString} />
          </div>
        </TabsContent>
      </Tabs>
      <div className="gap-6 hidden md:flex">
        <div className="border border-gray-300 dark:border-gray-700 rounded-xl max-h-[calc(100vh-260px)] overflow-hidden w-1/2 shadow-lg">
          <SharedSyntaxHighlighter code={specString} />
        </div>
        <div className="max-h-[calc(100vh-260px)] overflow-auto w-1/2 pr-4">
          <Content spec={spec} />
        </div>
      </div>
    </>
  );
}

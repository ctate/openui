import { SpecTitle } from "@/components/spec-title";
import SchemaTable from "@/components/schema-table";

const schema = {
  $schema: { type: "string" },
  type: { type: "string" },
  properties: {
    type: "object",
    properties: {
      name: { type: "string" },
      version: { type: "string" },
      description: { type: "string" },
      components: {
        type: "object",
        patternProperties: {
          "^[A-Za-z][A-Za-z0-9]*$": {
            type: "object",
            properties: {
              description: { type: "string" },
              props: {
                type: "object",
                patternProperties: {
                  "^[A-Za-z][A-Za-z0-9]*$": {
                    type: "object",
                    properties: {
                      type: { type: "string" },
                      description: { type: "string" },
                      required: { type: "boolean" },
                      default: { type: "any" },
                      enum: { type: "array" },
                    },
                    required: ["type", "description"],
                  },
                },
              },
              events: {
                type: "object",
                patternProperties: {
                  "^on[A-Z][A-Za-z0-9]*$": {
                    type: "object",
                    properties: {
                      description: { type: "string" },
                    },
                    required: ["description"],
                  },
                },
              },
            },
            required: ["description", "props"],
          },
        },
      },
    },
    required: ["name", "version", "description", "components"],
  },
};

export default function SpecPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Specification" />
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              OpenUI is a specification for standardizing UI components across
              different libraries and frameworks. It aims to promote
              interoperability and consistent user experiences by defining
              common properties and behaviors for UI elements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Specification Structure
            </h2>
            <p className="mb-4">
              An OpenUI specification is typically written in YAML or JSON
              format. The structure consists of the following main sections:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Metadata: Information about the specification itself</li>
              <li>Components: Definitions of UI components</li>
              <li>Props: Properties for each component</li>
              <li>Events: User interactions that components can respond to</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Schema</h2>
            <p className="mb-4">
              The OpenUI specification follows this schema:
            </p>
            <SchemaTable schema={schema} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Example Specification
            </h2>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`name: Example UI Library
version: 1.0.0
description: A sample UI library specification

components:
  Button:
    description: A clickable button element
    props:
      variant:
        type: string
        description: The visual style of the button
        enum: [primary, secondary, outline]
      size:
        type: string
        description: The size of the button
        enum: [small, medium, large]
      disabled:
        type: boolean
        description: Whether the button is disabled
    events:
      onClick:
        description: Triggered when the button is clicked`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Using OpenUI</h2>
            <p className="mb-4">To use OpenUI in your project:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Define your UI components using the OpenUI specification format
              </li>
              <li>
                Use tools that can parse and interpret OpenUI specifications
              </li>
              <li>
                Generate documentation, type definitions, or even code based on
                your OpenUI spec
              </li>
              <li>
                Ensure consistency across different implementations of your UI
                library
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Benefits of OpenUI</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Standardization across different UI libraries and frameworks
              </li>
              <li>Improved developer experience through consistent APIs</li>
              <li>Easier migration between different UI libraries</li>
              <li>Better documentation and tooling support</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

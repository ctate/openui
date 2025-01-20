import { SpecTitle } from "@/components/spec-title";
import SchemaTable from "@/components/schema-table";
import { schema } from "@/lib/schema";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SpecPage() {
  return (
    <div className="min-h-screen">
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
            <SyntaxHighlighter
              language="yaml"
              style={atomDark}
              customStyle={{
                fontSize: 12,
                margin: 0,
                padding: "1rem",
                backgroundColor: "black",
                borderRadius: "0.5rem",
              }}
              wrapLongLines={false}
            >
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
            </SyntaxHighlighter>
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

import { SpecTitle } from "@/components/spec-title";
import SchemaTable from "@/components/schema-table";
import { schema } from "@/lib/schema";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SpecPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Specification" showBadge={true} />
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-6">Goals of OpenUI</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-primary">1.</span>
                <span>Standardize UI component libraries</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-primary">2.</span>
                <span>Interoperability across frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-primary">3.</span>
                <span>Built-in accessibility and validation</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-primary">4.</span>
                <span>Support web and native platforms</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-primary">5.</span>
                <span>Doc + test + code generation</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">
              Introduction to OpenUI
            </h2>
            <p className="mb-4 text-muted-foreground">
              OpenUI is a specification format for defining User Interface (UI)
              components in an abstract, implementation-agnostic manner.
              Inspired by specifications like OpenAPI, OpenUI describes UI
              components, their properties, and behaviors in a way that can be
              used across various UI libraries and frameworks.
            </p>
            <p className="mb-4 text-muted-foreground">
              With OpenUI, developers can define a UI library's components and
              props without enforcing a specific implementation, making it
              easier to standardize and document UIs for any project.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">
              Specification Structure
            </h2>
            <p className="mb-4 text-muted-foreground">
              An OpenUI specification is typically written in YAML or JSON
              format. The structure consists of the following main sections:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Metadata: Information about the specification itself</li>
              <li>Components: Definitions of UI components</li>
              <li>Props: Properties for each component</li>
              <li>Events: User interactions that components can respond to</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Schema</h2>
            <p className="mb-4 text-muted-foreground">
              The OpenUI specification follows this schema:
            </p>
            <SchemaTable schema={schema} />
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">
              Example Specification
            </h2>
            <SyntaxHighlighter
              language="yaml"
              style={atomDark}
              customStyle={{
                fontSize: 14,
                margin: 0,
                padding: "1.5rem",
                backgroundColor: "#1E1E1E",
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
        enum: [primary, secondary, outline]
        type: string
      size:
        enum: [small, medium, large]
        type: string
      disabled: boolean`}
            </SyntaxHighlighter>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Using OpenUI</h2>
            <p className="mb-4 text-muted-foreground">
              To use OpenUI in your project:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
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
            <h2 className="text-3xl font-semibold mb-6">Benefits of OpenUI</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
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

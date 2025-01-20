import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AIIntegrationSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">AI-Native Integration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>AI-Friendly Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              OpenUI's structured format makes it easy for AI models to parse
              and understand your UI components, enabling more accurate code
              generation and suggestions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enhanced AI Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By using OpenUI, you provide AI assistants with a clear blueprint
              of your UI library, resulting in more precise and context-aware
              development assistance.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Streamlined AI Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              OpenUI's standardized format allows AI models to quickly learn and
              adapt to different UI libraries, improving their ability to work
              across various projects.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI-Driven Design Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Leverage AI to analyze and optimize your design system using
              OpenUI specifications, ensuring consistency and best practices
              across your UI components.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

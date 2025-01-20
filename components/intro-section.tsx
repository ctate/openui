import React from "react";
import { SpecTitle } from "./spec-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function IntroSection() {
  return (
    <section className="space-y-8">
      <SpecTitle title="What is OpenUI?" showBadge={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Standardization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              OpenUI provides a common language for defining UI components,
              ensuring consistency across different libraries and frameworks.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interoperability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              With OpenUI, you can easily switch between UI libraries without
              changing your core application logic, promoting flexibility and
              reusability.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI-Native</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              OpenUI is designed to be AI-native, making it the best way for AI
              to understand and work with your UI library or design system.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enhanced AI Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By using OpenUI, you enable AI to better comprehend and interact
              with your UI components, leading to more accurate and efficient
              AI-assisted development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

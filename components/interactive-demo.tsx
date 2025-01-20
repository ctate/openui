"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function InteractiveDemo() {
  const [framework, setFramework] = useState("react");
  const [buttonText, setButtonText] = useState("Click me");
  const [buttonVariant, setButtonVariant] = useState("default");

  const frameworkCode = {
    react: `import { Button } from 'your-ui-library'

export function MyComponent() {
  return (
    <Button variant="${buttonVariant}">
      ${buttonText}
    </Button>
  )
}`,
    vue: `<template>
  <Button variant="${buttonVariant}">
    ${buttonText}
  </Button>
</template>

<script>
import { Button } from 'your-ui-library'

export default {
  components: { Button }
}
</script>`,
    svelte: `<script>
import { Button } from 'your-ui-library'
</script>

<Button variant="${buttonVariant}">
  ${buttonText}
</Button>`,
  };

  return (
    <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Interactive Demo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="framework">Framework</Label>
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="buttonText">Button Text</Label>
            <Input
              id="buttonText"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="buttonVariant">Button Variant</Label>
            <Select value={buttonVariant} onValueChange={setButtonVariant}>
              <SelectTrigger id="buttonVariant">
                <SelectValue placeholder="Select a variant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="outline">Outline</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label>Preview</Label>
          <div className="mt-2 p-4 bg-background rounded-md">
            <Button
              variant={buttonVariant as "default" | "outline" | "secondary"}
            >
              {buttonText}
            </Button>
          </div>
          <Label className="mt-4 block">Code</Label>
          <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded-md overflow-x-auto">
            <code>
              {frameworkCode[framework as keyof typeof frameworkCode]}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

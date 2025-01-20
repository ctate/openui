import React from "react";
import { Layers, Repeat, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Standardization",
    description:
      "Define UI components with a common language across different libraries.",
  },
  {
    icon: <Repeat className="h-8 w-8" />,
    title: "AI-Native",
    description:
      "The best way for AI to understand your library or design system, enabling seamless integration and generation.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Efficiency",
    description:
      "Streamline development with consistent APIs and behavior across components.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Universal",
    description:
      "Support for multiple popular UI libraries and frameworks out of the box.",
  },
];

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

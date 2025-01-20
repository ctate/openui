import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-foreground to-secondary py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px_16px]" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
          AI-Native Specification for UIs
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-black dark:text-white/80">
          Standardize UI components and Design Systems
        </p>
        <div className="flex justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-black hover:bg-white/10"
          >
            <Link
              className="text-black border-gray-400 dark:text-white"
              href="/examples"
            >
              Explore Examples
            </Link>
          </Button>
          <Button
            asChild
            className="bg-black text-white hover:bg-black/90 dark:text-black dark:bg-white dark:hover:bg-white/90"
          >
            <Link href="/spec">
              View Specification <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

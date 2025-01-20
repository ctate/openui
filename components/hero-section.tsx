import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary-foreground to-secondary py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px_16px]" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Welcome to OpenUI
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
          Standardize UI components across libraries and frameworks. Create
          consistent, interoperable user experiences with ease.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="bg-white text-primary hover:bg-white/90">
            <Link href="/spec">
              View Specification <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/examples">Explore Examples</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

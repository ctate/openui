import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-900 to-transparent opacity-70" />
      <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl font-bold mb-6 text-center">
          AI-Native Specification for UIs
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
          Standardize UI components and Design Systems
        </p>
        <div className="flex justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/examples">Explore Examples</Link>
          </Button>
          <Button asChild className="bg-white text-black hover:bg-white/90">
            <Link href="/spec">
              View Specification <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

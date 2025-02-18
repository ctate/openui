"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-[65dvh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-purple-500 to-green-500 opacity-80" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100 drop-shadow-lg">
          AI-Native Specification for UIs
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty text-center text-gray-600 dark:text-gray-400">
          Make it easier for AI to use your Design System + Component Library
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-white border-white text-black hover:bg-white/90 hover:text-black transition-colors duration-300 group backdrop-blur-sm"
          >
            <Link
              href="/examples"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              Explore Examples
            </Link>
          </Button>
          <Button
            asChild
            className="bg-black border-black text-white dark:border-white hover:bg-black/75 transition-colors duration-300 group"
          >
            <Link
              href="/spec"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              View Specification{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

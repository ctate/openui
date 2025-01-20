import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-foreground text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to OpenUI</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Standardize UI components across libraries and frameworks. Create
          consistent, interoperable user experiences with ease.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/spec">
              View Specification <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="/examples">Explore Examples</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

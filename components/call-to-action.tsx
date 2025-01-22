import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <div className="relative overflow-hidden py-16 px-4 rounded-lg text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-purple-500 to-green-500 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      <div className="relative z-10">
        <h2 className="text-3xl mb-4 text-black dark:text-white">
          Get Started with OpenUI
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-500">
          Learn how to define your UI components
        </p>
        <Button
          asChild
          className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
          size="lg"
        >
          <Link href="/spec">View Spec</Link>
        </Button>
      </div>
    </div>
  );
}

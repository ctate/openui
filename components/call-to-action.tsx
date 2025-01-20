import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <div className="bg-primary text-primary-foreground py-16 px-4 rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join the OpenUI community and start building more consistent,
        interoperable user interfaces today.
      </p>
      <Button
        asChild
        className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
        size="lg"
      >
        <Link href="/spec">View Spec</Link>
      </Button>
    </div>
  );
}

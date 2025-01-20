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
      <Button asChild size="lg">
        <Link href="https://github.com/specui/openui">View on GitHub</Link>
      </Button>
    </div>
  );
}

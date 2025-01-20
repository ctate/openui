import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center text-muted-foreground">
          Made with{" "}
          <Heart className="inline-block h-4 w-4 text-gray-500 mx-1" /> by{" "}
          <Link
            href="https://ctate.dev"
            className="underline hover:text-foreground ml-1 transition-colors"
            target="_blank"
          >
            Chris Tate
          </Link>
        </p>
      </div>
    </footer>
  );
}

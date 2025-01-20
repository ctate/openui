import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <Heart className="inline-block h-4 w-4 text-red-500 mx-1" />{" "}
          by{" "}
          <Link
            href="https://ctate.dev"
            className="underline hover:text-muted-foreground ml-1"
            target="_blank"
          >
            Chris Tate
          </Link>
        </p>
      </div>
    </footer>
  );
}

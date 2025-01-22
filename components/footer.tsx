import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-6 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center text-muted-foreground">
          Authored by{" "}
          <Link
            href="https://ctate.dev"
            className="font-bold hover:text-foreground ml-1 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris Tate
          </Link>
        </p>
      </div>
    </footer>
  );
}

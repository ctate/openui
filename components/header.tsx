"use client";

import { ExternalLink, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-background text-foreground py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container flex justify-between items-center mx-auto px-4">
        <h1 className="text-3xl font-bold">
          <Link className="flex gap-3 items-center" href="/">
            <Logo size={40} color="currentColor" />
            OpenUI
          </Link>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className={`transition-colors ${
                  isLinkActive("/")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/spec"
                className={`transition-colors ${
                  isLinkActive("/spec")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Spec
              </Link>
            </li>
            <li>
              <Link
                href="/examples"
                className={`transition-colors ${
                  isLinkActive("/examples")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 items-center text-muted-foreground hover:text-foreground transition-colors"
                href="https://github.com/specui/openui"
                target="_blank"
              >
                <span>GitHub</span>
                <ExternalLink size={16} />
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          type="button"
        >
          <Menu size={24} />
        </button>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

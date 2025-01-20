"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";
import { GitHubIcon } from "./github-icon";

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
    <header className="bg-background text-foreground py-4 border-b border-border">
      <div className="container flex justify-between items-center mx-auto px-4">
        <h1 className="text-2xl font-bold">
          <Link className="flex gap-3 items-center" href="/">
            <Logo size={32} color="currentColor" />
            OpenUI
          </Link>
        </h1>
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-6 items-center">
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
                href="https://github.com/specui/openui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                aria-label="OpenUI GitHub Repository"
              >
                <GitHubIcon className="mr-2" />
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

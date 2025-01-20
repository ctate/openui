"use client";

import { ExternalLink, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-6">
      <div className="container flex justify-between items-center mx-auto px-4">
        <h1 className="text-3xl font-bold">
          <Link className="flex items-center" href="/">
            <Image
              src="/logo.png"
              alt="OpenUI Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            OpenUI
          </Link>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/spec"
                className="hover:text-gray-300 transition-colors"
              >
                Spec
              </Link>
            </li>
            <li>
              <Link
                href="/examples"
                className="hover:text-gray-300 transition-colors"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 items-center hover:text-gray-300 transition-colors"
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
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
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

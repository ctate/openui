"use client";

import { useState } from "react";
import Link from "next/link";
import { SpecTitle } from "@/components/spec-title";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const specs = [
  {
    title: "Ant Design",
    url: "/examples/ant-design",
    description: "A design system for enterprise-level products",
  },
  {
    title: "Chakra UI",
    url: "/examples/chakra-ui",
    description: "Simple, modular and accessible component library",
  },
  {
    title: "Material UI",
    url: "/examples/material-ui",
    description: "React components that implement Google's Material Design",
  },
  {
    title: "React Spectrum",
    url: "/examples/react-spectrum",
    description: "Adobe's collection of libraries and tools",
  },
  {
    title: "shadcn/ui",
    url: "/examples/shadcn-ui",
    description: "Re-usable components built with Radix UI and Tailwind CSS",
  },
];

export default function ExamplesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSpecs = specs.filter((spec) =>
    spec.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Examples" showBadge={false} />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Explore UI Library Specifications
          </h2>
          <p className="text-gray-300 mb-6">
            Discover how different UI libraries implement the OpenUI
            specification. Each example showcases the standardized component
            definitions and properties.
          </p>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search examples..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </section>

        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSpecs.map((spec) => (
            <li
              key={spec.title}
              className="border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50"
            >
              <Link href={spec.url} className="block p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                <p className="text-gray-400 flex-grow">{spec.description}</p>
                <span className="text-blue-400 mt-4 inline-block">
                  View Specification &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {filteredSpecs.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            No examples found matching your search.
          </p>
        )}
      </main>
    </div>
  );
}

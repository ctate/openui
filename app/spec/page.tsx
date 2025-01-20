import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import { SpecTitle } from "@/components/spec-title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenUI Specification",
  description:
    "The official OpenUI specification for standardizing UI components.",
  openGraph: {
    images: [
      {
        url: "/api/og?title=OpenUI Specification&description=Standardizing UI components across frameworks",
        width: 1200,
        height: 630,
      },
    ],
  },
};

function enhanceTableStyles(htmlContent: string): string {
  const enhancedHtml = htmlContent
    .replace(
      /<table>/g,
      '<table class="w-full border-collapse mb-8 block md:table overflow-x-auto">',
    )
    .replace(
      /<thead>/g,
      '<thead class="bg-gray-100 dark:bg-gray-800 block md:table-header-group">',
    )
    .replace(/<tbody>/g, '<tbody class="block md:table-row-group">')
    .replace(
      /<tr>/g,
      '<tr class="border-b dark:border-gray-700 block md:table-row">',
    )
    .replace(
      /<th>/g,
      '<th class="p-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 block md:table-cell">',
    )
    .replace(
      /<td>/g,
      '<td class="p-3 text-sm text-gray-600 dark:text-gray-400 block md:table-cell">',
    );

  return enhancedHtml;
}

export default async function SpecPage() {
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), "versions", "draft-01.md"),
    "utf-8",
  );

  // Remove everything before "## 1. Introduction"
  const contentStartingFromIntroduction = markdownContent.substring(
    markdownContent.indexOf("## 1. Introduction"),
  );

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(contentStartingFromIntroduction);

  const htmlContent = processedContent.toString();
  const enhancedHtmlContent = enhanceTableStyles(htmlContent);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Specification" showBadge={true} />
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: enhancedHtmlContent }}
        />
      </main>
    </div>
  );
}

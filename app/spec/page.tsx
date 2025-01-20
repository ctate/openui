import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SpecTitle } from "@/components/spec-title";

export default function SpecPage() {
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), "versions", "draft-01.md"),
    "utf-8",
  );

  // Remove the title and table of contents from the markdown content
  const contentWithoutTitleAndTOC = markdownContent
    .split("\n")
    .slice(3)
    .join("\n")
    .replace(/^## Table of Contents[\s\S]*?(?=##)/m, "");

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Specification" showBadge={true} />
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => <p className="my-4" {...props} />,
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 my-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 my-4" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-4">
                  <table
                    className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                    {...props}
                  />
                </div>
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                  {...props}
                />
              ),
              pre: ({ node, ...props }) => (
                <pre
                  className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 my-4 overflow-x-auto"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5"
                    {...props}
                  />
                ) : (
                  <code className="block" {...props} />
                ),
            }}
          >
            {contentWithoutTitleAndTOC}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

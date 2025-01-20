import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { SpecTitle } from "@/components/spec-title";

export default function SpecPage() {
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), "versions", "draft-01.md"),
    "utf-8",
  );

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Specification" showBadge={true} />
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

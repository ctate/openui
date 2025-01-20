import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import { SpecTitle } from "@/components/spec-title";

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

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <SpecTitle title="OpenUI Specification" showBadge={true} />
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </div>
  );
}

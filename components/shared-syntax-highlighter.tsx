"use client";

import React, { useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, Check } from "lucide-react";

interface SharedSyntaxHighlighterProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
}

export function SharedSyntaxHighlighter({
  code,
  language = "yaml",
  showLineNumbers = false,
  wrapLongLines = false,
}: SharedSyntaxHighlighterProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          wrapLongLines={wrapLongLines}
          customStyle={{
            fontSize: 14,
            margin: 0,
            padding: "1.5rem",
            backgroundColor: "#1E1E1E",
            borderRadius: "0.5rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Copy to clipboard"
        type="button"
      >
        {copied ? (
          <Check className="h-5 w-5 text-green-500" />
        ) : (
          <Clipboard className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
}

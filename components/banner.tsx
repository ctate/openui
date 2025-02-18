import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-gray-200 text-gray-900 py-2 px-4 text-center">
      <p className="text-sm flex items-center justify-center">
        <span className="bg-gray-800 text-gray-100 px-2 py-1 rounded-md mr-2 text-xs font-semibold">
          draft-01
        </span>
        This is a rough draft of OpenUI and is still in active development.
        <Link
          href="https://github.com/specui/openui"
          className="underline ml-2 inline-flex items-center"
          target="_blank"
        >
          Submit a proposal
          <ExternalLink className="h-4 w-4 ml-1" />
        </Link>
      </p>
    </div>
  );
}

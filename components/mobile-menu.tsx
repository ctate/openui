import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "./github-icon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-gray-900 h-full w-64 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-100">Menu</h2>
          <button
            onClick={onClose}
            aria-label="Close mobile menu"
            className="text-gray-100"
            type="button"
          >
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className="text-gray-100 hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/spec"
                onClick={onClose}
                className="text-gray-100 hover:text-gray-300 transition-colors"
              >
                Spec
              </Link>
            </li>
            <li>
              <Link
                href="/examples"
                onClick={onClose}
                className="text-gray-100 hover:text-gray-300 transition-colors"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 items-center text-gray-100 hover:text-gray-300 transition-colors"
                href="https://github.com/specui/openui"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <GitHubIcon />
                <span>GitHub</span>
                <ExternalLink size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

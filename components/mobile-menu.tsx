import { ExternalLink, X } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white h-full w-64 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} aria-label="Close mobile menu">
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/spec" onClick={onClose}>
                Spec
              </Link>
            </li>
            <li>
              <Link href="/examples" onClick={onClose}>
                Examples
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 items-center"
                href="https://github.com/specui/openui"
                target="_blank"
                onClick={onClose}
              >
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

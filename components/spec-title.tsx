"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface SpecTitleProps {
  title: string;
  showBadge?: boolean;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
}

export function SpecTitle({ title, showBadge = true }: SpecTitleProps) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`flex ${isMobile ? "flex-col" : "items-center"} gap-4 mb-8`}
    >
      <h1 className="text-4xl">{title}</h1>
      {showBadge && (
        <Badge variant="secondary" className={isMobile ? "self-start" : ""}>
          draft-01
        </Badge>
      )}
    </div>
  );
}

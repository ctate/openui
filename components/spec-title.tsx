import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface SpecTitleProps {
  title: string;
  showBadge?: boolean;
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

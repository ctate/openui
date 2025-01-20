import { Badge } from "@/components/ui/badge";

interface SpecTitleProps {
  title: string;
  showBadge?: boolean;
}

export function SpecTitle({ title, showBadge = true }: SpecTitleProps) {
  return (
    <h1 className="flex items-center gap-4 mb-8 text-4xl">
      <span>{title}</span>
      {showBadge && <Badge variant="secondary">draft-01</Badge>}
    </h1>
  );
}

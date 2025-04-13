"use client";

import { cn } from "@/lib/utils";

interface DotSeperatorProps {
  className?: string;
}

export const DotSeperator = ({ className }: DotSeperatorProps) => {
  return (
    <span
      className={cn(
        "mt-1 block h-1 w-full border-t-[1.5px] border-dashed",
        className,
      )}
    />
  );
};

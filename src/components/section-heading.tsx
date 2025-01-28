"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { WhileInView } from "./while-in-view";

interface SectionHeadingProps {
  className?: string;
  children?: string;
  icon?: LucideIcon;
}

export const SectionHeading = ({
  className,
  children,
  icon: Icon,
}: SectionHeadingProps) => {
  return (
    <WhileInView
      y={50}
      className={cn(
        "flex items-center justify-center gap-3 font-rowdies text-4xl",
        className,
      )}
    >
      <h1>{children}</h1>
      {Icon && <Icon className="size-8" />}
    </WhileInView>
  );
};

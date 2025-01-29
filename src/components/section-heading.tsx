"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { SplitAnimatedText } from "./split-animated-text";
import { WhileInView } from "./while-in-view";

interface SectionHeadingProps {
  className?: string;
  children: string;
  icon?: LucideIcon;
}

export const SectionHeading = ({
  className,
  children,
  icon: Icon,
}: SectionHeadingProps) => {
  const CHAR_DELAY = 0.075;
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 font-rowdies text-4xl",
        className,
      )}
    >
      <SplitAnimatedText charDelay={CHAR_DELAY}>{children}</SplitAnimatedText>
      {Icon && (
        <WhileInView elem="span" className="mb-2" scale={0} delay={children.length * CHAR_DELAY}>
          <Icon className="size-8" />
        </WhileInView>
      )}
    </div>
  );
};

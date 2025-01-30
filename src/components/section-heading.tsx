"use client";

import { cn } from "@/lib/utils";
import { ColorType } from "@/types";
import { LucideIcon } from "lucide-react";
import { Heading } from "./heading";
import { RevealAnimation } from "./reveal-animation";

interface SectionHeadingProps {
  className?: string;
  children: string;
  icon?: LucideIcon;
  color?: ColorType;
}

export const SectionHeading = ({
  className,
  children,
  icon: Icon,
  color,
}: SectionHeadingProps) => {
  return (
    <Heading className={cn(className)}>
      <RevealAnimation threshold={1} color={color} className="flex gap-2 items-center mx-auto">
        {children}
        {Icon && (
          <Icon
            className={cn(
              "size-8",
              color === "primary" && "text-blue-600",
              color === "background" && "text-background",
              color === "foreground" && "text-foreground",
            )}
          />
        )}
      </RevealAnimation>
    </Heading>
  );
};

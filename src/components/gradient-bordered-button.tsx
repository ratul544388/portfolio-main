"use client";

import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface GradientBorderedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  download?: boolean;
  target?: "_blank";
  rounded?: boolean;
}

export const GradientBorderedButton = ({
  href = "",
  children,
  download,
  target,
  size,
  className,
  rounded,
}: GradientBorderedButtonProps) => {
  const Elem = href ? Link : "button";
  return (
    <Elem
      className={cn(
        buttonVariants({
          variant: "outline",
          size,
          className: cn(
            "group relative bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 hover:from-blue-600 hover:to-purple-500",
          ),
        }),
        rounded && "rounded-full",
        className,
      )}
      href={href}
      download={download}
      target={target}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        className={cn(
          "absolute block size-[calc(100%_-_3px)] rounded-[3.5px] bg-background transition-colors group-hover:bg-secondary/90",
          rounded && "rounded-full",
        )}
      />
    </Elem>
  );
};

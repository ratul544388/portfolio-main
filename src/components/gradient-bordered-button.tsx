"use client";

import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

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
}: GradientBorderedButtonProps) => {
  const Elem = href ? Link : "button";
  return (
    <Elem
      className={cn(
        buttonVariants({
          variant: "outline",
          size,
        }),
        "group relative overflow-hidden rounded-md border-none bg-transparent p-[2px]",
        className,
      )}
      href={href}
      download={download}
      target={target}
    >
      <span className="absolute inset-0 [background-image:conic-gradient(#8b5cf6,#7c3aed,#3b82f6,#8b5cf6)]" />
      <span className="relative z-10 flex h-full items-center gap-2 rounded-[4px] bg-background px-5 group-hover:bg-background/70">
        {children}
      </span>
    </Elem>
  );
};

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { ButtonProps, buttonVariants } from "./ui/button";

interface PrimaryButtonProps extends ButtonProps {
  href: string;
  target?: "_blank";
  children: ReactNode;
  className?: string;
}

export const PrimaryButton = ({
  href,
  children,
  className,
  target,
  size,
}: PrimaryButtonProps) => {
  return (
    <Link
      target={target}
      href={href}
      className={cn(
        buttonVariants({ size }),
        "[box-shadow:hsl(var(--primary)/0.5)_4px_4px]",
        className,
      )}
    >
      {children}
    </Link>
  );
};

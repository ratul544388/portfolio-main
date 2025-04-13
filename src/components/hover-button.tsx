"use client";

import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

interface HoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const HoverButton = ({
  children,
  className,
  variant,
  size,
  cut,
  href,
}: HoverButtonProps) => {
  const variants: Variants = {
    initial: {
      borderTopRightRadius: 9999,
      x: "-100%",
    },
    hovered: {
      borderTopRightRadius: 0,
      x: 0,
    },
  };

  const Elem = motion.create(href ? Link : "button");

  return (
    <Elem
      href={href}
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative overflow-hidden transition-colors duration-200 dark:hover:text-black",
        buttonVariants({ variant, size, cut, className }),
        variant === "secondary" && "dark:hover:text-white",
      )}
    >
      <span className="z-10 flex items-center gap-2">{children}</span>
      <motion.span
        variants={variants}
        transition={{
          ease: "easeInOut",
        }}
        className={cn(
          "absolute inset-0 bg-foreground",
          variant === "secondary" && "bg-primary",
        )}
      />
    </Elem>
  );
};

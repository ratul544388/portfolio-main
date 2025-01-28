"use client";

import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { motion, Variants } from "framer-motion";
import React from "react";
import { buttonVariants } from "./ui/button";

interface HoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const HoverButton = ({
  children,
  className,
  variant,
  size,
  cut,
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

  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative overflow-hidden",
        buttonVariants({ variant, size, cut, className }),
      )}
    >
      <span className="z-10">{children}</span>
      <motion.span
        variants={variants}
        transition={{
          ease: "easeInOut",
        }}
        className={cn(
          "absolute inset-0 bg-foreground",
          variant === "black" && "bg-primary",
        )}
      />
    </motion.button>
  );
};

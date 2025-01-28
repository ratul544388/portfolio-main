"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const leftVariants: Variants = {
  initial: {
    width: "100%",
  },
  animate: {
    width: 0,
  },
};

const topVariants: Variants = {
  initial: {
    height: "100%",
  },
  animate: {
    height: 0,
  },
};

interface RevealAnimatedTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  color?: "foreground" | "primary" | "background";
  className?: string;
  delay?: number;
  animateFrom?: "left" | "top";
  type?: "heading" | "subheading" | "paragraph";
}
export const RevealedAnimatedText = ({
  children,
  color,
  className,
  delay = 0,
  animateFrom = "left",
  type = "heading",
}: RevealAnimatedTextProps) => {
  return (
    <motion.span
      className={cn(
        "relative w-fit text-foreground inline-block",
        color === "primary" && "text-primary",
        color === "foreground" && "text-foreground",
        color === "background" && "text-background",
        type === "heading"
          ? "flex gap-2 items-center font-rowdies text-4xl leading-[56px]"
          : "font-chakra_petch",
        className,
      )}
    >
      {children}
      <motion.span
        variants={animateFrom === "left" ? leftVariants : topVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          amount: 0.3,
          once: true,
        }}
        transition={{
          delay,
        }}
        className={cn(
          "absolute block bg-foreground",
          color === "primary" && "bg-primary",
          color === "foreground" && "bg-foreground",
          color === "background" && "bg-background",
          animateFrom === "left" ? "inset-y-0 right-0" : "inset-x-0 bottom-0",
        )}
      />
    </motion.span>
  );
};

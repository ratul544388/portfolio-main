"use client";

import { cn } from "@/lib/utils";
import { ColorType } from "@/types";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

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

export type RevealAnimationFrom = "top" | "left";

interface RevealAnimatedTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: ColorType;
  delay?: number;
  animateFrom?: RevealAnimationFrom;
  threshold?: number;
  elem?: "span" | "h1" | "p" | "div"
  invertColor?: boolean;
}
export const RevealAnimation = ({
  children,
  color,
  className,
  delay = 0,
  animateFrom = "left",
  threshold = 0.3,
  elem = "span",
}: RevealAnimatedTextProps) => {
  const MotionElement = useMemo(() => motion.create(elem), [elem]);
  return (
    <MotionElement
      className={cn(
        "relative inline-block size-fit text-foreground",
        color === "primary" && "bg-gradient bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
      <motion.span
        variants={animateFrom === "left" ? leftVariants : topVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          amount: threshold,
          once: true,
        }}
        transition={{
          delay,
        }}
        className={cn(
          "absolute block bg-foreground",
          color === "primary" && "bg-primary dark:bg-primary",
          animateFrom === "left" ? "inset-y-0 right-0" : "inset-x-0 bottom-0",
        )}
      />
    </MotionElement>
  );
};

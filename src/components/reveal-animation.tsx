"use client";

import { cn } from "@/lib/utils";
import { ColorType } from "@/types";
import { motion, Variants } from "framer-motion";

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
  color?: ColorType;
  delay?: number;
  animateFrom?: "left" | "top";
  threshold?: number;
  elem?: "span" | "h1" | "p";
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
  const MotionElement = motion.create(elem)
  return (
    <MotionElement
      className={cn(
        "relative w-fit inline-block",
        color === "primary" && "bg-gradient bg-clip-text text-transparent",
        color === "white" && "text-white",
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
          "absolute block bg-black dark:bg-white",
          color === "primary" && "bg-primary dark:bg-primary",
          color === "white" && "bg-white",
          animateFrom === "left" ? "inset-y-0 right-0" : "inset-x-0 bottom-0",
        )}
      />
    </MotionElement>
  );
};

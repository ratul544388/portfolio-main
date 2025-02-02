import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WhileInViewProps {
  x?: number | string;
  y?: number | string;
  scale?: number;
  opacity?: number;
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
  once?: boolean;
  elem?: "div" | "ul" | "li" | "span"
}

export const WhileInView = ({
  x = 0,
  y = 0,
  scale = 1,
  opacity = 0,
  duration = 0.3,
  delay = 0,
  children,
  className,
  once = true,
  elem: Elem = "div",
}: WhileInViewProps) => {
  const MotionElement = motion.create(Elem);
  return (
    <MotionElement
      whileInView={{
        x: [x, 0],
        y: [y, 0],
        scale: [scale, 1],
        opacity: [opacity, 1],
      }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay }}
      className={cn("opacity-0", className)}
    >
      {children}
    </MotionElement>
  );
};

import { cn } from "@/lib/utils";
import { Element } from "@/types";
import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";

interface WhileInViewProps {
  x?: number | string;
  y?: number | string;
  scale?: number;
  opacity?: number;
  delay?: number;
  duration?: number;
  children?: ReactNode;
  className?: string;
  once?: boolean;
  elem?: Element;
  onClick?: () => void;
  amount?: number;
}

export const WhileInView = ({
  x = 0,
  y = 0,
  scale = 1,
  opacity = 0,
  duration = 1,
  delay = 0,
  children,
  className,
  once = true,
  elem = "div",
  onClick,
  amount = 0,
}: WhileInViewProps) => {
  const MotionElement = useMemo(() => motion.create(elem), [elem]);
  return (
    <MotionElement
      whileInView={{
        x: [x, 0],
        y: [y, 0],
        scale: [scale, 1],
        opacity: [opacity, 1],
      }}
      viewport={{ once, amount }}
      transition={{ duration, delay }}
      className={cn("opacity-0", className)}
      onClick={onClick}
    >
      {children}
    </MotionElement>
  );
};

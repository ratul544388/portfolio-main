"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: ReactNode[];
  className?: string;
  gap?: number;
  duration?: number;
  direction?: "left" | "right";
}

export const Marquee = ({
  children,
  duration = 10,
  className,
  gap = 16,
  direction = "left",
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setTotalWidth(containerRef.current.scrollWidth / 2);
    }
  }, [children]);

  const initialX = direction === "left" ? 0 : "-100%";
  const animateX = direction === "left" ? -totalWidth - gap / 2 : gap;

  const variants: Variants = {
    initial: {
      x: initialX,
    },
    animate: {
      x: animateX,
    },
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "mx-auto select-none flex w-full overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))] md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]",
        className,
      )}
      style={{ gap }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.ul
          aria-hidden={i === 1}
          key={i}
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
          style={{ gap }}
        >
          {children}
        </motion.ul>
      ))}
    </div>
  );
};

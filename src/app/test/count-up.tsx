"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    y: 0,
  },
  animate: (numberCount: number) => {
    return {
      y: `-${numberCount * 100}%`,
    };
  },
};

interface CountUpProps {
  value: number | string;
  speed?: number;
  className?: string;
  whileInView?: boolean;
  whileInViewOnce?: boolean;
  fontSize?: "xl" | "2xl" | "3xl" | "4xl";
  delay?: number;
}

export const CountUp = ({
  value,
  className,
  whileInView = true,
  whileInViewOnce = true,
  speed = 4,
  fontSize = "4xl",
  delay = 0,
}: CountUpProps) => {
  const animate = whileInView
    ? { whileInView: "animate" }
    : { animate: "animate" };
  return (
    <motion.div
      role="text"
      initial="initial"
      {...animate}
      viewport={{ once: whileInViewOnce }}
      className={cn(
        "relative flex h-[30px] overflow-hidden text-3xl font-bold leading-[30px]",
        fontSize === "xl" && "h-[20px] text-xl leading-[20px]",
        fontSize === "2xl" && "h-[24px] text-2xl leading-[24px]",
        fontSize === "4xl" && "h-[36px] text-4xl leading-[36px]",
        className,
      )}
    >
      <span className="sr-only">{value}</span>
      {value
        .toString()
        .split("")
        .map((c, i) => (
          <Item key={i} value={c} speed={speed} delay={delay} />
        ))}
    </motion.div>
  );
};

const Item = ({
  value,
  speed,
  delay,
}: {
  value: string;
  speed: number;
  delay: number;
}) => {
  const isDigit = /^\d$/.test(value);
  const numberCount = isDigit ? Number(value) : 0;
  return (
    <motion.span
      aria-hidden="true"
      variants={variants}
      custom={numberCount}
      transition={{ delay, duration: numberCount / speed, ease: "easeInOut" }}
      className="flex flex-col"
    >
      {Array.from({ length: numberCount + 1 }).map((_, i) => (
        <span key={i}>{isDigit ? i : value}</span>
      ))}
    </motion.span>
  );
};

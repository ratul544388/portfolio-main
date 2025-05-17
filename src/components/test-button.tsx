"use client";

import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import { Button, ButtonProps } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TestButtonProps extends ButtonProps {
  href?: string;
  target?: "_self" | "_blank";
  innerClassName?: string;
}

export const TestButton = ({
  variant,
  size,
  href,
  target = "_self",
  children,
  className,
  innerClassName,
}: TestButtonProps) => {
  const [scope, animate] = useAnimate();
  const ANIMATION_DURATION = 0.4;

  const isAnimating = useRef<"enter" | "leave" | null>(null);
  const pendingEnter = useRef(false);
  const pendingLeave = useRef(false);

  const runEnter = async () => {
    isAnimating.current = "enter";
    await animate([["#span", { x: 0 }, { duration: ANIMATION_DURATION }]]);
    isAnimating.current = null;

    if (pendingLeave.current) {
      pendingLeave.current = false;
      await runLeave();
    }
  };

  const runLeave = async () => {
    isAnimating.current = "leave";
    await animate([
      ["#span", { x: "100%" }, { duration: ANIMATION_DURATION }],
      ["#span", { x: "-100%" }, { duration: 0.0001 }],
    ]);
    isAnimating.current = null;

    if (pendingEnter.current) {
      pendingEnter.current = false;
      await runEnter();
    }
  };

  const handleMouseEnter = () => {
    if (isAnimating.current === "leave") {
      pendingEnter.current = true;
    } else if (!isAnimating.current) {
      runEnter();
    }
  };

  const handleMouseLeave = () => {
    if (isAnimating.current === "enter") {
      pendingLeave.current = true;
    } else if (!isAnimating.current) {
      runLeave();
    }
  };

  const ButtonElem = href ? Link : Button;

  return (
    <ButtonElem
      href={href || "/"}
      target={target}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scope}
      className={cn("group relative overflow-hidden", className)}
      variant={variant}
      size={size}
    >
      <span
        className={cn(
          "relative z-10 flex items-center gap-2 mix-blend-difference",
          innerClassName,
        )}
      >
        {children}
      </span>
      <motion.span
        id="span"
        style={{ x: "-100%" }}
        className="absolute size-full w-[calc(100%_+_20px)] rounded-full bg-white"
      />
    </ButtonElem>
  );
};

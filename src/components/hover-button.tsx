"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ButtonProps, buttonVariants } from "./ui/button";

interface HoverButtonProps extends ButtonProps {
  href?: string;
  target?: "_self" | "_blank";
  innerClassName?: string;
}

export const HoverButton = ({
  variant = "default",
  size,
  href,
  target = "_self",
  children,
  className,
  innerClassName,
}: HoverButtonProps) => {
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

  const ButtonElem = href ? Link : "button";

  console.log(variant)

  return (
    <ButtonElem
      href={href || "/"}
      target={target}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scope}
      className={cn(
        buttonVariants({ variant, size }),
        "group relative overflow-hidden [box-shadow:hsl(var(--primary)/0.5)_4px_4px]",
        variant === "secondary" && "border-none",
        className,
      )}
    >
      <span
        className={cn(
          "duration-400 relative z-10 flex items-center gap-2",
          variant === "default" && 'dark:mix-blend-difference',
          innerClassName,
        )}
      >
        {children}
      </span>
      <motion.span
        id="span"
        style={{ x: "-100%" }}
        className={cn(
          "absolute h-full w-[calc(100%_+_30px)] rounded-full bg-black dark:bg-white",
          variant === "secondary" && "bg-primary dark:bg-primary",
        )}
      />
    </ButtonElem>
  );
};

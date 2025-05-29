"use client";

import { cn } from "@/lib/utils";
import { useAnimate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {} from "usehooks-ts";

interface TypeWriteProps {
  texts: string[];
  duration?: number;
  delay?: number;
  className?: string;
}

export const TypeWrite = ({
  texts,
  duration = 1.5,
  delay = 1,
  className,
}: TypeWriteProps) => {
  const [scope, animate] = useAnimate();
  const [animationCount, setAnimationCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAnimation = async () => {
      if (!scope.current) return;

      const currentText = animationCount % texts.length;
      const nextText = (currentText + 1) % texts.length;

      const currentTextId = `#text-${currentText + 1}`;
      const nextTextId = `#text-${nextText + 1}`;

      const CARET_BLINK_DURATION = 0.25;

      await animate([
        [
          "#caret",
          { opacity: 0 },
          { duration: CARET_BLINK_DURATION, delay: CARET_BLINK_DURATION },
        ],
        ["#caret", { opacity: 1 }, { duration: CARET_BLINK_DURATION }],

        [currentTextId, { width: "100%" }, { duration, ease: "linear" }],
        [`#caret`, { left: "100%" }, { duration, ease: "linear", at: "<" }],

        [
          "#caret",
          { opacity: 0 },
          { duration: CARET_BLINK_DURATION, delay: CARET_BLINK_DURATION },
        ],
        ["#caret", { opacity: 1 }, { duration: CARET_BLINK_DURATION }],

        [currentTextId, { width: 0 }, { duration, ease: "linear" }],
        [`#caret`, { left: 0 }, { duration, ease: "linear", at: "<" }],

        [currentTextId, { display: "none" }, { duration: 0.0001 }],
        [nextTextId, { display: "block" }, { duration: 0.0001 }],
      ]);

      setAnimationCount((prev) => prev + 1);
      timeoutRef.current = setTimeout(
        startAnimation,
        (duration + delay * 2) * 1000,
      );
    };

    startAnimation();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [animate, scope, duration, delay, animationCount, texts.length]);

  const ariaLabel = texts.map((t) => t).join(", ");

  return (
    <h1
      aria-label={ariaLabel}
      ref={scope}
      className={cn(
        "relative mx-auto inline-block w-fit font-rowdies text-xl xs:text-3xl sm:text-4xl",
        className,
      )}
    >
      {texts.map((t, i) => (
        <span
          aria-hidden="true"
          id={`text-${i + 1}`}
          key={i}
          className="hidden w-0 overflow-hidden whitespace-nowrap first:block"
        >
          {t}
        </span>
      ))}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [0, 1] }}
        id="caret"
        className="absolute left-0 top-0 h-full w-1 rounded-full bg-yellow-500 opacity-0 [box-shadow:#eab308_0px_0px_5px]"
      />
      <span className="sr-only">{ariaLabel}</span>
    </h1>
  );
};

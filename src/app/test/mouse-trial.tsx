"use client";

import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const MouseTrial = () => {
  const [scope, animate] = useAnimate();
  const animationFrameRef = useRef<number | null>(null);
  const CIRCLE_COUNT = 20;
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseOver) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;

        const hoveredElement = document.elementFromPoint(x, y);

        const test =
          !!hoveredElement &&
          window.getComputedStyle(hoveredElement).cursor === "pointer";

        if (test) {
          animate([
            [".circles", { opacity: 0, left: x, top: y }, { duration: 0.001 }],
            [
              "#circle-1",
              {
                opacity: 1,
                backgroundColor: "transparent",
                border: "1.5px solid white",
              },
              { duration: 0.001 },
            ],
          ]);
          return;
        }

        Array.from({ length: CIRCLE_COUNT }).map((_, i) => {
          animate([
            [
              `#circle-${i + 1}`,
              { left: x, top: y, opacity: (i + 1) * 0.05 },
              { duration: 0.01 + i * 0.02, at: "<", ease: "linear" },
            ],
          ]);
        });
      });
    };

    const handleMouseOver = () => {
      setIsMouseOver(true);
    };

    const handleMouseOut = () => {
      setIsMouseOver(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, isMouseOver]);

  return (
    <div
      ref={scope}
      className={cn(
        "pointer-events-none fixed inset-0 z-[9999] overflow-hidden",
        !isMouseOver && "hidden",
      )}
    >
      {Array.from({ length: CIRCLE_COUNT }).map((_, i) => (
        <span
          style={{
            width: `${30 - 2 * i}px`,
            transform: `translate(-50%,-50%)`,
          }}
          id={`circle-${i + 1}`}
          key={i}
          className={cn(
            "circles absolute top-32 aspect-square rounded-full bg-primary",
          )}
        />
      ))}
    </div>
  );
};

"use client";

import { ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimationSequence, stagger, useAnimate } from "framer-motion";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";

type StaggerButtonProps = Omit<ButtonProps, "children"> & {
  children: string;
};

export const StaggerButton = ({
  variant,
  size,
  children,
}: StaggerButtonProps) => {
  const [scope, animate] = useAnimate();
  const isAnimating = useRef(false);

  const handleClick = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const randomObjects = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      scale: Math.random() * 0.5 + 0.5,
      opacity: 1,
    }));

    const stars: AnimationSequence = Array.from({ length: 20 }).map((_, i) => [
      `#star-${i + 1}`,
      randomObjects[i],
      { at: 0 },
    ]);

    await animate([
      [".letter", { y: "-100%" }, { delay: stagger(0.05) }],
      [".letter", { y: 0 }, { duration: 0.001 }],
      ...stars,
      [".star", { opacity: 0 }],
    ]);
    isAnimating.current = false;
  };

  return (
    <button
      onClick={handleClick}
      ref={scope}
      className={cn(
        buttonVariants({ variant, size }),
        "text-xl hover:bg-primary",
      )}
    >
      <span className="block overflow-hidden leading-5">
        {children.split("").map((letter, index) => (
          <span
            data-letter={letter === " " ? "\u00A0" : letter}
            key={index}
            className="letter relative inline-block after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
      {Array.from({ length: 20 }).map((_, i) => (
        <FaStar
          id={`star-${i + 1}`}
          key={i}
          className="star absolute -z-10 size-8 scale-0 text-yellow-500 opacity-0"
        />
      ))}
    </button>
  );
};

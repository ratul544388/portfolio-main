"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { WhileInView } from "./while-in-view";

interface SplitAnimatedTextProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  elem?: "p" | "h1" | "h2";
  charDelay?: number;
}

export const SplitAnimatedText = ({
  children,
  className,
  elem: Elem = "h1",
  charDelay = 0.125,
}: SplitAnimatedTextProps) => {
  return (
    <Elem
      aria-label={children}
      className={cn("font-rowdies text-4xl leading-[50px]", className)}
    >
      {children.split(" ").map((w, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          {w.split("").map((c, charIndex) => (
            <WhileInView
              elem="span"
              opacity={1}
              delay={charDelay * charIndex}
              y="100%"
              className="inline-block"
              key={charIndex}
            >
              {c}
            </WhileInView>
          ))}
          &nbsp;
        </span>
      ))}
    </Elem>
  );
};

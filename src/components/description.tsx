"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { RevealAnimation, RevealAnimationFrom } from "./reveal-animation";

type DescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {
  animation?: boolean;
  animateFrom?: RevealAnimationFrom;
  children: string;
  delay?: number;
};

export const Description = ({
  className,
  animation = true,
  animateFrom,
  children,
  delay,
  ...props
}: DescriptionProps) => {
  return (
    <p
      aria-label={children}
      className={cn("font-chakra_petch text-muted-foreground", className)}
      {...props}
    >
      {animation ? (
        <RevealAnimation delay={delay} className="text-muted-foreground" animateFrom={animateFrom} aria-hidden>
          {children}
        </RevealAnimation>
      ) : (
        children
      )}
    </p>
  );
};

"use client";

import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  elem?: "h1" | "h2" | "h3";
};

export const Heading = ({ className, children, elem: Elem = "h1" }: HeadingProps) => {
  return (
    <Elem
      className={cn(
        "font-rowdies text-4xl leading-[54px]",
        Elem === "h3" && "text-2xl sm:text-3xl",
        className,
      )}
    >
      {children}
    </Elem>
  );
};

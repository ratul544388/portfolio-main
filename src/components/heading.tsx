"use client";

import { cn } from "@/lib/utils";
import { ColorType } from "@/types";
import React, { Fragment } from "react";
import { RevealAnimation } from "./reveal-animation";

interface LabelType {
  text: string;
  lineBreak?: boolean;
  color?: ColorType;
  delay?: number;
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  elem?: "h1" | "h2" | "h3";
  label: string | LabelType[];
  animation?: boolean;
  color?: ColorType;
  delay?: number;
}

export const Heading = ({
  elem: Elem = "h1",
  label,
  className,
  color,
  animation = true,
  delay,
  ...props
}: HeadingProps) => {
  const ariaLabel =
    typeof label === "string" ? label : label.map((l) => l.text).join(" ");
  return (
    <Elem
      className={cn(
        "font-rowdies text-4xl leading-[50px]",
        Elem === "h2" && "text-3xl leading-[42px]",
        Elem === "h3" && "text-2xl leading-[36px]",
        className,
      )}
      {...props}
    >
      <span className="sr-only">{ariaLabel}</span>
      {typeof label === "string" ? (
        animation ? (
          <RevealAnimation
            delay={delay}
            color={color}
            aria-hidden="true"
            elem="span"
          >
            {label}
          </RevealAnimation>
        ) : (
          <span aria-hidden="true">{label}</span>
        )
      ) : (
        label.map((l, i) => (
          <Fragment key={i}>
            <RevealAnimation
              aria-hidden="true"
              key={i}
              color={l.color}
              delay={l.delay}
            >
              {l.text}&nbsp;
            </RevealAnimation>
            {l.lineBreak && <br />}
          </Fragment>
        ))
      )}
    </Elem>
  );
};

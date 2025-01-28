"use client";
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

interface ContainerProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  children: ReactNode;
  elem?: "div" | "section" | "main" | "header";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, elem: Elem = "div", ...props }, ref) => {
    return (
      <Elem
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-screen-2xl px-5 md:px-8",
          className,
        )}
        {...props}
      >
        {children}
      </Elem>
    );
  },
);

Container.displayName = "Container";

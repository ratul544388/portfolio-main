"use client";

import { ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";

export const MetarialUiButton = ({
  children,
  variant,
  size,
  className,
}: ButtonProps) => {
  const [scope, animate] = useAnimate();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    const size = rect.width;

    const current = scope.current as HTMLElement;

    const newElem = document.createElement("span");
    const newElemId = `span-${new Date().getTime()}`;
    newElem.id = newElemId;
    newElem.classList.add("absolute", "bg-white/50", "rounded-full");

    current.appendChild(newElem);

    const id = `#${newElemId}`;
    await animate([
      [id, { left, top, x: "-50%", y: "-50%" }, { duration: 0.0001 }],
      [id, { height: size, width: size, opacity: 0 }, { duration: 0.4 }],
    ]);

    current.removeChild(newElem);
  };

  return (
    <motion.button
      ref={scope}
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant, size, className }),
        "relative overflow-hidden",
      )}
    >
      {children}
    </motion.button>
  );
};

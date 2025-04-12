"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "../../../../components/ui/button";
import { WhileInView } from "../../../../components/while-in-view";

const developerData = {
  name: "Ratul",
  title: "Web Developer",
  skills: [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.Js",
    "MongoDB",
    "PostgreSQL",
    "Framer Motion",
    "etc...",
  ],
};

export const CopyButton = () => {
  const [isCopying, setIsCopying] = useState(false);
  const CopyIcon = isCopying ? Check : Copy;

  const handleClick = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(JSON.stringify(developerData));
    setTimeout(() => setIsCopying(false), 1500);
  };

  return (
    <WhileInView
      scale={0}
      delay={3.5}
      elem="button"
      onClick={handleClick}
      className={buttonVariants({
        variant: "outline",
        size: "sm",
        className: "absolute right-0 top-0 rounded-none text-muted-foreground",
      })}
    >
      <CopyIcon className="!size-3" />
      Copy
    </WhileInView>
  );
};

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiCodeblocks } from "react-icons/si";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const Elem = motion.create(Link);
  return (
    <Elem
      href="/"
      whileHover="hover"
      className={cn(
        "flex backdrop-blur-sm py-1 px-3 rounded-full items-center gap-2 font-semibold text-2xl",
        className
      )}
    >
      <motion.span
        className="block"
        variants={{ initial: { rotate: 0 }, hover: { rotate: 180 } }}
        transition={{duration: 0.3}}
      >
        <SiCodeblocks className="size-4" />
      </motion.span>
      RatulCodes
    </Elem>
  );
};

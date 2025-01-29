"use client";
import { navLinks, socialLinks } from "@/constants";
import { useRouterHash } from "@/hooks/use-router-hash";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { WhileInView } from "./while-in-view";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const hash = useRouterHash();

  const variants: Variants = {
    open: {
      height: "100vh",
      width: "100%",
      borderBottomLeftRadius: 0,
    },
    close: {
      height: 0,
      width: 0,
      borderBottomLeftRadius: 9999,
    },
  };

  const animate = open ? "open" : "close";

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="sm:hidden">
      <Trigger open={open} onOpenChange={handleClick} />
      <motion.div
        variants={variants}
        initial="close"
        animate={animate}
        transition={{
          ease: "easeInOut",
        }}
        className="fixed right-0 top-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-background py-20"
      >
        <nav className="mt-10">
          <ul key={String(open)} className="space-y-6">
            {navLinks.map(({ label, href, icon: Icon }, i) => {
              const isActive = href === hash;
              return (
                <WhileInView
                  delay={0.3 + 0.1 * i}
                  y={-50}
                  duration={0.25}
                  key={label}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href={href}
                    className={cn(
                      "font-rowdies flex items-center gap-4 text-3xl text-muted-foreground transition-colors",
                      isActive && "text-primary",
                    )}
                  >
                    <Icon className="size-5" />
                    {label}
                  </Link>
                </WhileInView>
              );
            })}
          </ul>
        </nav>
        <nav>
          <ul key={String(open)} className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }, i) => (
              <WhileInView elem="li" x={-10} delay={0.8 + 0.1 * i} key={label}>
                <Link href={href} className="text-primary">
                  <Icon className="size-5" />
                </Link>
              </WhileInView>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

const Trigger = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) => {
  const topVariants: Variants = {
    open: {
      rotate: 45,
      y: 10,
    },
    close: {
      rotate: 0,
      y: 0,
    },
  };

  const middleVariants: Variants = {
    open: {
      scaleX: 0,
    },
    close: {
      scaleX: 1,
    },
  };

  const bottomVariants: Variants = {
    open: {
      rotate: -45,
      y: -12,
    },
    close: {
      rotate: 0,
      y: 0,
    },
  };
  const animate = open ? "open" : "close";

  return (
    <button
      style={{clipPath: "polygon(33% 0, 100% 0%, 100% 100%, 0% 100%)"}}
      onClick={onOpenChange}
      className="relative bg-foreground z-[100] flex items-center h-14 w-14 pl-4 pr-2 py-[15px] flex-col justify-between"
    >
      <motion.span
        variants={topVariants}
        initial="close"
        animate={animate}
        transition={{ ease: "easeInOut", duration: 0.35 }}
        className="inline-block h-1 w-full rounded-full bg-background"
      />
      <motion.span
        variants={middleVariants}
        initial="close"
        animate={animate}
        transition={{ ease: "easeInOut", duration: 0.35 }}
        className="inline-block h-1 w-full rounded-full bg-background"
      />
      <motion.span
        variants={bottomVariants}
        initial="close"
        animate={animate}
        transition={{ ease: "easeInOut", duration: 0.35 }}
        className="inline-block h-1 w-full rounded-full bg-background"
      />
    </button>
  );
};

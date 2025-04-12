"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { motion, useAnimate } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

export const ThemeToggler = () => {
  const [scope, animate] = useAnimate();
  const { theme, setTheme } = useTheme();
  const isMounted = useMounted();

  if (!isMounted) {
    return <Skeleton className="size-9 rounded-md border"/>
  }

  const handleChangeTheme = () => {
    animate([
      [
        "#icon-wrapper",
        { top: theme === "dark" ? -27 : 10 },
        { duration: 0.3 },
      ],
      [
        "#bubble",
        {
          opacity: 1,
          height: 0,
          width: 0,
        },
        {
          duration: 0.00001,
          at: "<",
        },
      ],
      [
        "#bubble",
        {
          height: "100vh",
          width: "100vw",
          top: 0,
          right: 0,
        },
        {
          duration: 0.3,
        },
      ],
      [
        "#bubble",
        {
          opacity: 0,
        },
        {
          duration: 0.3,
          at: 0.4,
        },
      ],
    ]);
    setTimeout(() => setTheme(theme === "dark" ? "light" : "dark"), 300);
  };

  const SunIcon = motion.create(Sun);
  const MoonIcon = motion.create(Moon);

  return (
    <div ref={scope} className="relative">
      <Button
        onClick={handleChangeTheme}
        className="relative z-10 overflow-hidden"
        variant="outline"
        size="icon"
      >
        <span
          id="icon-wrapper"
          className={cn(
            "absolute space-y-5 top-[10px] dark:top-[-27px]",
          )}
        >
          <SunIcon
            id="sun-icon"
            initial={{
              ...(theme === "dark"
                ? {
                    top: 50,
                  }
                : {}),
            }}
            className="size-4"
          />
          <MoonIcon
            id="moon-icon"
            initial={{
              ...(theme === "light"
                ? {
                    top: 50,
                  }
                : {}),
            }}
            className="size-4"
          />
        </span>
      </Button>
      <span
        id="bubble"
        className="fixed pointer-events-none right-10 top-10 block w-0 bg-foreground"
      />
    </div>
  );
};

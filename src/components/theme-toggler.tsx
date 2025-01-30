"use client";

import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { ThemeType } from "@/types";
import { motion } from "framer-motion";
import { MonitorCogIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { JSX } from "react";
import { Skeleton } from "./ui/skeleton";
interface ThemeTogglerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  iconSize?: number;
}

export const ThemeToggler = ({ className, iconSize = 16 }: ThemeTogglerProps) => {
  const { themes, theme, setTheme } = useTheme();
  const isMounted = useMounted();

  const ThemeTypeMap: Record<ThemeType, JSX.Element> = {
    system: <MonitorCogIcon size={iconSize}/>,
    dark: <Moon size={iconSize} />,
    light: <Sun size={iconSize} />,
  };

  if (!isMounted) {
    return <Skeleton className="h-7 w-20 rounded-full" />;
  }

  return (
    <div className={cn("flex flex-row-reverse rounded-full dark:border shadow dark:shadow-none", className)}>
      {themes.map((t) => (
        <button
          onClick={() => setTheme(t)}
          className={cn("relative rounded-full p-1.5")}
          key={t}
        >
          {ThemeTypeMap[t as keyof typeof ThemeTypeMap]}
          {t === theme && (
            <motion.span
              layoutId="activeTheme"
              className="absolute inset-0 -z-10 rounded-full bg-secondary"
            />
          )}
        </button>
      ))}
    </div>
  );
};

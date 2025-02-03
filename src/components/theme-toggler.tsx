"use client";

import { Check, MonitorCogIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const ThemeToggler = ({
  className,
  align = "end",
}: {
  className?: string;
  align?: "start" | "end" | "center";
}) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const themes = [
    {
      name: "light",
      icon: Sun,
    },
    {
      name: "dark",
      icon: Moon,
    },
    {
      name: "system",
      icon: MonitorCogIcon,
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("size-fit rounded-full p-2 px-4 sm:px-2", className)}
        >
          <span className="sm:sr-only">Theme</span>
          <Sun className="size-4 dark:hidden" />
          <Moon className="hidden size-4 dark:block" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={align} className="flex w-fit flex-col p-0 py-2">
        {themes.map(({ name, icon: Icon }) => (
          <Button
            key={name}
            variant="ghost"
            className="w-full justify-start rounded-none capitalize"
            onClick={() => {
              setTheme(name);
              setOpen(false);
            }}
          >
            <Icon />
            {name}
            <Check
              className={cn(
                "ml-auto size-4 opacity-0",
                theme === name && "opacity-100",
              )}
            />
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

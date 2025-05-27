"use client";

import { Button } from "@/components/ui/button";
import { motion, useAnimate } from "framer-motion";

const TestPage = () => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate([
      ["#span-1", { width: "100%" }, { duration: 0.5 }],
      ["#span-2", { height: 26 }, { duration: 0.3, at: 0.4 }],
    ]);
  };

  const handleMouseLeave = () => {
    animate([
      ["#span-2", { height: 0 }, { duration: 0.3 }],
      ["#span-1", { width: 0 }, { duration: 0.5, at: 0.25 }],
    ]);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        ref={scope}
        className="relative w-fit overflow-hidden rounded-lg p-1"
      >
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 [box-shadow:hsl(var(--primary)/0.4)_4px_4px] hover:bg-purple-700"
        >
          CLICK ME HERE
        </Button>
        <motion.span
          id="span-1"
          className="absolute bottom-0 left-2 block h-3 w-2 rounded-full bg-white"
        />
        <motion.span
          id="span-2"
          className="absolute bottom-2.5 right-0 w-3 rounded-t-full bg-white"
        />
      </div>
    </div>
  );
};

export default TestPage;

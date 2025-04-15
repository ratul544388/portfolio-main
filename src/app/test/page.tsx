"use client";
import { motion } from "framer-motion";

const TestPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="relative h-9 overflow-hidden rounded-md">
        <span className="relative rounded-[4px] z-10 mx-auto flex size-[calc(100%_-_4px)] items-center justify-center whitespace-nowrap bg-background px-4">
          Hello world This
        </span>
        <motion.span
          animate={{
            left: [0, "100%", 0],
            transition: { duration: 3, ease: "linear", repeat: Infinity },
          }}
          className="absolute top-0 h-full w-[200%] -translate-x-1/2 bg-gradient-to-r from-purple-500 via-blue-700 to-purple-600"
        />
      </button>
    </div>
  );
};

export default TestPage;

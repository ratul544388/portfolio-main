"use client";

import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { WhileInView } from "../../../../components/while-in-view";

export const BlinkingStars = () => {
  return (
    <div className="absolute left-1/2 -top-20 -z-10 translate-x-10 rotate-[30deg] space-y-5">
      <Star x={100} />
      <Star delay={2} />
      <Star x={30} />
      <Star x={-40} delay={3} />
      <Star x={50} />
      <Star delay={7} />
      <Star x={-75} />
      <Star delay={1} />
      <Star x={-25} />
      <Star x={55} />
      <Star x={10} delay={5} />
      <Star x={-25} />
      <Star />
      <Star x={35} delay={3} />
      <Star x={66} />
      <Star x={30} delay={2} />
      <Star />
      <Star x={-40} />
      <motion.span
        animate={{
          opacity: [1, 0.6, 1],
          transition: { repeat: Infinity, duration: 5 },
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-14 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-white/40 to-transparent blur-3xl"
      />
      <motion.span
        animate={{
          opacity: [1, 0.6, 1],
          transition: { repeat: Infinity, duration: 5 },
        }}
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-14 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-primary/50 to-transparent blur-3xl"
      />
    </div>
  );
};

const Star = ({ delay, x }: { delay?: number; x?: number }) => {
  const MotionStar = motion.create(PiStarFourFill);

  return (
    <WhileInView>
      <MotionStar
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.3, 1, 0.3],
          rotate: [0, 25, 0],
          transition: { repeat: Infinity, ease: "linear", duration: 8, delay },
        }}
        initial={{ x }}
        className="size-3 text-primary dark:text-foreground"
      />
    </WhileInView>
  );
};

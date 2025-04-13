"use client";
import { motion, Variants } from "framer-motion";

const titles = [
  "💻 Skilled in React, Node.js, TypeScript, and full-stack development.",
  "🚀 Driven to create scalable, user-friendly web applications from scratch.",
  "🔧 Always learning new tools, frameworks, and backend tech to level up.",
  "🎨 Love crafting beautiful UIs with Tailwind CSS and Framer Motion.",
  "🌍 Passionate about solving real-world problems through code and creativity.",
  "🧠 Curious mind exploring modern tech stacks and building smarter solutions.",
  "✨ Helping ideas come alive through clean code and thoughtful design.",
];

const boxVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

export const SkillList = () => {
  return (
    <motion.ul
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      className="mt-10 space-y-3"
    >
      {titles.map((title, i) => (
        <motion.li
          variants={listVariant}
          key={i}
          className="flex items-center gap-3"
        >
          <motion.span
            animate={{
              opacity: [0, 1, 0],
              transition: {
                duration: titles.length,
                delay: i,
                repeat: Infinity,
              },
            }}
            className="block size-2 rounded-full bg-primary"
          />
          {title}
        </motion.li>
      ))}
    </motion.ul>
  );
};

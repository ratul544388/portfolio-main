import { motion, useScroll } from "framer-motion";

export const ScrollProgressLine = () => {
    const { scrollYProgress } = useScroll();
    return (
      <motion.span
        className="bg-gradient absolute inset-0 top-[calc(100%_-_4px)] h-1 bg-gradient-to-r"
        style={{ scaleX: scrollYProgress, originX: 0, borderRadius: 9999 }}
      />
    );
  };
  
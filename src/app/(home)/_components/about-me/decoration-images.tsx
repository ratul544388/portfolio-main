import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const DecorationImages = () => {
    const container = useRef(null);
  
    const { scrollYProgress: scrollYFlagProgress } = useScroll({
      target: container,
      offset: ["0.8 end", "end start"],
    });
  
    const { scrollYProgress: scrollYBoxProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    });
  
    const boxTransform = useTransform(scrollYBoxProgress, [0, 1], [0, 120]);
    const flagTransform = useTransform(scrollYFlagProgress, [0, 1], [0, 120]);
  
    return (
      <div ref={container}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          className="pointer-events-none absolute right-20 top-0 hidden opacity-0 lg:block"
          style={{ top: boxTransform }}
        >
          <Image
            src="/decorations/box-cut.svg"
            alt="flug"
            height={154}
            width={150}
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          className="pointer-events-none absolute bottom-0 left-20 hidden translate-y-20 opacity-0 lg:block"
          style={{ bottom: flagTransform }}
        >
          <Image src="/decorations/skull.svg" alt="flug" height={77} width={48} />
          <Image
            src="/decorations/awesome-guys-text-bubble.svg"
            alt="flug"
            height={65}
            width={185}
            className="-translate-y-32 translate-x-16"
          />
        </motion.div>
      </div>
    );
  };
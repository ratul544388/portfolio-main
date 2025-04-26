import { Container } from "@/components/container";
import { stackCards } from "@/constants";
import { cn } from "@/lib/utils";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

export const StickyCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <Container ref={containerRef} className="mt-20 max-w-[900px]">
      {stackCards.map((item, i) => {
        const targetScale = 1 - (stackCards.length - i) * 0.05;
        return (
          <StickyCard
            key={i}
            index={i}
            range={[1 * (1 / stackCards.length), 1]}
            targetScale={targetScale}
            containerYProgress={scrollYProgress}
            {...item}
          />
        );
      })}
    </Container>
  );
};

export const StickyCard = ({
  index,
  range,
  targetScale,
  containerYProgress,
  title,
  description,
  image,
}: {
  index: number;
  range: number[];
  targetScale: number;
  containerYProgress: MotionValue<number>;
  title: string;
  description: string;
  image: StaticImageData;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const cardScale = useTransform(containerYProgress, range, [1, targetScale]);

  return (
    <div
      style={{ top: 128 + index * 20 }}
      ref={ref}
      className="sticky h-screen"
    >
      <motion.div
        style={{ scale: cardScale }}
        className={cn("w-full bg-background")}
      >
        <div className="w-full rounded-lg border-2 bg-gradient-to-b from-secondary to-secondary/20 p-5 shadow-sm">
          <h1 className="text-center font-rowdies text-3xl">{title}</h1>
          <div className="mt-8 flex flex-col-reverse gap-7 md:flex-row">
            <p className="font-chakra_petch text-muted-foreground">
              {description}
            </p>
            <div className="h-[250px] w-full min-w-[55%] overflow-hidden rounded-lg">
              <motion.div
                style={{ scale: imageScale }}
                className="relative size-full"
              >
                <Image
                  src={image}
                  alt="image"
                  placeholder="blur"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

"use client";

import { backendSkills, frontendSkills, stackCards } from "@/constants";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Marquee } from "./marquee";
import { FaLocationArrow } from "react-icons/fa";
import { WhileInView } from "./while-in-view";

export const Skills = () => {
  return (
    <section className="mx-auto h-full max-w-screen-2xl pt-20">
      <Heading className="text-center" label="Skills" />
      <div className="mt-14 flex select-none flex-col items-center gap-6 xs:flex-row xs:pl-5">
        <div className="flex items-center gap-3">
          <Heading
            color="primary"
            elem="h2"
            label="Frontend"
            className="flex items-center gap-3"
          />
          <WhileInView scale={0.8} x={-10}>
            <FaLocationArrow className="size-5 rotate-45 text-blue-600" />
          </WhileInView>
        </div>
        <Marquee duration={30} gap={40} direction="left">
          {frontendSkills.map((skill) => (
            <li
              key={skill}
              className="relative font-rowdies text-5xl leading-[70px]"
            >
              {skill}
            </li>
          ))}
        </Marquee>
      </div>
      <div className="mt-14 flex select-none flex-col items-center gap-6 xs:flex-row xs:pr-5">
        <Marquee duration={30} gap={40} direction="right">
          {backendSkills.map((skill) => (
            <li
              key={skill}
              className="relative font-rowdies text-5xl leading-[70px]"
            >
              {skill}
            </li>
          ))}
        </Marquee>
        <div className="flex items-center gap-3">
          <WhileInView scale={0.8} x={-10}>
            <FaLocationArrow className="size-5 rotate-[-135deg] text-purple-500" />
          </WhileInView>
          <Heading
            color="primary"
            elem="h2"
            label="Backend"
            className="flex items-center gap-3"
          />
        </div>
      </div>
      <StickyCards />
    </section>
  );
};

const StickyCards = () => {
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
        className={cn(
          "w-full gap-5 rounded-lg border-2 border-cyan-100 bg-gradient-to-b from-cyan-50 to-white p-6 shadow-sm dark:border-cyan-950 dark:from-cyan-950 dark:to-black",
          index === 1 &&
            "border-orange-50 from-orange-50 dark:border-orange-950 dark:from-orange-950",
          index === 2 &&
            "border-purple-100 from-purple-50 dark:border-purple-950 dark:from-purple-950",
          index === 3 &&
            "border-from-pink-100 from-pink-50 dark:border-pink-950 dark:from-pink-950",
          index === 4 &&
            "border-yellow-100 from-yellow-50 dark:border-yellow-950 dark:from-yellow-950",
        )}
      >
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
      </motion.div>
    </div>
  );
};

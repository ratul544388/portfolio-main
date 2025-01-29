"use client";

import { motion, MotionValue } from "framer-motion";
import { backendSkills, frontendSkills, stackCards } from "@/constants";
import { Lightbulb } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa";
import { Marquee } from "./marquee";
import { RevealedAnimatedText } from "./revealed-animated-text";
import { SectionHeading } from "./section-heading";
import { Container } from "./container";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const Skills = () => {
  return (
    <section className="mx-auto h-full max-w-screen-2xl pt-20" id="skills">
      <SectionHeading icon={Lightbulb}>Skills</SectionHeading>
      <div className="xs:flex-row xs:pl-5 mt-14 flex select-none flex-col items-center gap-6">
        <h3>
          <RevealedAnimatedText
            color="primary"
            className="xs:text-3xl text-2xl sm:text-4xl"
          >
            Frontend
            <FaLocationArrow aria-hidden="true" className="size-5 rotate-45" />
          </RevealedAnimatedText>
        </h3>
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
      <div className="xs:flex-row xs:pr-5 mt-14 flex select-none flex-col items-center gap-6">
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
        <h3>
          <RevealedAnimatedText
            color="primary"
            className="xs:text-3xl text-2xl sm:text-4xl"
          >
            <FaLocationArrow
              aria-hidden="true"
              className="size-5 rotate-[-135deg]"
            />
            Backend
          </RevealedAnimatedText>
        </h3>
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
          "w-full gap-5 rounded-lg border-2 border-cyan-100 bg-gradient-to-b from-cyan-50 to-white p-6 shadow-sm",
          index === 1 && "from-orange-50 border-orange-100",
          index === 2 && "from-purple-50 border-purple-100",
          index === 3 && "from-pink-50 border-from-pink-100",
          index === 4 && "from-yellow-50 border-yellow-100",
        )}
      >
        <h1 className="text-center font-rowdies text-3xl">{title}</h1>
        <div className="mt-8 flex flex-col-reverse gap-7 md:flex-row">
          <p className="font-chakra_petch">
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

"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "./container";
import { RevealedAnimatedText } from "./revealed-animated-text";
import { buttonVariants } from "./ui/button";
import { WhileInView } from "./while-in-view";

const HEADING =
  "Hello I'm Ratul, A full Stack Web Developr creating seamless experience";
const DESCRIPTION =
  "I'm a Full Stack Web Developer with 3 years of experience. I'm proficient in both frontend and backend technologies, including HTML, CSS, Tailwind CSS, React, Next.js, TypeScript, JavaScript, Framer Motion, GSAP, MongoDB, MySQL, Express, Node.js. I've built numerous full stack websites, such as e-commerce platforms, social media sites, portfolios, and landing pages. I'm passionate about learning new technologies to enhance my skills.";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-margin-top relative mt-10 bg-foreground py-12 text-center text-background lg:text-start"
    >
      <DecorationImages />
      <Container className="max-w-[800px]">
        <TextContainer />
        <div className="mt-12 flex justify-between lg:mt-0 lg:block">
          <_3dImage src="/laptop-coding.webp" className="lg:-translate-y-28" />
          <_3dImage
            src="/desktop-coding.webp"
            type="top-left"
            className="lg:-translate-y-[250px] lg:translate-x-[370px]"
          />
        </div>
      </Container>
    </section>
  );
};

const TextContainer = () => {
  return (
    <>
      <p className="font-gupter">
        <RevealedAnimatedText color="background" type="paragraph">
          About me
        </RevealedAnimatedText>
      </p>
      <h1
        aria-label={HEADING}
        className="mt-5 flex flex-col items-center lg:items-start"
      >
        <span className="flex flex-wrap justify-center gap-x-2.5">
          <RevealedAnimatedText color="background">Hello</RevealedAnimatedText>
          <RevealedAnimatedText delay={0.21} color="background">
            I&apos;m
          </RevealedAnimatedText>
          <RevealedAnimatedText delay={0.42} color="primary">
            Ratul,
          </RevealedAnimatedText>
          <RevealedAnimatedText delay={0.63} color="background">
            A Full
          </RevealedAnimatedText>
        </span>
        <span className="flex flex-wrap justify-center gap-x-2.5">
          <RevealedAnimatedText color="background">Stack</RevealedAnimatedText>
          <RevealedAnimatedText delay={0.21} color="primary">
            Web Developer
          </RevealedAnimatedText>
        </span>
        <RevealedAnimatedText color="background">
          creating seamless
        </RevealedAnimatedText>
        <RevealedAnimatedText color="primary">experience</RevealedAnimatedText>
      </h1>
      <div className="mt-8 flex flex-col font-chakra_petch lg:ml-[430px]">
        <p>
          <RevealedAnimatedText color="background" type="paragraph">
            {DESCRIPTION}
          </RevealedAnimatedText>
        </p>
        <WhileInView className="mx-auto mt-5 lg:mx-0 lg:ml-auto" y={30}>
          <Link
            href="/ratul.cv.pdf"
            target="_blank"
            download
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "font-rowdies",
            )}
          >
            Download CV
            <ArrowDown className="size-4 animate-bounce" />
          </Link>
        </WhileInView>
      </div>
    </>
  );
};

const DecorationImages = () => {
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

interface Image3DProps {
  type?: "bottom-left" | "top-left";
  src: string;
  className?: string;
}

const _3dImage = ({ type = "bottom-left", src, className }: Image3DProps) => {
  const x = type === "bottom-left" ? 100 : -100;
  return (
    <WhileInView x={x} scale={0.5}>
      <div className={cn("group w-fit [perspective:1000px]", className)}>
        <div
          className={cn(
            "relative size-[150px] rounded-lg border-[6px] border-neutral-700 transition-all duration-1000 ease-in-out [perspective:1000px] [transform-style:preserve-3d] group-hover:border-primary sm:size-[250px] lg:size-[300px]",
            type === "bottom-left" &&
              "[transform:rotateY(-25deg)_rotateX(-25deg)]",
            type === "top-left" && "[transform:rotateY(-25deg)_rotateX(25deg)]",
          )}
        >
          <Image src={src} fill alt="coading" className="object-cover" />
        </div>
      </div>
    </WhileInView>
  );
};

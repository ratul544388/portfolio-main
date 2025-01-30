"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowPointer } from "react-icons/fa6";
import { TiDownload } from "react-icons/ti";
import { Container } from "./container";
import { Description } from "./description";
import { Heading } from "./heading";
import { HoverButton } from "./hover-button";
import { RevealAnimation } from "./reveal-animation";
import { WhileInView } from "./while-in-view";

const TITLE = "Experienced Web Developer Specializing in Modern Technologies.";
const DESCRIPTION =
  "Passionate about turning ideas into digital reality, I blend creativity and technical expertise to craft dynamic web experiences. With a knack for innovation and a love for learning, I continuously push the boundaries of web development.";

export const Intro = () => {
  return (
    <Container
      id="home"
      className="scroll-margin-top grid items-center gap-10 pt-8 lg:grid-cols-2"
    >
      <div>
        <Heading className="text-center lg:text-start" aria-label={TITLE}>
          <RevealAnimation>Experienced&nbsp;</RevealAnimation>
          <RevealAnimation color="primary" delay={0.21}>
            Web Developer
          </RevealAnimation>
          <RevealAnimation>Specializing in&nbsp;</RevealAnimation>
          <RevealAnimation color="primary" delay={0.21}>
            Modern
          </RevealAnimation>
          <br />
          <RevealAnimation color="primary">Technologies</RevealAnimation>
        </Heading>
        <Description className="mt-5 text-center lg:text-start">
          <RevealAnimation animateFrom="top">
            {DESCRIPTION}
          </RevealAnimation>
        </Description>
        <WhileInView
          scale={0}
          y={50}
          className="mt-7 flex justify-center gap-4 lg:justify-start"
        >
          <HoverButton
            variant="black"
            size="xl"
            cut="top"
            className="text-base font-semibold"
          >
            <Link href="/#contact" className="flex items-center gap-2">
              Contact me
              <FaArrowPointer className="rotate-[120deg]" />
            </Link>
          </HoverButton>
          <HoverButton size="xl" className="text-base font-semibold">
            <Link
              href="/ratul.cv.pdf"
              target="_blank"
              download
              className="flex items-center gap-2"
            >
              Download CV
              <TiDownload style={{ height: 18, width: 18 }} />
            </Link>
          </HoverButton>
        </WhileInView>
      </div>
      <WhileInView
        scale={0}
        className="relative h-[400px] md:h-[500px] lg:h-[400px]"
      >
        <Image
          src="/hero-dark.jpg"
          alt="hero"
          fill
          className="hidden object-cover dark:block"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src="/hero-light.jpg"
          alt="hero"
          fill
          className="object-cover dark:hidden"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </WhileInView>
    </Container>
  );
};

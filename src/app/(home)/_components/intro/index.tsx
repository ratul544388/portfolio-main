"use client";
import Link from "next/link";
import { FaArrowDown, FaLocationArrow } from "react-icons/fa";
import { Container } from "../../../../components/container";
import { Description } from "../../../../components/description";
import { Heading } from "../../../../components/heading";
import { HoverButton } from "../../../../components/hover-button";
import { RevealAnimation } from "../../../../components/reveal-animation";
import { WhileInView } from "../../../../components/while-in-view";
import { BlinkingStars } from "./blinking-stars";
import { Developer } from "./developer";
import { ScrollBottomArrowButton } from "./scroll-bottom-arrow-button";

const TITLE = "Experienced Web Developer Specializing in Modern Technologies.";
const DESCRIPTION =
  "Passionate about turning ideas into digital reality, I blend creativity and technical expertise to craft dynamic web experiences. With a knack for innovation and a love for learning, I continuously push the boundaries of web development.";

export const Intro = () => {
  return (
    <Container
      id="home"
      className="scroll-margin-top overflow-hidden pt-20 pb-8"
    >
      <div className="relative grid items-center gap-28 lg:grid-cols-2">
        <div>
          <Heading
            className="mx-auto max-w-lg text-center lg:mx-[initial] lg:text-start"
            aria-label={TITLE}
          >
            <RevealAnimation>Hi, I&apos;m&nbsp;</RevealAnimation>
            <RevealAnimation color="primary" delay={0.2}>
              Ratul,&nbsp;
            </RevealAnimation>
            <RevealAnimation delay={0.4}>A Full Stack&nbsp;</RevealAnimation>
            <RevealAnimation color="primary">
              Web Developer.&nbsp;
            </RevealAnimation>
          </Heading>
          <Description className="mt-5 text-center lg:text-start">
            <RevealAnimation animateFrom="top">{DESCRIPTION}</RevealAnimation>
          </Description>
          <WhileInView
            scale={0.6}
            y={50}
            className="mt-7 flex justify-center gap-4 lg:justify-start"
          >
            <HoverButton variant="foreground" size="lg" cut="top" className="">
              <Link href="/#contact" className="flex items-center gap-2">
                Contact me
                <FaLocationArrow className="!size-3 rotate-45" />
              </Link>
            </HoverButton>
            <HoverButton className="" size="lg">
              <Link
                href="/ratul.cv.pdf"
                target="_blank"
                download
                className="flex items-center gap-2"
              >
                Download CV
                <FaArrowDown className="!size-3 animate-bounce" />
              </Link>
            </HoverButton>
          </WhileInView>
        </div>
        <Developer />
        <BlinkingStars />
      </div>
      <ScrollBottomArrowButton />
    </Container>
  );
};

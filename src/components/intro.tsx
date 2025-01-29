"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowPointer } from "react-icons/fa6";
import { TiDownload } from "react-icons/ti";
import { Container } from "./container";
import { HoverButton } from "./hover-button";
import { RevealedAnimatedText } from "./revealed-animated-text";
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
        <h1
          className="flex flex-col items-center lg:items-start"
          aria-label={TITLE}
        >
          <span className="flex flex-wrap justify-center gap-x-2.5">
            <RevealedAnimatedText>Experienced</RevealedAnimatedText>
            <RevealedAnimatedText color="primary" delay={0.21}>
              Web Developer
            </RevealedAnimatedText>
          </span>
          <span className="flex flex-wrap justify-center gap-x-2.5">
            <RevealedAnimatedText>Specializing in</RevealedAnimatedText>
            <RevealedAnimatedText color="primary" delay={0.21}>
              Modern
            </RevealedAnimatedText>
          </span>
          <RevealedAnimatedText color="primary">
            Technologies
          </RevealedAnimatedText>
        </h1>
        <p className="mt-5 text-center lg:text-start" aria-label={DESCRIPTION}>
          <RevealedAnimatedText animateFrom="top" type="paragraph">
            {DESCRIPTION}
          </RevealedAnimatedText>
        </p>
        <WhileInView
          scale={0}
          y={50}
          className="mt-5 flex justify-center gap-4 lg:justify-start"
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
          src="/hero.jpg"
          alt="hero"
          fill
          className="object-cover [transform:scaleX(-1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </WhileInView>
    </Container>
  );
};

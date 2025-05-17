"use client";
import { GradientBorderedButton } from "@/components/gradient-bordered-button";
import { FaArrowDown, FaLocationArrow } from "react-icons/fa";
import { Container } from "../../../../components/container";
import { Description } from "../../../../components/description";
import { Heading } from "../../../../components/heading";
import { HoverButton } from "../../../../components/hover-button";
import { WhileInView } from "../../../../components/while-in-view";
import { BlinkingStars } from "./blinking-stars";
import { Developer } from "./developer";
import { ScrollBottomArrowButton } from "./scroll-bottom-arrow-button";

const DESCRIPTION =
  "Passionate about turning ideas into digital reality, I blend creativity and technical expertise to craft dynamic web experiences. With a knack for innovation and a love for learning, I continuously push the boundaries of web development.";

export const Intro = () => {
  return (
    <Container
      className="overflow-hidden pb-8 pt-20"
    >
      <div className="relative grid items-center gap-28 lg:grid-cols-2">
        <div>
          <Heading
            label={[
              { text: "Hi, I'm" },
              { text: "Ratul,", color: "primary", delay: 0.2 },
              { text: "A Full Stack", delay: 0.4 },
              { text: "Web Developer.", color: "primary" },
            ]}
            className="text-center lg:text-start"
          />
          <Description
            animateFrom="top"
            className="mt-5 text-center lg:text-start"
          >
            {DESCRIPTION}
          </Description>
          <WhileInView
            scale={0.6}
            y={50}
            className="mt-7 flex justify-center gap-4 lg:justify-start"
          >
            <HoverButton variant="secondary" href="/contact" size="lg" className="">
              <FaLocationArrow className="rotate !size-3" />
              Contact me
            </HoverButton>
            <GradientBorderedButton
              href="/ratul.cv.pdf"
              download
              target="_blank"
              size="lg"
            >
              Download Resume
              <FaArrowDown className="!size-3 animate-bounce" />
            </GradientBorderedButton>
          </WhileInView>
        </div>
        <Developer />
        <BlinkingStars />
      </div>
      <ScrollBottomArrowButton />
    </Container>
  );
};

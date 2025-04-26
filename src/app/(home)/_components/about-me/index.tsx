"use client";
import { GradientBorderedButton } from "@/components/gradient-bordered-button";
import { HoverButton } from "@/components/hover-button";
import { FaArrowDown } from "react-icons/fa";
import { Container } from "../../../../components/container";
import { _3dImage } from "./_3d-image";
import { DecorationImages } from "./decoration-images";
import { TextContainer } from "./text-container";
import { GiOpenBook } from "react-icons/gi";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-margin-top relative mt-24 bg-background-2 py-12 text-center lg:text-start"
    >
      <DecorationImages />
      <Container className="flex max-w-[800px] flex-col">
        <TextContainer />
        <GradientBorderedButton
          href="/ratul.cv.pdf"
          download
          target="_blank"
          className="mx-auto mt-6 lg:ml-auto lg:mr-0"
        >
          Download Resume
          <FaArrowDown className="!size-3 animate-bounce" />
        </GradientBorderedButton>
        <div className="relative mt-12 flex justify-between lg:mt-0 lg:block">
          <_3dImage src="/laptop-coding.webp" className="lg:-translate-y-8" />
          <_3dImage
            src="/desktop-coding.webp"
            type="top-left"
            className="lg:-translate-y-[250px] lg:translate-x-[370px]"
          />
        </div>
        <HoverButton
          href="/about"
          variant="secondary"
          className="mx-auto mt-10 border bg-white hover:bg-white"
        >
          <GiOpenBook className="size-4" />
          View Full Details
        </HoverButton>
      </Container>
    </section>
  );
};

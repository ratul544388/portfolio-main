"use client";
import { Container } from "../../../../components/container";
import { _3dImage } from "./_3d-image";
import { DecorationImages } from "./decoration-images";
import { TextContainer } from "./text-container";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-margin-top relative mt-24 bg-background-2 py-12 text-center text-background dark:bg-background-2 dark:text-foreground lg:text-start"
    >
      <DecorationImages />
      <Container className="max-w-[800px]">
        <TextContainer />
        <div className="relative mt-12 flex justify-between lg:mt-0 lg:block">
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

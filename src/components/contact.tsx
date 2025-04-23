"use client";

import { ChevronRight } from "lucide-react";
import { Container } from "./container";
import { Heading } from "./heading";
import { HoverButton } from "./hover-button";
import Image from "next/image";
import { WhileInView } from "./while-in-view";

export const Contact = () => {
  return (
    <section
      className="relative overflow-hidden mt-16 bg-background-2 pb-36 pt-28 text-center"
      style={{ clipPath: "polygon(11% 4%, 100% 0, 100% 100%, 0 93%, 0 15%)" }}
    >
      <Container
        color="primary"
        className="relative flex flex-col items-center"
      >
        <Heading label="Start Building Your Website" />
        <div className="relative">
          <HoverButton href="/contact" className="mt-12 font-rowdies" size="lg">
            Contact Now <ChevronRight className="size-4" />{" "}
          </HoverButton>
          <WhileInView>
            <Image
              src="/images/contact-button-decorator.png"
              alt="Decorator"
              width={80}
              height={80}
              className="absolute left-0 top-1/2 -translate-x-[calc(100%_+_10px)] -translate-y-[calc(50%-_+24px)]"
            />
            <Image
              src="/images/contact-button-decorator.png"
              alt="Decorator"
              width={80}
              height={80}
              className="absolute right-0 top-1/2 -translate-y-[calc(50%-_+24px)] translate-x-[calc(100%_+_8px)] scale-x-[-1] invert-[-1]"
            />
          </WhileInView>
        </div>
      </Container>
      <div className="absolute left-0 top-1/2 -z-10 size-60 -translate-x-[40%] -translate-y-1/2 opacity-20 md:opacity-100">
        <Image
          src="/images/blob-1.svg"
          fill
          alt="Blog"
          className="opacity-30"
        />
        <Image src="/images/blob-outline-1.svg" fill alt="Blog" className="" />
      </div>
      <div className="absolute right-0 top-1/2 -z-10 size-60 translate-x-[40%] -translate-y-1/2 opacity-20 md:opacity-100">
        <Image
          src="/images/blob-2.svg"
          fill
          alt="Blog"
          className="opacity-30"
        />
        <Image src="/images/blob-outline-2.svg" fill alt="Blog" className="" />
      </div>
    </section>
  );
};

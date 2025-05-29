"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Container } from "./container";
import { Heading } from "./heading";
import { PrimaryButton } from "./primary-button";
import { WhileInView } from "./while-in-view";

export const Contact = () => {
  return (
    <section className="relative mt-16 overflow-hidden bg-background-2 pb-36 pt-28 text-center">
      <Container
        color="primary"
        className="relative z-20 flex flex-col items-center"
      >
        <Heading label="Start Building Your Website" />
        <div className="relative">
          <PrimaryButton href="/contact" className="mt-12 font-rowdies" size="lg">
            Contact Now <ChevronRight className="size-4" />{" "}
          </PrimaryButton>
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
      <div className="absolute left-0 top-1/2 z-10 size-60 -translate-x-[40%] -translate-y-1/2 opacity-20 md:opacity-100">
        <Image
          src="/images/blob-1.svg"
          fill
          alt="Blog"
          className="opacity-30"
        />
        <Image src="/images/blob-outline-1.svg" fill alt="Blog" className="" />
      </div>
      <div className="absolute right-0 top-1/2 z-10 size-60 -translate-y-1/2 translate-x-[40%] opacity-20 md:opacity-100">
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

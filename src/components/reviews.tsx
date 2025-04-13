"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { reviews } from "@/constants";
import Image from "next/image";
import { Container } from "./container";
import { Heading } from "./heading";
import { WhileInView } from "./while-in-view";

export const Reviews = () => {
  return (
    <section className="mt-28 w-full select-none bg-background-2 pb-24 pt-20 [clip-path:polygon(32%_0,100%_17%,100%_100%,0_99%,0_19%)] lg:[clip-path:polygon(14%_0,100%_16%,100%_100%,0%_100%)]">
      <Heading className="text-center" color="primary" label="Reviews"/>
      <WhileInView y={100} className="mt-10">
        <Container>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {reviews.map(({ name, comment, image, username }) => (
                <CarouselItem key={name} className="flex flex-col items-center">
                  <p className="max-w-screen-sm text-muted-foreground text-center font-rowdies text-2xl leading-[2.2rem] md:text-3xl md:leading-[3rem] lg:text-4xl lg:leading-[3.2rem]">
                    {`"${comment}"`}
                  </p>
                  <Image
                    src={image}
                    alt={name}
                    width={48}
                    height={48}
                    className="mt-6 h-fit max-h-12 rounded-full border-2 border-white object-cover"
                  />
                  <h5 className="mt-2 font-chakra_petch text-sm font-medium">
                    {name}
                  </h5>
                  <p className="font-chakra_petch text-sm text-muted-foreground">
                    @{username}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              <CarouselPrevious variant="ghost" />
              <CarouselNext variant="ghost" />
            </div>
          </Carousel>
        </Container>
      </WhileInView>
    </section>
  );
};

import { Container } from "@/components/container";
import { GradientBorderedButton } from "@/components/gradient-bordered-button";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: "404 Not Found",
  };
};

const NotFoundPage = () => {
  return (
    <Suspense fallback="">
      <Container
        elem="main"
        className="grid min-h-[calc(100vh_-_100px)] max-w-[1000px] items-center justify-center gap-x-10 md:grid-cols-2"
      >
        <section className="flex size-full flex-col items-center justify-center text-center md:text-start">
          <h1 className="font-rowdies text-5xl font-bold">4 0 4 - Error</h1>
          <h1 className="mt-2 text-3xl font-bold">PAGE NOT FOUND</h1>
          <p className="mt-3 text-center text-muted-foreground">
            Your search has ventured beyond the known universe
          </p>
          <GradientBorderedButton href="/" className="mt-5" rounded>
            Back to Home
          </GradientBorderedButton>
        </section>
        <div className="pointer-events-none order-first flex size-full select-none items-center justify-center md:order-[initial]">
          <div className="relative size-32 md:size-[300px]">
            <Image
              src="/astronaut-lost.png"
              alt="Lost"
              fill
              className="object-cover"
            />
            <span className="absolute left-1/2 -z-10 h-[90%] w-[40%] -translate-x-1/2 rotate-45 bg-primary/60 blur-3xl dark:bg-primary" />
          </div>
        </div>
      </Container>
    </Suspense>
  );
};

export default NotFoundPage;

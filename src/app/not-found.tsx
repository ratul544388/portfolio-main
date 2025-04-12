import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container
      elem="main"
      className="grid min-h-[calc(100vh_-_100px)] max-w-[1000px] items-center justify-center gap-x-10 md:grid-cols-2"
    >
      <section className="size-full flex items-center justify-center flex-col text-center md:text-start">
        <h1 className="font-rowdies text-5xl font-bold">4 0 4 - Error</h1>
        <h1 className="mt-2 text-3xl font-bold">PAGE NOT FOUND</h1>
        <p className="mt-3 text-muted-foreground text-center">
          Your search has ventured beyond the known universe
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-3 rounded-full",
          )}
        >
          Back to Home
        </Link>
      </section>
      <div className="order-first pointer-events-none select-none size-full flex items-center justify-center md:order-[initial]">
        <div className="relative size-32 md:size-[300px]">
          <Image
            src="/astronaut-lost.png"
            alt="Lost"
            fill
            className="object-cover"
          />
          <span className="absolute left-1/2 -z-10 h-[90%] w-[40%] -translate-x-1/2 rotate-45 bg-primary/60 dark:bg-primary blur-3xl" />
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;

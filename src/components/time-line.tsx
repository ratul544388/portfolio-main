"use client";
import { timelineData } from "@/constants";
import { cn } from "@/lib/utils";
import { Description } from "./description";
import { Heading } from "./heading";
import { WhileInView } from "./while-in-view";
import { RevealAnimation } from "./reveal-animation";

export const Timeline = () => {
  return (
    <section className="mt-20">
      <Heading label="My Journey" className="text-center" />
      <ul className="mx-auto mt-24 max-w-[1000px] space-y-12 overflow-hidden">
        {timelineData.map((data, i) => (
          <TimelineItem key={data.title} index={i} {...data} />
        ))}
      </ul>
    </section>
  );
};

const TimelineItem = ({
  title,
  date,
  description,
  index,
}: (typeof timelineData)[number] & { index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <li
      className={cn(
        "relative flex w-full flex-row gap-14",
        isEven && "flex-row-reverse",
      )}
    >
      <WhileInView
        x={isEven ? 100 : -100}
        className="relative w-full rounded-lg border bg-gradient-to-r from-secondary/50 to-secondary/20 p-3"
      >
        <h3 className="font-rowdies text-lg">{title}</h3>
        <Description animation={false} className="mt-4">
          {description}
        </Description>
        <span
          className={cn(
            "absolute -left-[32px] top-0 z-10 size-[22px] rounded-full border-[5px] border-background bg-foreground",
            !isEven && "-right-[32px] left-auto",
          )}
        />
      </WhileInView>
      <div
        className={cn(
          "absolute left-1/2 h-[calc(100%+_+48px)] w-[5px] -translate-x-1/2 bg-secondary/60",
          index === 0 && "-bottom-12 h-[calc(100%_+_110px)] rounded-t-full",
        )}
      ></div>
      <div className={cn("w-full", isEven && "flex justify-end")}>
        <RevealAnimation elem="p" className="h-fit">
          {date}
        </RevealAnimation>
      </div>
    </li>
  );
};

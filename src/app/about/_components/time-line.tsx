"use client";
import { timelineData } from "@/constants";
import { cn } from "@/lib/utils";
import { Description } from "../../../components/description";
import { Heading } from "../../../components/heading";
import { RevealAnimation } from "../../../components/reveal-animation";
import { WhileInView } from "../../../components/while-in-view";

export const Timeline = () => {
  return (
    <section className="mt-20">
      <Heading label="My Journey" className="text-center" />
      <ul className="mx-auto mt-24 max-w-[1000px] space-y-12 overflow-x-clip">
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
        "relative flex w-full flex-row-reverse gap-14 sm:flex-row",
        isEven && "sm:flex-row-reverse",
      )}
    >
      <WhileInView
        y={30}
        scale={0.95}
        className="relative w-full rounded-lg border bg-gradient-to-r from-secondary/50 to-secondary/20 p-3"
      >
        <h3 className="font-rowdies text-lg">{title}</h3>
        <Description animation={false} className="mt-4">
          {description}
        </Description>
      </WhileInView>
      {/* Vertical Line  */}
      <span
        className={cn(
          "absolute left-[25%] h-[calc(100%+_+48px)] w-[5px] -translate-x-[calc(100%_+_1px)] bg-secondary/60 sm:left-1/2 sm:-translate-x-1/2",
          index === 0 && "-bottom-12 h-[calc(100%_+_110px)] rounded-t-full",
        )}
      >
        {/* Dot  */}
        <span
          className={cn(
            "absolute left-1/2 top-0 z-10 size-[22px] -translate-x-1/2 -translate-y-[5px] rounded-full border-[5px] border-background bg-foreground",
            index === 0 && "top-[58px] translate-y-0",
          )}
        />
      </span>
      <div className={cn("w-[25%] sm:w-full", isEven && "flex justify-end")}>
        <RevealAnimation elem="p" className="h-fit">
          {date}
        </RevealAnimation>
      </div>
    </li>
  );
};

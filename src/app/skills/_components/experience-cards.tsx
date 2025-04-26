"use client";

import { experienceCardData } from "@/constants";
import { motion } from "framer-motion";
import { CountUp } from "../../test/count-up";
import { WhileInView } from "@/components/while-in-view";

export const ExperienceCards = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-[900px]">
      <ul className="grid grid-cols-2 gap-10">
        {experienceCardData.map((e) => (
          <ExperienceCard key={e.label} {...e} />
        ))}
      </ul>
    </section>
  );
};

const ExperienceCard = ({
  label,
  icon,
  countValue,
}: (typeof experienceCardData)[number]) => {
  const MotionIcon = motion.create(icon);
  return (
    <WhileInView y={20} elem="li" className="rounded-lg border">
      <div className="px-3 pt-2">
        <h5 className="font-medium">{label}</h5>
      </div>
      <div className="flex items-center">
        <span className="relative block h-1 w-full rounded-full bg-accent">
          <motion.span
            animate={{
              width: "100%",
              transition: { duration: 1, delay: 0.25 },
            }}
            className="bg-gradient block h-full w-0"
          />
        </span>
        <div className="mr-[10%] rounded-full bg-accent p-2">
          <MotionIcon
            style={{ scale: 0 }}
            animate={{ scale: [0, 1], transition: { delay: 1 + 0.1 } }}
            className="size-4"
          />
        </div>
      </div>
      <div className="p-3">
        <CountUp value={countValue} delay={0.25} />
      </div>
    </WhileInView>
  );
};

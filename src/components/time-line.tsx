"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Description } from "./description";

export const Timeline = () => {
  return (
    <section className="">
      <ul>
        {Array.from({ length: 3 }).map((_, i) => (
          <TimelineItem key={i} />
        ))}
      </ul>
    </section>
  );
};

const TimelineItem = () => {
  return (
    <li className="grid grid-cols-[1fr_5px_1fr] gap-5">
      <h3 className="mt-14 text-xl font-semibold">January 2010</h3>
      <div className="relative h-full bg-white/10">
        <motion.span className="fixed bottom-1/2 top-0 block w-[5px] bg-purple-500" />
        <span className="sticky left-0 top-1/2 z-10 mt-14 inline-block size-6 -translate-x-2.5 rounded-full border-[6px] border-background-2 bg-white" />
      </div>
      <div className="mt-14">
        <Description className="text-start text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          repellendus vel natus similique rem unde ipsum eius quis velit
          facilis?
        </Description>
        <div className="relative mt-5 h-[250px] w-[300px] overflow-hidden rounded-md">
          <Image
            src="/projects/doctor-booking-app.webp"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </li>
  );
};

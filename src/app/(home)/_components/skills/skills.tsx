"use client";

import { backendSkills, frontendSkills } from "@/constants";
import { FaLocationArrow } from "react-icons/fa";
import { Heading } from "../../../../components/heading";
import { Marquee } from "../../../../components/marquee";
import { WhileInView } from "../../../../components/while-in-view";
import { StickyCards } from "./sticky-cards";

export const Skills = () => {
  return (
    <section className="mx-auto h-full max-w-screen-2xl pt-20">
      <Heading className="text-center" label="Skills" />
      <div className="mt-14 flex select-none flex-col items-center gap-6 xs:flex-row xs:pl-5">
        <div className="flex items-center gap-3">
          <Heading
            color="primary"
            elem="h2"
            label="Frontend"
            className="flex items-center gap-3"
          />
          <WhileInView scale={0.8} x={-10}>
            <FaLocationArrow className="size-5 rotate-45 text-blue-600" />
          </WhileInView>
        </div>
        <Marquee duration={30} gap={40} direction="left">
          {frontendSkills.map((skill) => (
            <li
              key={skill}
              className="relative font-rowdies text-5xl leading-[70px]"
            >
              {skill}
            </li>
          ))}
        </Marquee>
      </div>
      <div className="mt-14 flex select-none flex-col items-center gap-6 xs:flex-row xs:pr-5">
        <Marquee duration={30} gap={40} direction="right">
          {backendSkills.map((skill) => (
            <li
              key={skill}
              className="relative font-rowdies text-5xl leading-[70px]"
            >
              {skill}
            </li>
          ))}
        </Marquee>
        <div className="flex items-center gap-3">
          <WhileInView scale={0.8} x={-10}>
            <FaLocationArrow className="size-5 rotate-[-135deg] text-purple-500" />
          </WhileInView>
          <Heading
            color="primary"
            elem="h2"
            label="Backend"
            className="flex items-center gap-3"
          />
        </div>
      </div>
      <StickyCards />
    </section>
  );
};
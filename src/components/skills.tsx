"use client";

import { backendSkills, frontendSkills } from "@/constants";
import { Lightbulb } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa";
import { Marquee } from "./marquee";
import { RevealedAnimatedText } from "./revealed-animated-text";
import { SectionHeading } from "./section-heading";

export const Skills = () => {

  return (
    <section className="pt-20 overflow-hidden max-w-screen-2xl mx-auto" id="skills">
      <SectionHeading icon={Lightbulb}>Skills</SectionHeading>
      <div className="xs:flex-row xs:pl-5 mt-14 flex select-none flex-col items-center gap-6">
        <h3>
          <RevealedAnimatedText
            color="primary"
            className="xs:text-3xl text-2xl sm:text-4xl"
          >
            Frontend
            <FaLocationArrow
              aria-hidden="true"
              className="size-5 rotate-45"
            />
          </RevealedAnimatedText>
        </h3>
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
      <div className="xs:flex-row xs:pr-5 mt-14 flex select-none flex-col items-center gap-6">
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
        <h3>
          <RevealedAnimatedText
            color="primary"
            className="xs:text-3xl text-2xl sm:text-4xl"
          >
            <FaLocationArrow
              aria-hidden="true"
              className="size-5 rotate-[-135deg]"
            />
            Backend
          </RevealedAnimatedText>
        </h3>
      </div>
    </section>
  );
};

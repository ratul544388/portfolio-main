"use client";

import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { Heading } from "@/components/heading";
import { ExperienceCards } from "./experience-cards";
import { SkillWave } from "./radar-chart";

export const SkillsClient = () => {
  return (
    <Container className="flex flex-col items-center pt-10">
      <Heading label="My Skills" color="primary" />
      <Description delay={0.2} className="mt-2 text-center">
        Here&apos;s an interactive visualization of my technical skills and the
        technologies I&apos;m currently learning.
      </Description>
      <ExperienceCards />
      <SkillWave/>
    </Container>
  );
};

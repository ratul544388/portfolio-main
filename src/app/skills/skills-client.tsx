"use client";

import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { Heading } from "@/components/heading";

export const SkillsClient = () => {
  return (
    <Container elem="main" className="flex flex-col items-center pt-10">
      <Heading label="My Skills" color="primary"/>
      <Description
        delay={0.2}
        className="mt-2 text-center"
      >
        Here&apos;s an interactive visualization of my technical skills and the
        technologies I&apos;m currently learning.
      </Description>
      <div className="flex h-[400px] w-full items-center justify-center text-center text-3xl font-bold text-primary">
        This Page is currently on Development!
      </div>
    </Container>
  );
};

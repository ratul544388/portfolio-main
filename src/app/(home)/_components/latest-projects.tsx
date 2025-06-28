"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { PrimaryButton } from "@/components/primary-button";
import { Project } from "@/components/project";
import { projects } from "@/constants";
import { FaRocket } from "react-icons/fa";

export const LatestProjects = () => {

  return (
    <Container
      elem="section"
      className="mt-20 flex max-w-[1000px] w-full flex-col items-center"
    >
      <Heading label="Latest Projects" />
      <ul className="w-full grid gap-5 mt-6">
        {projects.slice(0, 4).map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ul>
      <PrimaryButton
        href="/projects"
        cut="top"
        variant="secondary"
        className="mt-14"
      >
        <FaRocket className="size-4" />
        View All Projects
      </PrimaryButton>
    </Container>
  );
};

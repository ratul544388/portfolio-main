"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { PrimaryButton } from "@/components/primary-button";
import { Project } from "@/components/project";
import { projects } from "@/constants";
import { FaRocket } from "react-icons/fa";

export const LatestProjects = () => {
  const filteredProjects = projects
    .slice(0, 6)
    .sort((a, b) => b.rating - a.rating);

  return (
    <Container
      elem="section"
      className="mt-20 flex max-w-[1000px] flex-col items-center"
    >
      <Heading label="Latest Projects" />
      <ul className="mt-10 grid w-full gap-8 grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((project) => (
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

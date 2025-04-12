"use client";

import { Container } from "@/components/container";
import { HoverButton } from "@/components/hover-button";
import { Project } from "@/components/project";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/constants";
import { Rocket } from "lucide-react";

export const LatestProjects = () => {
  const filteredProjects = projects
    .slice(0, 6)
    .sort((a, b) => b.rating - a.rating);

  return (
    <Container elem="section" className="mt-20 flex flex-col items-center max-w-[1000px]">
      <SectionHeading icon={Rocket}>Latest Projects</SectionHeading>
      <ul className="mt-10 grid w-full gap-8 xs:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ul>
      <HoverButton variant="foreground" cut="top" size="lg" className="mt-14">
        View All Projects
      </HoverButton>
    </Container>
  );
};

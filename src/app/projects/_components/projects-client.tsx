"use client";

import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { Heading } from "@/components/heading";
import { ProjectCategoryType } from "@/types";
import { useState } from "react";
import { Categories } from "./categories";
import { ProjectList } from "./project-list";

export const ProjectsClient = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryType>("all projects");
  return (
    <Container className="mt-10 flex flex-col items-center">
      <Heading label="Projects" color="primary" />
      <Description delay={0.3} className="mt-2 text-center">
        Explore my web projects built with modern technologies like React,
        Next.js, Node.js, and more
      </Description>
      <Categories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <ProjectList activeCategory={activeCategory} />
    </Container>
  );
};

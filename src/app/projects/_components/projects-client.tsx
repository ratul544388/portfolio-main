"use client";

import { Container } from "@/components/container";
import { ProjectCategoryType } from "@/types";
import { useState } from "react";
import { Categories } from "./categories";
import { ProjectList } from "./project-list";

export const ProjectsClient = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryType>("all projects");
  return (
    <Container id="projects" className="scroll-margin-top mt-20" elem="section">
      <Categories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <ProjectList activeCategory={activeCategory} />
    </Container>
  );
};

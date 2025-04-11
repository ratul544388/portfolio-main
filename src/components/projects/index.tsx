"use client";

import { ProjectCategoryType } from "@/types";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";
import { Categories } from "./categories";
import { ProjectList } from "./project-list";

export const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryType>("all projects");

  return (
    <Container id="projects" className="scroll-margin-top mt-20" elem="section">
      <SectionHeading icon={Rocket}>Projects</SectionHeading>
      <Categories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <ProjectList activeCategory={activeCategory} />
    </Container>
  );
};

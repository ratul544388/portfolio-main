import React from "react";
import { ProjectsClient } from "./_components/projects-client";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact",
  };
};

const ProjectsPage = () => {
  return <ProjectsClient />;
};

export default ProjectsPage;

import { Metadata } from "next";
import { SkillsClient } from "./_components/skills-client";

export const generateMetadata = (): Metadata => {
  return {
    title: "Skills",
  };
};

const SkillsPage = () => {
  return (
    <SkillsClient/>
  );
};

export default SkillsPage;

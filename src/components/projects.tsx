"use client";

import { projectCategories, projects } from "@/constants";
import { cn } from "@/lib/utils";
import { ProjectCategoryType, ProjectType } from "@/types";
import { motion, Variants } from "framer-motion";
import { Link2, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Button, buttonVariants } from "./ui/button";
import { WhileInView } from "./while-in-view";

export const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryType>("all projects");
  return (
    <Container id="projects" className="scroll-margin-top mt-20" elem="section">
      <SectionHeading icon={Rocket}>Projects</SectionHeading>
      <ProjectCategories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
      <ProjectList activeCategory={activeCategory} />
    </Container>
  );
};

const ProjectCategories = ({
  activeCategory,
  onChange,
}: {
  activeCategory: ProjectCategoryType;
  onChange: (category: ProjectCategoryType) => void;
}) => {
  return (
    <motion.ul className="mx-auto mt-12 flex w-fit flex-wrap justify-center gap-4 rounded-3xl border shadow-sm lg:rounded-full">
      {projectCategories.map((c, i) => {
        const isActive = c === activeCategory;
        return (
          <WhileInView elem="li" x={-100} key={c} delay={0.1 * i}>
            <motion.button
              onClick={() => onChange(c)}
              className={cn(
                "relative flex h-10 items-center rounded-full px-4 capitalize text-foreground transition-colors duration-300",
                isActive && "text-background",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 rounded-full bg-foreground"
                />
              )}
              <span className="relative z-10">{c}</span>
            </motion.button>
          </WhileInView>
        );
      })}
    </motion.ul>
  );
};

const ProjectList = ({
  activeCategory,
}: {
  activeCategory: ProjectCategoryType;
}) => {
  const [showMore, setShowMore] = useState(false);
  const filteredProjects = projects.filter((p) => p.category === activeCategory)
    .length
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  const slicedProjects = filteredProjects.slice(
    0,
    showMore ? filteredProjects.length : 8,
  );

  useEffect(() => {
    setShowMore(false);
  }, [activeCategory]);

  return (
    <div className="mt-8 flex flex-col items-center">
      <ul
        key={activeCategory}
        className="xs:grid-cols-2 relative z-20 mx-auto grid w-full max-w-[1100px] gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {slicedProjects.map((p) => (
          <li key={p.name}>
            <WhileInView scale={0.5} key={p.name}>
              <Project project={p} />
            </WhileInView>
          </li>
        ))}
      </ul>
      {filteredProjects.length >= 8 && !showMore && (
        <WhileInView className="mt-12" y={50}>
          <Button
            variant="black"
            onClick={() => setShowMore(true)}
          >
            Show More
          </Button>
        </WhileInView>
      )}
    </div>
  );
};

const Project = ({ project }: { project: ProjectType }) => {
  const leftVariants: Variants = {
    initial: {
      x: "-30%",
      y: "-50%",
      rotate: 45,
    },
    hovered: {
      rotate: 0,
      y: 0,
      x: 0,
    },
  };

  const rightVariants: Variants = {
    initial: {
      x: "30%",
      y: "-50%",
      rotate: -45,
    },
    hovered: {
      rotate: 0,
      y: 0,
      x: 0,
    },
  };

  const MotionLink = motion(Link);

  const { name, deployedLink, githubLink, image } = project;

  return (
    <motion.article
      initial="initial"
      whileHover="hovered"
      className="relative cursor-pointer overflow-hidden border shadow-sm"
    >
      <div className="relative h-[150px] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="p-3">
        <h4 className="line-clamp-1 font-chakra_petch font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{project.category}</p>
        <div className="mt-4 flex gap-3 sm:hidden">
          <Link
            target="_blank"
            href={githubLink}
            className={buttonVariants({ variant: "outline" })}
          >
            Github
            <FaGithub className="size-4" />
          </Link>
          <Link
            target="_blank"
            href={githubLink}
            className={buttonVariants({ variant: "outline" })}
          >
            Live
            <Link2 className="size-4" />
          </Link>
        </div>
      </div>
      <div className="hidden sm:block">
        <MotionLink
          target="_blank"
          href={githubLink}
          variants={leftVariants}
          transition={{
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 flex size-28 flex-col bg-background p-4 text-sm transition-colors hover:text-primary hover:underline"
          style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
        >
          Github
          <FaGithub className="size-5" />
        </MotionLink>
        <MotionLink
          target="_blank"
          href={deployedLink}
          variants={rightVariants}
          transition={{
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 flex size-28 flex-col items-end bg-background p-4 text-end text-sm transition-colors hover:text-primary hover:underline"
          style={{ clipPath: "polygon(100% 100%, 100% 0, 2% 0)" }}
        >
          Go Live
          <Link2 className="size-5" />
        </MotionLink>
      </div>
    </motion.article>
  );
};

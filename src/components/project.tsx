import { cn } from "@/lib/utils";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaQuestionCircle } from "react-icons/fa";
import { Button, buttonVariants } from "./ui/button";
import { WhileInView } from "./while-in-view";
import { useState } from "react";
import { ProjectDetailsModal } from "./project-details-modal";

export const Project = ({ project }: { project: ProjectType }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const { name, deployedLink, githubLink, image, technologies, description } =
    project;

  return (
    <WhileInView elem="li" y={100}>
      <article className="relative flex w-full cursor-pointer flex-col overflow-hidden rounded-md border bg-secondary/20 shadow transition-all hover:shadow-md lg:flex-row">
        <div className="relative my-3 ml-3 aspect-[6/4] h-[230px] shadow-sm hover:shadow-md">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-md object-cover"
            placeholder="blur"
            sizes="(max-width: 768px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
        </div>
        <div className="flex flex-col px-5 py-3">
          <h3 className="line-clamp-1 font-chakra_petch text-lg font-medium">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {technologies.map((tech, i) => (
              <li
                className="rounded-full border bg-accent/30 px-3 text-xs"
                key={i}
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
            {description}
          </p>
          <div className="mt-3 flex gap-x-3 gap-y-2 lg:mt-auto">
            <Link
              target="_blank"
              href={deployedLink}
              className={cn(
                buttonVariants({ variant: "outline", className: "flex-1" }),
              )}
            >
              <FaExternalLinkAlt className="!size-3" />
              <span className="hidden xs:block">View Project</span>
            </Link>
            <Link
              target="_blank"
              href={githubLink}
              className={cn(
                buttonVariants({ variant: "outline", className: "flex-1" }),
              )}
            >
              <span className="hidden xs:block">Git Repo</span>
              <FaGithub className="size-4" />
            </Link>
            <Button
              onClick={() => setOpenDetailsModal(true)}
              variant="outline"
              className="flex-1"
            >
              <FaQuestionCircle className="size-4" />
              <span className="hidden xs:block">Details</span>
            </Button>
          </div>
        </div>
      </article>
      {openDetailsModal && (
        <ProjectDetailsModal project={project} onClose={setOpenDetailsModal} />
      )}
    </WhileInView>
  );
};

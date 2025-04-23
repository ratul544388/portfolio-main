import { cn } from "@/lib/utils";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Stars } from "./stars";
import { buttonVariants } from "./ui/button";
import { WhileInView } from "./while-in-view";

export const Project = ({ project }: { project: ProjectType }) => {
  const { name, deployedLink, githubLink, image, rating } = project;

  return (
    <WhileInView elem="li" y={100} scale={0.8}>
      <article className="group relative cursor-pointer overflow-hidden rounded-md border bg-secondary/20 shadow transition-all hover:shadow-md">
        <div className="relative h-[120px] w-full shadow-sm hover:shadow-md xs:h-[170px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover duration-1000 ease-in-out group-hover:scale-110"
            placeholder="blur"
            sizes="(max-width: 768px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
          <span className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-primary opacity-0 blur-2xl transition-opacity duration-1000 group-hover:opacity-100" />
        </div>
        <div className="p-3">
          <h4 className="line-clamp-1 font-chakra_petch font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{project.category}</p>
          <Stars rating={rating} />
          <div className="mt-4 flex gap-3">
            <Link
              target="_blank"
              href={deployedLink}
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              <FaExternalLinkAlt className="!size-3" />
              <span className="hidden xs:block">View Project</span>
              <span className="xs:hidden">Live</span>
            </Link>
            <Link
              target="_blank"
              href={githubLink}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "min-w-9",
              )}
            >
              <FaGithub className="size-4" />
            </Link>
          </div>
        </div>
      </article>
    </WhileInView>
  );
};

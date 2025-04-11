import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { buttonVariants } from "../ui/button";
import { Earth } from "lucide-react";
import { ProjectType } from "@/types";
import { Stars } from "./stars";

export const Project = ({ project }: { project: ProjectType }) => {
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

  const { name, deployedLink, githubLink, image, rating } = project;

  return (
    <motion.article
      initial="initial"
      whileHover="hovered"
      className="relative cursor-pointer overflow-hidden rounded-md border bg-background shadow-sm"
    >
      <div className="relative h-[100px] w-full shadow-sm hover:shadow-md xs:h-[150px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          placeholder="blur"
          sizes="(max-width: 768px) 50vw, (max-width: 768px) 33vw, 25vw"
        />
      </div>
      <div className="p-3">
        <h4 className="line-clamp-1 font-chakra_petch font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{project.category}</p>
        <div className="mt-4 flex gap-3 sm:hidden">
          <Link
            target="_blank"
            href={githubLink}
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            <span className="hidden sm:xs:block">Github</span>
            <FaGithub className="size-4" />
          </Link>
          <Link
            target="_blank"
            href={deployedLink}
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            <span className="hidden sm:xs:block">Live</span>
            <Earth className="size-4" />
          </Link>
        </div>
      </div>
      <Stars rating={rating} />
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
          <Earth className="size-5" />
        </MotionLink>
      </div>
    </motion.article>
  );
};

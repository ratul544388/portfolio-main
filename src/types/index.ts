import { projectCategories } from "@/constants";
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { IconType as ReactIconType } from "react-icons/lib";

export type ProjectCategoryType = (typeof projectCategories)[number];

export type ProjectType = {
  name: string;
  image: StaticImageData;
  category?: ProjectCategoryType;
  githubLink: string;
  deployedLink: string;
  technologies: Technologies[];
  description: string;
  features: string[];
};

export type ColorType = "default" | "primary";

export type ThemeType = "system" | "light" | "dark";

export type IconType = ReactIconType | LucideIcon;

export type Element =
  | "main"
  | "div"
  | "section"
  | "span"
  | "p"
  | "button"
  | "footer"
  | "header"
  | "nav"
  | "ul"
  | "li";

export type Technologies =
  | "HTML"
  | "CSS"
  | "Tailwind CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "ShadCN UI"
  | "Framer Motion"
  | "GSAP"
  | "Tanstack Query"
  | "Redux"
  | "Node.js"
  | "Next.js"
  | "MongoDB"
  | "SQL"
  | "PostGreSQL"
  | "Prisma"
  | "Drizzle"
  | "Socket.io"
  | "Stripe";

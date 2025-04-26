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
  rating: number;
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

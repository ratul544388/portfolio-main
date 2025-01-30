import { projectCategories } from "@/constants";
import { StaticImageData } from "next/image";

export type ProjectCategoryType = typeof projectCategories[number];

export type ProjectType = {
    name: string;
    image: StaticImageData;
    category?: ProjectCategoryType
    githubLink: string;
    deployedLink: string;
}

export type ColorType = "background" | "foreground" | "primary" | "white"

export type ThemeType = "system" | "light" | "dark";
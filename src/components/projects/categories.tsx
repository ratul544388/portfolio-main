import { ProjectCategoryType } from "@/types";
import { WhileInView } from "../while-in-view";
import { projectCategories } from "@/constants";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Categories = ({
  activeCategory,
  onChange,
}: {
  activeCategory: ProjectCategoryType;
  onChange: (category: ProjectCategoryType) => void;
}) => {
  return (
    <WhileInView
      elem="ul"
      y={80}
      className="mx-auto mt-12 flex w-fit flex-wrap justify-center gap-4 rounded-3xl border shadow-sm lg:rounded-full"
    >
      {projectCategories.map((c, i) => {
        const isActive = c === activeCategory;
        return (
          <li key={i}>
            <button
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
            </button>
          </li>
        );
      })}
    </WhileInView>
  );
};
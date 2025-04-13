import { projectCategories } from "@/constants";
import { cn } from "@/lib/utils";
import { ProjectCategoryType } from "@/types";
import { motion } from "framer-motion";
import { WhileInView } from "@/components/while-in-view";

export const Categories = ({
  activeCategory,
  onChange,
}: {
  activeCategory: ProjectCategoryType;
  onChange: (category: ProjectCategoryType) => void;
}) => {
  return (
    <WhileInView
      delay={0.5}
      y={10}
      scale={0.8}
      elem="ul"
      className="mx-auto mt-12 flex w-fit flex-wrap justify-center gap-4 rounded-3xl border shadow-sm lg:rounded-full"
    >
      {projectCategories.map((c, i) => {
        const isActive = c === activeCategory;
        return (
          <li key={i}>
            <button
              onClick={() => onChange(c)}
              className={cn(
                "relative flex h-10 items-center px-4 capitalize text-foreground transition-colors duration-300",
                isActive && "text-background",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-foreground"
                  style={{ borderRadius: "9999px" }}
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

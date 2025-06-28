import { projects } from "@/constants";
import { ProjectCategoryType } from "@/types";
import { Project } from "../../../components/project";

export const ProjectList = ({
  activeCategory,
}: {
  activeCategory: ProjectCategoryType;
}) => {
  const sortProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  const formattedProjects = !!sortProjects.length ? sortProjects : projects;

  return (
    <div className="mt-12 flex w-full flex-col items-center">
      <ul
        key={activeCategory}
        className="relative flex flex-col gap-5 max-w-[1000px]"
      >
        {formattedProjects.map((p) => (
          <Project key={p.name} project={p} />
        ))}
      </ul>
    </div>
  );
};

import { projects } from "@/constants";
import { ProjectCategoryType } from "@/types";
import { Project } from "../../../components/project";
import { WhileInView } from "../../../components/while-in-view";

export const ProjectList = ({
  activeCategory,
}: {
  activeCategory: ProjectCategoryType;
}) => {
  const sortProjects = projects
    .sort((a, b) => b.rating - a.rating)
    .filter((project) => project.category === activeCategory);

  const filteredProjects = !!sortProjects.length ? sortProjects : projects;

  return (
    <div className="mt-8 flex flex-col items-center">
      <ul
        key={activeCategory}
        className="relative z-20 mx-auto grid w-full max-w-[1100px] grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredProjects.map((p) => (
          <li key={p.name}>
            <WhileInView y={100} duration={0.5} key={p.name}>
              <Project project={p} />
            </WhileInView>
          </li>
        ))}
      </ul>
    </div>
  );
};

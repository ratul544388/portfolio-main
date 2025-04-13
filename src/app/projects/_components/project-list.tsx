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
    <div className="mt-12 flex flex-col w-full items-center">
      <ul
        key={activeCategory}
        className="relative z-20 mx-auto grid w-full max-w-[1100px] gap-6 px-12 xs:grid-cols-2 xs:px-0 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredProjects.map((p) => (
          <li key={p.name}>
            <WhileInView y={100} scale={0.8} key={p.name}>
              <Project project={p} />
            </WhileInView>
          </li>
        ))}
      </ul>
    </div>
  );
};

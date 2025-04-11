import { projects } from "@/constants";
import { ProjectCategoryType } from "@/types";
import { useEffect, useState } from "react";
import { WhileInView } from "../while-in-view";
import { Button } from "../ui/button";
import { Project } from "./project";

export const ProjectList = ({
  activeCategory,
}: {
  activeCategory: ProjectCategoryType;
}) => {
  const [showMore, setShowMore] = useState(false);
  const filteredProjects = projects.filter((p) => p.category === activeCategory)
    .length
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  const slicedProjects = filteredProjects.slice(
    0,
    showMore ? filteredProjects.length : 8,
  );

  const sortProjects = slicedProjects.sort((a, b) => b.rating - a.rating);

  useEffect(() => {
    setShowMore(false);
  }, [activeCategory]);

  return (
    <div className="mt-8 flex flex-col items-center">
      <ul
        key={activeCategory}
        className="relative z-20 mx-auto grid w-full max-w-[1100px] grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {sortProjects.map((p) => (
          <li key={p.name}>
            <WhileInView y={100} duration={0.5} key={p.name}>
              <Project project={p} />
            </WhileInView>
          </li>
        ))}
      </ul>
      {filteredProjects.length >= 8 && !showMore && (
        <WhileInView className="mt-12" y={50}>
          <Button variant="secondary" onClick={() => setShowMore(true)}>
            Show More
          </Button>
        </WhileInView>
      )}
    </div>
  );
};
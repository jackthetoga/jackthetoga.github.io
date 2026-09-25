"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { categories, type CategoryId, type Project } from "@/lib/projects";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<CategoryId>("all");

  const visible = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            aria-pressed={category.id === active}
            className="filter"
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="entries">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={active === "all" ? index : undefined}
          />
        ))}
      </div>
    </>
  );
}

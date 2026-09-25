import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="entry entry-link">
      <div className="entry-head">
        {typeof index === "number" && (
          <span className="entry-index">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="entry-title">{project.title}</h3>
        <span className="entry-meta">{project.year}</span>
      </div>
      <p className="entry-desc">{project.tagline}</p>
      <ul className="chips" aria-label="Stack">
        {project.stack.slice(0, 5).map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}

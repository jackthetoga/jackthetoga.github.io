import { Bullets } from "@/components/ui";
import type { Job } from "@/lib/site";

export function JobEntry({ job }: { job: Job }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3 className="entry-title">{job.org}</h3>
        <span className="entry-meta">{job.dates}</span>
      </div>
      <p className="entry-sub">
        {job.role} · {job.location}
      </p>
      <Bullets items={job.bullets} />
    </article>
  );
}

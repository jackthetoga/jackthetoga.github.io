import Link from "next/link";
import { relatedProjects, type Project } from "@/lib/projects";
import { Block, Bullets, Container, TextLink } from "@/components/ui";

export function CaseStudy({ project }: { project: Project }) {
  const related = relatedProjects(project);

  return (
    <Container className="page">
      <article>
        <p className="back">
          <Link href="/work">← Work</Link>
        </p>

        <p className="hero-kicker">
          {project.role} · {project.year}
        </p>
        <h1 className="page-title">{project.title}</h1>
        <p className="lede">{project.tagline}</p>

        {project.note && <p className="note">{project.note}</p>}

        {project.links.length > 0 && (
          <p className="hero-links">
            {project.links.map((link) => (
              <TextLink key={link.href} href={link.href}>
                {link.label}
              </TextLink>
            ))}
          </p>
        )}

        <ul className="chips" aria-label="Stack">
          {project.stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>

        {project.stages && (
          <Block title="System">
            <ol className="stages">
              {project.stages.map((stage) => (
                <li key={stage} className="stage">
                  {stage}
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block title="Problem">
          <p className="prose">{project.problem}</p>
        </Block>

        <Block title="What I built">
          <Bullets items={project.built} />
        </Block>

        {project.evidence.length > 0 && (
          <Block title="Results">
            <dl className="facts">
              {project.evidence.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Block>
        )}

        {project.limits && (
          <Block title="Limits">
            <p className="prose">{project.limits}</p>
          </Block>
        )}

        {project.next && (
          <Block title="Next">
            <p className="prose">{project.next}</p>
          </Block>
        )}

        {related.length > 0 && (
          <Block title="Related">
            <ul className="compact-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/work/${item.slug}`} className="compact-row">
                    <span className="compact-title">{item.title}</span>{" "}
                    <span className="compact-meta">{item.year}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Block>
        )}
      </article>
    </Container>
  );
}

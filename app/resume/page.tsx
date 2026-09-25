import type { Metadata } from "next";
import { JobEntry } from "@/components/JobEntry";
import { Block, Bullets, Container, TextLink } from "@/components/ui";
import { experience, music, resumeProjects, resumes, site, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume and CV for ${site.name}.`,
};

export default function ResumePage() {
  return (
    <Container className="page">
      <h1 className="page-title">Resume</h1>
      <p className="hero-links">
        {resumes.map((item) => (
          <TextLink key={item.href} href={item.href}>
            {item.label} (PDF, {item.note})
          </TextLink>
        ))}
      </p>
      <p className="resume-contact">
        {site.location} · {site.citizenship} · {site.phone} ·{" "}
        <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
      </p>

      <Block title="Education">
        <article className="entry">
          <div className="entry-head">
            <h3 className="entry-title">{site.education.school}</h3>
            <span className="entry-meta">{site.education.dates}</span>
          </div>
          <p className="entry-sub">{site.education.degrees}</p>
          <Bullets
            items={[
              `GPA: ${site.education.gpa} · ${site.education.honors}`,
              `Coursework: ${site.education.coursework.join(", ")}`,
            ]}
          />
        </article>
      </Block>

      <Block title="Experience & Research">
        <div className="entries">
          {experience.map((job) => (
            <JobEntry key={job.org} job={job} />
          ))}
        </div>
      </Block>

      <Block title="Selected Projects">
        <div className="entries">
          {resumeProjects.map((project) => (
            <article key={project.title} className="entry">
              <div className="entry-head">
                <h3 className="entry-title">
                  <TextLink href={`/work/${project.slug}`}>{project.title}</TextLink>
                </h3>
                <span className="entry-meta">{project.dates}</span>
              </div>
              <p className="entry-sub">{project.subtitle}</p>
              <Bullets items={[project.detail]} />
            </article>
          ))}
        </div>
      </Block>

      <Block title="Technical & Professional Skills">
        <dl className="skills">
          {skills.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Additional Experience">
        <Bullets
          items={[
            <>
              <TextLink href="/music">Professional Keyboardist</TextLink>:{" "}
              {music.bands.map((band) => band.name).join(", ")}.{" "}
              {music.shows[0].title} with 3rd Street Collective at Purdue’s
              Elliott Hall of Music for about 6,000 people ({music.shows[0].date}).
            </>,
          ]}
        />
      </Block>
    </Container>
  );
}

import Image from "next/image";
import Link from "next/link";
import hero from "@/public/images/jack-white.jpg";
import { ContactButtons } from "@/components/ContactButtons";
import { Feed } from "@/components/Feed";
import { Handwrite } from "@/components/Handwrite";
import { JobEntry } from "@/components/JobEntry";
import { ProjectCard } from "@/components/ProjectCard";
import { SongCarousel } from "@/components/SongCarousel";
import { Block, Container } from "@/components/ui";
import { copy, isWritten } from "@/lib/copy";
import { featuredProjects, projects } from "@/lib/projects";
import { experience, favoriteSongs, music, site } from "@/lib/site";

export default function Home() {
  const featured = featuredProjects();
  const more = projects.filter((project) => !project.featured);

  return (
    <>
      <Container className="home-standard">
        <div className="hero">
          <div className="hero-photo">
            <Image
              src={hero}
              alt="Jack White standing in a field, with a bridge and hills behind him"
              placeholder="blur"
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="hero-text">
            <p className="hero-kicker">
              {site.education.school} · CS & AI · {site.education.dates}
            </p>
            <h1
              className="hero-title"
              data-placeholder={isWritten(copy.headline) ? undefined : ""}
            >
              {isWritten(copy.headline) ? copy.headline : site.name}
            </h1>
            {!isWritten(copy.headline) && (
              <Handwrite
                id="copy-headline"
                title="Homepage headline"
                prompt="One or two sentences. Who you are, or how you want to be read. It does not have to cover every project. Until this is filled in, the headline is your name."
              />
            )}
            {isWritten(copy.lede) ? (
              <p className="hero-lede">{copy.lede}</p>
            ) : (
              <Handwrite
                as="p"
                id="copy-lede"
                title="Homepage subline"
                prompt="A short second line. Facts, interests, or nothing. No need to unify the work into one theme."
              />
            )}
          </div>
        </div>

        <ContactButtons />

        <Block title="Selected work" aside={<Link href="/work">All work</Link>}>
          <div className="entries">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Block>

        <Block title="Experience">
          <div className="entries">
            {experience.map((job) => (
              <JobEntry key={job.org} job={job} />
            ))}
          </div>
        </Block>

        <Block title="Music" aside={<Link href="/music">More on music</Link>}>
          <div className="music-summary">
            <div>
              <p className="label">{music.role}</p>
              <ul className="band-list">
                {music.bands.map((band) => (
                  <li key={band.name}>
                    <a
                      href={`https://www.instagram.com/${band.instagram}/`}
                      className="band-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {band.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {music.shows.map((show) => (
              <div key={show.title}>
                <p className="label">{show.date}</p>
                <p className="entry-title">{show.title}</p>
                <p className="entry-desc">{show.detail}</p>
              </div>
            ))}
          </div>
          <div className="songs-block">
            <p className="label">Current favorite songs</p>
            <SongCarousel songs={favoriteSongs} />
          </div>
        </Block>

        <Block title="More work">
          <ul className="compact-list">
            {more.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="compact-row">
                  <span className="compact-title">{project.title}</span>{" "}
                  <span className="compact-meta">{project.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Block>
      </Container>
      <Container className="home-feed">
        <Feed />
      </Container>
    </>
  );
}

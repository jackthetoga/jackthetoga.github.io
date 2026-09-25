import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Handwrite } from "@/components/Handwrite";
import { InstagramPosts } from "@/components/InstagramPosts";
import { SongCarousel } from "@/components/SongCarousel";
import { Block, Container, TextLink } from "@/components/ui";
import { copy, isWritten } from "@/lib/copy";
import { getProject } from "@/lib/projects";
import { favoriteSongs, music, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Music",
  description: `${site.name}, keyboardist in 3rd Street Collective, Down to Funk, and Silver Wizard.`,
};

export default function MusicPage() {
  const research = getProject("piano-transcription");

  return (
    <Container className="page">
      <p className="hero-kicker">{music.role}</p>
      <h1 className="page-title">Music</h1>
      {isWritten(copy.music) ? (
        <div className="prose">
          {copy.music.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <Handwrite
          id="copy-music"
          title="Music"
          prompt="A paragraph or two in your own words. How you started playing, what each band sounds like, what you listen to, what playing live is like. Skip anything you would not say out loud."
        />
      )}

      <Block title="Bands">
        <div className="ig-windows">
          {music.bands.map((band) => {
            const profile = `https://www.instagram.com/${band.instagram}/`;
            return (
              <section key={band.name} className="ig-window">
                <div className="ig-head">
                  <div>
                    <h3 className="band-list band-list-large">
                      <a
                        href={profile}
                        className="band-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {band.name}
                      </a>
                    </h3>
                    <p className="band-handle">@{band.instagram}</p>
                  </div>
                  <a
                    href={profile}
                    className="ig-open"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram ↗
                  </a>
                </div>
                {band.photos.length > 0 && (
                  <div className="band-photos">
                    {band.photos.map((photo) => (
                      <Image
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="(min-width: 64rem) 40rem, 100vw"
                        className="band-photo"
                        style={
                          {
                            "--ratio": photo.width / photo.height,
                          } as CSSProperties
                        }
                      />
                    ))}
                  </div>
                )}
                {band.posts.length > 0 ? (
                  <InstagramPosts posts={band.posts} />
                ) : (
                  <Handwrite
                    id={`ig-${band.instagram.replace(".", "-")}`}
                    label="Add this"
                    title={`Posts from @${band.instagram}`}
                    prompt="Paste links to 3–6 posts or reels into this band’s posts list in lib/site.ts. They show here as a scrollable row."
                  />
                )}
              </section>
            );
          })}
        </div>
      </Block>

      <Block title="Current favorite songs">
        <SongCarousel songs={favoriteSongs} />
      </Block>

      <Block title="Shows">
        <div className="entries">
          {music.shows.map((show) => (
            <article key={show.title} className="entry">
              <div className="entry-head">
                <h3 className="entry-title">{show.title}</h3>
                <span className="entry-meta">{show.date}</span>
              </div>
              <p className="entry-desc">{show.detail}</p>
            </article>
          ))}
        </div>
      </Block>

      {music.videos.length > 0 ? (
        <Block title="Video">
          <div className="videos">
            {music.videos.map((video) => (
              <figure key={video.youtubeId} className="video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <figcaption>
                  <span className="entry-title">{video.title}</span>
                  {video.detail && (
                    <span className="entry-desc">{video.detail}</span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </Block>
      ) : (
        process.env.NODE_ENV === "development" && (
          <Block title="Video">
            <Handwrite
              id="music-videos"
              label="Add this"
              title="Show videos"
              prompt="Upload to YouTube (public or unlisted), then add each video’s ID to music.videos in lib/site.ts. This section stays hidden until there is at least one."
            />
          </Block>
        )
      )}

      <Block title="Teaching">
        <article className="entry">
          <div className="entry-head">
            <h3 className="entry-title">{music.teaching.org}</h3>
            <span className="entry-meta">{music.teaching.dates}</span>
          </div>
          <p className="entry-sub">{music.teaching.role}</p>
          <p className="entry-desc">{music.teaching.detail}</p>
        </article>
      </Block>

      {research && (
        <Block title="Research">
          <article className="entry">
            <div className="entry-head">
              <h3 className="entry-title">
                <TextLink href={`/work/${research.slug}`}>
                  {research.title}
                </TextLink>
              </h3>
              <span className="entry-meta">{research.year}</span>
            </div>
            <p className="entry-sub">{research.role}</p>
            <p className="entry-desc">{research.tagline}</p>
          </article>
        </Block>
      )}
    </Container>
  );
}

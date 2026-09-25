import Image from "next/image";
import Link from "next/link";
import hero from "@/public/images/jack-white.jpg";
import { ContactButtons } from "@/components/ContactButtons";
import { SongCarousel } from "@/components/SongCarousel";
import { TextLink } from "@/components/ui";
import { copy, isWritten } from "@/lib/copy";
import { feed } from "@/lib/feed";
import { favoriteSongs, site } from "@/lib/site";

export function Feed() {
  return (
    <div className="feed">
      <section className="post post-profile" aria-label="Profile">
        <Image
          src={hero}
          alt="Jack White"
          className="post-avatar"
          sizes="4.5rem"
        />
        <div>
          <h1 className="post-title">
            {isWritten(copy.headline) ? copy.headline : site.name}
          </h1>
          <p className="post-text">
            {site.education.school} · {site.education.degrees} ·{" "}
            {site.education.dates}
          </p>
          {isWritten(copy.lede) && <p className="post-text">{copy.lede}</p>}
        </div>
        <ContactButtons />
      </section>

      {feed.map((post) => (
        <article key={post.id} className="post" data-type={post.type}>
          <p className="post-meta">
            <span className="post-type">{post.type}</span>
            <span className="post-date">{post.date}</span>
          </p>
          <h2 className="post-title">
            {post.href ? (
              <Link href={post.href}>{post.title}</Link>
            ) : (
              post.title
            )}
          </h2>
          {post.body && <p className="post-text">{post.body}</p>}
          {post.songs && <SongCarousel songs={favoriteSongs} />}
          {post.stats && post.stats.length > 0 && (
            <dl className="post-stats">
              {post.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {(post.href || (post.links && post.links.length > 0)) && (
            <p className="post-links">
              {post.href && post.href.startsWith("/work/") && (
                <TextLink href={post.href}>Read more</TextLink>
              )}
              {post.links?.map((link) => (
                <TextLink key={link.href} href={link.href}>
                  {link.label}
                </TextLink>
              ))}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

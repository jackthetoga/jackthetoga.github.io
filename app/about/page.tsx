import type { Metadata } from "next";
import { Handwrite } from "@/components/Handwrite";
import { Block, Container, TextLink } from "@/components/ui";
import { copy, isWritten } from "@/lib/copy";
import { honors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <Container className="page">
      <h1 className="page-title">About</h1>
      <div className="prose">
        {isWritten(copy.about) ? (
          copy.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        ) : (
          <Handwrite
            id="copy-about"
            title="About"
            prompt="A few paragraphs in your own words. School, work, research, music, trading — whatever you actually want on this page. Do not force it into one thesis."
          />
        )}
        <p>
          {site.location}.{" "}
          <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
        </p>
      </div>

      <Block title="Also">
        <ul className="bullets">
          {honors.map((item) => (
            <li key={item.title}>
              <strong>{item.title}.</strong> {item.detail}
            </li>
          ))}
        </ul>
      </Block>
    </Container>
  );
}

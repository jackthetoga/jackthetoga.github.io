import { site } from "@/lib/site";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <p>
          {site.location} · {site.education.school}, {site.education.dates}
        </p>
        <p className="site-footer-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </Container>
    </footer>
  );
}

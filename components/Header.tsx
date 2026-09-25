import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";

const links = [
  { href: "/work", label: "Work" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header-inner">
        <Link href="/" className="site-name">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Main">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </Container>
    </header>
  );
}

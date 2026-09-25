import { site } from "@/lib/site";

const contacts = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Resume", href: "/resume/jack-white-resume.pdf" },
];

export function ContactButtons() {
  return (
    <nav className="contact" aria-label="Contact">
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          className="contact-button"
          {...(contact.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {contact.label}
        </a>
      ))}
    </nav>
  );
}

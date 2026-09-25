import Link from "next/link";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`wrap ${className}`}>{children}</div>;
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="block-title">{children}</h2>;
}

export function Block({
  title,
  aside,
  children,
  className = "",
}: {
  title: React.ReactNode;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`block ${className}`}>
      <div className="block-head">
        <SectionHeading>{title}</SectionHeading>
        {aside && <div className="block-aside">{aside}</div>}
      </div>
      <div className="block-body">{children}</div>
    </section>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className={`link ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="bullets">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

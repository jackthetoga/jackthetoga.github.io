export function Handwrite({
  id,
  title,
  prompt,
  as: Tag = "div",
  label = "Write this",
}: {
  id: string;
  title: string;
  prompt: string;
  as?: "div" | "h1" | "p";
  label?: string;
}) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <Tag id={id} className="handwrite">
      <span className="handwrite-title">
        {label} · {title}
      </span>
      <span className="handwrite-prompt">{prompt}</span>
    </Tag>
  );
}

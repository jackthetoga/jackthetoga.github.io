import { getProject, type Project, type ProjectLink } from "@/lib/projects";
import { experience, music } from "@/lib/site";

export type FeedPost = {
  id: string;
  type: "Music" | "Research" | "Work" | "Project" | "Show" | "Teaching";
  date: string;
  title: string;
  body: string;
  href?: string;
  links?: ProjectLink[];
  stats?: { value: string; label: string }[];
  songs?: boolean;
};

function projectPost(slug: string, type: FeedPost["type"] = "Project"): FeedPost {
  const project = getProject(slug) as Project;
  return {
    id: project.slug,
    type,
    date: project.year,
    title: project.title,
    body: project.tagline,
    href: `/work/${project.slug}`,
    links: project.links,
    stats: project.evidence.slice(0, 3),
  };
}

const xue = experience.find((job) => job.org.includes("Xue"));
const [show] = music.shows;

export const feed: FeedPost[] = [
  {
    id: "songs",
    type: "Music",
    date: "On repeat",
    title: "Current favorite songs",
    body: "",
    songs: true,
  },
  ...(xue
    ? [
        {
          id: "xue",
          type: "Research" as const,
          date: xue.dates,
          title: xue.role,
          body: `${xue.org.replace("Purdue University — ", "With ")}. ${xue.bullets[0]}`,
        },
      ]
    : []),
  { ...projectPost("algobuilder", "Work"), date: "May–Aug 2026" },
  projectPost("pdr-builder", "Work"),
  projectPost("controvirtual"),
  {
    id: "magdalena-bay",
    type: "Show",
    date: show.date,
    title: show.title,
    body: show.detail,
    href: "/music",
  },
  projectPost("tradingsim"),
  projectPost("rcbot"),
  projectPost("filingedge"),
  projectPost("slopmop"),
  projectPost("recipe-finder"),
  projectPost("piano-transcription", "Research"),
  projectPost("c-shell"),
  {
    id: "redwood",
    type: "Teaching",
    date: music.teaching.dates,
    title: `${music.teaching.role}, ${music.teaching.org}`,
    body: music.teaching.detail,
  },
];

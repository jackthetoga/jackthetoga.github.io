export type Design = {
  id: string;
  name: string;
  description: string;
};

export const designs: Design[] = [
  {
    id: "plain",
    name: "Plain",
    description:
      "A hand-coded homepage. White page, Charter at reading size, blue underlined links, one narrow column.",
  },
  {
    id: "swiss",
    name: "Swiss",
    description:
      "A strict grid. Helvetica, black rules, section names in the left column, a black-and-white photo, one red.",
  },
  {
    id: "text",
    name: "Text",
    description:
      "Everything in one monospaced face on a dark page, laid out like a README. Links invert on hover.",
  },
  {
    id: "poster",
    name: "Poster",
    description:
      "A gig poster. Condensed capitals, black and orange, a duotone photo, big numbers.",
  },
  {
    id: "feed",
    name: "Feed",
    description:
      "The homepage is a timeline of posts: research, work, projects, shows, songs. Dark cards, one column.",
  },
  {
    id: "sleeve",
    name: "Sleeve",
    description:
      "A 1960s jazz record sleeve. Cobalt blue, heavy geometric type, a square photo, yellow for emphasis.",
  },
  {
    id: "newsprint",
    name: "Newsprint",
    description:
      "A broadsheet front page. Masthead, Caslon, hairline rules, justified columns, small-caps datelines.",
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description:
      "The classic developer portfolio: name and nav pinned on the left, work scrolling on the right. Navy and teal.",
  },
  {
    id: "latex",
    name: "LaTeX",
    description:
      "Typeset like the résumé template every CS student uses. Computer Modern, small-caps section rules, a sheet on grey.",
  },
  {
    id: "desktop",
    name: "Desktop",
    description:
      "A 1995 desktop. Each section is a window with a title bar, beveled buttons, and a taskbar along the bottom.",
  },
];

export const defaultDesign = "sleeve";
export const designStorageKey = "site-design";

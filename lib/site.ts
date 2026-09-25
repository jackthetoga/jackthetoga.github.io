export const site = {
  name: "Jack White",
  title: "Jack White — CS & AI",
  description:
    "Jack White. Purdue University, B.S. Computer Science and B.S. Artificial Intelligence.",
  location: "West Lafayette, IN",
  email: "white942@purdue.edu",
  phone: "(415) 847-0063",
  citizenship: "US Citizen",
  github: "https://github.com/jackthetoga",
  linkedin: "https://www.linkedin.com/in/jack-white-38b5b7256/",
  education: {
    school: "Purdue University",
    degrees: "B.S. Computer Science and B.S. Artificial Intelligence",
    location: "West Lafayette, IN",
    dates: "2023–2027",
    gpa: "3.6/4.0",
    honors: "Dean’s List (6 times)",
    coursework: [
      "Algorithms",
      "Operating Systems",
      "Machine Learning",
      "Robotics",
      "Imitation Learning (current)",
    ],
  },
};

export type Job = {
  org: string;
  role: string;
  location: string;
  dates: string;
  kind: "work" | "research";
  bullets: string[];
};

export const experience: Job[] = [
  {
    org: "BPM Microsystems",
    role: "Automation / AI Software Engineering Intern",
    location: "Houston, TX",
    dates: "Jul–Aug 2025; May–Aug 2026",
    kind: "work",
    bullets: [
      "Built AlgoBuilder, an LLM-based agent system that generates and validates NAND/NOR flash programming algorithms. It reached over 80% fully automated completion across more than 40 validated algorithms, saving an estimated 10–15 engineering hours per algorithm.",
      "Modernized Chip, an internal AI assistant used by about 75% of employees (40–50 people). Connected it to Salesforce and Google Drive through the Model Context Protocol (MCP), added tests, and cut model-call costs.",
      "Built PDR Builder, a pipeline that turns datasheets and product specs into engineering artifacts, with deterministic validation and human review. It passed 27 of 27 historical Tier-C design validations.",
      "Upgraded the BPWin REST API from 1.2 to 1.9 with job observability, device discovery, remote dialog handling, NAND support, and validation endpoints for unattended automation.",
      "Gave presentations on how to use Chip, AlgoBuilder, and PDR Builder.",
    ],
  },
  {
    org: "Purdue University — Prof. Yexiang Xue",
    role: "Robot Learning Research — Zero-Shot & Active Learning",
    location: "West Lafayette, IN",
    dates: "Present",
    kind: "research",
    bullets: [
      "Developing LLM and diffusion-policy methods that generate robot demonstrations without human input, bridging hub-to-hub and hub-to-goal transitions in latent space for zero-shot robot learning.",
    ],
  },
  {
    org: "Purdue University — Prof. Yung-Hsiang Lu",
    role: "Computer Vision Research",
    location: "West Lafayette, IN",
    dates: "Aug–Dec 2025",
    kind: "research",
    bullets: [
      "Implemented computer-vision methods for piano-to-MIDI transcription on the Rach3 and PianoYT datasets, used to evaluate generative music-performance systems.",
    ],
  },
];

export const resumeProjects = [
  {
    slug: "controvirtual",
    title: "ControVirtual",
    subtitle: "Robot Learning and Teleoperation",
    dates: "Apr 2026",
    detail:
      "Fine-tuned SmolVLA, a vision-language-action model, on 50 teleoperated episodes, raising task success from 0% to about 75%. Integrated Meta Quest/Unity, OpenCV, and a digital twin. Honorable Mention, Best Use of AMD Tech, StarkHacks 2026.",
  },
  {
    slug: "slopmop",
    title: "SlopMop",
    subtitle: "AI-Content Detection Browser Extension",
    dates: "2026",
    detail:
      "Implemented the LinkedIn, Facebook, Instagram, X, and Reddit integrations for a browser extension that flags likely AI-generated content. Cut automatic detection time to about 0.6 seconds.",
  },
  {
    slug: "tradingsim",
    title: "TradingSim + RCBot",
    subtitle: "Market Simulation and Automated Trading",
    dates: "2026",
    detail:
      "Built an event-driven simulator and an autonomous strategy engine with Level-2 order-book data, latency- and depth-aware fills, risk controls, backtesting, and Interactive Brokers paper trading.",
  },
];

export const honors = [
  {
    title: "Honorable Mention — Best Use of AMD Tech",
    detail: "StarkHacks 2026, Purdue University, for ControVirtual.",
  },
  {
    title: "Dean’s List",
    detail: "Six semesters at Purdue.",
  },
  {
    title: "Independent day trading",
    detail:
      "Since June 2022. Momentum trading with high-of-day scanning and custom technical indicators.",
  },
];

export const skills = [
  {
    label: "Programming",
    items:
      "Python, C, C++, C#, Java, TypeScript/JavaScript, SQL, Assembly, data structures",
  },
  {
    label: "AI / ML",
    items: "PyTorch, Hugging Face, LightGBM, LLM APIs, pandas, NumPy, OpenCV",
  },
  {
    label: "Web / Backend",
    items:
      "React, Redux, Vue, Angular, FastAPI, Flask, REST APIs, OAuth, WebSockets",
  },
  {
    label: "Cloud / Data",
    items: "AWS, Docker, PostgreSQL, Redis, NoSQL",
  },
  {
    label: "Engineering / Tools",
    items:
      "Full-stack software engineering, Linux, Git, Mercurial, Datadog, Unity, GitHub Copilot",
  },
  {
    label: "Professional",
    items: "Data visualization, UX patterns, product specs, technical writing",
  },
];

export const music = {
  role: "Keyboardist",
  // `posts`: Instagram post or reel links to show in each band's window.
  // `photos`: files in public/images/bands.
  bands: [
    {
      name: "3rd Street Collective",
      instagram: "3sc_band",
      photos: [
        {
          src: "/images/bands/3sc-1.jpg",
          alt: "3rd Street Collective on stage at the end of a set",
          width: 960,
          height: 349,
        },
        {
          src: "/images/bands/3sc-2.jpg",
          alt: "3rd Street Collective on stage with their instruments",
          width: 2000,
          height: 1500,
        },
      ] as BandPhoto[],
      posts: [
        "https://www.instagram.com/p/DXvFunfjJYd/",
        "https://www.instagram.com/p/DQ7VS4AEZpi/",
        "https://www.instagram.com/p/C95GhdvJyva/",
      ],
    },
    {
      name: "Down to Funk",
      instagram: "downtofunkglobal",
      photos: [] as BandPhoto[],
      posts: [
        "https://www.instagram.com/p/DdsBADrB5t2/",
        "https://www.instagram.com/p/DdepgdHiUrv/",
        "https://www.instagram.com/p/DdkhDTjMPRI/",
      ],
    },
    {
      name: "Silver Wizard",
      instagram: "silverwizard_band",
      photos: [
        {
          src: "/images/bands/wizard-1.jpg",
          alt: "Silver Wizard setting up on a theater stage",
          width: 1920,
          height: 1440,
        },
        {
          src: "/images/bands/wizard-2.jpg",
          alt: "Silver Wizard in the practice room",
          width: 1800,
          height: 1350,
        },
      ] as BandPhoto[],
      posts: [
        "https://www.instagram.com/p/DWy-4QvlsEf/",
        "https://www.instagram.com/p/DW6vC7wloik/",
        "https://www.instagram.com/p/DTafe0vkeZx/",
      ],
    },
  ],
  // YouTube video IDs: the part after "v=" or "youtu.be/" in the link.
  videos: [] as { title: string; detail?: string; youtubeId: string }[],
  shows: [
    {
      date: "Mar 2026",
      title: "Opened for Magdalena Bay",
      detail:
        "With 3rd Street Collective at Purdue’s Elliott Hall of Music, for about 6,000 people.",
    },
  ],
  teaching: {
    org: "Redwood High School",
    role: "Music Teacher",
    dates: "Apr–Jun 2023",
    detail:
      "Taught music theory, ear training, and piano technique across classical, rock, and jazz.",
  },
};

export type Song = { title: string; artist: string; spotifyId: string };

export type BandPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const favoriteSongs: Song[] = [
  {
    title: "Tieduprightnow",
    artist: "Parcels",
    spotifyId: "66tkDkPsznE5zIHNt4QkXB",
  },
  {
    title: "It Could Happen to You",
    artist: "Miles Davis Quintet",
    spotifyId: "34xixFi5y3I5FIOH1ZWisx",
  },
  {
    title: "All for Leyna",
    artist: "Billy Joel",
    spotifyId: "57hJxdJGm8kZMU0xPGNBAA",
  },
  {
    title: "Sinnerman",
    artist: "Nina Simone",
    spotifyId: "5xRP5iyVdGglqlY4Vcjhkx",
  },
  {
    title: "Satin Doll",
    artist: "McCoy Tyner",
    spotifyId: "08KRFHK8w57Js5GZZjamll",
  },
];

export const resumes = [
  {
    label: "Resume",
    href: "/resume/jack-white-resume.pdf",
    note: "Sep 2026",
  },
  {
    label: "Robotics resume",
    href: "/resume/jack-white-resume-robotics.pdf",
    note: "Aug 2026",
  },
  {
    label: "CV",
    href: "/resume/jack-white-cv.pdf",
    note: "Aug 2026",
  },
];

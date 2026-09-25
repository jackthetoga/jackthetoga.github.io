export const categories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI systems" },
  { id: "robotics", label: "Robotics" },
  { id: "markets", label: "Markets" },
  { id: "fullstack", label: "Full-stack" },
  { id: "systems", label: "Systems" },
  { id: "research", label: "Research" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  featured: boolean;
  category: Exclude<CategoryId, "all">;
  stack: string[];
  links: ProjectLink[];
  problem: string;
  built: string[];
  stages?: string[];
  evidence: { value: string; label: string }[];
  limits?: string;
  next?: string;
  note?: string;
  related?: string[];
};

export const projects: Project[] = [
  {
    slug: "algobuilder",
    title: "AlgoBuilder",
    tagline:
      "An LLM-based agent system at BPM Microsystems that generates and validates NAND/NOR flash programming algorithms.",
    year: "2025–2026",
    role: "BPM Microsystems · Automation / AI intern",
    featured: true,
    category: "ai",
    stack: [
      "Python",
      "Cursor agents",
      "MCP",
      "Salesforce",
      "BPWin REST/WebSocket",
      "Google Chat",
      "Mercurial",
    ],
    links: [],
    problem:
      "Engineers at BPM wrote each device-programming algorithm by hand: read the datasheet, work in BPWin with the chip in a socket, test on hardware, and submit the result for code review. Each algorithm took many engineering hours. Unattended runs also stalled on BPWin dialogs that the REST API could not see or dismiss.",
    stages: [
      "Salesforce request",
      "Cursor agent",
      "BPWin flash QA",
      "Hardware handoff",
      "Code review",
    ],
    built: [
      "An orchestrator that pulls algorithm requests from Salesforce through MCP and runs a Cursor agent on each one through the algorithm-development workflow.",
      "Flash QA as a 19-test sign-off against BPWin, with persistent job state, retry and recovery, and a queue so only one request uses the physical programmer at a time.",
      "Google Chat messages that tell an engineer when a socket or chip needs to be swapped, and automatic code-review submission to a Mercurial branch once QA passes. A run refuses to start if credentials or the job ledger are missing.",
      "The BPWin REST API upgrade from 1.2 to 1.9 for unattended operation: job logs and status, remote dialog control, device and socket search, NAND ranges, live algorithm-database reindexing, and serialization checks. I wrote a 65-case test plan for it.",
      "Earlier in the internship, I rebuilt Chip, BPM’s internal AI assistant, around MCP, with Salesforce and Google Drive tools, tests, and lower model-call costs.",
    ],
    evidence: [
      { value: "80%+", label: "fully automated completion" },
      { value: "40+", label: "validated algorithms" },
      { value: "10–15 h", label: "estimated engineering time saved per algorithm" },
      { value: "65", label: "BPWin API test cases" },
    ],
    limits:
      "Internal product. This page leaves out customer data, credentials, and algorithm source code.",
    related: ["pdr-builder"],
  },
  {
    slug: "pdr-builder",
    title: "PDR Builder",
    tagline:
      "A pipeline that turns semiconductor datasheets into pin-driver requirement files, with deterministic checks and human review.",
    year: "2026",
    role: "BPM Microsystems · Automation / AI intern",
    featured: false,
    category: "ai",
    stack: [
      "Python",
      "LLM extraction",
      "Deterministic rules",
      "Human review",
      "Salesforce",
    ],
    links: [],
    problem:
      "A pin-driver requirements file (PDR) tells BPM’s programmer hardware how to connect to a chip: which pins are power, which carry signals, and which protocol to use. Writing one by hand is slow, and mistakes are easy to miss. The pipeline needed to send uncertain pins to a person for review instead of guessing.",
    stages: [
      "Datasheet",
      "Pin and protocol extraction",
      "Deterministic checks",
      "Human review",
      ".pdr + Excel",
    ],
    built: [
      "A two-pass pin extractor that reads both the PDF text layer and page images, then reconciles the two with deterministic rules and lint checks.",
      "Protocol selection that checks the chosen pins against the chip package and sends incomplete results to review.",
      "A local review app where engineers approve the extracted data, plus generators for production .pdr files and Excel workbooks.",
      "Scoring against hand-made answer keys that counts abstentions, gaps, and silent errors separately, and a backtest on 64 historical designs.",
    ],
    evidence: [
      { value: "27/27", label: "historical Tier-C validations passed" },
      { value: "0.09", label: "noise errors per design" },
      { value: "0", label: "silent errors on scored pin cases" },
    ],
    limits:
      "The model-based extraction always goes through human review. Recall can only be measured on devices that have a complete answer key.",
    related: ["algobuilder"],
  },
  {
    slug: "controvirtual",
    title: "ControVirtual",
    tagline:
      "XR teleoperation and a fine-tuned SmolVLA policy for an SO-101 robot arm, built at StarkHacks 2026.",
    year: "Apr 2026",
    role: "Hackathon team · StarkHacks 2026",
    featured: true,
    category: "robotics",
    stack: [
      "Unity",
      "Meta XR",
      "Python",
      "OpenCV",
      "LeRobot",
      "SmolVLA",
      "WebSockets",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sdewhitt/ControVirtual" },
      { label: "Devpost", href: "https://devpost.com/software/team-too" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/jackthetoga/StarkHacks",
      },
    ],
    note: "Team project. I worked on the robotics integration and the SmolVLA fine-tuning and inference code.",
    problem:
      "Our team wanted one setup where you speak a command in a Meta Quest headset, watch the arm in a browser-based digital twin, and run a vision-language-action model on a real SO-101 arm. We had a weekend, so we fine-tuned a pretrained model, SmolVLA, on one task instead of training a policy from scratch.",
    stages: [
      "Quest voice",
      "WebSocket bridge",
      "Camera + twin",
      "SmolVLA",
      "SO-101 arm",
    ],
    built: [
      "A Unity Quest client that captures speech with the Meta Voice SDK and Wit.ai and sends JSON commands to a local Python WebSocket bridge.",
      "A Flask and OpenCV server for the camera feed and robot state, and an A-Frame digital twin in the browser.",
      "Fine-tuning SmolVLA on 50 teleoperated episodes of one task: pick up a screwdriver and place it on a sheet of paper. Task success went from 0% to about 75%.",
      "Simulated telemetry so the Quest app and the twin can be demoed without the arm connected.",
    ],
    evidence: [
      { value: "50", label: "teleoperated episodes" },
      { value: "0 → 75%", label: "task success after fine-tuning" },
      { value: "AMD", label: "Best Use of AMD Tech, honorable mention" },
    ],
    limits:
      "The fine-tuned policy covers one task. The full chain from a spoken command in the headset to policy-driven arm motion was still experimental when the hackathon ended.",
  },
  {
    slug: "tradingsim",
    title: "TradingSim",
    tagline:
      "A browser-based replay simulator for historical market data, with Level-2 depth and no lookahead.",
    year: "2026",
    role: "Sole author",
    featured: true,
    category: "markets",
    stack: ["Python", "FastAPI", "Databento", "Parquet", "JavaScript"],
    links: [
      { label: "GitHub", href: "https://github.com/jackthetoga/TradingSim" },
    ],
    problem:
      "I wanted to practice small-cap momentum trading on historical data. Many simulators show information too early: a bar before it closes, a fill at a price that was never on the book, or a headline before the trades it caused. Practice on that kind of replay does not carry over to live trading.",
    stages: [
      "Databento session",
      "Nanosecond timestamps",
      "Ordered replay",
      "Depth-limited fills",
      "Browser UI",
    ],
    built: [
      "Replay of one symbol and session at a time using Databento Level-2 depth (MBP-10), the trade tape, OHLCV bars, and optional news, all in strict timestamp order.",
      "Fills limited by visible depth and delayed by simulated latency. Passive orders wait in the queue. Commissions, SEC/FINRA fees, and buying power are checked at fill time.",
      "Bars appear only after they close, and timestamps stay as integer nanoseconds so news cannot be reordered ahead of the trades around it.",
      "Atomic writes for data and config, and 126 automated tests across the Python backend and the frontend.",
    ],
    evidence: [
      { value: "126", label: "automated tests" },
      { value: "MBP-10", label: "Level-2 depth" },
    ],
    limits:
      "It replays one symbol and one session at a time. It is for practice, not for backtesting a portfolio.",
    related: ["rcbot", "filingedge"],
  },
  {
    slug: "rcbot",
    title: "RCBot",
    tagline:
      "A small-cap momentum trading bot that runs the same code against historical replay and Interactive Brokers.",
    year: "2026",
    role: "Sole author",
    featured: false,
    category: "markets",
    stack: ["Python", "ib_async", "Parquet", "pytest"],
    links: [],
    problem:
      "I wanted replay and live trading to feed the bot exactly the same events, so that a test on recorded data shows how the bot would behave live.",
    built: [
      "One event format (book, tape, status) for both Parquet replay and IB Gateway, with incremental features, micro-pullback and new-high detectors, a risk governor, and position management.",
      "A conservative simulated broker that models sweeps, queue position, and latency, plus an Interactive Brokers adapter for paper trading. Paper, shadow, and detect-only modes share the same decision code.",
      "Tools for threshold sweeps, labeled-candidate analysis, and execution stress tests, plus a run ledger that saves the full configuration and results of every run.",
    ],
    evidence: [
      { value: "1", label: "event format for replay and live" },
      { value: "IBKR", label: "paper trading" },
    ],
    limits:
      "The replay data is for measuring how often setups trigger and for finding bugs. It does not show that the strategy is profitable. Choosing which stocks to trade is still done by hand.",
    related: ["tradingsim"],
  },
  {
    slug: "filingedge",
    title: "FilingEdge",
    tagline:
      "A machine-learning research system that tests whether SEC filings predict abnormal returns, using only data available at filing time.",
    year: "2026",
    role: "Sole author",
    featured: false,
    category: "markets",
    stack: ["Python", "DuckDB", "LightGBM", "SEC EDGAR", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/jackthetoga/FilingEdge" },
    ],
    problem:
      "Financial ML models often look good because of leakage: labels that overlap the training window, fundamentals that were revised later, or macro data published after the date being tested. FilingEdge asks one question using only data that was public when a 10-Q or 10-K was accepted: is the stock’s 20-day sector-adjusted return unusual?",
    stages: [
      "SEC, FRED, prices",
      "DuckDB",
      "Purged CV",
      "LogReg + LightGBM",
      "Streamlit",
    ],
    built: [
      "Ingestion of SEC submissions, XBRL financial data, FRED macro series, and daily prices into DuckDB. A synthetic dataset lets the whole system run without API keys.",
      "Purged, embargoed walk-forward cross-validation, and pytest checks for leakage: feature and label separation, as-of dates, and label windows.",
      "A logistic-regression baseline, then LightGBM with isotonic calibration, and an event backtest that includes transaction costs.",
      "A Streamlit dashboard with an event monitor, company view, backtest lab, and model card.",
    ],
    evidence: [
      { value: "34", label: "point-in-time features" },
      { value: "pytest", label: "leakage and cost checks" },
    ],
    limits:
      "The dashboard numbers on the synthetic demo data are much larger than real results. On real data the signal is much weaker.",
    related: ["tradingsim"],
  },
  {
    slug: "recipe-finder",
    title: "Recipe Finder",
    tagline:
      "Upload PDF, EPUB, or TXT cookbooks, extract the recipes, and search them by what is in your pantry.",
    year: "2026",
    role: "Sole author",
    featured: false,
    category: "fullstack",
    stack: ["FastAPI", "PostgreSQL", "Redis", "React", "TypeScript", "Docker"],
    links: [],
    problem:
      "Recipes inside cookbook files cannot be searched or filtered. The app needed background ingestion, private storage by default, and ingredient matching done on the server.",
    built: [
      "A FastAPI, SQLAlchemy, and PostgreSQL backend with Redis and ARQ ingestion jobs, a versioned /api/v1, and JWT access tokens with rotating HttpOnly refresh cookies.",
      "A React and TypeScript client for search, filters (time, cuisine, cookbook, number of missing ingredients), and pantry matching.",
      "Docker Compose deployment with PostgreSQL and Redis kept off the public network, a non-root production image, and startup checks that reject placeholder signing keys.",
    ],
    evidence: [
      { value: "PDF, EPUB, TXT", label: "cookbook formats" },
      { value: "JWT", label: "rotating refresh cookies" },
    ],
    limits:
      "Model-based recipe extraction is optional and sends cookbook text to an outside provider. Without it, the app uses simpler local parsing.",
  },
  {
    slug: "slopmop",
    title: "SlopMop",
    tagline:
      "A browser extension that flags likely AI-generated posts on LinkedIn, Facebook, Instagram, X, and Reddit.",
    year: "2026",
    role: "Team project",
    featured: false,
    category: "fullstack",
    stack: ["PyTorch", "Hugging Face", "FastAPI", "AWS", "Chrome extension"],
    links: [
      { label: "GitHub", href: "https://github.com/sdewhitt/SlopMop" },
    ],
    note: "Team project. I built the platform integrations and worked on the text-detection model and backend inference.",
    problem:
      "Checking whether a post was AI-generated usually means copying it into a separate tool. SlopMop labels posts directly in the feed without slowing down scrolling.",
    built: [
      "Integrations for LinkedIn, Facebook, Instagram, X, and Reddit that label each post as low, medium, or high probability of being AI-generated. Automatic detection takes about 0.6 seconds.",
      "A custom PyTorch and Hugging Face text classifier and a licensed image detector, served from a FastAPI backend on AWS, with caching on both the client and the server.",
      "Settings, usage history, source lookup for claims, and no saved history in incognito windows.",
    ],
    evidence: [
      { value: "5", label: "social platforms" },
      { value: "~0.6 s", label: "automatic detection time" },
    ],
  },
  {
    slug: "c-shell",
    title: "C Shell",
    tagline: "A Unix-style shell written from scratch in C with Lex and Yacc.",
    year: "Oct–Dec 2024",
    role: "Course project",
    featured: false,
    category: "systems",
    stack: ["C", "Lex", "Yacc"],
    links: [],
    problem:
      "A systems programming course project: build a working Bash-like shell from scratch, including the lexer and parser.",
    built: [
      "Parsing and execution for pipes, I/O redirection, quoting, and other Bash-like features, using a Lex lexer and a Yacc grammar.",
    ],
    evidence: [{ value: "C", label: "lexer, parser, and execution" }],
  },
  {
    slug: "piano-transcription",
    title: "Piano transcription",
    tagline:
      "Computer-vision transcription of piano video to MIDI, used to evaluate AI-generated performance videos.",
    year: "Aug–Dec 2025",
    role: "Research with Prof. Yung-Hsiang Lu",
    featured: false,
    category: "research",
    stack: ["PyTorch", "OpenCV", "MIDI"],
    links: [],
    problem:
      "The lab was testing whether a model could generate a realistic video of a piano performance from sheet music. To score those videos, the generated performance had to be turned back into notes and compared with the score. I worked on that transcription step.",
    built: [
      "Reproduced and adapted a visual piano-transcription pipeline (PPAN), first locally and then on Purdue’s Anvil GPU cluster.",
      "Ran it on the Rach3 and PianoYT datasets and on my own keyboard footage, and connected its output to the lab’s evaluation metrics: note accuracy, onset error, and MIDI similarity.",
    ],
    evidence: [
      { value: "Rach3, PianoYT", label: "datasets" },
      { value: "Fall 2025", label: "Purdue research conference" },
    ],
    limits:
      "Transcription worked, but accuracy was low. The results showed how hard it is for video-generation models to stay consistent over a long performance, and the lab moved toward other generation methods.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function featuredProjects() {
  return projects.filter((project) => project.featured);
}

export function relatedProjects(project: Project) {
  if (!project.related) return [];
  return project.related
    .map((slug) => getProject(slug))
    .filter((project): project is Project => Boolean(project));
}

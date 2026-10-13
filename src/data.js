export const profile = {
  name: "Ada Rivers",
  role: "Creative Developer",
  location: "Remote · UTC friendly",
  tagline: "I build interfaces with motion and care. React on the front, Node on the back, pixels with purpose.",
  email: "hello@adarivers.dev",
  stats: [
    { value: "32", label: "Projects shipped" },
    { value: "18", label: "Open source PRs" },
    { value: "12", label: "Talks and posts" },
    { value: "99", label: "Top Lighthouse score" },
  ],
};

export const terminalLines = [
  { cmd: "whoami", out: "ada · creative developer" },
  { cmd: "stack list", out: "[react, node, motion, canvas]" },
  { cmd: "status", out: "open to work · remote first" },
];

export const projects = [
  {
    title: "Pulseboard",
    blurb: "Realtime analytics dashboard with playful charts and live presence dots.",
    tags: ["React", "Motion", "WebSockets"],
    year: "2025",
    metric: "40k events per min",
    span: "lg:col-span-2",
    glyph: "◉",
  },
  {
    title: "Typeflux",
    blurb: "Kinetic type playground. Scrub time, bend letters, export clips.",
    tags: ["Canvas", "Typography"],
    year: "2025",
    metric: "60fps scrub",
    span: "",
    glyph: "▲",
  },
  {
    title: "Orbital UI",
    blurb: "Component kit with springy modals, drawers and command palette.",
    tags: ["React", "Design system"],
    year: "2024",
    metric: "80+ components",
    span: "",
    glyph: "■",
  },
  {
    title: "Snackmap",
    blurb: "Map of beloved food stalls with offline mode and photo trails.",
    tags: ["PWA", "Maps"],
    year: "2024",
    metric: "4.9 store rating",
    span: "",
    glyph: "◈",
  },
  {
    title: "Drumloop Studio",
    blurb: "Loop maker in the browser. Tap pads, stack layers, share links.",
    tags: ["Web Audio", "React"],
    year: "2023",
    metric: "120bpm joy",
    span: "",
    glyph: "◎",
  },
  {
    title: "Paperplane CMS",
    blurb: "Tiny CMS for portfolios. Markdown in, fast pages out.",
    tags: ["Node", "Markdown"],
    year: "2023",
    metric: "90ms builds",
    span: "lg:col-span-2",
    glyph: "◆",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind", "Framer Motion", "Canvas", "Three.js basics"],
  },
  {
    title: "Backend",
    items: ["Node", "Postgres", "Supabase", "REST", "Auth", "Edge caching"],
  },
  {
    title: "Craft",
    items: ["Motion design", "Prototyping", "A11y", "Perf budgets", "Design tokens", "Docs that help"],
  },
];

export const journey = [
  {
    period: "2023 to now",
    role: "Creative Developer · Studio North",
    detail: "Lead interactive builds for launch pages and product tours. Own motion language and perf.",
  },
  {
    period: "2021 to 2023",
    role: "Frontend Engineer · Loopwork",
    detail: "Shipped dashboard suite used daily by 20k makers. Cut load time by half.",
  },
  {
    period: "2020 to 2021",
    role: "UI Engineer · Freelance",
    detail: "Built sites and tiny tools for founders. Learned to scope fast and polish last.",
  },
  {
    period: "2019 to 2020",
    role: "First lines of code",
    detail: "Fell for the browser. Rebuilt favorite sites for fun until it became work.",
  },
];

export const posts = [
  {
    title: "Motion that respects focus",
    note: "Springs, durations and when to keep things still.",
    meta: "6 min read · Motion",
  },
  {
    title: "Bento layouts that stay legible",
    note: "Grid rules I use so cards never shout over each other.",
    meta: "4 min read · Layout",
  },
  {
    title: "A tiny state pattern I reuse",
    note: "One store shape for filters, tabs and palettes.",
    meta: "5 min read · Code",
  },
];

export const opensource = [
  {
    title: "motion bits",
    note: "Copy paste spring presets for cards, dialogs and toasts.",
    meta: "2.1k stars · MIT",
  },
  {
    title: "bento blocks",
    note: "Twelve layout blocks for portfolios and launch pages.",
    meta: "980 stars · MIT",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

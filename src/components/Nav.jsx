import { motion } from "framer-motion";
import { profile } from "../data.js";

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Notes", href: "#notes" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur"
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-wide text-cream">
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-accent" aria-hidden="true" />
          ada.rivers
        </a>
        <ul className="hidden items-center gap-7 font-mono text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.txt"
          download
          className="rounded-full bg-accent px-4 py-2 font-mono text-sm font-semibold text-accentink transition-transform hover:scale-105 active:scale-95"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}

export { rise };
export { profile };

import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { projects } from "../data.js";

function ProjectCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`cardring group relative overflow-hidden rounded-card bg-panel p-6 ${p.span}`}
    >
      <div className="flex items-start justify-between">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-panel2 text-2xl text-accent">
          {p.glyph}
        </span>
        <span className="font-mono text-xs text-muted">{p.year}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-cream transition-colors group-hover:text-accent">
        {p.title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{p.blurb}</p>
      <p className="mt-3 font-mono text-xs text-accent">{p.metric}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full border border-line bg-panel2 px-3 py-1 font-mono text-xs text-cream">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-5 font-mono text-sm">
        <a href="#work" className="text-cream underline-offset-4 transition-colors hover:text-accent hover:underline">
          Live demo
        </a>
        <a href="#work" className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
          Source
        </a>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-4 text-[7rem] leading-none text-panel2 transition-transform duration-300 group-hover:scale-110"
      >
        {p.glyph}
      </span>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="worktitle" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <Reveal>
        <p className="font-mono text-sm text-accent">01 · selected work</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 id="worktitle" className="text-4xl font-bold tracking-tight text-cream">
            Bento box of builds
          </h2>
          <a href="#contact" className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
            Want the full archive? Just ask
          </a>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import TerminalCard from "./TerminalCard.jsx";
import { profile } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            folio 2026 · available for roles
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-cream sm:text-6xl"
          >
            Creative developer crafting playful web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold text-accentink"
            >
              View selected work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-line bg-panel px-6 py-3 font-mono text-sm font-semibold text-cream transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </motion.a>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="cardring rounded-card bg-panel px-4 py-3">
                <dt className="order-2 font-mono text-xs text-muted">{s.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-accent">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
        <TerminalCard />
      </div>
    </section>
  );
}

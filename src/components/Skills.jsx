import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { journey, skillGroups } from "../data.js";

const tabs = ["Toolbox", "Journey"];

export default function Skills() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="stack" aria-labelledby="stacktitle" className="scroll-mt-24 border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">02 · stack and story</p>
          <h2 id="stacktitle" className="mt-2 text-4xl font-bold tracking-tight text-cream">
            Skills plus the road so far
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div role="tablist" aria-label="Skills or journey" className="mt-8 inline-flex rounded-full border border-line bg-ink p-1.5">
            {tabs.map((t) => {
              const selected = active === t;
              return (
                <button
                  key={t}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(t)}
                  className={`relative rounded-full px-6 py-2.5 font-mono text-sm font-semibold transition-colors ${
                    selected ? "text-accentink" : "text-muted hover:text-cream"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="tabpill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          {active === "Toolbox" ? (
            <motion.div
              key="toolbox"
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              {skillGroups.map((g) => (
                <div key={g.title} className="cardring rounded-card bg-ink p-6">
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">{g.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-sm text-cream transition-colors hover:border-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.ol
              key="journey"
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-8 space-y-4"
            >
              {journey.map((j, i) => (
                <motion.li
                  key={j.role}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="cardring grid gap-2 rounded-card bg-ink p-6 sm:grid-cols-[160px_1fr] sm:gap-6"
                >
                  <span className="font-mono text-sm text-accent">{j.period}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-cream">{j.role}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{j.detail}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

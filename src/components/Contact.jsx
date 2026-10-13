import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { profile, socials } from "../data.js";

export default function Contact() {
  return (
    <>
      <section id="contact" aria-labelledby="contacttitle" className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <div className="cardring rounded-card bg-ink p-8 text-center sm:p-12">
              <p className="font-mono text-sm text-accent">04 · say hello</p>
              <h2 id="contacttitle" className="mx-auto mt-3 max-w-xl text-4xl font-bold tracking-tight text-cream sm:text-5xl">
                Lets build something vivid
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
                My inbox is open for roles, freelance and collabs. I reply within two days.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href={`mailto:${profile.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full bg-accent px-7 py-3 font-mono text-sm font-semibold text-accentink"
                >
                  {profile.email}
                </motion.a>
                <motion.a
                  href="/resume.txt"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full border border-line bg-panel px-7 py-3 font-mono text-sm font-semibold text-cream transition-colors hover:border-accent hover:text-accent"
                >
                  Download resume
                </motion.a>
              </div>
              <ul aria-label="Social links" className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-full border border-line px-5 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="border-t border-line bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row">
          <p className="font-mono text-xs text-muted">Crafted with care in the browser · 2026 · Ada Rivers</p>
          <div className="flex items-center gap-5 font-mono text-xs">
            <a href="#top" className="text-muted transition-colors hover:text-accent">
              Back to top
            </a>
            <a href="/resume.txt" download className="text-muted transition-colors hover:text-accent">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

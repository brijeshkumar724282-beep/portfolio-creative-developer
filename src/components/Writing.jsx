import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { opensource, posts } from "../data.js";

export default function Writing() {
  return (
    <section id="notes" aria-labelledby="notestitle" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <Reveal>
        <p className="font-mono text-sm text-accent">03 · notes and open source</p>
        <h2 id="notestitle" className="mt-2 text-4xl font-bold tracking-tight text-cream">
          Writing plus gifts to the commons
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#notes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ x: 6 }}
              className="cardring group flex items-center justify-between gap-4 rounded-card bg-panel p-5"
            >
              <div>
                <h3 className="text-lg font-semibold text-cream transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 text-muted">{post.note}</p>
                <p className="mt-2 font-mono text-xs text-muted">{post.meta}</p>
              </div>
              <span aria-hidden="true" className="font-mono text-xl text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          ))}
        </div>
        <div className="grid gap-4">
          {opensource.map((o, i) => (
            <motion.a
              key={o.title}
              href="#notes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="cardring rounded-card bg-accent p-6 text-accentink"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-widest">Open source</p>
              <h3 className="mt-2 font-mono text-xl font-semibold">{o.title}</h3>
              <p className="mt-1 text-sm leading-relaxed">{o.note}</p>
              <p className="mt-3 font-mono text-xs">{o.meta}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

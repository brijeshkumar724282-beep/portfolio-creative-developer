import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { terminalLines } from "../data.js";

export default function TerminalCard() {
  const [lineCount, setLineCount] = useState(1);
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersCalm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersCalm) {
      setLineCount(terminalLines.length);
      setCharCount(terminalLines[terminalLines.length - 1].cmd.length);
      setDone(true);
      return;
    }
    if (lineCount > terminalLines.length) {
      setDone(true);
      return;
    }
    const current = terminalLines[lineCount - 1];
    if (!current) {
      setDone(true);
      return;
    }
    if (charCount <= current.cmd.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 42);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineCount((l) => l + 1);
      setCharCount(0);
    }, 420);
    return () => clearTimeout(t);
  }, [lineCount, charCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="cardring overflow-hidden rounded-card bg-panel shadow-2xl"
      role="img"
      aria-label="Terminal card showing profile summary"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-panel2" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-panel2" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-muted">ada ~/folio</span>
      </div>
      <div className="min-h-[190px] space-y-3 p-5 font-mono text-sm leading-relaxed">
        {terminalLines.slice(0, lineCount).map((line, i) => {
          const isActive = i === lineCount - 1 && !done;
          const shown = isActive ? line.cmd.slice(0, charCount) : line.cmd;
          const showOut = done || i < lineCount - 1;
          return (
            <div key={line.cmd}>
              <p className="text-cream">
                <span className="mr-2 text-accent">$</span>
                <span className={isActive ? "caret" : ""}>{shown}</span>
              </p>
              {showOut && <p className="pl-5 text-muted">{line.out}</p>}
            </div>
          );
        })}
        {done && (
          <p className="text-cream">
            <span className="mr-2 text-accent">$</span>
            <span className="caret"> </span>
          </p>
        )}
      </div>
    </motion.div>
  );
}

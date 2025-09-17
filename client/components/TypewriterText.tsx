import { motion } from "framer-motion";

export default function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 2 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 18 } },
  };

  return (
    <motion.p className={className} variants={container} initial="hidden" animate="show" aria-live="polite">
      {letters.map((ch, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.p>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const QUOTES = [
  { q: "Blyst AI cut our decision time from days to minutes.", a: "VP Analytics, FinServe" },
  { q: "Fastest path to insights we’ve deployed.", a: "Head of Data, Commerce" },
  { q: "Compliance‑friendly and genuinely helpful.", a: "CISO, Healthcare" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mt-12 md:mt-16" aria-label="Testimonials">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-white/90">“{QUOTES[i].q}”</p>
            <p className="mt-3 text-white/60">— {QUOTES[i].a}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

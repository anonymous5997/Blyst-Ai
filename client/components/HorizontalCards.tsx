import { useState, useRef } from "react";
import { motion } from "framer-motion";
import InsightsModal from "@/components/InsightsModal";

const cards = [
  {
    id: "ai-strategy",
    title: "AI Strategy",
    subtitle: "Transformation for forward‑thinking enterprises",
    bg: "from-[#ff8a00]/30 to-[#9b5fff]/30",
  },
  {
    id: "genai",
    title: "Custom GenAI Solutions",
    subtitle: "Private, Secure and Reliable",
    bg: "from-[#9b5fff]/30 to-[#00d4ff]/30",
  },
  {
    id: "advisor",
    title: "AI Advisor",
    subtitle: "Ask anything in natural language",
    bg: "from-[#00d4ff]/30 to-[#ff8a00]/30",
  },
];

export default function HorizontalCards() {
  // You can remove useState and the modal component entirely if you don't need it for *any* card.
  // I will leave them here in case you use them elsewhere.
  const [open, setOpen] = useState(false); 
  const scroller = useRef<HTMLDivElement | null>(null);

  return (
    <section className="mt-10 md:mt-14" aria-label="Blyst AI cards">
      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((c, i) => (
          <motion.button
            key={c.id}
            type="button"
            aria-haspopup="dialog"
            aria-controls="insights-modal"
            // *** CHANGE IS HERE: Remove the entire onClick function or leave it empty ***
            onClick={() => {
              // This is now empty, so clicking the button does nothing (no blur, no redirect).
              // If you want it to navigate, you would use a router link instead of a button/onClick.
              // If you want to enable the modal for a *different* card, change the 'i' value.
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[32%] rounded-xl border border-white/10 bg-gradient-to-r ${c.bg} p-0 text-left hover:brightness-110 transition`}
          >
            <div className="rounded-xl bg-black/70 backdrop-blur p-5 md:p-6 h-full">
              <h3 className="text-xl md:text-2xl font-extrabold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-white/80 text-sm md:text-base">
                {c.subtitle}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* The modal is still present but will not open unless 'open' is set to true somewhere else */}
      <InsightsModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
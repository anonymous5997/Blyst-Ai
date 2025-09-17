import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterText from "@/components/TypewriterText";

export default function ExpandingCards() {
  const [open, setOpen] = useState(false);
  const [advance, setAdvance] = useState(false);

  const cards = [
    {
      title: "GenAI",
      text: "Conversational systems that understand context and intent.",
    },
    {
      title: "Intelligence",
      text: "Real-time insights that drive actions and outcomes.",
    },
    {
      title: "Automation",
      text: "From idea to impact with orchestrated workflows.",
    },
  ];

  return (
    <section aria-label="Interactive panels" className="mt-10 md:mt-16">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            layout
            className={`relative cursor-pointer select-none ${
              open ? (i === 1 ? "z-10" : "opacity-40 blur-[0.2px]") : ""
            }`}
            onClick={() => i === 1 && setOpen((v) => !v)}
          >
            <Card
              className={`bg-card/70 backdrop-blur border-white/10 overflow-hidden transition ${
                i === 1
                  ? "hover:shadow-[0_0_40px_rgba(155,95,255,0.2)]"
                  : "hover:shadow-[0_0_24px_rgba(0,212,255,0.15)]"
              }`}
            >
              <CardContent className="p-4 md:p-6">
                <motion.h3
                  layout
                  className="text-xl md:text-2xl font-semibold text-white"
                >
                  {c.title}
                </motion.h3>
                <p className="mt-2 text-white/70 hidden md:block">{c.text}</p>
                {i === 1 && (
                  <motion.div
                    layout
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(60%_60%_at_50%_50%, rgba(155,95,255,0.15), transparent), radial-gradient(40%_40%_at_70%_30%, rgba(0,212,255,0.12), transparent)",
                    }}
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && !advance && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mt-6 grid gap-4 md:grid-cols-3"
          >
            {["What we power", "How it adapts", "Proof of value"].map(
              (h, i) => (
                <Card
                  key={h}
                  className="bg-card/70 backdrop-blur border-white/10"
                >
                  <CardContent className="p-5 md:p-6">
                    <h4 className="text-white font-semibold">{h}</h4>
                    <TypewriterText
                      className="mt-2 text-sm text-white/70"
                      text={
                        i === 0
                          ? "Voice/chat, agentic workflows, and data copilots."
                          : i === 1
                            ? "Learns from your data and context; respects governance."
                            : "KPIs uplift, cycle time reduced, and happier users."
                      }
                    />
                  </CardContent>
                </Card>
              ),
            )}
            <div className="md:col-span-3 flex justify-center">
              <button
                onClick={() => setAdvance(true)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-white hover:bg-white/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {advance && (
          <motion.div
            key="convo"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-card/70 backdrop-blur border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 md:p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Conversational Intelligence
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="max-w-[80%] rounded-xl bg-white/5 px-4 py-3 text-white/90 shadow">
                      How can we cut onboarding time by 20%?
                    </div>
                    <div className="max-w-[85%] rounded-xl bg-gradient-to-r from-[#9b5fff]/10 to-[#00d4ff]/10 px-4 py-3 text-white/90 shadow ml-auto">
                      Leverage guided flows + prefilled steps; estimated 24%
                      reduction based on similar teams.
                    </div>
                  </div>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"
                  >
                    <input
                      className="flex-1 bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none"
                      placeholder="Ask Blyst AI…"
                      aria-label="Ask Blyst AI"
                    />
                    <button className="rounded-md bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition">
                      Send
                    </button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

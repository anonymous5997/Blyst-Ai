import { motion } from "framer-motion";
import { Brain, ShieldCheck, Zap, BarChart3, Gauge, Lock } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "GenAI Insights",
    desc: "Understand intent and surface answers in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    desc: "Governed access, zero data duplication.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "GPU‑accelerated pipelines for sub‑second responses.",
  },
  {
    icon: BarChart3,
    title: "Business Impact",
    desc: "Tie insights to KPIs and measurable outcomes.",
  },
  {
    icon: Gauge,
    title: "Scales Effortlessly",
    desc: "Elastic architecture for global workloads.",
  },
  {
    icon: Lock,
    title: "Enterprise‑Ready",
    desc: "Compliance, auditability, and SSO integration.",
  },
];

export default function FeatureHighlights() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };
  return (
    <section className="mt-10 md:mt-14" aria-label="Feature highlights">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        Platform Advantages
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {items.map((it, i) => (
          <motion.div key={it.title} variants={item}>
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/70 backdrop-blur p-5 md:p-6 transition-shadow hover:shadow-[0_0_42px_rgba(0,212,255,0.22)]">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(60%_60%_at_50%_50%, rgba(155,95,255,0.12), transparent), radial-gradient(40%_40%_at_70%_30%, rgba(0,212,255,0.10), transparent)",
                }}
              />
              <div className="relative z-10 flex items-start gap-3">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 8 }}
                  className="rounded-lg bg-white/10 p-2 text-white"
                >
                  <it.icon className="size-5" />
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

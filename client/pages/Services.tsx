import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  BarChart3,
  Brain,
  Search,
  LineChart,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance, responsive web apps with modern stacks." },
  { icon: Bot, title: "GenAI Solutions", desc: "Integrate conversational AI and automation seamlessly." },
  { icon: BarChart3, title: "Insights from Data", desc: "Transform raw data into actionable intelligence." },
  { icon: Brain, title: "Custom AI/ML Models", desc: "Tailored models built for your domain and goals." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Drive discoverability and growth across channels." },
  { icon: LineChart, title: "Revenue Analysis", desc: "Track and optimize revenue with real-time dashboards." },
  { icon: Activity, title: "Business Intelligence", desc: "End-to-end BI with secure pipelines and reports." },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gradient">Services</h1>
      <p className="mt-3 text-white/70 max-w-2xl">Expertise across full-stack engineering and applied AI to accelerate outcomes.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Card className="bg-card/70 backdrop-blur border-white/10 hover:border-white/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <s.icon className="size-6 text-white/90" />
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">{s.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Detailed sections */}
      <div className="mt-12 space-y-10">
        {services.map((s, i) => (
          <motion.section
            key={`detail-${s.title}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">{s.title}</h2>
            <p className="mt-2 text-white/70 max-w-3xl">{s.desc} We deliver with secure patterns, strong observability, and measurable ROI.</p>
            <ul className="mt-4 grid gap-2 text-white/80 sm:grid-cols-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-secondary" />Rapid discovery and architecture blueprint</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-secondary" />Production‑ready implementations and handover</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-secondary" />Compliance‑aware workflows (PII, SOC2, GDPR)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-secondary" />Dashboards, alerts, and post‑launch iteration</li>
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  );
}

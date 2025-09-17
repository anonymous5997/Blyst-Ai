import { motion } from "framer-motion";
import { Globe, Bot, BarChart3, Brain, Search, LineChart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Globe, title: "Web Development", desc: "Responsive, performant web apps and sites." },
  { icon: Bot, title: "GenAI Solutions", desc: "Conversational AI, agents, and automation." },
  { icon: BarChart3, title: "Insights from Data", desc: "Decisions powered by real-time analytics." },
  { icon: Brain, title: "Custom AI/ML Models", desc: "Tailored models for your domain." },
  { icon: Search, title: "SEO & Digital Marketing", desc: "Acquire and grow with measurable ROI." },
  { icon: LineChart, title: "Revenue Analysis", desc: "Model revenue and optimize funnels." },
  { icon: Activity, title: "Business Intelligence", desc: "End-to-end BI and dashboards." },
];

export default function ServicesHomeSection() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };
  return (
    <section className="mt-12 md:mt-16" aria-label="Blyst AI Services">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold text-white">Our Services</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {services.map((s) => (
          <motion.div key={s.title} variants={item}>
            <Card className="bg-card/70 backdrop-blur border-white/10 hover:border-white/20 transition-colors shadow-[0_0_24px_rgba(0,212,255,0.08)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <s.icon className="size-6" />
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">{s.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

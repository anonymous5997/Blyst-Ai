import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  BarChart3,
  Brain,
  Search,
  LineChart,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance, responsive web apps with modern stacks.",
  },
  {
    icon: Bot,
    title: "GenAI Solutions",
    desc: "Integrate conversational AI and automation seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Insights from Data",
    desc: "Transform raw data into actionable intelligence.",
  },
  {
    icon: Brain,
    title: "Custom AI/ML Models",
    desc: "Tailored models built for your domain and goals.",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Drive discoverability and growth across channels.",
  },
  {
    icon: LineChart,
    title: "Revenue Analysis",
    desc: "Track and optimize revenue with real-time dashboards.",
  },
  {
    icon: Activity,
    title: "Business Intelligence",
    desc: "End-to-end BI with secure pipelines and reports.",
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gradient">
        Services
      </h1>
      <p className="mt-3 text-white/70 max-w-2xl">
        Expertise across full-stack engineering and applied AI to accelerate
        outcomes.
      </p>

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
    </div>
  );
}

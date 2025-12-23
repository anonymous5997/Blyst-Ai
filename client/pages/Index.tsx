import { Card, CardContent } from "@/components/ui/card";
import BrandWave from "@/components/BrandWave";
import TypewriterText from "@/components/TypewriterText";
import ExpandingCards from "@/components/ExpandingCards";
import CognitxHeroClone from "@/components/CognitxHeroClone";
import HorizontalCards from "@/components/HorizontalCards";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import ProductDemo from "@/components/sections/ProductDemo";
import TrustedBar from "@/components/sections/TrustedBar";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Counters from "@/components/sections/Counters";
import CTA from "@/components/sections/CTA";
import FloatingAsk from "@/components/sections/FloatingAsk";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const insights = [
    "Blyst AI is listening and aligning to your goal…",
    "Parsing live metrics and knowledge graphs…",
    "Opportunity detected: reduce drop‑off with guided onboarding.",
    "Confidence 0.82 — pilot in Segment A for 7 days.",
    "Next best step: auto‑generate workflow and stakeholders.",
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <section className="relative flex flex-col items-center justify-center gap-0 sm:gap-4 md:gap-6 py-6 sm:py-8 md:py-12 px-4 sm:px-0 min-h-[600px] sm:min-h-auto">
        <div className="flex-1 flex items-center justify-center">
          <BrandWave size={isMobile ? 200 : 340} />
        </div>
        <div className="text-center px-2 sm:px-0 max-w-2xl">
          <h1 className="text-base sm:text-3xl md:text-4xl font-extrabold text-white leading-tight sm:leading-tight">
            Cognitive Interfaces for Business
          </h1>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
            Understand intent. Generate insight. Orchestrate action.
          </p>
        </div>
        <a
          href="#clone-hero"
          className="mt-4 sm:mt-3 inline-flex items-center justify-center rounded-full border border-white/30 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition whitespace-nowrap"
        >
          VIEW MORE
        </a>
      </section>

      <section aria-label="AI Insights" className="mt-4 sm:mt-6 md:mt-8">
        <InsightsGrid insights={insights} />
      </section>

      <CognitxHeroClone />

      <HorizontalCards />

      <ExpandingCards />

      <FeatureHighlights />
      <ProductDemo />
      <TrustedBar />
      <WhyChoose />
      <Testimonials />
      <Counters />
      <CTA />

      <FloatingAsk />
    </div>
  );
}

function InsightsGrid({ insights }: { insights: string[] }) {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {insights.map((line, i) => (
        <motion.div key={i} variants={item} className="h-full">
          <Card className="bg-card/70 backdrop-blur border-white/10 shadow-[0_0_24px_rgba(155,95,255,0.12)] h-full">
            <CardContent className="p-5 md:p-6 h-full flex flex-col">
              <TypewriterText className="text-white/90 leading-[1.5] break-words whitespace-normal" text={line} />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

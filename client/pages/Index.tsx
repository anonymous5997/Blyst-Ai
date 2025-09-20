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

export default function Index() {
  const insights = [
    "Blyst AI is listening and aligning to your goal…",
    "Parsing live metrics and knowledge graphs…",
    "Opportunity detected: reduce drop‑off with guided onboarding.",
    "Confidence 0.82 — pilot in Segment A for 7 days.",
    "Next best step: auto‑generate workflow and stakeholders.",
  ];

  return (
    <div className="mx-auto max-w-7xl">
      {/* CORRECTION APPLIED HERE: Added 'mx-auto' to the section to ensure it is centered on the page */}
      <section className="relative flex flex-col items-center gap-4 md:gap-6 pt-8 md:pt-12 mx-auto">
        
        {/* The BrandWave component likely contains the animated ring and BLYST AI text. 
            Its content needs to be rendered responsively to look high-quality. */}
        <BrandWave size={340} />
        
        <div className="text-center mx-auto"> {/* Added 'mx-auto' here as well for good measure */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">
            Cognitive Interfaces for Business
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/70">
            Understand intent. Generate insight. Orchestrate action.
          </p>
        </div>
        <a
          href="#clone-hero"
          className="mt-3 inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
          VIEW MORE
        </a>
      </section>
      {/* ... rest of the index.tsx component remains the same ... */}
      <section aria-label="AI Insights" className="mt-4 md:mt-6">
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
        <motion.div key={i} variants={item}>
          <Card className="bg-card/70 backdrop-blur border-white/10 shadow-[0_0_24px_rgba(155,95,255,0.12)]">
            <CardContent className="p-5 md:p-6">
              <TypewriterText className="text-white/90" text={line} />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
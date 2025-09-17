import { Card, CardContent } from "@/components/ui/card";
import BrandWave from "@/components/BrandWave";
import TypewriterText from "@/components/TypewriterText";
import ExpandingCards from "@/components/ExpandingCards";

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
      <section className="relative grid place-items-center py-10 md:py-16">
        <BrandWave size={360} />
      </section>

      <section aria-label="Results" className="mt-2 md:mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {insights.map((line, i) => (
            <Card key={i} className="bg-card/70 backdrop-blur border-white/10">
              <CardContent className="p-5 md:p-6">
                <TypewriterText className="text-white/90" text={line} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ExpandingCards />
    </div>
  );
}

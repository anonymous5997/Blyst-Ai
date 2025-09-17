import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gradient">
        About Us
      </h1>
      <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
        <Card className="bg-card/70 backdrop-blur border-white/10">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70">
            We engineer immersive, intelligent experiences that elevate business
            capabilities and user delight.
          </CardContent>
        </Card>
        <Card className="bg-card/70 backdrop-blur border-white/10">
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70">
            A future where AI collaborates with every team, product, and
            workflow—beautifully and responsibly.
          </CardContent>
        </Card>
        <Card className="bg-card/70 backdrop-blur border-white/10">
          <CardHeader>
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70">
            World‑class engineers, designers, and data scientists building
            solutions with measurable impact.
          </CardContent>
        </Card>
      </div>
      <p className="mt-10 text-sm text-white/50">
        Want this page tailored to your content? Ask to populate the About page
        with your exact copy and visuals.
      </p>
    </div>
  );
}

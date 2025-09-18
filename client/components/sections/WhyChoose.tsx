export default function WhyChoose() {
  const points = [
    { h: "Accuracy", p: "Grounded answers with transparent sources." },
    { h: "Compliance", p: "SOC2-ready patterns, audit trails, SSO." },
    { h: "Ease of Use", p: "Natural language across apps and data." },
    { h: "Integrations", p: "Connect warehouses, SaaS, and internal tools." },
  ];
  return (
    <section className="mt-12 md:mt-16" aria-label="Why choose Blyst AI">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        Why Choose Blyst AI
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {points.map((x) => (
          <div
            key={x.h}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80"
          >
            <h3 className="text-white font-semibold">{x.h}</h3>
            <p className="mt-1 text-sm">{x.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

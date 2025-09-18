export default function TrustedBar() {
  const logos = ["ACME", "NovaTech", "DataCore", "Quantum", "Synapse", "Vertex"];
  return (
    <section className="mt-8 md:mt-12" aria-label="Trusted by">
      <p className="text-center text-xs uppercase tracking-widest text-white/50">Trusted by</p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {logos.map((l) => (
          <div key={l} className="text-white/50 hover:text-white transition-colors text-sm md:text-base tracking-wide">
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}

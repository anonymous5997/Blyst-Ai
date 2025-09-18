export default function CTA() {
  return (
    <section className="mt-12 md:mt-16" aria-label="Call to action">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#9b5fff]/20 via-[#00d4ff]/20 to-[#ff8a00]/20 p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">
          Ready to accelerate with Blyst AI?
        </h3>
        <p className="mt-2 text-white/70">
          Request a demo and see how quickly your team unlocks insights.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
        >
          Request a Demo
        </a>
      </div>
    </section>
  );
}

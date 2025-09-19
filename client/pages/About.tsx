import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <div
      className="mx-auto max-w-none h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth"
      aria-label="About Blyst AI"
    >
      {/* Section 1: Hero */}
      <section className="snap-start h-svh grid place-items-center bg-black">
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="text-center text-4xl md:text-7xl font-extrabold text-white leading-[0.95] drop-shadow-[0_0_32px_rgba(155,95,255,0.25)]"
        >
          THE TEAM BEHIND
          <span className="block text-gradient">BLYST AI</span>
        </motion.h1>
      </section>

      {/* Section 2: Statement */}
      <section className="snap-start h-svh grid place-items-center px-6 bg-black">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-[960px] text-center text-white/85 text-xl md:text-3xl leading-tight"
        >
          COMBINES DEEP AI KNOWLEDGE WITH HANDS‑ON EXPERIENCE BUILDING SCALABLE, SECURE, AND IMPACTFUL AI SYSTEMS FOR ENTERPRISES.
        </motion.p>
      </section>

      {/* Section 3: Split */}
      <section className="snap-start h-svh grid content-center px-6 bg-black">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            ACCELERATE YOUR ENTERPRISE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease }}
            className="text-lg md:text-2xl text-white/80"
          >
            GET AI INSIGHTS IN PLAIN NATURAL LANGUAGE
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="mx-auto mt-10 flex max-w-6xl justify-center"
        >
          <a
            href="/contact"
            className="rounded-full bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            CONTACT US
          </a>
        </motion.div>
      </section>

      {/* Section 4: Team & Culture */}
      <section className="snap-start h-svh px-6 grid content-center bg-black">
        <div className="mx-auto max-w-6xl">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease }}
            className="text-white text-2xl md:text-3xl font-semibold"
          >
            Team & Culture
          </motion.h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
            ].map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, x: idx % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease }}
                className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3]"
                aria-label="Team photo"
              >
                <img src={src} alt="Team" className="h-full w-full object-cover" />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity" style={{background:"radial-gradient(50%_60%_at_50%_40%, rgba(155,95,255,0.18), transparent), radial-gradient(40%_40%_at_70%_30%, rgba(0,212,255,0.15), transparent)"}} />
              </motion.div>
            ))}
            {[0,1,2,4,5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 20 : -20, y: i % 3 === 0 ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 aspect-[4/3]"
                aria-label="Team photo"
              >
                <div className="absolute inset-0" style={{background:"radial-gradient(50%_60%_at_50%_40%, rgba(155,95,255,0.18), transparent), radial-gradient(40%_40%_at_70%_30%, rgba(0,212,255,0.15), transparent)"}} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="snap-start h-svh grid place-items-center px-6 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">LET'S TALK</h2>
          <a href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition">Start a Conversation</a>
        </motion.div>
      </section>
    </div>
  );
}

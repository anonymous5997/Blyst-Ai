import { motion } from "framer-motion";

export default function CognitxHeroClone() {
  return (
    <section id="clone-hero" className="mt-12 md:mt-16">
      <div className="rounded-2xl bg-white text-black px-6 md:px-10 py-10 md:py-14 shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight"
            >
              <span className="block">BLYST AI</span>
              <span className="block">ADVISOR</span>
              <span className="block">FOR</span>
              <span className="block">DATA</span>
              <span className="block">ANALYTICS</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-sm md:text-base text-neutral-700 max-w-prose"
            >
              Our flagship AI advisor for data analytics turns complex business
              data into actionable insight. Ask natural-language questions and
              get accurate, instant answers to make faster, data‑driven
              decisions.
            </motion.p>
          </div>

          <div className="order-1 md:order-2 grid place-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="relative h-40 w-40 md:h-56 md:w-56 rounded-full border border-black/10"
            >
              <span
                className="absolute inset-0 m-auto block h-4 w-4 rounded-full border-2 border-black/60"
                aria-hidden
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

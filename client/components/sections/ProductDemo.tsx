import { motion } from "framer-motion";

export default function ProductDemo() {
  const msgs = [
    "How are signups trending?",
    "+18% WoW. North America leads; APAC flat.",
    "Recommend: launch guided flow variant for APAC.",
  ];
  return (
    <section className="mt-10 md:mt-14" aria-label="Product demo">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        <div className="aspect-[16/9] p-4 md:p-8 grid">
          <div className="place-self-center w-full max-w-3xl rounded-2xl border border-white/10 bg-black/70 p-4 md:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <h3 className="text-white/90 font-semibold">Blyst AI — Demo</h3>
            <div className="mt-4 space-y-2">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.4 }}
                  className={`${i % 2 ? "ml-auto bg-gradient-to-r from-[#9b5fff]/10 to-[#00d4ff]/10" : "bg-white/10"} max-w-[85%] rounded-xl px-4 py-2 text-white/90`}
                >
                  {m}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

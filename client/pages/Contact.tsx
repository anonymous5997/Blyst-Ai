import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";

export default function Contact() {
  const [captcha, setCaptcha] = useState(0);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(captcha === 4);
  }, [captcha]);

  return (
    <div className="h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Panel 1 */}
      <section className="snap-start h-svh grid place-items-center bg-black text-center">
        <div>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="text-4xl md:text-7xl font-extrabold text-white">LET'S CONNECT</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.4 }} className="mt-2 text-white/70">CONTACT US</motion.p>
          <div className="mt-8 flex justify-center">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} aria-hidden>
              <ChevronDown className="size-6 text-white/70" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Panel 2 */}
      <section className="snap-start h-svh grid content-center bg-black px-6">
        <div className="mx-auto w-full max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-extrabold text-white">LET'S TALK</motion.h2>
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-2 text-white/70">GET IN TOUCH</motion.p>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_40px_rgba(155,95,255,0.15)]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative md:col-span-1">
                <input required id="name" name="name" placeholder=" " className="peer w-full rounded-lg bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent outline-none transition focus:ring-2 focus:ring-secondary/60 border border-white/10" />
                <label htmlFor="name" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">WHAT'S YOUR NAME</label>
              </div>
              <div className="relative md:col-span-1">
                <input required id="email" type="email" name="email" placeholder=" " className="peer w-full rounded-lg bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent outline-none transition focus:ring-2 focus:ring-secondary/60 border border-white/10" />
                <label htmlFor="email" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">YOUR EMAIL</label>
              </div>
              <div className="relative md:col-span-2">
                <textarea required id="message" name="message" rows={5} placeholder=" " className="peer w-full rounded-lg bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent outline-none transition focus:ring-2 focus:ring-secondary/60 border border-white/10" />
                <label htmlFor="message" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">WHAT WOULD YOU LIKE TO TELL US?</label>
              </div>
              <div className="md:col-span-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>1 + 3 =</span>
                  <input inputMode="numeric" className="w-16 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white focus:outline-none" onChange={(e)=>setCaptcha(parseInt(e.target.value||"0",10))} aria-label="Captcha" />
                </div>
                <button disabled={!valid} className="rounded-lg bg-white/10 px-6 py-2 text-white backdrop-blur hover:bg-white/20 transition shadow-[0_0_24px_rgba(0,212,255,0.15)] disabled:opacity-50">SUBMIT</button>
              </div>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80">
            <div className="flex items-center gap-2"><Mail className="size-4" /> contact@blyst.ai</div>
            <div className="flex items-center gap-2"><MapPin className="size-4" /> 123 Your Street, Your City, Country</div>
            <div className="flex items-center gap-2"><Phone className="size-4" /> +1 (555) 123‑4567</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

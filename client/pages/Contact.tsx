import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gradient">Contact</h1>
      <p className="mt-2 text-white/70">Tell us about your goals. We’ll respond quickly.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_40px_rgba(155,95,255,0.15)]"
      >
        <div className="grid gap-5">
          <div className="relative">
            <input
              required
              id="name"
              name="name"
              placeholder=" "
              className="peer w-full rounded-lg bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent outline-none transition focus:ring-2 focus:ring-secondary/60 border border-white/10"
            />
            <label htmlFor="name" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Name
            </label>
          </div>
          <div className="relative">
            <input
              required
              id="email"
              type="email"
              name="email"
              placeholder=" "
              className="peer w-full rounded-lg bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent outline-none transition focus:ring-2 focus:ring-secondary/60 border border-white/10"
            />
            <label htmlFor="email" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder=" "
              className="peer w-full rounded-lg bg-white/5 px-4 pt-5 pb-2 text-white placeholder-transparent outline-none transition focus:ring-2 focus:ring-secondary/60 border border-white/10"
            />
            <label htmlFor="message" className="pointer-events-none absolute left-3 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Message
            </label>
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20 transition shadow-[0_0_24px_rgba(0,212,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <span className="text-sm font-semibold tracking-wide">Send</span>
          </button>
        </div>
        {sent && (
          <p className="mt-4 text-sm text-secondary">Thanks! We’ll get back to you shortly.</p>
        )}
      </form>

      <p className="mt-6 text-sm text-white/50">Connect this form to your backend or automation tool when ready.</p>
    </div>
  );
}

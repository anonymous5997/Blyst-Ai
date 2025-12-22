import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingAsk() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.documentElement.classList.add("modal-open");
    else document.documentElement.classList.remove("modal-open");
  }, [open]);

  return (
    <>
      <button
        className="fixed bottom-5 right-5 z-[190] hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9b5fff] via-[#00d4ff] to-[#ff8a00] px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(0,212,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <MessageSquare className="size-4" /> Ask Blyst AI
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[195] bg-black/70 backdrop-blur-[12px]"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="absolute bottom-6 right-6 w-[92%] max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-4 text-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white/90 font-semibold">
                Chat with Blyst AI
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <div className="max-w-[85%] rounded-xl bg-white/10 px-3 py-2">
                  How can I increase trial conversions?
                </div>
                <div className="max-w-[90%] rounded-xl bg-gradient-to-r from-[#9b5fff]/10 to-[#00d4ff]/10 px-3 py-2 ml-auto">
                  Try progressive profiling + prefilled fields; expect +12–18%.
                </div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 flex items-center gap-2"
              >
                <input
                  className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 placeholder-white/50 focus:outline-none"
                  placeholder="Ask Blyst AI…"
                />
                <button className="rounded-md bg-white/10 px-3 py-2 hover:bg-white/20">
                  Send
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

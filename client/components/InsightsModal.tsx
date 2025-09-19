import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function InsightsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("modal-open");
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("modal-open");
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          id="insights-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-[14px] flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Natural Language insights"
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900 text-white shadow-[0_32px_120px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6">
              <div className="mb-4 rounded-lg border border-white/10 bg-neutral-950 p-2">
                <div className="rounded-md bg-gradient-to-r from-[#9b5fff]/40 via-[#00d4ff]/40 to-[#ff8a00]/40 px-3 py-2 text-sm font-semibold">
                  Natural Language insights
                </div>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Personalized, contextualized, anticipatory analytics.</li>
                <li>
                  Privacy & security: no data duplication; governed access.
                </li>
                <li>Unified insights across sources; no data silos.</li>
                <li>
                  Deep analytics: root cause, hidden patterns, predicted trends.
                </li>
              </ul>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { MessageSquare, X } from "lucide-react"; 
import { AnimatePresence, motion } from "framer-motion";

// Corrected import path (assuming it now works for your file structure)
import BlystAIChat from "../BlystAIchat"; // Assuming ../ui/BlystAIChat based on previous successful path

export default function FloatingAsk() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevents background scrolling when the modal is open
    if (open) document.documentElement.classList.add("modal-open");
    else document.documentElement.classList.remove("modal-open");
    
    // Cleanup function
    return () => document.documentElement.classList.remove("modal-open");
  }, [open]);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-8 sm:bottom-5 right-5 z-[999] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9b5fff] via-[#00d4ff] to-[#ff8a00] px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-[0_12px_40px_rgba(0,212,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white hover:shadow-[0_16px_48px_rgba(0,212,255,0.45)] transition-shadow"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <MessageSquare className="size-3 sm:size-4" /> <span className="hidden sm:inline">Ask Blyst AI</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* 🛑 FIX APPLIED HERE: backdrop-blur-[12px] has been removed. 
                 The overlay is now a solid translucent black. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[195] bg-black/70" // <- REMOVED backdrop-blur-[12px]
              onClick={() => setOpen(false)} // Click outside to close
              role="dialog"
              aria-modal
            />

            {/* The chat window remains sharp and is placed above the overlay. */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="fixed bottom-6 right-6 w-[92%] max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-4 shadow-xl z-[200]"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Header & Close Button */}
              <div className="flex justify-between items-center mb-2">
                 <h3 className="text-white/90 font-semibold">
                    Conversational Intelligence (BLYST AI)
                 </h3>
                 <button 
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                    aria-label="Close Chat"
                 >
                    <X className="size-5" />
                 </button>
              </div>

              {/* Render your working chat component */}
              <BlystAIChat /> 
              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

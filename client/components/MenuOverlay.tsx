import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "SERVICES" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="relative">
      <button
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={`menu-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
            id={`menu-${id}`}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="Primary" className="text-center">
                <ul className="space-y-6 md:space-y-8">
                  {nav.map((item, i) => {
                    const active = pathname === item.to;
                    return (
                      <motion.li
                        key={item.to}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.35 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={`relative text-3xl md:text-5xl font-extrabold tracking-tight ${
                            active ? "text-white" : "text-white/60 hover:text-white"
                          }`}
                        >
                          {item.label}
                          {active && (
                            <span className="absolute -bottom-2 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#9b5fff] via-[#00d4ff] to-[#ff8a00] shadow-[0_0_16px_rgba(0,212,255,0.5)]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

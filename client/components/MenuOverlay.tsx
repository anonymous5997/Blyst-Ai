import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const id = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("menu-open");
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const nav = [
    { to: "/", label: "HOME" },
    { to: "/services", label: "SERVICE" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT US" },
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[180] bg-black/70 backdrop-blur-[16px] overflow-y-auto"
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
            id={`menu-${id}`}
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24"
              onClick={(e) => e.stopPropagation()}
            >
              <nav aria-label="Primary" className="w-full max-w-4xl">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                  className="grid grid-rows-4 gap-8 md:gap-10 justify-items-center"
                >
                  {nav.map((item) => {
                    const active = pathname === item.to;
                    return (
                      <motion.li key={item.to} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={`relative font-extrabold tracking-tight text-[clamp(32px,6vw,64px)] ${
                            active ? "text-white" : "text-white/60 hover:text-white"
                          }`}
                        >
                          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                            {item.label}
                          </motion.span>
                          {active && (
                            <span className="absolute -bottom-3 left-1/2 h-[3px] w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#9b5fff] via-[#00d4ff] to-[#ff8a00] shadow-[0_0_20px_rgba(0,212,255,0.6)]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

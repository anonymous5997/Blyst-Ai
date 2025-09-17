import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function PageRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrap><Index /></PageWrap>} />
        <Route path="/services" element={<PageWrap><Services /></PageWrap>} />
        <Route path="/about" element={<PageWrap><About /></PageWrap>} />
        <Route path="/contact" element={<PageWrap><Contact /></PageWrap>} />
        <Route path="*" element={<PageWrap><NotFound /></PageWrap>} />
      </Routes>
    </AnimatePresence>
  );
}

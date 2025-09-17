import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gradient mb-3">404</h1>
        <p className="text-white/70 mb-4">This page does not exist.</p>
        <a href="/" className="inline-block rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

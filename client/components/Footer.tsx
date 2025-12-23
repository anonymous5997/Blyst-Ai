export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 pb-10 text-white/70">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <form className="flex w-full md:w-auto items-center gap-2">
            {/* <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 md:w-72 rounded-md border border-white/10 bg-white/5 px-3 py-2 placeholder-white/50 focus:outline-none"
              aria-label="Email for newsletter"
            />
            <button
              className="rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20"
              aria-label="Subscribe"
            >
              Subscribe
            </button> */}
          </form>
          <nav className="text-sm flex gap-4">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/services" className="hover:text-white">
              Service
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Blyst AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

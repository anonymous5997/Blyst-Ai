import { useEffect, useRef, useState } from "react";

function useCount(to: number, duration = 2000) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return { n, ref } as const;
}

export default function Counters() {
  const a = useCount(10000);
  const b = useCount(999); // 99.9% as 999/10
  const c = useCount(120);
  return (
    <section className="mt-12 md:mt-16" aria-label="Achievements">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
        <div ref={a.ref} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-3xl font-extrabold">{a.n.toLocaleString()}+</div>
          <p className="mt-1 text-white/70 text-sm">data points analyzed daily</p>
        </div>
        <div ref={b.ref} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-3xl font-extrabold">{(b.n/10).toFixed(1)}%</div>
          <p className="mt-1 text-white/70 text-sm">uptime</p>
        </div>
        <div ref={c.ref} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="text-3xl font-extrabold">{c.n}+</div>
          <p className="mt-1 text-white/70 text-sm">global enterprise customers</p>
        </div>
      </div>
    </section>
  );
}

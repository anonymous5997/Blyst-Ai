import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
}

export default function Particles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let width = (canvas.width = canvas.clientWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: Particle[] = [];
    const max = Math.min(120, Math.floor((width / window.devicePixelRatio) * (height / window.devicePixelRatio) / 8000));

    function spawn() {
      particles.length = 0;
      for (let i = 0; i < max; i++) {
        particles.push({
          x: Math.random() * (width / window.devicePixelRatio),
          y: Math.random() * (height / window.devicePixelRatio),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: Math.random() * 1.4 + 0.4,
          hue: Math.random() * 360,
        });
      }
    }

    spawn();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5 || p.x > (width / window.devicePixelRatio) + 5) p.vx *= -1;
        if (p.y < -5 || p.y > (height / window.devicePixelRatio) + 5) p.vy *= -1;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        const color1 = `hsla(${p.hue}, 90%, 60%, 0.8)`;
        const color2 = `hsla(${(p.hue + 60) % 360}, 90%, 60%, 0)`;
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        ctx.fillStyle = gradient as any;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.hue = (p.hue + 0.1) % 360;
      }
      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      spawn();
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={"pointer-events-none absolute inset-0 h-full w-full " + className}
      aria-hidden="true"
    />
  );
}

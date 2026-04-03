import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const N = 60;
const CONNECTION_DIST = 150;

function makeStartPositions() {
  return Array.from({ length: N }, () => ({
    x: Math.random(),
    y: Math.random(),
  }));
}

function makeEndPositions() {
  const clusters = [
    { cx: 0.2, cy: 0.3 },
    { cx: 0.8, cy: 0.2 },
    { cx: 0.5, cy: 0.6 },
    { cx: 0.15, cy: 0.75 },
    { cx: 0.85, cy: 0.7 },
  ];
  return Array.from({ length: N }, (_, i) => {
    const c = clusters[i % clusters.length];
    return {
      x: c.cx + (Math.random() - 0.5) * 0.18,
      y: c.cy + (Math.random() - 0.5) * 0.18,
    };
  });
}

export const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const progressRef = { value: 0 };

    const startPos = makeStartPositions();
    const endPos = makeEndPositions();

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        progressRef.value = self.progress;
      },
    });

    let rafId;
    const lerp = (a, b, t) => a + (b - a) * t;

    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const p = progressRef.value;

      const pts = startPos.map((s, i) => ({
        x: lerp(s.x, endPos[i].x, p) * width,
        y: lerp(s.y, endPos[i].y, p) * height,
      }));

      // Draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = 0.15 * (1 - dist / CONNECTION_DIST);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const pt of pts) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96, 165, 250, 0.4)";
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      trigger.kill();
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

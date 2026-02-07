import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  end,
  duration = 1500,
  start = 0,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(start);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          animate();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <span ref={ref} style={{ fontWeight: "semibold", fontSize: "60px" }}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0,0,0)";
    if (direction === "up") return "translate3d(0,40px,0)";
    if (direction === "down") return "translate3d(0,-40px,0)";
    if (direction === "left") return "translate3d(40px,0,0)";
    if (direction === "right") return "translate3d(-40px,0,0)";
    return "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "opacity 0.6s ease " + delay + "ms, transform 0.6s ease " + delay + "ms",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

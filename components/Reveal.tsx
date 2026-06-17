"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** delay in ms before the animation starts */
  delay?: number;
  /** translate distance in px */
  y?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Lightweight, dependency-free scroll-reveal using IntersectionObserver.
 * Respects prefers-reduced-motion automatically (handled via CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    // If the element is already within the viewport on mount (e.g. above the
    // fold / hero), reveal it right away so content never stays hidden while
    // waiting for a scroll event to trigger the observer.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedContainer({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
  threshold = 0.1,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, isVisible]); // ← Added isVisible to prevent retrigger

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "scale-in": "animate-scale-in",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? `opacity-100 ${animationClasses[animation]}` : "opacity-0"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

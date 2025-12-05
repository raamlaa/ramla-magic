"use client";

import { useState, useEffect, useMemo } from "react";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  style?: React.CSSProperties;
  initialDelay?: number;
}

export function MorphingText({
  texts,
  className = "",
  style = {},
  initialDelay = 3000,
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const textsLength = useMemo(() => texts.length, [texts]);

  useEffect(() => {
    // Wait for initial delay before starting the morphing
    const initialTimeout = setTimeout(() => {
      setHasStarted(true);
    }, initialDelay);

    return () => clearTimeout(initialTimeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % textsLength);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [textsLength, hasStarted]);

  return (
    <span
      className={`morphing-text ${isAnimating ? "morphing" : ""} ${className}`}
      style={style}
    >
      {texts[currentIndex]}
      <style jsx>{`
        .morphing-text {
          display: inline-block;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .morphing-text.morphing {
          filter: blur(8px);
          opacity: 0.6;
          transform: scale(0.98);
        }
      `}</style>
    </span>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
  beforeImage,
  afterImage,
  alt = "Comparison",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;

    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background) */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={afterImage}
          alt={`${alt} - After`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 960px"
          priority
        />
      </div>

      {/* Before Image (Overlay with clip) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={`${alt} - Before`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 960px"
          priority
        />
      </div>

      {/* Slider Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${sliderPosition}%`,
          width: "4px",
          height: "100%",
          backgroundColor: "white",
          transform: "translateX(-50%)",
          boxShadow: "0 0 8px rgba(0,0,0,0.5)",
          pointerEvents: "none",
        }}
      >
        {/* Slider Handle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "ew-resize",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          padding: "4px 12px",
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          pointerEvents: "none",
        }}
      >
        BEFORE
      </div>
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          padding: "4px 12px",
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          pointerEvents: "none",
        }}
      >
        AFTER
      </div>
    </div>
  );
};

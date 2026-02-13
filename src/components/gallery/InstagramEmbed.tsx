"use client";

import { useEffect, useRef, useState } from "react";

interface InstagramEmbedProps {
  url: string;
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Clean URL: remove query params and trailing slash, then append /embed
  const cleanUrl = url.split("?")[0].replace(/\/$/, "");
  const embedUrl = `${cleanUrl}/embed/captioned/`;

  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        (window as any).instgrm?.Embeds?.process();
      };
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="gallery-item instagram-embed-wrapper"
      style={{
        breakInside: "avoid",
        marginBottom: "var(--static-space-16)",
        borderRadius: "1.25rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        src={embedUrl}
        frameBorder="0"
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
        style={{
          width: "100%",
          minHeight: 500,
          border: "none",
          overflow: "hidden",
          borderRadius: "1.25rem",
          background: "transparent",
        }}
        onLoad={() => setLoaded(true)}
        title="Instagram post"
      />
      {loaded && (
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
            background: "rgba(0,0,0,0.5)",
            borderRadius: "0.5rem",
            padding: "4px 8px",
            color: "white",
            fontSize: "0.7rem",
            fontWeight: 600,
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          Instagram
        </div>
      )}
    </div>
  );
}

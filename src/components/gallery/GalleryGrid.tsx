"use client";

import Image from "next/image";
import { LinkedInEmbed } from "./LinkedInEmbed";

interface GalleryItem {
  type?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  url?: string;
  instagramUrl?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

function InstagramIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div
      className="gallery-grid"
      style={{
        width: "100%",
        columns: "3 260px",
        columnGap: "var(--static-space-16)",
      }}
    >
      {items.map((item, index) => {
        const type = item.type || "image";

        if (type === "linkedin" && item.url) {
          return <LinkedInEmbed key={item.url} url={item.url} />;
        }

        // Image (with optional Instagram link overlay)
        const imageContent = (
          <>
            <Image
              src={item.src!}
              alt={item.alt ?? `Gallery image ${index + 1}`}
              width={item.width ?? 1200}
              height={item.height ?? 800}
              className="gallery-image"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            {item.instagramUrl && (
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  background: "rgba(0,0,0,0.45)",
                  borderRadius: "0.6rem",
                  padding: "6px 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  transition: "background 200ms",
                }}
              >
                <InstagramIcon />
              </div>
            )}
          </>
        );

        if (item.instagramUrl) {
          return (
            <a
              key={item.src ?? index}
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
              style={{
                breakInside: "avoid",
                marginBottom: "var(--static-space-16)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                lineHeight: 0,
                display: "block",
                position: "relative",
                textDecoration: "none",
              }}
            >
              {imageContent}
            </a>
          );
        }

        return (
          <div
            key={item.src ?? index}
            className="gallery-item"
            style={{
              breakInside: "avoid",
              marginBottom: "var(--static-space-16)",
              borderRadius: "1.25rem",
              overflow: "hidden",
              lineHeight: 0,
            }}
          >
            {imageContent}
          </div>
        );
      })}
    </div>
  );
}

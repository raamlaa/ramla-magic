"use client";

interface LinkedInEmbedProps {
  url: string;
}

export function LinkedInEmbed({ url }: LinkedInEmbedProps) {
  return (
    <div
      className="gallery-item"
      style={{ breakInside: "avoid", marginBottom: "var(--static-space-16)" }}
    >
      <iframe
        src={url}
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Post"
        style={{
          borderRadius: "1.25rem",
          border: "none",
          overflow: "hidden",
          display: "block",
        }}
      />
    </div>
  );
}

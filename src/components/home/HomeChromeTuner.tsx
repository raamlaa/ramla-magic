"use client";

import { useEffect } from "react";

export function HomeChromeTuner() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-home-compact", "true");

    const apply = () => {
      const footer = document.querySelector("footer") as HTMLElement | null;
      const footerH = footer?.offsetHeight ?? 96;
      root.style.setProperty("--footer-h", `${footerH}px`);

      // Remove large layout paddings around the page content if present
      const padded = Array.from(
        document.querySelectorAll<HTMLElement>('[style*="var(--space-l)"]')
      );
      padded.forEach((el) => {
        el.style.padding = "0px";
      });
    };

    apply();
    const ro = new ResizeObserver(apply);
    const footer = document.querySelector("footer") as HTMLElement | null;
    if (footer) ro.observe(footer);
    window.addEventListener("resize", apply);

    return () => {
      root.removeAttribute("data-home-compact");
      window.removeEventListener("resize", apply);
      ro.disconnect();
    };
  }, []);

  return null;
}

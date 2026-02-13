"use client";

import { Media } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

export default function MasonryGrid() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {gallery.images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <Media
              priority={index < 10}
              sizes="(max-width: 768px) 80vw, 50vw"
              radius="m"
              src={image.src}
              alt={image.alt}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

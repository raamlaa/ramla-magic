import { Column, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, gallery as galleryContent, person } from "@/resources";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export async function generateMetadata() {
  return Meta.generate({
    title: galleryContent.title,
    description: galleryContent.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(galleryContent.title)}`,
    path: galleryContent.path,
  });
}

export default function Gallery() {
  const items = galleryContent.items ?? [];

  return (
    <Column maxWidth="xl" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={galleryContent.path}
        title={galleryContent.title}
        description={galleryContent.description}
        image={`/api/og/generate?title=${encodeURIComponent(galleryContent.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${galleryContent.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Text as="h1" variant="display-strong-s" marginBottom="l">
        {galleryContent.label}
      </Text>

      {items.length === 0 ? (
        <Text variant="body-default-m" onBackground="neutral-weak">
          No items configured yet.
        </Text>
      ) : (
        <GalleryGrid items={items} />
      )}
    </Column>
  );
}

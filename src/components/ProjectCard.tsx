"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import Image from "next/image";
import { ImageComparison } from "./ImageComparison";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  category?: string;
  tags?: string[];
  comparison?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  category,
  tags = [],
  priority = false,
  comparison = false,
}) => {
  return (
    <SmartLink
      fillWidth
      unstyled
      style={{ borderRadius: 'var(--radius-l)' }}
      href={content?.trim() ? href : link || href}>
      <Column
        fillWidth
        gap="l"
        radius="l"
        background="surface"
        border="neutral-alpha-weak"
        style={{
          transition: "all 0.3s ease",
          cursor: "pointer",
          overflow: "hidden",
          minHeight: "400px",
          height: "100%",
        }}
        className="project-card"
      >
        {images.length > 0 && (
          comparison && images.length >= 2 ? (
            <ImageComparison
              beforeImage={images[0]}
              afterImage={images[1]}
              alt={title}
            />
          ) : (
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              aspectRatio: '16 / 9',
              overflow: 'hidden',
            }}>
              <Image
                src={images[0]}
                alt={title || 'Project thumbnail'}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 960px"
                priority={priority}
              />
            </div>
          )
        )}
        <Column
          fillWidth
          gap="m"
          paddingX="l"
          paddingBottom="l">
          {title && (
            <Heading 
              as="h3" 
              wrap="balance" 
              variant="heading-strong-l"
              style={{ 
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
              {title}
            </Heading>
          )}
          {description?.trim() && (
            <Text 
              wrap="balance" 
              variant="body-default-s" 
              onBackground="neutral-weak"
              style={{ 
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
              {description}
            </Text>
          )}
          <Flex gap="s" wrap paddingTop="s">
            {category && (
              <Tag
                label={category}
                variant="brand"
                size="s"/>
            )}
            {tags?.map((tag, index) => {
              // Assign different colors to tags based on their content
              const getTagVariant = (tagName: string) => {
                const tagLower = tagName.toLowerCase();
                if (tagLower.includes("strategy") || tagLower.includes("content")) return "accent";
                if (tagLower.includes("youtube") || tagLower.includes("video")) return "brand";
                if (tagLower.includes("research") || tagLower.includes("ideation")) return "info";
                if (tagLower.includes("story") || tagLower.includes("script")) return "success";
                if (tagLower.includes("design") || tagLower.includes("creative")) return "warning";
                return "neutral";
              };
              
              return (
                <Tag
                  key={index}
                  label={tag}
                  variant={getTagVariant(tag) as any}
                  size="s"/>
              );
            })}
          </Flex>
        </Column>

        <style jsx global>{`
          .project-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
            border-color: var(--neutral-border-medium);
          }
        `}</style>
      </Column>
    </SmartLink>
  );
};

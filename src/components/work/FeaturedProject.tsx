"use client";

import React, { useEffect, useState } from "react";
import {
  Column,
  Flex,
  Heading,
  Text,
  SmartLink,
  Badge,
} from "@once-ui-system/core";
import Image from "next/image";

// Counter animation component
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
};

interface FeaturedProjectProps {
  title: string;
  summary: string;
  image: string;
  tag: string;
  slug: string;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  summary,
  image,
  tag,
  slug,
}) => {
  return (
    <Column fillWidth gap="l" marginBottom="48" paddingX="l">
      {/* Hero Badge */}
      <Flex horizontal="center" paddingTop="m">
        <Badge
          background="brand-strong"
          paddingX="m"
          paddingY="s"
          onBackground="brand-strong"
          textVariant="label-default-s"
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          ⭐ FEATURED WORK
        </Badge>
      </Flex>

      {/* Hero Content */}
      <Column fillWidth gap="m">
        {/* Featured Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            borderRadius: "var(--radius-m)",
            border: "1px solid var(--brand-border-medium)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Project Info */}
        <Column gap="s">
          <Flex gap="s" wrap>
            <Badge
              background="accent-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{ fontSize: "0.75rem" }}
            >
              {tag}
            </Badge>
          </Flex>

          <Heading
            as="h1"
            variant="display-strong-l"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            {title}
          </Heading>

          <Text
            variant="body-default-m"
            onBackground="neutral-medium"
            style={{ maxWidth: "700px" }}
          >
            {summary}
          </Text>

          {/* Key Metrics */}
          <Flex
            gap="32"
            wrap
            paddingY="m"
            style={{
              borderTop: "1px solid var(--neutral-border-weak)",
              borderBottom: "1px solid var(--neutral-border-weak)",
            }}
          >
            <Column gap="4">
              <Text
                variant="heading-strong-l"
                onBackground="brand-strong"
                style={{ fontSize: "1.75rem", fontWeight: 800 }}
              >
                <AnimatedCounter end={9} suffix="M+" />
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Subscribers
              </Text>
            </Column>

            <Column gap="4">
              <Text
                variant="heading-strong-l"
                onBackground="brand-strong"
                style={{ fontSize: "1.75rem", fontWeight: 800 }}
              >
                <AnimatedCounter end={10} suffix="M+" />
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Total Views
              </Text>
            </Column>

            <Column gap="4">
              <Text
                variant="heading-strong-l"
                onBackground="brand-strong"
                style={{ fontSize: "1.75rem", fontWeight: 800 }}
              >
                <AnimatedCounter end={7} suffix="+ min" />
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Avg Watch Time
              </Text>
            </Column>

            <Column gap="4">
              <Text
                variant="heading-strong-l"
                onBackground="brand-strong"
                style={{ fontSize: "1.75rem", fontWeight: 800 }}
              >
                <AnimatedCounter end={10} suffix="%" />
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                CTR
              </Text>
            </Column>
          </Flex>

          {/* CTA */}
          <Flex gap="12" paddingTop="xs">
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={`/work/${slug}`}
            >
              <Text variant="body-default-m">Read full case study</Text>
            </SmartLink>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import {
  Column,
  Flex,
  Heading,
  Text,
  Avatar,
  Button,
  IconButton,
  Tag,
  Icon,
} from "@once-ui-system/core";

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

interface AboutHeroProps {
  name: string;
  role: string;
  avatar: string;
  location: string;
  languages: string[];
  social: Array<{ name: string; icon: string; link: string }>;
  calendarLink: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  name,
  role,
  avatar,
  location,
  languages,
  social,
  calendarLink,
}) => {
  return (
    <Column fillWidth gap="xl" marginBottom="xl" paddingX="l" paddingY="xl">
      {/* Simple Hero */}
      <Column fillWidth gap="l" horizontal="center">
        <Avatar src={avatar} size="xl" />

        <Column gap="s" horizontal="center" maxWidth={40}>
          <Heading
            variant="display-strong-l"
            align="center"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {name}
          </Heading>
          <Text variant="heading-default-m" onBackground="neutral-weak" align="center">
            {role}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-medium" align="center">
            A storyteller, strategist, and builder at the intersection of tech and creativity.
          </Text>
        </Column>

        {/* Simple Stats - Inline */}
        <Flex gap="l" wrap horizontal="center" paddingTop="m">
          <Column gap="s" horizontal="center">
            <Text
              variant="heading-strong-m"
              onBackground="brand-strong"
              style={{ fontSize: "1.5rem", fontWeight: 800 }}
            >
              <AnimatedCounter end={4} suffix="+" />
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              YEARS
            </Text>
          </Column>

          <Column gap="s" horizontal="center">
            <Text
              variant="heading-strong-m"
              onBackground="brand-strong"
              style={{ fontSize: "1.5rem", fontWeight: 800 }}
            >
              <AnimatedCounter end={5} suffix="+" />
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              PROJECTS
            </Text>
          </Column>

          <Column gap="s" horizontal="center">
            <Text
              variant="heading-strong-m"
              onBackground="brand-strong"
              style={{ fontSize: "1.5rem", fontWeight: 800 }}
            >
              <AnimatedCounter end={10} suffix="M+" />
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              VIEWS
            </Text>
          </Column>
        </Flex>

        {/* CTA */}
        <Flex gap="m" wrap horizontal="center" paddingTop="s">
          <Button
            href={calendarLink}
            prefixIcon="calendar"
            label="Let's talk"
            size="m"
            variant="primary"
          />
          {social.slice(0, 2).map((item) => (
            <IconButton
              key={item.name}
              href={item.link}
              icon={item.icon}
              tooltip={item.name}
              size="m"
              variant="secondary"
            />
          ))}
        </Flex>
      </Column>
    </Column>
  );
};

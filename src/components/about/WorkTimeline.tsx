"use client";

import React from "react";
import { Column, Flex, Text, Heading, Media } from "@once-ui-system/core";

interface Experience {
  company: React.ReactNode;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

interface WorkTimelineProps {
  experiences: Experience[];
}

export const WorkTimeline: React.FC<WorkTimelineProps> = ({ experiences }) => {
  return (
    <Column fillWidth gap="64">
      {experiences.map((experience, index) => (
        <Flex
          key={index}
          fillWidth
          gap="l"
          style={{ position: "relative" }}
          mobileDirection="column"
        >
          {/* Timeline Dot Only */}
          <Column
            style={{
              position: "relative",
              minWidth: "24px",
              alignItems: "center",
            }}
          >
            <Flex
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "var(--brand-background-strong)",
                marginTop: "6px",
              }}
            />
            {index < experiences.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "1px",
                  height: "calc(100% + 48px)",
                  backgroundColor: "var(--neutral-border-weak)",
                }}
              />
            )}
          </Column>

          {/* Minimal Content */}
          <Column fillWidth gap="s" flex={1}>
            <Flex horizontal="space-between" vertical="start" gap="m" wrap>
              <Column gap="2">
                <Text variant="heading-strong-m">{experience.company}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {experience.role}
                </Text>
              </Column>
              <Text variant="label-default-s" onBackground="neutral-weak">
                {experience.timeframe}
              </Text>
            </Flex>

            {/* Only show first 2 achievements */}
            <Column gap="4">
              {experience.achievements.slice(0, 2).map((achievement, idx) => (
                <Text
                  key={idx}
                  variant="body-default-s"
                  onBackground="neutral-medium"
                >
                  • {achievement}
                </Text>
              ))}
            </Column>
          </Column>
        </Flex>
      ))}
    </Column>
  );
};

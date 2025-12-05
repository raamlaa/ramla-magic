"use client";

import React, { useEffect, useState } from "react";
import {
  Heading,
  Flex,
  Text,
  RevealFx,
  Column,
  Badge,
} from "@once-ui-system/core";

import { MorphingText } from "./MorphingText";

// Counter animation component
const AnimatedCounter = React.memo(({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
});

export function HeroSection() {
  return (
    <>
      <Column
        fillWidth
        gap="m"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "2rem 1rem",
        }}
      >
        {/* Floating Badges */}
        {/* Top Left */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            zIndex: 3,
            animationDelay: "0s"
          }}
        >
          <RevealFx translateY="20" delay={0.2}>
            <Badge
              background="brand-strong"
              paddingX="s"
              paddingY="s"
              onBackground="brand-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(-8deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--brand-border-strong)",
              }}
            >
              STORYTELLER
            </Badge>
          </RevealFx>
        </div>

        {/* Top Center Left */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            top: "8%",
            left: "25%",
            zIndex: 3,
            animationDelay: "0.4s"
          }}
        >
          <RevealFx translateY="20" delay={0.4}>
            <Badge
              background="accent-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(5deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--accent-border-strong)",
              }}
            >
              CONTENT LEAD
            </Badge>
          </RevealFx>
        </div>

        {/* Top Center Right */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            top: "12%",
            right: "20%",
            zIndex: 3,
            animationDelay: "0.6s"
          }}
        >
          <RevealFx translateY="20" delay={0.6}>
            <Badge
              background="brand-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(-3deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--brand-border-strong)",
              }}
            >
              ENTHUSIAST
            </Badge>
          </RevealFx>
        </div>

        {/* Top Right */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            zIndex: 3,
            animationDelay: "0.8s"
          }}
        >
          <RevealFx translateY="20" delay={0.8}>
            <Badge
              background="accent-strong"
              paddingX="s"
              paddingY="s"
              onBackground="accent-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(7deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--accent-border-strong)",
              }}
            >
              🎮 GAMING
              <br />
              YOUTUBER
            </Badge>
          </RevealFx>
        </div>

        {/* Middle Left */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            top: "45%",
            left: "8%",
            zIndex: 3,
            animationDelay: "1s"
          }}
        >
          <RevealFx translateY="20" delay={1}>
            <Badge
              background="info-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(-6deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--info-border-strong)",
              }}
            >
              CREATIVE
              <br />
              THINKER
            </Badge>
          </RevealFx>
        </div>

        {/* Middle Right */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            top: "40%",
            right: "10%",
            zIndex: 3,
            animationDelay: "1.2s"
          }}
        >
          <RevealFx translateY="20" delay={1.2}>
            <Badge
              background="brand-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(4deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--brand-border-strong)",
              }}
            >
              STRATEGY
              <br />
              BUILDER
            </Badge>
          </RevealFx>
        </div>

        {/* Bottom Left */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            bottom: "18%",
            left: "12%",
            zIndex: 3,
            animationDelay: "1.4s"
          }}
        >
          <RevealFx translateY="20" delay={1.4}>
            <Badge
              background="accent-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(-5deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--accent-border-strong)",
              }}
            >
              DIGITAL
              <br />
              MARKETER
            </Badge>
          </RevealFx>
        </div>

        {/* Bottom Center Left */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "28%",
            zIndex: 3,
            animationDelay: "1.6s"
          }}
        >
          <RevealFx translateY="20" delay={1.6}>
            <Badge
              background="neutral-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(3deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--neutral-border-strong)",
              }}
            >
              CONTENT
              <br />
              STRATEGY
            </Badge>
          </RevealFx>
        </div>

        {/* Bottom Center Right */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "25%",
            zIndex: 3,
            animationDelay: "1.8s"
          }}
        >
          <RevealFx translateY="20" delay={1.8}>
            <Badge
              background="accent-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(-4deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--accent-border-strong)",
              }}
            >
              CREATIVE
              <br />
              TECHNOLOGIST
            </Badge>
          </RevealFx>
        </div>

        {/* Bottom Right */}
        <div
          className="floating-badge"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "8%",
            zIndex: 3,
            animationDelay: "2s"
          }}
        >
          <RevealFx translateY="20" delay={2}>
            <Badge
              background="brand-alpha-weak"
              paddingX="s"
              paddingY="s"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              style={{
                transform: "rotate(6deg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "2px solid var(--brand-border-strong)",
              }}
            >
              TECH &
              <br />
              CREATIVITY
            </Badge>
          </RevealFx>
        </div>

        {/* Main Content */}
        <Column
          maxWidth="xl"
          fillWidth
          gap="l"
          style={{ position: "relative", zIndex: 2 }}
        >
          {/* Animated greeting */}
          <RevealFx
            translateY="8"
            fillWidth
            horizontal="center"
          >
            <Text
              variant="heading-default-l"
              onBackground="neutral-medium"
              align="center"
              style={{
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Hey, I'm
            </Text>
          </RevealFx>

          {/* Large bold centered title with morphing text */}
          <RevealFx
            translateY="4"
            delay={0.1}
            fillWidth
            horizontal="center"
          >
            <Heading
              wrap="balance"
              align="center"
              style={{
                fontSize: "clamp(3rem, 12vw, 8rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              <MorphingText
                texts={["RAMLA", "STRATEGIST", "CREATOR", "BUILDER", "STORYTELLER"]}
                initialDelay={5000}
                style={{
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "inherit",
                }}
              />
            </Heading>
          </RevealFx>

          {/* Stats Counter */}
          <RevealFx translateY="4" delay={0.4} horizontal="center">
            <Flex
              gap="32"
              horizontal="center"
              paddingBottom="32"
              wrap
              style={{ maxWidth: "900px" }}
            >
              <Flex vertical="center" horizontal="center" gap="4">
                <Text
                  variant="heading-strong-xl"
                  onBackground="brand-strong"
                  align="center"
                  style={{ fontSize: "2.5rem", fontWeight: 900 }}
                >
                  <AnimatedCounter end={3} suffix="+" />
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-medium"
                  align="center"
                  style={{ fontWeight: 500 }}
                >
                  YEARS IN
                  <br />
                  CREATOR
                  <br />
                  ECONOMY
                </Text>
              </Flex>

              <Flex vertical="center" horizontal="center" gap="4">
                <Text
                  variant="heading-strong-xl"
                  onBackground="brand-strong"
                  align="center"
                  style={{ fontSize: "2.5rem", fontWeight: 900 }}
                >
                  <AnimatedCounter end={10} suffix="+" />
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-medium"
                  align="center"
                  style={{ fontWeight: 500 }}
                >
                  CREATORS
                  <br />
                  MANAGED
                </Text>
              </Flex>

              <Flex vertical="center" horizontal="center" gap="4">
                <Text
                  variant="heading-strong-xl"
                  onBackground="brand-strong"
                  align="center"
                  style={{ fontSize: "2.5rem", fontWeight: 900 }}
                >
                  <AnimatedCounter end={7} />
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-medium"
                  align="center"
                  style={{ fontWeight: 500 }}
                >
                  TEAMS
                  <br />
                  LED
                </Text>
              </Flex>
            </Flex>
          </RevealFx>

          {/* CTA */}
          <RevealFx translateY="4" delay={0.5} horizontal="center">
            <a
              href="https://cal.com/raamlaa/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Flex
                paddingX="32"
                paddingY="16"
                radius="m"
                background="brand-strong"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "inline-flex",
                }}
                className="cta-button"
              >
                <Text variant="label-default-l" onBackground="brand-strong">
                  LET'S TALK →
                </Text>
              </Flex>
            </a>
          </RevealFx>
        </Column>
      </Column>

      <style jsx global>{`
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        /* Floating animation for badges */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Apply floating animation to all badge parent divs */
        .floating-badge {
          animation: float 3s ease-in-out infinite;
        }

        /* Hide only middle floating badges on mobile and tablet, keep top 4 and bottom 4 */
        @media (max-width: 1024px) {
          .floating-badge:nth-child(5),
          .floating-badge:nth-child(6) {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

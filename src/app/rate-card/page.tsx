import {
  Button,
  Column,
  Flex,
  Heading,
  Meta,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";

import { about, baseURL, person } from "@/resources";

import styles from "./rate-card.module.scss";

const rateCard = {
  path: "/rate-card",
  title: `Content Strategy & YouTube Growth - ${person.name}`,
  description:
    "Premium content strategy, packaging, and execution support for creators who want repeatable YouTube growth systems.",
};

const pillars = [
  {
    title: "Strategy",
    text: "Positioning, content direction, and scalable formats built around what your channel can actually sustain.",
  },
  {
    title: "Packaging",
    text: "Titles, thumbnails, and CTR decisions designed to earn the click without killing clarity.",
  },
  {
    title: "Execution",
    text: "Scripts and production systems that turn ideas into repeatable output.",
  },
];

const featuredOffers = [
  {
    title: "Audit",
    price: "$250-400",
    description: "For creators who need clarity before scaling.",
    bullets: [
      "Channel positioning review",
      "Packaging breakdown",
      "Retention and structure analysis",
      "30-day action plan",
    ],
  },
  {
    title: "System",
    badge: "Most Popular",
    price: "$900-1,500 / month",
    description: "Build a repeatable content machine.",
    bullets: [
      "Weekly content planning",
      "Idea pipeline and format systems",
      "Packaging direction per video",
      "Performance review across CTR, retention, and AVD",
      "Iteration loops to improve what works",
    ],
  },
  {
    title: "Done With You",
    price: "Custom ($1,200-$2,500 / month)",
    description: "I plug into your team and run the system.",
    bullets: [
      "Strategy ownership",
      "Content calendar and direction",
      "Scripts for short and long form",
      "Growth tracking and optimization",
    ],
  },
];

const proofItems = [
  "10M+ views generated with Ahmad Aburob",
  "CTR consistently above 10% on optimized content",
  "Worked with creators in the AboFlah ecosystem up to 40M+ subscribers",
];

const fullRateCard = {
  packaging: [
    {
      title: "Packaging Audit",
      price: "$200-350",
      text: "Title and thumbnail breakdown, CTR analysis, hook clarity, competitor packaging review.",
    },
    {
      title: "Per Video Packaging",
      price: "$40-70 / video",
      text: "3-5 title options, thumbnail concepts, hook positioning, and iterations.",
    },
    {
      title: "Packaging Packs",
      price: "10 videos: $350-600 | 20 videos: $650-1,000",
      text: "Batch title and thumbnail direction with a consistent packaging system.",
    },
    {
      title: "Monthly Packaging Support",
      price: "$600-1,200 / month",
      text: "Weekly packaging direction, testing strategy, CTR tracking, and fast async support.",
    },
  ],
  scriptwriting: [
    {
      title: "Short-Form Script Only",
      price: "4 scripts: $350 | 8 scripts: $600",
      text: "Includes 2-3 hooks per script, CTA, and revisions within a 3-5 day window.",
    },
    {
      title: "Short-Form Strategy + Scripting",
      price: "4 scripts: $500 | 8 scripts: $900",
      text: "Research, concepting, structure, hooks, CTA, and revisions within a 3-5 day window.",
    },
    {
      title: "Long-Form Script Only",
      price: "Per script: $300 | Pack of 4: $800",
      text: "Clean execution for creator-led briefs with stronger pacing and structure.",
    },
    {
      title: "Long-Form Strategy + Scripting",
      price: "Pack of 4: $1,000",
      text: "Custom structure, hooks, pacing, CTA, and revisions within a 5-7 day window.",
    },
  ],
  addOns: [
    "Thumbnail direction: +$100",
    "Title bank: +$80 to +$100",
    "Competitor deep dive or teardown: +$120 to +$150",
    "Content system setup: +$200",
    "A/B testing strategy: +$150",
  ],
};

export async function generateMetadata() {
  return Meta.generate({
    title: rateCard.title,
    description: rateCard.description,
    baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Rate Card")}`,
    path: rateCard.path,
  });
}

export default function RateCardPage() {
  return (
    <Column maxWidth="l" fillWidth gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={rateCard.path}
        title={rateCard.title}
        description={rateCard.description}
        image={`/api/og/generate?title=${encodeURIComponent("Rate Card")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <section className={styles.hero}>
        <Column fillWidth gap="l">
          <Tag size="l">Selective Client Work</Tag>

          <Column gap="m" maxWidth={44}>
            <Heading as="h1" variant="display-strong-xl" className={styles.balance}>
              Ramla Azouni - Content Strategy & YouTube Growth
            </Heading>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              className={styles.balance}
            >
              Technology x business x creator economy. I build the systems
              behind high-performing content.
            </Text>
          </Column>

          <Flex wrap gap="16">
            <Button
              href="https://cal.com/raamlaa/30min"
              label="Work With Me"
              prefixIcon="arrowUpRight"
              size="l"
            />
            <Button
              href="#services"
              label="View Services"
              variant="secondary"
              size="l"
            />
          </Flex>
        </Column>
      </section>

      <section id="services" className={styles.section}>
        <Column fillWidth gap="m" className={styles.sectionHeader}>
          <Text variant="label-default-m" onBackground="brand-strong">
            How I Work
          </Text>
          <Heading as="h2" variant="display-strong-m">
            Three levers. One system.
          </Heading>
        </Column>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => (
            <article key={pillar.title} className={styles.pillarCard}>
              <Column fillWidth gap="12">
                <Heading as="h3" variant="heading-strong-l">
                  {pillar.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {pillar.text}
                </Text>
              </Column>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Column fillWidth gap="m" className={styles.sectionHeader}>
          <Text variant="label-default-m" onBackground="brand-strong">
            Featured Offers
          </Text>
          <Heading as="h2" variant="display-strong-m">
            The fastest way to buy the right level of support.
          </Heading>
        </Column>

        <div className={styles.offersGrid}>
          {featuredOffers.map((offer) => (
            <article
              key={offer.title}
              className={`${styles.offerCard} ${
                offer.badge ? styles.offerCardFeatured : ""
              }`}
            >
              <Column fillWidth gap="m">
                <Flex horizontal="space-between" vertical="center" wrap gap="12">
                  <Heading as="h3" variant="heading-strong-xl">
                    {offer.title}
                  </Heading>
                  {offer.badge && (
                    <Tag size="l" className={styles.popularBadge}>
                      {offer.badge}
                    </Tag>
                  )}
                </Flex>

                <Column gap="8">
                  <Text variant="display-strong-xs">{offer.price}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {offer.description}
                  </Text>
                </Column>

                <Column as="ul" gap="12" className={styles.includesList}>
                  {offer.bullets.map((item) => (
                    <Text as="li" variant="body-default-m" key={item}>
                      {item}
                    </Text>
                  ))}
                </Column>
              </Column>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.proofStrip}>
        {proofItems.map((item) => (
          <div key={item} className={styles.proofItem}>
            <Text variant="body-strong-m">{item}</Text>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <details className={styles.detailsPanel}>
          <summary className={styles.detailsSummary}>View Full Rate Card</summary>

          <Column fillWidth gap="l" className={styles.detailsBody}>
            <Column gap="m">
              <Heading as="h3" variant="heading-strong-l">
                Packaging
              </Heading>
              <div className={styles.detailsGrid}>
                {fullRateCard.packaging.map((item) => (
                  <article key={item.title} className={styles.detailCard}>
                    <Column gap="8">
                      <Heading as="h4" variant="heading-strong-m">
                        {item.title}
                      </Heading>
                      <Text variant="body-strong-m">{item.price}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.text}
                      </Text>
                    </Column>
                  </article>
                ))}
              </div>
            </Column>

            <Column gap="m">
              <Heading as="h3" variant="heading-strong-l">
                Scriptwriting
              </Heading>
              <div className={styles.detailsGrid}>
                {fullRateCard.scriptwriting.map((item) => (
                  <article key={item.title} className={styles.detailCard}>
                    <Column gap="8">
                      <Heading as="h4" variant="heading-strong-m">
                        {item.title}
                      </Heading>
                      <Text variant="body-strong-m">{item.price}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.text}
                      </Text>
                    </Column>
                  </article>
                ))}
              </div>
            </Column>

            <Column gap="m">
              <Heading as="h3" variant="heading-strong-l">
                Add-Ons
              </Heading>
              <Column as="ul" gap="12" className={styles.includesList}>
                {fullRateCard.addOns.map((item) => (
                  <Text as="li" variant="body-default-m" key={item}>
                    {item}
                  </Text>
                ))}
              </Column>
            </Column>
          </Column>
        </details>
      </section>

      <section className={styles.finalCta}>
        <Column fillWidth gap="m" maxWidth={38}>
          <Text variant="label-default-m" onBackground="brand-strong">
            Final CTA
          </Text>
          <Heading as="h2" variant="display-strong-m" className={styles.balance}>
            Ready to turn your channel into a system?
          </Heading>
        </Column>

        <Flex wrap gap="16">
          <Button
            href="https://cal.com/raamlaa/30min"
            label="Book a Call"
            prefixIcon="calendar"
            size="l"
          />
          <Button
            href={`mailto:${person.email}?subject=Custom%20Content%20Plan`}
            label="Get a Custom Plan"
            prefixIcon="email"
            variant="secondary"
            size="l"
          />
        </Flex>
      </section>
    </Column>
  );
}

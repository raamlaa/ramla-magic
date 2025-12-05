"use client";

import React from "react";

import { Column, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <Column
      fillWidth
      style={{
        maxHeight: "calc(100vh - 160px)", // Subtract header + footer height
        overflow: "hidden"
      }}
      horizontal="center"
      vertical="center"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section Only */}
      <HeroSection />
    </Column>
  );
}

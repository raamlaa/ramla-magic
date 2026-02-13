import { NextRequest, NextResponse } from "next/server";

// Cache extracted image URLs in memory to avoid re-scraping
const imageCache = new Map<string, { url: string; fetchedAt: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

async function extractImageUrl(postUrl: string): Promise<string | null> {
  const cached = imageCache.get(postUrl);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
    return cached.url;
  }

  const res = await fetch(postUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
  });

  const html = await res.text();

  // Prioritize display_url (full resolution) over og:image (cropped square)
  let match = html.match(/"display_url":"([^"]+)"/);
  if (!match) {
    match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
  }
  if (!match) {
    match = html.match(/"thumbnail_src":"([^"]+)"/);
  }

  if (match?.[1]) {
    const imageUrl = match[1]
      .replace(/\\u0026/g, "&")
      .replace(/&amp;/g, "&");

    imageCache.set(postUrl, { url: imageUrl, fetchedAt: Date.now() });
    return imageUrl;
  }

  return null;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url || !url.includes("instagram.com")) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const imageUrl = await extractImageUrl(url);

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Could not extract image" },
        { status: 404 }
      );
    }

    // Proxy the image bytes to avoid CDN 403
    const imgRes = await fetch(imageUrl, {
      headers: {
        Referer: "https://www.instagram.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!imgRes.ok) {
      return NextResponse.json(
        { error: "Image fetch failed" },
        { status: imgRes.status }
      );
    }

    const imageBuffer = await imgRes.arrayBuffer();
    const contentType = imgRes.headers.get("content-type") || "image/jpeg";

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (err) {
    console.error("Instagram fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}

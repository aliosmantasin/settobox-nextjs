import { NextResponse } from "next/server";

const baseUrl = "https://www.settobox.com";
const lastModifiedDate = new Date().toISOString().split("T")[0];

// URL listesi (TR & EN)
const urlMap: Record<string, { tr: string; en: string; changefreq: string; priority: number }> = {
  anasayfa: { tr: "", en: "", changefreq: "yearly", priority: 1.0 },
  "dijital-pazarlama-donusum-kutusu": { 
    tr: "dijital-pazarlama-donusum-kutusu", 
    en: "digital-marketing-conversion-box", 
    changefreq: "weekly", 
    priority: 0.8 
  },
  "dijital-pazarlama-donusum-kutusu/hizmetsektoru": { 
    tr: "dijital-pazarlama-donusum-kutusu/hizmetsektoru", 
    en: "dijital-pazarlama-donusum-kutusu/hizmetsektoru", 
    changefreq: "weekly", 
    priority: 0.7 
  },
  "dijital-pazarlama-donusum-kutusu/egitimsektoru": { 
    tr: "dijital-pazarlama-donusum-kutusu/egitimsektoru", 
    en: "dijital-pazarlama-donusum-kutusu/egitimsektoru", 
    changefreq: "weekly", 
    priority: 0.7 
  },
  "dijital-pazarlama-donusum-kutusu/sagliksektoru": { 
    tr: "dijital-pazarlama-donusum-kutusu/sagliksektoru", 
    en: "dijital-pazarlama-donusum-kutusu/sagliksektoru", 
    changefreq: "weekly", 
    priority: 0.7 
  },
  "instagram-sponsorlu-reklam": { 
    tr: "instagram-sponsorlu-reklam", 
    en: "instagram-sponsored-ads", 
    changefreq: "weekly", 
    priority: 0.8 
  },
  "google-ads-reklam-yonetimi": { 
    tr: "google-ads-reklam-yonetimi", 
    en: "google-ads-management", 
    changefreq: "weekly", 
    priority: 0.8 
  },
  "web-sitesi-yaptırma": { 
    tr: "web-sitesi-yaptırma", 
    en: "website-development", 
    changefreq: "monthly", 
    priority: 0.8 
  },
  "settobox-referanslar": { 
    tr: "settobox-referanslar", 
    en: "settobox-references", 
    changefreq: "monthly", 
    priority: 0.5 
  },
  "dijital-pazarlama-baslagic-kilavuzu": { 
    tr: "dijital-pazarlama-baslagic-kilavuzu", 
    en: "dijital-pazarlama-baslagic-kilavuzu", 
    changefreq: "weekly", 
    priority: 0.5 
  }
};

export async function GET() {
  const urls = Object.values(urlMap)
    .flatMap(({ tr, en, changefreq, priority }) => [
      { path: tr, changefreq, priority },
      { path: en, changefreq, priority }
    ])
    .map(
      ({ path, changefreq, priority }) => `
      <url>
        <loc>${baseUrl}/${path}</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

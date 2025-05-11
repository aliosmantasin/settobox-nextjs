import { NextResponse } from "next/server";

const baseUrl = "https://www.settobox.com";
const CACHE_DURATION = 24 * 60 * 60; // 24 hours in seconds

// URL listesi (TR & EN)
const urlMap: Record<string, { tr: string; en: string; changefreq: string; priority: number }> = {
  anasayfa: { tr: "/tr", en: "/en", changefreq: "weekly", priority: 1.0 },
  "dijital-pazarlama-donusum-kutusu": { 
    tr: "/tr/dijital-pazarlama-donusum-kutusu", 
    en: "/en/digital-marketing-conversion-box", 
    changefreq: "monthly", 
    priority: 0.8 
  },
  "dijital-pazarlama-donusum-kutusu/hizmetsektoru": { 
    tr: "/tr/dijital-pazarlama-donusum-kutusu/hizmetsektoru", 
    en: "/en/dijital-pazarlama-donusum-kutusu/hizmetsektoru", 
    changefreq: "monthly", 
    priority: 0.7 
  },
  "dijital-pazarlama-donusum-kutusu/egitimsektoru": { 
    tr: "/tr/dijital-pazarlama-donusum-kutusu/egitimsektoru", 
    en: "/en/dijital-pazarlama-donusum-kutusu/egitimsektoru", 
    changefreq: "monthly", 
    priority: 0.7 
  },
  "dijital-pazarlama-donusum-kutusu/sagliksektoru": { 
    tr: "/tr/dijital-pazarlama-donusum-kutusu/sagliksektoru", 
    en: "/en/dijital-pazarlama-donusum-kutusu/sagliksektoru", 
    changefreq: "monthly", 
    priority: 0.7 
  },
  "instagram-sponsorlu-reklam": { 
    tr: "/tr/instagram-sponsorlu-reklam", 
    en: "/en/instagram-sponsored-ads", 
    changefreq: "monthly", 
    priority: 0.8 
  },
  "google-ads-reklam-yonetimi": { 
    tr: "/tr/google-ads-reklam-yonetimi", 
    en: "/en/google-ads-management", 
    changefreq: "monthly", 
    priority: 0.8 
  },
  "web-sitesi-yaptirma": { 
    tr: "/tr/web-sitesi-yaptirma", 
    en: "/en/website-development", 
    changefreq: "monthly", 
    priority: 0.8 
  },
  "settobox-referanslar": { 
    tr: "/tr/settobox-referanslar", 
    en: "/en/settobox-references", 
    changefreq: "monthly", 
    priority: 0.5 
  },
  "dijital-pazarlama-baslagic-kilavuzu": { 
    tr: "/tr/dijital-pazarlama-baslagic-kilavuzu", 
    en: "/en/dijital-pazarlama-baslagic-kilavuzu", 
    changefreq: "weekly", 
    priority: 0.5 
  }
};

// URL doğrulama fonksiyonu
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Sitemap oluşturma fonksiyonu
function generateSitemap(): string {
  const lastModifiedDate = new Date().toISOString().split("T")[0];
  
  const urls = Object.values(urlMap)
    .flatMap(({ tr, en, changefreq, priority }) => [
      { path: tr, changefreq, priority },
      { path: en, changefreq, priority }
    ])
    .filter(({ path }) => isValidUrl(`${baseUrl}${path}`))
    .map(
      ({ path, changefreq, priority }) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
}

// Önbellek için değişkenler
let cachedSitemap: string | null = null;
let lastGenerated: number = 0;

export async function GET() {
  try {
    const now = Date.now();
    
    // Önbellek kontrolü
    if (cachedSitemap && (now - lastGenerated) < CACHE_DURATION * 1000) {
      return new NextResponse(cachedSitemap, {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": `public, max-age=${CACHE_DURATION}`,
        },
      });
    }

    // Yeni sitemap oluştur
    const sitemap = generateSitemap();
    cachedSitemap = sitemap;
    lastGenerated = now;

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": `public, max-age=${CACHE_DURATION}`,
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Sitemap generation failed" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

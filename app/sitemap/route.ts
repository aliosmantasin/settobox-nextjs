import { NextResponse } from "next/server";

const baseUrl = "https://www.settobox.com";

// Son güncellenme tarihi (Tüm sayfalara aynı tarihi vermek için)
const lastModifiedDate = new Date().toISOString().split("T")[0];

// Statik sayfalar ve öncelik değerleri
const staticPages = [
  { path: "", changefreq: "weekly", priority: 1.0 }, // Ana sayfa
  { path: "dijital-pazarlama-donusum-kutusu", changefreq: "weekly", priority: 0.8 },
  { path: "instagram-sponsorlu-reklam", changefreq: "weekly", priority: 0.8 },
  { path: "google-ads-reklam-yonetimi", changefreq: "weekly", priority: 0.8 },
  { path: "web-sitesi-yaptirma", changefreq: "monthly", priority: 0.8 },
  { path: "settobox-referanslar", changefreq: "monthly", priority: 0.5 },
];

// `generateStaticParams` ile oluşturulan dinamik sayfalar
const dynamicPages = ["manavgat", "alanya", "serik"].map((teritory) => ({
  path: `havadan-drone-cekimleri/${teritory}`,
  changefreq: "monthly",
  priority: 0.7,
}));

// Yeni dinamik sektör sayfaları
const sectorPages = ["hizmetsektoru", "egitimsektoru", "sagliksektoru"].map((sector) => ({
  path: `dijital-pazarlama-donusum-kutusu/${sector}`,
  changefreq: "weekly",
  priority: 0.7,
}));

export async function GET() {
  const allPages = [...staticPages, ...dynamicPages, ...sectorPages];

  const urls = allPages
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

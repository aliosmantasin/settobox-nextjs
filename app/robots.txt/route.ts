import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `# www.robotstxt.org

# Allow all crawlers
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.settobox.com/sitemap.xml

# Disallow
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /*.json$
Disallow: /*_buildManifest.js$
Disallow: /*_middlewareManifest.js$
Disallow: /*_ssgManifest.js$
Disallow: /*_app.js$
Disallow: /*.js$

# Crawl-delay
Crawl-delay: 10

# Host
Host: https://www.settobox.com`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
} 
import createMiddleware from "next-intl/middleware";

// URL yönlendirme kuralları
const pathnames = {
  '/': '/',
  '/instagram-sponsorlu-reklam': {
    tr: '/instagram-sponsorlu-reklam',
    en: '/instagram-sponsored-ads'
  },
  '/google-ads-reklam-yonetimi': {
    tr: '/google-ads-reklam-yonetimi',
    en: '/google-ads-management'
  },
  '/yerel-dijital-pazarlama': {
    tr: '/yerel-dijital-pazarlama',
    en: '/yerel-dijital-pazarlama'
  },
  '/cerez-politikasi': {
    tr: '/cerez-politikasi',
    en: '/cerez-politikasi'
  },
  '/dijital-pazarlama-donusum-kutusu': {
    tr: '/dijital-pazarlama-donusum-kutusu',
    en: '/dijital-pazarlama-donusum-kutusu'
  },
  '/settobox-kampanyalar': {
    tr: '/settobox-kampanyalar',
    en: '/settobox-kampanyalar'
  },
  '/dijital-pazarlama-baslagic-kilavuzu': {
    tr: '/dijital-pazarlama-baslagic-kilavuzu',
    en: '/dijital-pazarlama-baslagic-kilavuzu'
  },
  '/settobox-referanslar': {
    tr: '/settobox-referanslar',
    en: '/settobox-references'
  },
  '/web-sitesi-yaptirma': {
    tr: '/web-sitesi-yaptirma',
    en: '/website-development'
  },
  '/havadan-drone-cekimleri': {
    tr: '/havadan-drone-cekimleri',
    en: '/havadan-drone-cekimleri'
  }
};

// Middleware oluştur
const middleware = createMiddleware({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  // URL yönlendirme kurallarını ekle
  pathnames,
  // URL yapısını dil seçimine göre değiştir
  localePrefix: 'always',
  // URL yönlendirme kurallarını doğru şekilde uygula
  localeDetection: true,
});

// Middleware'i dışa aktar
export default middleware;

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // API veya statik dosyalara dokunma
};

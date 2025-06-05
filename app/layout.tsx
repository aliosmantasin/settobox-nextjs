//App Layout
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import "./styles/critical.css";  // Kritik CSS'i önce yükle
import "./globals.css";  // Non-kritik CSS'i sonra yükle
import ClientProviders from "./ClientProviders";
import CookieConsent from "./[locale]/(routes)/_components/libs/Cookies/CookieConsent";
// import { LocaleAwareBotProtection } from "./[locale]/(routes)/_components/libs/BotProtection/LocaleAwareBotProtection";


export const metadata = {
  title: "SetToBox | Kurumsal Dijital Pazarlama Ajansı",
  description: "Küçük ve orta büyüklükte firmalar için sosyal medya yönetimi, instagram sponsorlu reklam, google adwords reklam, profesyonel web tasarım, pazarlama danışmanlığı ve havadan drone çekimleri gibi özelleştirilmiş hizmetler veriyoruz.",
  authors: [{ name: "Ali Osman Taşın", url: "https://settobox.com" }],
  robots: "index, follow",
  verification: {
    google: "AQAg3wR11Ya_TOJEBFdusZZ9BKvUJLf8tT6kRnGALKc",
  },
};

// Viewport ayarlarını ayrı bir export olarak tanımlayın
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const GTM_ID = 'GTM-NRSTMB28';

// Client componenti server komponentinden ayırıyoruz


export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale}>
      <head>
        <link rel="icon" href="/images/favicon.ico/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.ico/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/images/favicon.ico/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.ico/apple-icon-180x180.png" sizes="180x180" />
        <meta name="facebook-domain-verification" content="rftbzo30mozzjh4jnxajcq1594tbsp" />
        <style>{`
          /* Inline kritik CSS */
          body { opacity: 1; }
        `}</style>
      </head>
      <body>
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `
          }}
        />
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <ClientProviders>
        {/* <LocaleAwareBotProtection /> */}
        <CookieConsent />
          {children}
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}


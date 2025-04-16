import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import ClientProviders from "./ClientProviders";

export const metadata = {
  title: "SetToBox | Kurumsal Dijital Pazarlama Ajansı",
  description: "Küçük ve orta büyüklükte firmalar için sosyal medya yönetimi, instagram sponsorlu reklam, google adwords reklam, profesyonel web tasarım, pazarlama danışmanlığı ve havadan drone çekimleri gibi özelleştirilmiş hizmetler veriyoruz.",
  authors: [{ name: "Ali Osman Taşın", url: "https://settobox.com" }],
  robots: "index, follow",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/images/favicon.ico/favicon.ico' },
      { rel: 'icon', url: '/images/favicon.ico/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/images/favicon.ico/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: [
      { rel: 'shortcut icon', url: '/images/favicon.ico/favicon.ico' },
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/images/favicon.ico/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },
};

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
      <GoogleTagManager gtmId="GTM-NRSTMB28" />
      <body>
        <ClientProviders>
          {children}
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}


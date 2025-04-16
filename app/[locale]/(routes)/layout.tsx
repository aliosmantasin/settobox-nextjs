import { NextIntlClientProvider } from "next-intl";
import Footer from "./_components/Footer";
import Navbar from "./_components/Menu/Navbar";
import ScrollTop from "./_components/ScrollTop/ScrollTop";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ReactNode } from "react";
import { Metadata } from "next";
import Head from "next/head";
import { ToastProvider } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";
import BottomNavigation from "./_components/libs/BottomNavigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 🌍 Desteklenen diller
const locales = ["tr", "en"];

// 🌍 Tüm çeviri dosyalarını içe aktar
import trMessages from "@/messages/tr.json";
import enMessages from "@/messages/en.json";

export const metadata: Metadata = {
  title: "SetToBox | Kurumsal Dijital Pazarlama Ajansı",
  description: "Küçük ve orta büyüklükte firmalar için sosyal medya yönetimi, instagram sponsorlu reklam, google adwords reklam, profesyonel web tasarım, pazarlama danışmanlığı ve havadan drone çekimleri gibi özelleştirilmiş hizmetler veriyoruz.",
  verification: {
    google: "AQAg3wR11Ya_TOJEBFdusZZ9BKvUJLf8tT6kRnGALKc",
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.ico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.ico/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/images/favicon.ico/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon.ico/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/images/favicon.ico/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// 🌍 Çeviri mesajlarını haritaya ekle
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messagesMap: Record<string, any> = {
  tr: trMessages,
  en: enMessages,
};

export default async function RoutesLayout({children,params,}:{children: ReactNode;
  params: Promise<{ locale?: string }>; // ✅ Asenkron destek eklendi
}) {
  const resolvedParams = await params; // ✅ `params`'ı bekleyerek al
  const locale = locales.includes(resolvedParams.locale ?? "") ? resolvedParams.locale! : "tr"; // ✅ Hata çözümü

  // 📌 JSON dosyasını haritadan al
  const messages = messagesMap[locale] || trMessages;

  console.log("📌 Gelen params:", resolvedParams);
  console.log("📌 Kullanılan dil:", locale);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="/images/favicon.ico/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.ico/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico/apple-icon-180x180.png" />
        <meta name="author" content="SetToBox | Ali Osman Taşın" />
      </Head>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <ToastProvider>
              <Toaster/>
              {children}
          </ToastProvider>
            <ScrollTop>
              <MdKeyboardArrowUp />
            </ScrollTop>
            <BottomNavigation/>
          <Footer />
          <SpeedInsights />
        </NextIntlClientProvider>
    </>
  );
}

 


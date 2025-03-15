import { NextIntlClientProvider } from "next-intl";
import Footer from "./_components/Footer";
import Navbar from "./_components/Menu/Navbar";
import ScrollTop from "./_components/ScrollTop/ScrollTop";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ReactNode } from "react";


// 🌍 Tüm çeviri dosyalarını içe aktar
import trMessages from "@/messages/tr.json";
import enMessages from "@/messages/en.json";
import { Metadata } from "next";
import Head from "next/head";
import { ToastProvider } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";

// 🌍 Desteklenen diller
const locales = ["tr", "en"];

export const metadata: Metadata = {
  title: "SetToBox | Dijital Pazarlama Ajansı",
  description: "Küçük ve orta büyüklükte firmalar için sosyal medya yönetimi, instagram sponsorlu reklam, google adwords reklam, profesyonel web tasarım, pazarlama danışmanlığı ve havadan drone çekimleri gibi özelleştirilmiş hizmetler veriyoruz.",
  verification: {
    google: "AQAg3wR11Ya_TOJEBFdusZZ9BKvUJLf8tT6kRnGALKc",
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
        <link rel="shortcut icon" href="/favicon.ico"></link>
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
          <Footer />
        </NextIntlClientProvider>
    </>
  );
}

 


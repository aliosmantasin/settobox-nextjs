import { NextIntlClientProvider } from "next-intl";
import Footer from "./_components/Footer";
import Navbar from "./_components/Menu/Navbar";
import ScrollTop from "./_components/ScrollTop/ScrollTop";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ReactNode } from "react";
import { ToastProvider } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";
import BottomNavigation from "./_components/libs/BottomNavigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 🌍 Desteklenen diller
const locales = ["tr", "en"];

// 🌍 Tüm çeviri dosyalarını içe aktar
import trMessages from "@/messages/tr.json";
import enMessages from "@/messages/en.json";

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

 


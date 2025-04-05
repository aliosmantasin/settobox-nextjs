"use client"

import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import store from "@/store";
import "./globals.css";
// import TrackingScripts from "./[locale]/(routes)/_components/libs/Cookies/TrackingScripts";
// import CookieConsent from "./[locale]/(routes)/_components/libs/Cookies/CookieConsent";
import { GoogleTagManager } from '@next/third-parties/google'
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };  // 🟢 Server'dan gelen locale bilgisini al
}>) {
  return (
    <html lang={params.locale}>
      <GoogleTagManager gtmId="GTM-NRSTMB28" />
      <Provider store={store}>
        <body>
        
          {/* <TrackingScripts />  
          <CookieConsent />   */}
          <LanguageProvider/>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}


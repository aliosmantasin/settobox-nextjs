"use client"
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import store from "@/store";
import "./globals.css";
import TrackingScripts from "./[locale]/(routes)/_components/libs/Cookies/TrackingScripts";
import CookieConsent from "./[locale]/(routes)/_components/libs/Cookies/CookieConsent";



export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };  // 🟢 Server'dan gelen locale bilgisini al
}>) {
  return (
    <html lang={params.locale}>
      {/* <GoogleTagManager gtmId="GTM-NRSTMB28" /> */}
      <Provider store={store}>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TrackingScripts />  {/* Google Tag Manager yerine TrackingScripts */}
          <CookieConsent />  {/* Çerez izinleri */}
              {children}
          
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}


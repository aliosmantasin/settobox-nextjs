"use client"
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from '@next/third-parties/google';
import { ToastProvider } from "@/components/ui/toast";  // 
import { Provider } from "react-redux";
import store from "@/store";
import "./globals.css";

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
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ToastProvider>
              {children}
            </ToastProvider>
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  );
}


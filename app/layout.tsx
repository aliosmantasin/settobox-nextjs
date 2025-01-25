"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from '@next/third-parties/google';
import { ToastProvider } from "@/components/ui/toast";  // 
import { Provider } from "react-redux";
import store from "@/store";
import "./globals.css";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">

      <GoogleTagManager gtmId="GTM-NRSTMB28" />
      <Provider store={store}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>  {/* ToastProvider */}
            {children}
          </ToastProvider>
     
        </ThemeProvider>
      </body>
      </Provider>
    </html>
  );
}

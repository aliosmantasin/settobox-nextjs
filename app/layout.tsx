import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleTagManager } from '@next/third-parties/google';
import { ToastProvider } from "@/components/ui/toast";  // Bu satırı ekleyin
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>  {/* ToastProvider'ı buraya sarın */}
            {children}
          </ToastProvider>
     
        </ThemeProvider>
      </body>
    </html>
  );
}

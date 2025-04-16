import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import ClientProviders from "./ClientProviders";

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


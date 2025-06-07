"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentContext";


export function GoogleAnalyticsScript() {
  const { consent, hasInteracted } = useCookieConsent();
  
  // Kullanıcı izin vermediyse veya henüz etkileşimde bulunmadıysa hiçbir şey yükleme
  if (!hasInteracted || !consent.analytics) {
    return null;
  }

  return (
    <>
      {/* Google Analytics'i sadece kullanıcı açıkça izin verdiyse yükle */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NRSTMB28`}
      />
      
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRSTMB28', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `
        }}
      />
    </>
  );
} 
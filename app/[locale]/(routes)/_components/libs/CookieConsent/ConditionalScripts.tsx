"use client";

import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsentContext";

// Google Consent Mode sinyali gönderen yardımcı fonksiyon
function sendGtagConsent(consent: { analytics: boolean; marketing: boolean }) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const params = {
      'ad_storage': consent.marketing ? 'granted' : 'denied',
      'analytics_storage': consent.analytics ? 'granted' : 'denied',
      'ad_personalization': consent.marketing ? 'granted' : 'denied',
      'ad_user_data': consent.marketing ? 'granted' : 'denied'
    };
    window.gtag('consent', 'update', params);
    console.log('[ConsentMode] gtag consent update sent', params);
  } else {
    console.log('[ConsentMode] gtag not available when trying to send update');
  }
}

export default function ConditionalScripts() {
  const { consent, hasInteracted } = useCookieConsent();
  
  // Consent değişikliklerini takip et
  useEffect(() => {
    if (hasInteracted) {
      sendGtagConsent(consent);
    }
  }, [consent.analytics, consent.marketing, hasInteracted]);
  
  return (
    <>
      {/* Consent Mode default sinyalini gönder */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_personalization': 'denied',
              'ad_user_data': 'denied'
            });
          `
        }}
      />

      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-NRSTMB28" />
    </>
  );
} 
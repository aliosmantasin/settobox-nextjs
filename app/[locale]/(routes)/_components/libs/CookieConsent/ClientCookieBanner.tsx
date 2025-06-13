"use client";

import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsentContext";

declare global {
  interface Window {
    'ga-disable-G-F30BHHCPVW': boolean;
  }
}

interface ClientCookieBannerProps {
  translations: {
    title: string;
    description: string;
    rejectAll: string;
    preferences: string;
    acceptAll: string;
  }
}

export default function ClientCookieBanner({ translations }: ClientCookieBannerProps) {
  const { 
    hasInteracted, 
    acceptAll, 
    rejectAll, 
    showPreferences, 
    isPreferencesOpen 
  } = useCookieConsent();

  // Sayfa yüklendiğinde eski Google Analytics çerezlerini kontrol et
  useEffect(() => {
    if (!hasInteracted) {
      // Sayfa yüklendiğinde GA ve diğer izleme çerezlerini kontrol et
      const trackingCookiesExist = document.cookie.split(';').some(cookie => 
        cookie.trim().startsWith('_ga') || 
        cookie.trim().startsWith('_gid') || 
        cookie.trim().startsWith('_gat') ||
        cookie.trim().startsWith('_fbp') ||
        cookie.trim().startsWith('_fbc') ||
        cookie.trim().startsWith('_clck') ||
        cookie.trim().startsWith('_clsk')
      );

      // Eğer izleme çerezleri varsa, geçici olarak bunları devre dışı bırak
      if (trackingCookiesExist) {
        console.log('Tracking cookies found but consent not given. Temporarily disabling.');
        window['ga-disable-G-F30BHHCPVW'] = true;
      }
    }
  }, [hasInteracted]);

  // Don't show the banner if the user has already interacted with it or if preferences are open
  if (hasInteracted || isPreferencesOpen) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto">
          <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-200 dark:border-gray-700" style={{ boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)' }}>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{translations.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed pr-4">
                    {translations.description}
                  </p>
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-2 lg:justify-end mt-4 lg:mt-0 w-full lg:w-auto">
                  <button 
                    onClick={rejectAll}
                    className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium border rounded-md transition-colors text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    aria-label={translations.rejectAll}
                  >
                    {translations.rejectAll}
                  </button>
                  <button 
                    onClick={showPreferences}
                    className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium border rounded-md transition-colors text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    aria-label={translations.preferences}
                  >
                    {translations.preferences}
                  </button>
                  <button 
                    onClick={acceptAll}
                    className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    aria-label={translations.acceptAll}
                  >
                    {translations.acceptAll}
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
} 
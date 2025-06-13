"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookieConsent } from "./CookieConsentContext";

interface ClientCookiePreferencesModalProps {
  translations: {
    title: string;
    close: string;
    description: string;
    manageInfo: string;
    necessary: {
      title: string;
      description: string;
      required: string;
    };
    functional: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
    personalization: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
      required: string;
    };
    rejectAll: string;
    acceptAll: string;
    savePreferences: string;
    openLabel: string;
    closeLabel: string;
    onText: string;
    offText: string;
    developedBy: string;
  }
}

export default function ClientCookiePreferencesModal({ translations }: ClientCookiePreferencesModalProps) {
  const { 
    consent, 
    updateConsent, 
    acceptAll, 
    rejectAll, 
    closePreferences 
  } = useCookieConsent();
  
  const [modalHeight, setModalHeight] = useState<string>("auto");

  // Ekran boyutuna göre modal yüksekliğini ayarla
  useEffect(() => {
    const updateModalHeight = () => {
      // Mobil cihazlarda daha yüksek bir değer, masaüstünde daha düşük
      const height = window.innerHeight;
      const isMobile = window.innerWidth < 640; // sm breakpoint
      
      if (isMobile) {
        // Mobil cihazlarda daha fazla yer kapla
        setModalHeight(`${Math.min(height * 0.9, 600)}px`);
      } else {
        // Masaüstünde daha küçük bir değer
        setModalHeight(`${Math.min(height * 0.8, 700)}px`);
      }
    };

    updateModalHeight();
    window.addEventListener('resize', updateModalHeight);
    
    return () => {
      window.removeEventListener('resize', updateModalHeight);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center m-auto bg-black/60 dark:bg-black/80 overflow-y-auto p-5 sm:p-auto">
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl mx-4 flex flex-col"
        style={{ maxHeight: modalHeight }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{translations.title}</h2>
          <button 
            onClick={closePreferences}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            aria-label={translations.close}
          >
            X
          </button>
        </div>
        
        {/* Scrollable content */}
        <div 
          className="overflow-y-auto flex-grow p-4 bg-white dark:bg-gray-900"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            <p className="mb-3">
              {translations.description}
            </p>
            
            <p>
              {translations.manageInfo}
            </p>
          </div>

          <div className="space-y-4">
            {/* Zorunlu Çerezler - Her zaman aktif, kullanıcı değiştiremez */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{translations.necessary.title}</h3>
                  <div className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded text-xs font-medium">
                    {translations.necessary.required}
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {translations.necessary.description}
                </p>
              </div>
            </div>

            {/* Güvenlik Çerezleri - Her zaman aktif, kullanıcı değiştiremez */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{translations.security.title}</h3>
                  <div className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded text-xs font-medium">
                    {translations.security.required}
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {translations.security.description}
                </p>
              </div>
            </div>

            {/* Fonksiyonel Çerezler */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{translations.functional.title}</h3>
                  <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
                    <button 
                      type="button"
                      onClick={() => updateConsent({ functional: false })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${!consent.functional ? 'bg-gray-800 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.offText}
                    </button>
                    <button 
                      type="button"
                      onClick={() => updateConsent({ functional: true })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${consent.functional ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.onText}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {translations.functional.description}
                </p>
              </div>
            </div>

            {/* Analitik Çerezler */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{translations.analytics.title}</h3>
                  <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
                    <button 
                      type="button"
                      onClick={() => updateConsent({ analytics: false })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${!consent.analytics ? 'bg-gray-800 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.offText}
                    </button>
                    <button 
                      type="button"
                      onClick={() => updateConsent({ analytics: true })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${consent.analytics ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.onText}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {translations.analytics.description}
                </p>
              </div>
            </div>

            {/* Pazarlama Çerezler */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{translations.marketing.title}</h3>
                  <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
                    <button 
                      type="button"
                      onClick={() => updateConsent({ marketing: false })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${!consent.marketing ? 'bg-gray-800 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.offText}
                    </button>
                    <button 
                      type="button"
                      onClick={() => updateConsent({ marketing: true })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${consent.marketing ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.onText}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {translations.marketing.description}
                </p>
              </div>
            </div>

            {/* Kişiselleştirme Çerezleri */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{translations.personalization.title}</h3>
                  <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
                    <button 
                      type="button"
                      onClick={() => updateConsent({ personalization: false })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${!consent.personalization ? 'bg-gray-800 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.offText}
                    </button>
                    <button 
                      type="button"
                      onClick={() => updateConsent({ personalization: true })}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${consent.personalization ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {translations.onText}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {translations.personalization.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 sticky bottom-0 bg-white dark:bg-gray-900">
          <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end">
            <button 
              onClick={rejectAll}
              className="flex w-full sm:w-auto px-5 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors mx-2"
            >
              {translations.rejectAll}
            </button>
            <button 
              onClick={closePreferences}
              className="flex w-full sm:w-auto px-5 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors mx-2"
            >
              {translations.savePreferences}
            </button>
            <button 
              onClick={acceptAll}
              className="w-full sm:w-auto px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              {translations.acceptAll}
            </button>
          </div>
         
        </div>
              <div className="mt-3 p-2 flex justify-end items-center" style={{backgroundColor: "#f1f1f1"}}>
                  <span className="text-sm text-gray-500 mr-1">{translations.developedBy}</span> <Link href="https://settobox.com" className="text-sm text-gray-500 font-bold" ><span>SettoBox</span></Link> 
              </div>
      </div>
    </div>
  );
} 
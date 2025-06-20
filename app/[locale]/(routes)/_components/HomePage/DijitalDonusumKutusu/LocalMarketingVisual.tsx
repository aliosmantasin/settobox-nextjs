"use client";
import Image from 'next/image';
import React from 'react';

const LocalMarketingVisual = () => {
  return (
    <div className='w-full h-full relative flex justify-center items-center min-h-[300px]'>
      <div className="absolute image-container top-8 left-0 sm:left-4 animate-float">
        <Image
          src="/images/yerelGorseller/googleAds.webp"
          width={70}
          height={70}
          alt="Google Ads"
          className="shadow-lg p-2 rounded-lg bg-slate-100 dark:bg-slate-900 -rotate-12"
        />
      </div>

      <div className="absolute image-container bottom-8 left-0 sm:left-4 animate-float" style={{ animationDelay: '0.2s' }}>
        <Image
          src="/images/yerelGorseller/isletmeProfil.webp"
          width={70}
          height={70}
          alt="İşletme Profili"
          className="shadow-lg p-2 rounded-lg bg-slate-100 dark:bg-slate-900 rotate-12"
        />
      </div>
      <div className="absolute image-container top-8 right-0 sm:right-4 animate-float" style={{ animationDelay: '0.4s' }}>
        <Image
          src="/images/yerelGorseller/meta.webp"
          width={70}
          height={70}
          alt="Meta"
          className="shadow-lg p-2 rounded-lg bg-slate-100 dark:bg-slate-900 -rotate-12"
        />
      </div>

      <div className="absolute image-container bottom-8 right-0 sm:right-4 animate-float" style={{ animationDelay: '0.6s' }}>
        <Image
          src="/images/yerelGorseller/website.webp"
          width={70}
          height={70}
          alt="Website"
          className="shadow-lg p-2 rounded-lg bg-slate-100 dark:bg-slate-900 rotate-12"
        />
      </div>

      <div className="block">
        <Image
          src="/images/yerelGorseller/isletme.webp"
          alt="Yerel/Mikro Dijital Pazarlama"
          width={250}
          height={250}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default LocalMarketingVisual; 
"use client";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import Loading from '../../_components/Loadling/Loading';


const BannerReferance = () => {


  const t = useTranslations("ReferancePage");

  return (
    <div className="relative w-full flex min-h-auto sm:min-h-[400px] items-center">


      
      <Suspense fallback={<Loading/>}>   {/* Loading çalışmıyor */}
        <div className='w-full'>
          <Image
            src="/images/bannerReferans.webp"
            className="w-full h-[400px] object-cover"
            alt="Referanslarımız Banner"
            width={700}
            height={500}
          />
        </div>
      </Suspense>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-white font-extrabold text-3xl md:text-4xl">{t("span")}</span>
        <h1 className="text-white text-sm md:text-base">{t("title")}</h1>
      </div>
    
    </div>
  );
};

export default BannerReferance;

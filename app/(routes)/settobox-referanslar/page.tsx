"use client"
import Image from 'next/image';
import BannerReferans from '@/public/images/bannerReferans.jpg';
import DurunetReferance from './_component/durunetReference';
import IhcReferance from './_component/ihcReferance';
import XrealnetReferance from './_component/xrealnetReferance';
import Head from 'next/head';
import { useEffect } from 'react';
import { seoData } from '@/lib/seo';



const ReferancePage = () => {

    useEffect(() => {
        const seo = seoData["settobox-referanslar"] || {
          title: "SetToBox | Dijital Pazarlama",
          description: "Dijital pazarlama hizmetlerimiz hakkında bilgi alın.",
        };
    
        document.title = seo.title;
    
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
          metaDescription.setAttribute("content", seo.description);
        } else {
          const meta = document.createElement("meta");
          meta.name = "description";
          meta.content = seo.description;
          document.head.appendChild(meta);
        }
      }, []);



  return (
    <>
      <Head>
        <title>Test Başlığı</title>
        <meta name="description" content="Bu bir test açıklamasıdır." />
      </Head>
      <section className="w-full my-10">
        <div className="relative w-full flex">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl">Neler Yaptık?</h2>
            <p className="text-white text-sm md:text-base">SetToBox / Referanslarımız</p>
          </div>
          <Image
            src={BannerReferans}
            className="w-full h-[500px] object-cover"
            alt="Referanslarımız Banner"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="w-full sm:w-4/5 md:w-1/2 flex justify-center p-2 sm:p-0">
            <DurunetReferance />
          </div>
          <div className="w-full sm:w-4/5 md:w-1/2 flex justify-center p-2 sm:p-0">
            <IhcReferance />
          </div>
          <div className="w-full sm:w-4/5 md:w-1/2 flex justify-center p-2 sm:p-0">
            <XrealnetReferance/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferancePage;

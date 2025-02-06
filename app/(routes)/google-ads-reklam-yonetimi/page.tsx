"use client"
import React, { useEffect } from 'react'
import GoogleInfo from '../_components/GoogleAds/GoogleInfo/GoogleInfo'
import { MaskSvg } from '../_components/libs/Mask/Mask'
import GoogleAdditional from '../_components/GoogleAds/GoogleAdditional/GoogleAdditional'
import GoogleProduct from '../_components/GoogleAds/GoogleProduct/GoogleProduct'
import Head from 'next/head'
import { seoData } from '@/lib/seo'
import { GoogleAdsCard } from '../_components/GoogleAds/GoogleAdsCard/GoogleAdsCard'



const GoogleAdsPage = () => {

  useEffect(() => {
    const seo = seoData["google-ads-reklam-yonetimi"] || {
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
        <GoogleInfo/>
        <MaskSvg/>
        <GoogleAdditional/>
        <GoogleProduct/>
        <GoogleAdsCard/>
    </>
  )
}

export default GoogleAdsPage
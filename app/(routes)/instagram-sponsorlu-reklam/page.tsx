"use client"
import React, { useEffect } from 'react'
import MetaInfo from '../_components/Meta/MetaInfoComponent/MetaInfo'
import MetaAdditional from '../_components/Meta/MetaAdditionalComponent/MetaAdditional';
import MetaProduct from '../_components/Meta/MetaProduct/MetaProduct';
import Head from 'next/head';
import { seoData } from '@/lib/seo';


const MetaPage = () => {

    useEffect(() => {
      const seo = seoData["instagram-sponsorlu-reklam"] || {
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
        <MetaInfo/>
        <MetaAdditional/>
        <MetaProduct/>
    </>
  )
}

export default MetaPage
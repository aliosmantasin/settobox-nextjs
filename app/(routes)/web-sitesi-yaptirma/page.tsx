"use client"

import React, { useEffect } from 'react'
import WebDesignInfo from '../_components/WebDesign/WebDesignInfo/WebDesignInfo'
import { MaskSvg } from '../_components/libs/Mask/Mask'
import WebDesignAdditional from '../_components/WebDesign/WebDesignAdditional/WebDesignAdditional'
import WebDesignProduct from '../_components/WebDesign/WebDesignProduct/WebDesignProduct'
import Head from 'next/head'
import { seoData } from '@/lib/seo'



const WebDesignPage = () => {
     useEffect(() => {
          const seo = seoData["web-sitesi-yaptırma"] || {
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
       <WebDesignInfo/>
       <MaskSvg/>
       <WebDesignAdditional/>
       <WebDesignProduct/>
    </>
  )
}

export default WebDesignPage
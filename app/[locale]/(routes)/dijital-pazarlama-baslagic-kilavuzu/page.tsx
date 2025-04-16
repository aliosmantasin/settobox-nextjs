import React from 'react'
import FirstGlanceBrandId from '../_components/StartGuide/FirstGlanceStartGuide/StartGuide'
import BrandId from '../_components/StartGuide/BrandId/BrandId'
import ChooseService from '../_components/StartGuide/ChooseService/ChooseSevice'
import { seoData } from '@/lib/seo'

export async function generateMetadata() {
  const pagePath = "dijital-pazarlama-baslagic-kilavuzu"; // Sayfanın adı belirleniyor
  console.log("generateMetadata Çalışıyor! Sayfa:", pagePath);

  const seo = seoData[pagePath] || {
    title: "Varsayılan Başlık",
    description: "Varsayılan Açıklama",
  };

  console.log("Bulunan SEO:", seo);

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      title: seo.title,
      description: seo.description,
    },
  };
}

const StartGuide = () => {
  return (
    <>
      <FirstGlanceBrandId/>
      <BrandId/>
      <ChooseService/>
    </>
  )
}

export default StartGuide

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
  ]
}
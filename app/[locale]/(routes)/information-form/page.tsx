import React from 'react'
import InfoForm from '../_components/Register/form'
import { seoData } from '@/lib/seo';

export async function generateMetadata() {
  const pagePath = "bilgi-alma-formu"; // Sayfanın adı belirleniyor
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



const InfoFormPage = () => {
  return (
    <>
     <InfoForm/>
    </>
  )
}

export default InfoFormPage
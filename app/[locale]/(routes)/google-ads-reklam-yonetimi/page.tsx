
import GoogleInfo from '../_components/GoogleAds/GoogleInfo/GoogleInfo'
import { MaskSvg } from '../_components/libs/Mask/Mask'
import GoogleAdditional from '../_components/GoogleAds/GoogleAdditional/GoogleAdditional'
import GoogleProduct from '../_components/GoogleAds/GoogleProduct/GoogleProduct'
import Head from 'next/head'
import { seoData } from '@/lib/seo'
import { GoogleAdsCard } from '../_components/GoogleAds/GoogleAdsCard/GoogleAdsCard'

export async function generateMetadata() {
  const pagePath = "google-ads-reklam-yonetimi"; // Sayfanın adı belirleniyor
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

const GoogleAdsPage = () => {

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
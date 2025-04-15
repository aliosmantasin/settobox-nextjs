import GoogleInfo from '../_components/GoogleAds/GoogleInfo/GoogleInfo'
import GoogleAdditional from '../_components/GoogleAds/GoogleAdditional/GoogleAdditional'
import GoogleProduct from '../_components/GoogleAds/GoogleProduct/GoogleProduct'
import Head from 'next/head'
import { seoData } from '@/lib/seo'
import { GoogleAdsCard } from '../_components/GoogleAds/GoogleAdsCard/GoogleAdsCard'
import { Metadata } from 'next'
import GoogleAnimation from '../_components/GoogleAds/GoogleAnimation'


type Props = {
  params: Promise<{ locale: string }>; // ✅ params artık Promise olarak tanımlandı
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Dil parametresine göre doğru sayfa yolunu belirle
  const resolvedParams = await params; // ✅ Promise olan params'ı çöz
  const locale = resolvedParams.locale ?? "tr"; // ✅ Varsayılan dili "tr" yap
  const pagePath = locale === "en" ? "google-ads-management" : "google-ads-reklam-yonetimi";
  
  console.log("generateMetadata Çalışıyor! Sayfa:", pagePath);
  console.log("Dil:", locale);

  const seo = seoData[pagePath] || {
    title: locale === "en" ? "Google Ads Management" : "Google Ads Reklam Yönetimi",
    description: locale === "en" ? "Professional Google Ads Management Services" : "Profesyonel Google Ads Reklam Yönetimi Hizmetleri",
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
      
        <GoogleAnimation/>
        <GoogleAdditional/>
     
        <section className='py-20 relative'>

        <GoogleAdsCard/>


        <GoogleProduct/>

               
        {/* <BlobsAnimations/> */}
      </section>
    </>
  )
}

export default GoogleAdsPage

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
  ]
}
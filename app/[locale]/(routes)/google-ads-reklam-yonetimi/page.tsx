import GoogleInfo from '../_components/GoogleAds/GoogleInfo/GoogleInfo'
import GoogleAdditional from '../_components/GoogleAds/GoogleAdditional/GoogleAdditional'
import GoogleProduct from '../_components/GoogleAds/GoogleProduct/GoogleProduct'
import { seoData } from '@/lib/seo'
import { GoogleAdsCard } from '../_components/GoogleAds/GoogleAdsCard/GoogleAdsCard'
import { Metadata } from 'next'
import GoogleAnimation from '../_components/GoogleAds/GoogleAnimation'
import GoogleAdsContent from '../_components/GoogleAds/GoogleAdsContent'
import GoogleCTA from '../_components/GoogleAds/GoogleCTA'

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "google-ads-management" : "google-ads-reklam-yonetimi";
  
  const defaultSeo = {
    title: locale === "en" 
      ? "Professional Google Ads Management | PPC Advertising Services" 
      : "Google Ads Reklam Yönetimi | Profesyonel PPC Reklamcılık Hizmetleri",
    description: locale === "en" 
      ? "Expert Google Ads management services to boost your online visibility and ROI. Get targeted traffic, lead generation, and sales with our PPC advertising strategies." 
      : "Çevrimiçi görünürlüğünüzü ve yatırım getirinizi artıran uzman Google Ads yönetim hizmetleri. PPC reklam stratejilerimizle hedefli trafik, müşteri kazanımı ve satış elde edin.",
  };

  const seo = seoData[pagePath] || defaultSeo;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      locale: locale,
      siteName: locale === "en" ? "Settobox Digital Marketing" : "Settobox Dijital Pazarlama",
      images: [
        {
          url: '/thumbnails/google-ads-animation-thumbnail.png',
          width: 1200,
          height: 630,
          alt: locale === "en" ? "Google Ads Management Services" : "Google Ads Yönetim Hizmetleri",
        },
      ],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      card: "summary_large_image",
      images: ['/thumbnails/google-ads-animation-thumbnail.png'],
    },
    keywords: locale === "en" 
      ? "Google Ads, PPC Advertising, Google Ads Management, Digital Marketing, Search Engine Marketing, Display Ads, Remarketing, Google Ads Campaign, AdWords, Online Advertising"
      : "Google Ads, PPC Reklamcılık, Google Ads Yönetimi, Dijital Pazarlama, Arama Motoru Pazarlamacılığı, Görüntülü Reklamlar, Yeniden Pazarlama, Google Ads Kampanyası, AdWords, Online Reklamcılık",
    alternates: {
      canonical: `/${pagePath}`,
      languages: {
        'en': `/en/google-ads-management`,
        'tr': `/tr/google-ads-reklam-yonetimi`,
      },
    },
  };
}

const GoogleAdsPage = () => {
  return (
    <main aria-label="Google Ads Management Page">
      <article className="google-ads-content">
        <GoogleInfo/>
        <GoogleAdditional/>
        <section className='py-20 relative' aria-label="Google Ads Services">
          <GoogleAdsCard/>
          <GoogleProduct/>
          <GoogleAnimation/>
        </section>
        <GoogleCTA />
        <GoogleAdsContent />
      </article>
    </main>
  )
}

export default GoogleAdsPage

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
    { locale: 'en' },
  ]
}
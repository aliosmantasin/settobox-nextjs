import dynamic from 'next/dynamic'
import { seoData } from '@/lib/seo'
import { Metadata } from 'next'
import Loading from '../_components/Loadling/Loading'
import CaseStudyVip from '../_components/libs/HighLight/CaseStudyVip'
import ResultsHighlight from '../_components/libs/HighLight/ResultsHighlight'


// Lazy loaded components
const GoogleInfo = dynamic(() => import('../_components/GoogleAds/GoogleInfo/GoogleInfo'), {
  loading: () => <div>Loading...</div>
})



const PricingPlans = dynamic(() => import('../_components/GoogleAds/PricingPlans/PricingPlansGoogle'), {
  loading: () => <div><Loading/></div>
})


// const GoogleAdditional = dynamic(() => import('../_components/GoogleAds/GoogleAdditional/GoogleAdditional'), {
//   loading: () => <div><Loading/></div>
// })


// const GoogleProduct = dynamic(() => import('../_components/GoogleAds/GoogleProduct/GoogleProduct'), {
//   loading: () => <div><Loading/></div>
// })

const GoogleAdsCard = dynamic(() => import('../_components/GoogleAds/GoogleAdsCard/GoogleAdsCard').then(mod => mod.GoogleAdsCard), {
  loading: () => <div><Loading/></div>
})

const GoogleAnimation = dynamic(() => import('../_components/GoogleAds/GoogleAnimation'), {
  loading: () => <div><Loading/></div>
})

const GoogleAdsContent = dynamic(() => import('../_components/GoogleAds/GoogleAdsContent'), {
  loading: () => <div><Loading/></div>
})

const GoogleCTA = dynamic(() => import('../_components/GoogleAds/GoogleCTA'), {
  loading: () => <div><Loading/></div>
})

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

    // BASE URL'ni ayarla
    const baseUrl = "https://www.settobox.com";
    const canonical = `${baseUrl}/${locale}/${pagePath}`;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: locale,
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
      canonical,
      languages: {
        'en': `${baseUrl}/en/google-ads-management`,
        'tr': `${baseUrl}/tr/google-ads-reklam-yonetimi`,
      },
    },
  };
}

const GoogleAdsPage = () => {
  return (
    <main aria-label="Google Ads Management Page">
      <article className="google-ads-content">
        <GoogleInfo/>
        <PricingPlans/>
        {/* <GoogleAdditional/> */}
        <section className='py-20 relative' aria-label="Google Ads Services">
          <GoogleAdsCard/>
          <GoogleAnimation/>
        </section>
        <ResultsHighlight />
        <CaseStudyVip/>
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
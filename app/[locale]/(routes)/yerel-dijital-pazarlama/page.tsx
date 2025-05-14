import dynamic from 'next/dynamic'
import { seoData } from "@/lib/seo"
import { Metadata } from "next"
import Loading from '../_components/Loadling/Loading'
import LocatedContact from '../_components/LocatedDijitalMarketing/LocatedContact/LocatedContact'

// Lazy loaded components
const FirstGlance = dynamic(() => import("../_components/LocatedDijitalMarketing/FirstGlance"), {
  loading: () => <div><Loading/></div>
})

const MaskSvg = dynamic(() => import("../_components/libs/Mask/Mask").then(mod => mod.MaskSvg), {
  loading: () => <div><Loading/></div>
})

const GoogleAds = dynamic(() => import("../_components/LocatedDijitalMarketing/CardService"), {
  loading: () => <div><Loading/></div>
})

const ShowLocationComponent = dynamic(() => import("../_components/LocatedDijitalMarketing/ShowLocation"), {
  loading: () => <div><Loading/></div>
})

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "local-digital-marketing" : "yerel-dijital-pazarlama";

  const defaultSeo = {
    title: locale === "en" ? "Local Digital Marketing Services | SetToBox" : "Yerel Dijital Pazarlama Hizmetleri | SetToBox",
    description: locale === "en" ? "Boost your local business visibility with our targeted digital marketing services. Local SEO, Google My Business optimization, and location-based advertising." : "Yerel işletmenizin görünürlüğünü hedefli dijital pazarlama hizmetlerimizle artırın. Yerel SEO, Google İşletme Profili optimizasyonu ve konum bazlı reklamcılık.",
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
          url: '/thumbnails/local-marketing-thumbnail.png',
          width: 1200,
          height: 630,
          alt: locale === "en" ? "Local Digital Marketing Services" : "Yerel Dijital Pazarlama Hizmetleri",
        },
      ],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      card: "summary_large_image",
      images: ['/thumbnails/local-marketing-thumbnail.png'],
    },
    keywords: locale === "en" 
      ? "Local Digital Marketing, Local SEO, Google My Business, Location-Based Marketing, Local Business Marketing, Local Online Advertising"
      : "Yerel Dijital Pazarlama, Yerel SEO, Google İşletme Profili, Konum Bazlı Pazarlama, Yerel İşletme Pazarlaması, Yerel Online Reklam",
    alternates: {
      canonical: `/${pagePath}`,
      languages: {
        'en': `/en/local-digital-marketing`,
        'tr': `/tr/yerel-dijital-pazarlama`,
      },
    },
  };
}

const LocalDigitalMarketing = () => {
  return (
    <main aria-label="Local Digital Marketing Page">
      <article className="local-marketing-content">
        <FirstGlance/>
        <MaskSvg/>
        <GoogleAds/>
        <ShowLocationComponent/>
        <LocatedContact/>
      </article>
    </main>
  )
}

export default LocalDigitalMarketing

export async function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
import dynamic from 'next/dynamic'
import { seoData } from "@/lib/seo"
import { Metadata } from "next"
import Loading from '../_components/Loadling/Loading'

// Lazy loaded components
const FirstGlanceBrandId = dynamic(() => import("../_components/StartGuide/FirstGlanceStartGuide/StartGuide"), {
  loading: () => <div><Loading/></div>
})

const BrandId = dynamic(() => import("../_components/StartGuide/BrandId/BrandId"), {
  loading: () => <div><Loading/></div>
})

const ChooseService = dynamic(() => import("../_components/StartGuide/ChooseService/ChooseSevice"), {
  loading: () => <div><Loading/></div>
})

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = "dijital-pazarlama-baslagic-kilavuzu";

  const defaultSeo = {
    title: "Dijital Pazarlama Başlangıç Kılavuzu | SetToBox",
    description: "Dijital pazarlamaya başlamak için kapsamlı rehber. Marka kimliği oluşturma, hizmet seçimi ve dijital pazarlama stratejileri hakkında temel bilgiler.",
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
      siteName: "Settobox Dijital Pazarlama",
      images: [
        {
          url: '/thumbnails/digital-guide-thumbnail.png',
          width: 1200,
          height: 630,
          alt: "Dijital Pazarlama Başlangıç Kılavuzu",
        },
      ],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      card: "summary_large_image",
      images: ['/thumbnails/digital-guide-thumbnail.png'],
    },
    keywords: "Dijital Pazarlama Rehberi, Dijital Pazarlama Başlangıç, Marka Kimliği, Dijital Strateji, Online Pazarlama Temelleri, Dijital Pazarlama Eğitimi",
    alternates: {
      canonical: `/${pagePath}`,
      languages: {
        'tr': `/tr/dijital-pazarlama-baslagic-kilavuzu`,
      },
    },
  };
}

const StartGuide = () => {
  return (
    <main aria-label="Digital Marketing Guide Page">
      <article className="digital-guide-content">
        <FirstGlanceBrandId/>
        <BrandId/>
        <ChooseService/>
      </article>
    </main>
  )
}

export default StartGuide

export async function generateStaticParams() {
  return [
    { locale: "tr" },
  ];
}
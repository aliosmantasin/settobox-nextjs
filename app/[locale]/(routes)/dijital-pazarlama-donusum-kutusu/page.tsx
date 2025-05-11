import dynamic from 'next/dynamic'
import { seoData } from "@/lib/seo"
import { Metadata } from "next"
import Loading from '../_components/Loadling/Loading'

// Lazy loaded components
const DigitalConversiyonInfo = dynamic(() => import("../_components/DigitalConversionBox/DigitalConversiyonInfo/DigitalConversiyonInfo"), {
  loading: () => <div><Loading/></div>
})

const MaskSvg = dynamic(() => import("../_components/libs/Mask/Mask").then(mod => mod.MaskSvg), {
  loading: () => <div><Loading/></div>
})

const DigitalConversionStepToExplation = dynamic(() => import("../_components/DigitalConversionBox/DigitalConversionSteoToExplation.tsx/DigitalConversionStepToExplation"), {
  loading: () => <div><Loading/></div>
})

const DijitalConversionProduct = dynamic(() => import("../_components/DigitalConversionBox/DijitalConversionProduct/DijitalMarketingConversionProduct"), {
  loading: () => <div><Loading/></div>
})

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "digital-marketing-conversion-box" : "dijital-pazarlama-donusum-kutusu";

  const defaultSeo = {
    title: locale === "en" ? "Digital Marketing Conversion Box | SetToBox" : "Dijital Pazarlama Dönüşüm Kutusu | SetToBox",
    description: locale === "en" ? "Transform your business with our Digital Marketing Conversion Box. Comprehensive digital marketing solutions tailored for different sectors." : "Dijital Pazarlama Dönüşüm Kutusu ile işletmenizi dönüştürün. Farklı sektörler için özelleştirilmiş kapsamlı dijital pazarlama çözümleri.",
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
          url: '/thumbnails/digital-conversion-thumbnail.png',
          width: 1200,
          height: 630,
          alt: locale === "en" ? "Digital Marketing Conversion Box" : "Dijital Pazarlama Dönüşüm Kutusu",
        },
      ],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      card: "summary_large_image",
      images: ['/thumbnails/digital-conversion-thumbnail.png'],
    },
    keywords: locale === "en" 
      ? "Digital Marketing, Marketing Conversion, Sector-Specific Marketing, Digital Transformation, Marketing Solutions, Online Marketing Strategy"
      : "Dijital Pazarlama, Pazarlama Dönüşümü, Sektöre Özel Pazarlama, Dijital Dönüşüm, Pazarlama Çözümleri, Online Pazarlama Stratejisi",
    alternates: {
      canonical: `/${pagePath}`,
      languages: {
        'tr': `/tr/dijital-pazarlama-donusum-kutusu`,
      },
    },
  };
}

const Page = () => {
  return (
    <main aria-label="Digital Marketing Conversion Box Page">
      <article className="digital-conversion-content">
        <DigitalConversiyonInfo />
        <MaskSvg />
        <DigitalConversionStepToExplation />
        <DijitalConversionProduct />
      </article>
    </main>
  );
};

export default Page;

export async function generateStaticParams() {
  return [
    { locale: "tr" },
  ];
}
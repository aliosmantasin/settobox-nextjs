import dynamic from 'next/dynamic'
import { seoData } from '@/lib/seo'
import { Metadata } from 'next'
import Loading from '../_components/Loadling/Loading'

// Lazy loaded components
const MetaInfo = dynamic(() => import('../_components/Meta/MetaInfoComponent/MetaInfo'), {
  loading: () => <div><Loading/></div>
})

const MetaAdditional = dynamic(() => import('../_components/Meta/MetaAdditionalComponent/MetaAdditional'), {
  loading: () => <div><Loading/></div>
})

const MetaProduct = dynamic(() => import('../_components/Meta/MetaProduct/MetaProduct'), {
  loading: () => <div><Loading/></div>
})

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "instagram-sponsored-ads" : "instagram-sponsorlu-reklam";
  
  const seo = seoData[pagePath] || {
    title: locale === "en" ? "Instagram Sponsored Ads" : "Instagram Sponsorlu Reklam",
    description: locale === "en" ? "Professional Instagram Sponsored Ads Services" : "Profesyonel Instagram Sponsorlu Reklam Hizmetleri",
  };

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

const MetaPage = () => {
  return (
    <main aria-label="Meta Ads Management Page">
      <article className="meta-ads-content">
        <MetaInfo />
        <MetaAdditional />
        <MetaProduct />
      </article>
    </main>
  )
}

export default MetaPage

export async function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}

import { seoData } from "@/lib/seo";
import { Metadata } from "next";
import dynamic from 'next/dynamic'
import Loading from '../_components/Loadling/Loading'
// import { WebSiteCard } from '../_components/WebDesign/WebSiteCard/WebSiteCard';
import WebsiteAnimation from '../_components/WebDesign/WebsiteAnimation';
import WebsiteCTA from '../_components/WebDesign/WebsiteCTA';
import WebsiteContent from "../_components/WebSite/WebsiteContent";

// Lazy loaded components
const WebDesignInfo = dynamic(() => import("../_components/WebDesign/WebDesignInfo/WebDesignInfo"), {
  loading: () => <div><Loading/></div>
})

const WebDesignAdditional = dynamic(() => import("../_components/WebDesign/WebDesignAdditional/WebDesignAdditional"), {
  loading: () => <div><Loading/></div>
})



const PricingPlansWeb = dynamic(() => import('../_components/WebDesign/PricingPlansWeb/PricingPlansWeb'), {
  loading: () => <div><Loading/></div>
})



type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "website-development" : "web-sitesi-yaptirma";

  const defaultSeo = {
    title: locale === "en" ? "Professional Website Development Services | SetToBox" : "Profesyonel Web Sitesi Yaptırma Hizmetleri | SetToBox",
    description: locale === "en" ? "Create your professional website with modern design and SEO-friendly structure. Mobile compatible websites, e-commerce solutions and corporate web design services." : "Modern tasarım ve SEO dostu yapıya sahip profesyonel web sitenizi oluşturun. Mobil uyumlu web siteleri, e-ticaret çözümleri ve kurumsal web tasarım hizmetleri.",
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
      type: "website",
      locale: locale,
      siteName: locale === "en" ? "Settobox Digital Marketing" : "Settobox Dijital Pazarlama",
      images: [
        {
          url: '/thumbnails/web-design-thumbnail.png',
          width: 1200,
          height: 630,
          alt: locale === "en" ? "Website Development Services" : "Web Sitesi Geliştirme Hizmetleri",
        },
      ],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      card: "summary_large_image",
      images: ['/thumbnails/web-design-thumbnail.png'],
    },
    keywords: locale === "en" 
      ? "Website Development, Web Design, E-commerce Website, Corporate Website, Mobile Compatible Website, SEO Friendly Website, Professional Web Design, Website Solutions"
      : "Web Sitesi Yaptırma, Web Tasarım, E-ticaret Sitesi, Kurumsal Web Sitesi, Mobil Uyumlu Web Sitesi, SEO Dostu Web Sitesi, Profesyonel Web Tasarım, Web Site Çözümleri",
    alternates: {
      canonical,
      languages: {
        'en': `/en/website-development`,
        'tr': `/tr/web-sitesi-yaptirma`,
      },
    },
  };
}

const WebDesignPage = () => {
  return (
    <main aria-label="Website Development Page">
      <article className="web-design-content">
        <WebDesignInfo/>
        <WebDesignAdditional/>
           {/* PricingPlansWeb Component */}
        <PricingPlansWeb />
        {/* <WebSiteCard/> */}
        <WebsiteAnimation/>
        <WebsiteCTA/>
        <WebsiteContent/>
      </article>
    </main>
  );
};

export default WebDesignPage;

export async function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}
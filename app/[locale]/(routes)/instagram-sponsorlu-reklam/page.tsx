import { seoData } from "@/lib/seo";
import MetaInfo from "../_components/Meta/MetaInfoComponent/MetaInfo";
import MetaAdditional from "../_components/Meta/MetaAdditionalComponent/MetaAdditional";
import MetaProduct from "../_components/Meta/MetaProduct/MetaProduct";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>; // ✅ params artık Promise olarak tanımlandı
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Dil parametresine göre doğru sayfa yolunu belirle
  const resolvedParams = await params; // ✅ Promise olan params'ı çöz
  const locale = resolvedParams.locale ?? "tr"; // ✅ Varsayılan dili "tr" yap
  const pagePath = locale === "en" ? "instagram-sponsored-ads" : "instagram-sponsorlu-reklam";
  
  console.log("generateMetadata Çalışıyor! Sayfa:", pagePath);
  console.log("Dil:", locale);

  const seo = seoData[pagePath] || {
    title: locale === "en" ? "Instagram Sponsored Ads" : "Instagram Sponsorlu Reklam",
    description: locale === "en" ? "Professional Instagram Sponsored Ads Services" : "Profesyonel Instagram Sponsorlu Reklam Hizmetleri",
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

const MetaPage = () => {
  return (
    <>
      <MetaInfo />
      <MetaAdditional />
      <MetaProduct />
    </>
  );
};

export default MetaPage;

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
    { locale: 'en' },
  ]
}

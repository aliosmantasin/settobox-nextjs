import { seoData } from "@/lib/seo";
import WebDesignInfo from "../_components/WebDesign/WebDesignInfo/WebDesignInfo";
import { MaskSvg } from "../_components/libs/Mask/Mask";
import WebDesignAdditional from "../_components/WebDesign/WebDesignAdditional/WebDesignAdditional";
import WebDesignProduct from "../_components/WebDesign/WebDesignProduct/WebDesignProduct";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>; // ✅ params artık Promise olarak tanımlandı
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Dil parametresine göre doğru sayfa yolunu belirle
  const resolvedParams = await params; // ✅ Promise olan params'ı çöz
  const locale = resolvedParams.locale ?? "tr"; // ✅ Varsayılan dili "tr" yap
  const pagePath = locale === "en" ? "website-development" : "web-sitesi-yaptırma";
  
  console.log("generateMetadata Çalışıyor! Sayfa:", pagePath);
  console.log("Dil:", locale);

  const seo = seoData[pagePath] || {
    title: locale === "en" ? "SetToBox | Website Development" : "SetToBox | Web Sitesi Yaptırma",
    description: locale === "en" ? "Get information about our website development services." : "Web sitesi yaptırma hizmetlerimiz hakkında bilgi alın.",
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

const WebDesignPage = () => {
  return (
    <>
       <WebDesignInfo/>
       <MaskSvg/>
       <WebDesignAdditional/>
       <WebDesignProduct/>
    </>
  );
};

export default WebDesignPage;


export async function generateStaticParams() {
  return [
    { locale: 'tr' },
    { locale: 'en' },
  ]
}
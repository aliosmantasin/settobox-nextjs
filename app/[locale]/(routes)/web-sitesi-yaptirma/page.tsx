import { seoData } from "@/lib/seo";
import WebDesignInfo from "../_components/WebDesign/WebDesignInfo/WebDesignInfo";
import { MaskSvg } from "../_components/libs/Mask/Mask";
import WebDesignAdditional from "../_components/WebDesign/WebDesignAdditional/WebDesignAdditional";
import WebDesignProduct from "../_components/WebDesign/WebDesignProduct/WebDesignProduct";

export async function generateMetadata() {
  const pagePath = "web-sitesi-yaptırma"; // Sayfanın adı belirleniyor
  console.log("generateMetadata Çalışıyor! Sayfa:", pagePath);

  const seo = seoData[pagePath] || {
    title: "SetToBox | Dijital Pazarlama",
    description: "Dijital pazarlama hizmetlerimiz hakkında bilgi alın.",
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

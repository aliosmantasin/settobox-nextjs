import { seoData } from "@/lib/seo";
import MetaInfo from "../_components/Meta/MetaInfoComponent/MetaInfo";
import MetaAdditional from "../_components/Meta/MetaAdditionalComponent/MetaAdditional";
import MetaProduct from "../_components/Meta/MetaProduct/MetaProduct";



export async function generateMetadata() {
  const pagePath = "instagram-sponsorlu-reklam"; // Sayfanın adı belirleniyor
  console.log("generateMetadata Çalışıyor! Sayfa:", pagePath);

  const seo = seoData[pagePath] || {
    title: "Varsayılan Başlık",
    description: "Varsayılan Açıklama",
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

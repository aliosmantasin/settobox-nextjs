
import FirstGlance from "../_components/HomePage/FirstGlance";
import { MaskSvg } from "../_components/libs/Mask/Mask";
import ServiceSlider from "../_components/HomePage/SliderShadcn/SliderShadcn";
import SectorAll from "../_components/HomePage/Sector/SectorAll";
import DijitalDonusumKutusu from "../_components/HomePage/DijitalDonusumKutusu/DijitalDonusumKutusu";
import type { Metadata } from "next";
import { seoData } from "@/lib/seo";

type Props = {
  params: Promise<{ locale?: string }>; // ✅ params artık Promise olarak tanımlandı
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Promise olan params'ı çöz
  const locale = resolvedParams.locale ?? "tr"; // ✅ Varsayılan dili "tr" yap
  const pagePath = `/${locale}`;

  console.log("📌 Gelen params:", resolvedParams);
  console.log("📌 Kullanılan dil:", locale);

  const seo = seoData[pagePath] || {
    title: "Varsayılan Başlık",
    description: "Varsayılan Açıklama",
  };

  return {
    title: seo.title,
    description: seo.description,
  };
}


export default function HomePage() {


  return (
    <>
      <FirstGlance />
      <MaskSvg />
      <ServiceSlider />
      <DijitalDonusumKutusu/>
      <SectorAll />
    </>
  );
}

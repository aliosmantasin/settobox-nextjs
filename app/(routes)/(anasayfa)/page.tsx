"use client";
import dynamic from "next/dynamic";
import FirstGlance from "../_components/HomePage/FirstGlance";
import { MaskSvg } from "../_components/libs/Mask/Mask";
import ServiceSlider from "../_components/HomePage/SwiperSlider/SwiperSlider";
import SectorAll from "../_components/HomePage/Sector/SectorAll";
import Head from "next/head";
import { seoData } from "@/lib/seo";
import { useEffect } from "react";


const DijitalDonusumKutusu = dynamic(() => import("../_components/HomePage/DijitalDonusumKutusu/DijitalDonusumKutusu"), { ssr: false });

export default function HomePage() {

  useEffect(() => {
    const seo = seoData["anasayfa"] || {
      title: "SetToBox | Dijital Pazarlama",
      description: "Dijital pazarlama hizmetlerimiz hakkında bilgi alın.",
    };

    document.title = seo.title;

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", seo.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = seo.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Test Başlığı</title>
        <meta name="description" content="Bu bir test açıklamasıdır." />
      </Head>
      

      {/* Sayfa içeriği */}
      <FirstGlance />
      <MaskSvg />
      <ServiceSlider />
      <DijitalDonusumKutusu />
      <SectorAll />
    </>
  );
}

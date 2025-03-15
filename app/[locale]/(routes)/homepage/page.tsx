"use client";
import dynamic from "next/dynamic";
import FirstGlance from "../_components/HomePage/FirstGlance";
import { MaskSvg } from "../_components/libs/Mask/Mask";
import ServiceSlider from "../_components/HomePage/SliderShadcn/SliderShadcn";
import SectorAll from "../_components/HomePage/Sector/SectorAll";




const DijitalDonusumKutusu = dynamic(
  () => import("../_components/HomePage/DijitalDonusumKutusu/DijitalDonusumKutusu"),
  { ssr: false }
);

export default function HomePage() {


  return (
    <>
      {/* Sayfa içeriği */}
      <FirstGlance />
      <MaskSvg />
      <ServiceSlider />
      <DijitalDonusumKutusu />
      <SectorAll />
    </>
  );
}

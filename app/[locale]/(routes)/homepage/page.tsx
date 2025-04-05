"use client";
import dynamic from "next/dynamic";
import FirstGlance from "../_components/HomePage/FirstGlance";
import { MaskSvg } from "../_components/libs/Mask/Mask";
import ServiceSlider from "../_components/HomePage/SliderShadcn/SliderShadcn";
import SectorAll from "../_components/HomePage/Sector/SectorAll";
import ContactUs from "../_components/StartGuide/ContactUs/ContactUs";
import BlobsAnimations from "../_components/DigitalConversionSector/AllinBoxComponents/BlobsAnimations";




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
      <section className='py-20 relative'>
      <ContactUs/>
      <BlobsAnimations/>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    
  ]
}


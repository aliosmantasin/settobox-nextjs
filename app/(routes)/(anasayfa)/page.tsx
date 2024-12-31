'use client'
import dynamic from "next/dynamic";
import FirstGlance from "../_components/HomePage/FirstGlance";
import {MaskSvg} from "../_components/HomePage/Mask/Mask";
import ServiceSlider from "../_components/HomePage/SwiperSlider/SwiperSlider";
const DijitalDonusumKutusu = dynamic(() => import("../_components/HomePage/DijitalDonusumKutusu/DijitalDonusumKutusu"), { ssr: false });



export default function HomePage() {



  return (
   <>
    <FirstGlance/>
    <MaskSvg/>
    <ServiceSlider/>
    <DijitalDonusumKutusu/>
   </>
  );
}


"use client"
import DigitalConversiyonInfo from "../_components/DigitalConversionBox/DigitalConversiyonInfo/DigitalConversiyonInfo";
import DigitalConversionStepToExplation from "../_components/DigitalConversionBox/DigitalConversionSteoToExplation.tsx/DigitalConversionStepToExplation";
import DijitalConversionProduct from "../_components/DigitalConversionBox/DijitalConversionProduct/DijitalMarketingConversionProduct";
import { MaskSvg } from "../_components/libs/Mask/Mask";

// 📌 Sayfa İçeriği
const Page = () => {
  return (
    <>
      <DigitalConversiyonInfo />
      <MaskSvg />
      <DigitalConversionStepToExplation />
      <DijitalConversionProduct />
    </>
  );
};

export default Page;



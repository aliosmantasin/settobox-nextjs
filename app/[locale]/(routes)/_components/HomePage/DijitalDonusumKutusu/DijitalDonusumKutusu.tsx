"use client"
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import LocalMarketingVisual from "./LocalMarketingVisual";

interface PackageCardProps {
  title: string;
  description: string | ReactNode;
  features: string[];
  visual: ReactNode;
  link: string;
  linkText: string;
  isRecommended?: boolean;
}

// Reusable Package Card Component
const PackageCard = ({ title, description, features, visual, link, linkText, isRecommended }: PackageCardProps) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;

  return (
    <div className={`mt-20 relative flex flex-col w-full lg:w-[450px] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-slate-900 ${isRecommended ? 'border-2 border-blue-500' : 'border border-gray-200 dark:border-slate-700'}`}>
      {isRecommended && (
        <div className="absolute -top-4 right-6 bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20">
          Kapsamlı Paket
        </div>
      )}
      <div className={`flex justify-center items-center ${currentTheme === "dark" ? "gridBoxDark" : "gridBox"} relative rounded-t-xl p-6 min-h-[360px]`}>
        {visual}
      </div>
      <div className="flex flex-col p-6 md:p-8 flex-grow">
        <h3 className="text-2xl font-bold primary dark:text-slate-200 mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13.3333L9.15385 18L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-gray-700 dark:text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={link} passHref className="mt-auto">
          <button className="flex items-center justify-center w-full mt-4 px-6 py-3 border border-gray-400 text-gray-800 dark:text-slate-200 dark:border-slate-500 font-bold rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300">
            {linkText}
            <FiArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const DijitalDonusumKutusu = () => {
  const t = useTranslations("HomePage");

  const localMarketingPackage = {
    title: "Yerel/Mikro Dijital Pazarlama",
    description: "İşletmenizin yerel pazarda dijital olarak güçlü bir başlangıç yapması için tasarlanmış, temel ve etkili çözümler sunan başlangıç paketimiz.",
    features: [
      "Google İşletme Profili & Google Ads Reklam Yönetimi",
      "Meta (Facebook/Instagram) Temel Kurulumları",
      "Dönüşüm Odaklı ve SEO Uyumlu Web Sitesi",
      "Haftalık Raporlama ve Strateji Desteği",
    ],
    visual: <LocalMarketingVisual />,
    link: "/yerel-dijital-pazarlama",
    linkText: "Paketi İncele",
    isRecommended: false
  };
  
  const digitalTransformationPackage = {
    title: t("subtitle2B"),
    description: t.rich("description3", { strong: (chunks) => <strong className="primary-light">{chunks}</strong> }),
    features: t.raw("list"),
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full flex opacity-80">
          <span className="w-2/4 boxBlueContent" />
          <span className="w-2/4 boxPurpleContent" />
        </div>
        <Image 
          src="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/360DigitalMarketing/DigitalDonusumKutusu-b3gNKhVW7pjFYWYDR5esja7FAdwXMN.webp" 
          alt={t("subtitle2B")} 
          className="relative w-[300px] h-auto" 
          width={400} 
          height={400} 
        />
      </div>
    ),
    link: t("moreİnfoLink"),
    linkText: t("LinkButton"),
    isRecommended: true
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="py-20 relative bg-dots"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold primary dark:text-slate-200 mb-4">
            360° Dijital Pazarlama Çözümleri
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            İster yerelde güçlü bir başlangıç yapın, ister dijital dönüşümle pazarınıza liderlik edin. Her ihtiyaca uygun, bütünsel bir çözümümüz var.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
            <div className="relative mt-24">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+1.5rem)] z-20">
                    <div className="bg-blue-600 text-white font-bold text-center text-lg px-8 py-3 rounded-xl shadow-lg">
                        360° Dijital Pazarlama
                    </div>
                </div>

               {/* Desktop SVG Connectors */}
            <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 -translate-y-16 w-[512px] h-[64px] z-[-1]">
              <svg width="512" height="64" viewBox="0 0 512 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M256 0 V32 C256 50, 220 50, 0 55" stroke="#CBD5E1" strokeWidth="2" />
                <path d="M256 0 V32 C256 50, 292 50, 512 55" stroke="#CBD5E1" strokeWidth="2" />
              </svg>
            </div>
                
                <div className="flex flex-row justify-center items-stretch gap-12 pt-[70px]">
                    <PackageCard {...localMarketingPackage} />
                    <PackageCard {...digitalTransformationPackage} />
                </div>
            </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden relative mt-12 pl-12">
            <div className="absolute top-0 left-4 h-full border-l-2 border-dashed border-gray-300 dark:border-slate-600"></div>

            <div className="relative mb-10 -ml-12">
                <div className="absolute top-1/2 -translate-y-1/2 left-4 w-8 border-t-2 border-dashed border-gray-300 dark:border-slate-600"></div>
                <div className="pl-12">
                     <div className="bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-xl shadow-lg inline-block">
                        360° Dijital Pazarlama
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-16">
                 <div className="relative">
                    <div className="absolute top-16 -left-8 w-8 border-t-2 border-dashed border-gray-300 dark:border-slate-600"></div>
                    <PackageCard {...localMarketingPackage} />
                </div>
                 <div className="relative">
                    <div className="absolute top-16 -left-8 w-8 border-t-2 border-dashed border-gray-300 dark:border-slate-600"></div>
                    <PackageCard {...digitalTransformationPackage} />
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DijitalDonusumKutusu;

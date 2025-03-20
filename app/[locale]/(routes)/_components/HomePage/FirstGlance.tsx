"use client"
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FcGoogle, FcTemplate } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";

const FirstGlance: React.FC = () => {
  const t = useTranslations("HomePage");


  const features = [
    {
      title: t('features1.title'),
      description: t('features1.description'),
      url: "/google-ads-reklam-yonetimi",
      icon: <FcGoogle className="w-16 h-16 rounded-lg border border-gray-100 shadow-sm p-3" />,
    },
    {
      title: t('features2.title'),
      description: t('features2.description'),
      url: "/instagram-sponsorlu-reklam",
      icon: (
        <svg className="w-16 h-16 rounded-lg border border-gray-100 shadow-sm p-3" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 85.18 56.58" width={35} height={35}>
        <g id="Layer_1-2" data-name="Layer_1">
            <path fill='#217ceb' d="M77.79,10.4C73.24,3.62,67.29,0,61.05,0c-3.72,0-7.41,1.66-10.84,4.64-2.32,2.02-4.46,4.57-6.46,7.27-2.46-3.11-4.74-5.49-6.95-7.29C32.61,1.2,28.59,0,24.54,0h0c-1.75,0-3.44.28-5.05.81-1.21.4-2.39.93-3.52,1.58-3.38,1.96-6.35,5-8.72,8.66C2.5,18.38,0,27.88,0,36.98c0,5.01.99,9.41,3,12.76,2.47,4.11,6.45,6.84,12.75,6.84,5.31,0,9.35-2.39,14.07-8.68,2.7-3.59,4.06-5.77,9.45-15.33l2.68-4.75c.22-.39.44-.78.66-1.17.22.35.43.71.65,1.08l7.64,12.76c2.57,4.3,5.91,9.07,8.76,11.76,3.71,3.5,7.07,4.33,10.87,4.33h0c6.1,0,9.73-3.22,11.59-6.44,1.93-3.33,3.06-7.55,3.06-13.29,0-9.66-2.42-19.01-7.4-26.44ZM34.65,25.55c-2.69,4.13-6.68,10.71-10.07,15.4-4.23,5.85-6.43,6.45-8.82,6.45-1.86,0-3.68-.84-4.91-2.82h0c-.93-1.51-1.65-4.01-1.65-7.26,0-7.89,2.23-16.1,5.89-21.61h0c1.13-1.71,2.36-3.16,3.68-4.24.38-.31.77-.59,1.16-.84s.8-.47,1.21-.65c.21-.09.41-.18.62-.25.84-.3,1.72-.46,2.62-.46,4.49,0,7.3,2.81,9.49,5.13,1.09,1.16,2.61,3.08,4.38,5.6l-3.62,5.56ZM64.63,43.83c-1.76-2.14-4.77-6.67-10.05-15.47l-2.19-3.65c-1.56-2.6-3.04-4.94-4.46-7.04.25-.39.5-.78.76-1.15,3.98-5.91,7.52-9.23,11.92-9.23,4.07,0,7.76,2.69,10.62,7.09,4.02,6.21,5.84,14.89,5.84,22.72h0c0,.58-.02,1.16-.05,1.72-.02.28-.04.56-.06.83-.04.47-.1.93-.17,1.38-.61,3.67-2.32,6.37-6.24,6.37h0c-2.06,0-3.64-.82-5.91-3.56Z" />
        </g>
      </svg>
      ),
    },
    {
      title: t('features3.title'),
      description: t('features3.description'),
      url: "/web-sitesi-yaptirma",
      icon: <FcTemplate className="w-16 h-16 rounded-lg border border-gray-100 shadow-sm p-3" />,
    },
    {
      title: t('features4.title'),
      description: t('features4.description'),
      url: "/dijital-pazarlama-donusum-kutusu",
      icon: (
        <Image
          className="rounded-lg border border-gray-100 shadow-sm p-3"
          src="/images/DigitalDonusumKutusu.webp"
          alt="Dijital Dönüşüm Kutusu"
          width={66}
          height={66}
        />
      ),
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <section className="min-h-auto sm:min-h-[600] ocean-shadow">
        <div className="container mx-auto my-10 pb-5">
          <div className="max-w-2xl mx-auto relative">
            <h1 className="text-2xl sm:text-2xl md:text-3xl my-5 text-center primary">
              {t("title1")}
            </h1>

            <div className="max-w-xl mt-10 space-y-3 mx-auto dark:ocean-shadow">
              {features.map((feature, index) => (
                <Link key={index} href={feature.url}>
                  <div className="w-full flex items-center justify-between dark:bg-black hover:bg-gray-50 relative p-5">
                    <div className="flex items-center">
                      <div className="flex my-auto mr-5">{feature.icon}</div>
                      <div>
                        <span className="block text-xl text-gray-900 dark:text-white">{feature.title}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</span>
                      </div>
                    </div>
                    <MdKeyboardArrowRight className="text-2xl text-gray-400 dark:text-gray-300" />
                  </div>
                </Link>
              ))}
            </div>


          <div className="flex justify-center sm:justify-between items-center mt-6  space-x-4 max-w-xl mx-5 sm:mx-auto p-6 rounded-lg m-2  bg-gray-50 dark:bg-black">
          <Link href={t("formLink")}>
            <Button className="relative">
              <Mail />{t("form")}
            </Button>
          </Link>

          <Link href="tel:+905437214839" target="_blank">
            <Button
              variant="ghost"
              className="flex items-center gap-3 border rounded border-r-8 border-blue-700 hover:text-blue-800 py-5 relative"
            >
              <PhoneCall size={14} className="relative" />
              {t("contact")}
            </Button>
          </Link>
        </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FirstGlance;













      {/* <p className="mt-4 text-muted-foreground styled-paragraph relative">
            {t("description1")}
          </p> */}




        {/* <div className="flex justify-center items-center mt-6 space-x-4">
          <Link href={t("formLink")}>
            <Button className="relative">
              <Mail />{t("form")}
            </Button>
          </Link>

          <Link href="tel:+905437214839" target="_blank">
            <Button
              variant="ghost"
              className="flex items-center gap-3 border rounded border-r-8 border-blue-700 hover:text-blue-800 py-5 relative"
            >
              <PhoneCall size={14} className="relative" />
              {t("contact")}
            </Button>
          </Link>
        </div> */}

        {/* <div className="flex justify-center mt-10">
          {isLoading && <Loading/>}
          <div
            ref={animationContainer}
            className="w-96 max-w-md relative"
            style={{ height: "400px",
              display: isLoading ? "none" : "block",
             }}
            
          />
        </div> */}
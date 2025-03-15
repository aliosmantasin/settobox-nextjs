"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { useTranslations } from "next-intl";

export const GoogleAdsCard = () => {
 
  const t = useTranslations("GooglePage");

  return (

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }} // Görünür olma koşulunu daha hassas yap
    transition={{ duration: 2 }}

  >
    <section className="my-20 mx-2">
      <div className="container flex flex-wrap justify-center mx-auto p-2 ">
        {/* İlk Kart */}
        <div className="flex w-full sm:w-3/5 md:w-2/5 m-1">
        <div className="w-96 min-h-96 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
          <Image
            src="/images/HowToMake.webp"
            alt="Nasıl Yapıyoruz?"
            className="w-full h-36 object-cover rounded-t-lg"
            width={400}
            height={400}
          />
                  <div className="p-4 text-center mx-auto">
                      <h5 className="text-xl font-semibold text-gray-900">{t("googleAdsCard.howToMakeCart.title")}</h5>
                      <p className="text-sm text-gray-600 mt-2">
                      {t("googleAdsCard.howToMakeCart.description")}
                      </p>

                      <div className="flex justify-between items-center mt-5">
                      <div className="flex">
                          <Link
                              href={t("googleAdsCard.howToMakeCart.link")}
                              target="_blank"
                              className="text-blue-600 hover:underline"
                          >
                              {t("googleAdsCard.howToMakeCart.span1")}
                          </Link>
                      </div>

                      <DropdownMenu>
                          <DropdownMenuTrigger >
                             <span className="flex items-center gap-2">{t("googleAdsCard.howToMakeCart.span2")}<MdOutlineMoreVert />
                             </span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>{t("googleAdsCard.howToMakeCart.span3")}</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuRadioGroup>
                       
                              <Link  href={t("googleAdsCard.howToMakeCart.link1")}><DropdownMenuRadioItem className="cursor-pointer" value="top">{t("googleAdsCard.howToMakeCart.span3")}</DropdownMenuRadioItem></Link>
                             
                              <Link href={t("googleAdsCard.howToMakeCart.link2")}><DropdownMenuRadioItem className="cursor-pointer" value="bottom">{t("googleAdsCard.howToMakeCart.span4")}</DropdownMenuRadioItem></Link>

                              <Link href={t("googleAdsCard.howToMakeCart.link3")}><DropdownMenuRadioItem className="cursor-pointer" value="bottom">{t("googleAdsCard.howToMakeCart.span5")}</DropdownMenuRadioItem></Link>

                              
                              </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                      </DropdownMenu>
                      </div>
                      </div>

                  </div>
        </div>

        {/* İkinci Kart */}
        <div className="flex w-full sm:w-3/5 md:w-2/5 m-1">
        <div className="w-96 min-h-96 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
          <Image
            src="/images/ReklamHarcamasi.webp"
            alt="Reklam Bütçesi Ne Kadar Olmalı?"
            className="w-full h-36 object-cover rounded-t-lg"
            width={400}
            height={400}
          />
          <div className="p-2 text-center">
            <h5 className="text-xl font-semibold text-gray-900">{t("googleAdsCard.AdsCoastCart.title")}</h5>
            <p className="text-sm text-gray-600 mt-2">
            {t("googleAdsCard.AdsCoastCart.description")}
            </p>
                <div className="my-5">
                  <a
                    href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum%20google%20ads%20reklam%20bütçesi%20hakkında%20bilgi%20edinebilir%20miyim?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {t("googleAdsCard.AdsCoastCart.span1")}
                  </a>
                </div>

          </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

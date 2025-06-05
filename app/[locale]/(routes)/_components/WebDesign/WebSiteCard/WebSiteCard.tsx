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

export const WebSiteCard = () => {
  const t = useTranslations("WebSitePage");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 2 }}
    >
      <section className="my-20 mx-2">
        <div className="container flex flex-wrap justify-center mx-auto p-2">
          {/* Nasıl Yapıyoruz Kartı */}
          <div className="flex w-full sm:w-3/5 md:w-2/5 m-1">
            <div className="w-96 min-h-96 cardBgColor border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
              <Image
                src="/images/web-development-process.webp"
                alt="Web Sitesi Nasıl Yapıyoruz?"
                className="w-full h-36 object-cover rounded-t-lg"
                width={400}
                height={400}
              />
              <div className="p-4 text-center mx-auto">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{t("webSiteCard.howToMakeCart.title")}</h5>
                <p className="text-sm text-gray-900 dark:text-slate-400 mt-2">
                  {t("webSiteCard.howToMakeCart.description")}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex">
                    <Link
                      href={t("webSiteCard.howToMakeCart.link")}
                      target="_blank"
                      className="text-[#1f77bb] dark:text-blue-800 hover:underline"
                    >
                      {t("webSiteCard.howToMakeCart.span1")}
                    </Link>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <span className="flex items-center gap-2">{t("webSiteCard.howToMakeCart.span2")}<MdOutlineMoreVert /></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>{t("webSiteCard.howToMakeCart.span3")}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup>
                        <Link href={t("webSiteCard.howToMakeCart.link1")}>
                          <DropdownMenuRadioItem className="cursor-pointer" value="process">{t("webSiteCard.howToMakeCart.span3")}</DropdownMenuRadioItem>
                        </Link>
                        <Link href={t("webSiteCard.howToMakeCart.link2")}>
                          <DropdownMenuRadioItem className="cursor-pointer" value="portfolio">{t("webSiteCard.howToMakeCart.span4")}</DropdownMenuRadioItem>
                        </Link>
                        <Link href={t("webSiteCard.howToMakeCart.link3")}>
                          <DropdownMenuRadioItem className="cursor-pointer" value="technologies">{t("webSiteCard.howToMakeCart.span5")}</DropdownMenuRadioItem>
                        </Link>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>

          {/* Fiyatlandırma Kartı */}
          <div className="flex w-full sm:w-3/5 md:w-2/5 m-1">
            <div className="w-96 min-h-96 cardBgColor border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
              <Image
                src="/images/web-pricing.webp"
                alt="Web Sitesi Fiyatlandırma"
                className="w-full h-36 object-cover rounded-t-lg"
                width={400}
                height={400}
              />
              <div className="p-2 text-center">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{t("webSiteCard.pricingCart.title")}</h5>
                <p className="text-sm text-gray-900 dark:text-slate-400 mt-2">
                  {t("webSiteCard.pricingCart.description")}
                </p>
                <div className="my-5">
                  <a
                    href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum%20web%20sitesi%20fiyatlandırması%20hakkında%20bilgi%20edinebilir%20miyim?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1f77bb] text-white rounded-lg hover:bg-blue-700"
                  >
                    {t("webSiteCard.pricingCart.span1")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Neden Biz Kartı */}
          <div className="flex w-full sm:w-3/5 md:w-2/5 m-1">
            <div className="w-96 min-h-96 cardBgColor border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
              <Image
                src="/images/why-us.webp"
                alt="Neden Biz?"
                className="w-full h-36 object-cover rounded-t-lg"
                width={400}
                height={400}
              />
              <div className="p-2 text-center">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{t("webSiteCard.whyUsCart.title")}</h5>
                <p className="text-sm text-gray-900 dark:text-slate-400 mt-2">
                  {t("webSiteCard.whyUsCart.description")}
                </p>
                <div className="my-5">
                  <Link
                    href={t("webSiteCard.whyUsCart.link")}
                    className="text-[#1f77bb] dark:text-blue-800 hover:underline"
                  >
                    {t("webSiteCard.whyUsCart.span1")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}; 
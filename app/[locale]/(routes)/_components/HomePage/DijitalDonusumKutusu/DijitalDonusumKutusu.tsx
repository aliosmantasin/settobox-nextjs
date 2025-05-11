"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "../../Loadling/Loading";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const DijitalDonusumKutusu = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme =
    typeof window === "undefined"
      ? "light"
      : theme === "system"
      ? resolvedTheme
      : theme;

  const t = useTranslations("HomePage");
  const listItems = t.raw("list"); // 🔹 `t.raw` kullanarak JSON'daki diziyi al

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }} // Görünür olma koşulunu daha hassas yap
    transition={{ duration: 3 }}
  >
    <section className=" flex">
      <div className="container my-20 flex flex-wrap mx-auto">
        {/* Mobile title */}
        <div className="block sm:hidden text-center mb-6">
          <h2 className="text-xl text-primary">{t("subtitle2B")}</h2>
        </div>

        {/* Image section */}
        <div
          className={`flex mx-auto sm:w-2/3 md:w-1/2 justify-center items-center ${
            currentTheme === "dark" ? "gridBoxDark" : "gridBox"
          } relative`}
        >
          {!isImageLoaded && <Loading />}
          <Image
            src="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/360DigitalMarketing/DigitalDonusumKutusu-b3gNKhVW7pjFYWYDR5esja7FAdwXMN.webp"
            alt="Dijital Donusum Kutusu"
            className={`flex mx-auto w-[450px] p-10 sm:w-[400px] md:w-[450px] lg:w-[500px] transition-opacity duration-300 ease-in-out  ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
            width={500}
            height={500}
          />
          <div className="boxContent">
            <span className="w-2/4 boxBlueContent" />
            <span className="w-2/4 boxPurpleContent" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex sm:w-3/3 md:w-1/2 justify-center items-center">
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl text-primary hidden sm:block mb-6">
              {t("subtitle2B")}
            </h2>
            {/* 🔹 List dynamic rendering */}
            <ul className="list-disc pl-6 mb-4">
              {listItems.map((item: string, index: number) => (
                <li key={index} className="text-base mb-2">
                  <span className="text-primary">{item}</span>
                </li>
              ))}
            </ul>

            {/* Özelleştirilmiş Obje HTML */}
            <p className="text-base mb-4">
              {t.rich("description3", {
                strong: (chunks) => <strong className="primary-light">{chunks}</strong>, // <strong> etiketini işleme
              })}
            </p>

            <Link href={t("moreİnfoLink")} target="blank">
              <button className="mt-4 px-6 py-2 border-2 border-primary text-primary font-semibold w-full sm:w-auto">
                {t("LinkButton")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default DijitalDonusumKutusu;

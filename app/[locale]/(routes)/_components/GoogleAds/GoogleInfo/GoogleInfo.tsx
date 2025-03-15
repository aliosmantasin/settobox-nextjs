"use client";

import { useEffect, useRef, useState } from "react";
import Loading from "../../Loadling/Loading";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import DiscountModal from "../../libs/Campaign/DiscountModal";
import Lottie from "lottie-web";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import "./GoogleInfo.css";

interface GoogleInfoProps {
  onLoad?: () => void;
}


const GoogleInfo: React.FC<GoogleInfoProps> = ({ onLoad }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true); // Başlangıçta yüklenme durumu true

  useEffect(() => {
    if (animationContainer.current) {
      const animInstance = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/data/ManageGoogleAnimation.json",
      });

      animInstance.addEventListener("DOMLoaded", () => {
        setIsLoading(false); // Animasyon yüklenince Loading'i kaldır
      });

      if (onLoad) {
        onLoad();
      }

      return () => {
        animInstance.destroy();
      };
    }
  }, [onLoad]);

  const t = useTranslations("GooglePage");

  return (
    <>
      <DiscountModal />
      <section className="pt-14 sm:pt-20 relative">
        <div className="container mx-auto">
          {/* Başlık ve Açıklama */}
          <motion.div
            initial={{ opacity: 0 }} // Başlangıçta görünmüyor
            animate={{ opacity: 1 }}  // Yavaşça görünür olacak
            transition={{ duration: 2 }} // Geçiş süresi
            className="flex col-span-12 text-center justify-center"
          >
            <div className="w-2/2 sm:w-1/2">
              <h1 className="text-3xl font-extrabold primary tracking-wider">
                {t("googleInfo.sub1")} {""}
                <span className="google-span">G</span>
                <span className="google-span">o</span>
                <span className="google-span">o</span>
                <span className="google-span">g</span>
                <span className="google-span">l</span>
                <span className="google-span">e</span> {t("googleInfo.sub2")}
              </h1>
              <p className="mt-4 tracking-tight text-gray-500 md:text-lg dark:text-gray-400">
                {t("googleInfo.description")}
              </p>
              <MdKeyboardDoubleArrowDown className="text-4xl primary-light mx-auto mt-3 animate-pulse" />
            </div>
          </motion.div>

          {/* Lottie Animasyonu ve Loading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex col-span-12 text-center justify-center my-5"
          >
            <div className="w-2/2 sm:w-1/2 min-h-auto sm:min-h-[600] ">
            <div>
            {isLoading && <Loading />}
            </div>
              <div
                ref={animationContainer}
                style={{
                  maxWidth: "600px",
          
                  display: isLoading ? "none" : "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GoogleInfo;

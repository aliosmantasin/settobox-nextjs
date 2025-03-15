"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import lottie from "lottie-web";
import { useTranslations } from "next-intl";
import Loading from "../Loadling/Loading";
import { motion } from "framer-motion";



interface FirstGlanceProps {
  onLoad?: () => void;
}




const FirstGlance: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true); // Başlangıçta yüklenme durumu true
  


  useEffect(() => {
    if (animationContainer.current) {
      const animInstance = lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: "svg", 
        loop: false, 
        autoplay: true, 
        path: "/data/All-in-SetToBox.json", 
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

 

  const t = useTranslations("HomePage");

  return (

    <motion.div
    initial={{ opacity: 0 }} // Başlangıçta görünmüyor
    animate={{ opacity: 1 }}  // Yavaşça görünür olacak
    transition={{ duration: 2 }} // Geçiş süresi
  >
    <section className=" min-h-auto sm:min-h-[600]">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="styled-h1 text-2xl sm:text-2xl md:text-3xl my-5 relative">
            {t("title1")}           
          </h1>
          <p className="mt-4 text-muted-foreground styled-paragraph relative">
            {t("description1")}
          </p>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-4">
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

        <div className="flex justify-center mt-10">
          {isLoading && <Loading/>}
          <div
            ref={animationContainer}
            className="w-96 max-w-md relative"
            style={{ height: "400px",
              display: isLoading ? "none" : "block",
             }}
            
          />
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default FirstGlance;

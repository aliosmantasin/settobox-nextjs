import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import lottie from "lottie-web";
// import dynamic from "next/dynamic"; 
// const Lottie = dynamic(() => import("lottie-web"), { ssr: false });

interface FirstGlanceProps {
  onLoad?: () => void;
}

const FirstGlance: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const animInstance = lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: "svg", 
        loop: false, 
        autoplay: true, 
        path: "/data/All-in-SetToBox.json", 
      });

      if (onLoad) {
        onLoad();
      }

      return () => {
        animInstance.destroy(); 
      };
    }
  }, [onLoad]);

  return (
    <section>
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="styled-h1 text-2xl sm:text-2xl md:text-3xl my-5 relative">
           Markaların Dijital Varlıklarını Yönetiyor ve Büyütüyoruz!
          </h1>
          <p className="mt-4 text-muted-foreground styled-paragraph relative">
          Markanızı Facebook, Instagram ve Google reklamlarıyla öne çıkarıyor, web sitenizin içerik planlamasını
           yaparak kurumsal kimliğinizi güçlendiriyoruz. Etkileşimi artıran sosyal medya yönetimiyle hedef kitlenize
            daha etkili ulaşıyoruz. Dijital pazarlamayı plansız adımlarla değil, stratejik bir yol haritasıyla yönetiyoruz.
          </p>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-4">
          <Link href="/bilgi-alma-formu">
            <Button className="relative">
              <Mail />Form İletişim
            </Button>
          </Link>

          <Link href="tel:+905437214839" target="_blank">
            <Button
              variant="ghost"
              className="flex items-center gap-3 border rounded border-r-8 border-blue-700 hover:text-blue-800 py-5 relative"
            >
              <PhoneCall size={14} className="relative" />
              Şimdi Ara!
            </Button>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <div
            ref={animationContainer}
            className="w-96 max-w-md relative"
            style={{ height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default FirstGlance;

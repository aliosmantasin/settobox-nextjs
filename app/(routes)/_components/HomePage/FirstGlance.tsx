"use client"
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FirstGlanceProps {
  onLoad?: () => void;
}

const FirstGlance: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    // JSON dosyasını fetch ile yükle
    const fetchAnimationData = async () => {
      try {
        const response = await fetch("/data/All-in-SetToBox.json");
        if (!response.ok) {
          throw new Error("JSON dosyası yüklenemedi.");
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchAnimationData();

    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-foreground styled-h1 my-5">
            Dijital`de Yolculuğunuzu Şekillendiriyoruz!
          </h1>
          <p className="mt-4 text-muted-foreground styled-paragraph">
            Facebook, Instagram ve Google reklamlarıyla markanızı öne çıkarın, web sitenizi etkileyici tasarımlarla güçlendirin. Sosyal medya reklamlarıyla etkileşimi artırın. Başarıya giden yolda stratejik hedeflerimize siz de dahil olun 😊
          </p>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-4">
          <Link href="/bilgiformu">
            <button className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 button-media">
              Form İletişim
            </button>
          </Link>

          <Link href="tel:+905437214839" target="_blank">
            <Button
              variant="ghost"
              className="flex items-center gap-3 border rounded border-r-8 border-blue-700 hover:text-blue-800 py-5"
            >
              <PhoneCall size={14} className="" />
              Şimdi Ara!
            </Button>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          {animationData ? (
            <div className="w-96 max-w-md relative">
              <Lottie
                animationData={animationData}
                loop={false}
                style={{ marginTop: "30px" }}
              />
            </div>
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FirstGlance;

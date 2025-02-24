"use client";

import React, { useState } from "react";
import Image from "next/image"; // Next.js resim optimizasyonu
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Loading from "../../Loadling/Loading";
import { useTranslations } from "next-intl";

interface HeaderDroneProps {
  teritory: string;
}

const HeaderDrone: React.FC<HeaderDroneProps> = ({ teritory }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const t = useTranslations("DronePage");

  return (
    <section className="relative my-20">
      <div className="container max-w-screen-xl mx-auto p-4 flex flex-wrap justify-center">
        <div className="w-full sm:w-8/12">
          {/* Resim Yüklenme Durumu */}
          {!isImageLoaded && <div className="loader"><Loading /></div>}
          <Image
            src="/images/drone/drone.webp" // Static image path
            alt={t(`${teritory}.header.title`)} // ✅ Dinamik başlık
            width={800}
            height={500}
            onLoad={() => setImageLoaded(true)}
            className="max-w-full"
          />
        </div>
        
        <div className="w-full sm:w-8/12 flex justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold primary mt-6">
              {t(`${teritory}.header.title`)}
            </h1>
            <p className="mt-4">{t(`${teritory}.header.description`)}</p>

            <div className="my-5">
              <Link href="tel:+905437214839">
                <Button className="btn btn-primary px-10">
                  {t(`${teritory}.header.callNow`)}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDrone;

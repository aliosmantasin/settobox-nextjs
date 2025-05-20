"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const ServiceSlider = () => {
  const t = useTranslations("HomePage");

  const images = [
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/MetaMiniBox-zoZnqLjkIZbZG6dXbJHQIMalG196wh.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/MetaMegaBox-qaBvvpEUrA5a5pnqlCqYoGdiXFn5ps.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/MetaProBox-in265HGb1Ufved3JrN0QRvy6JY2IFc.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/GoogleMiniBox-tHoIJeqSAtA0VrlhQjIAW70uFlWymi.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/GoogleMegaBox-rTEK7D1U3sCnvaPcbtPhEa2LDh0di9.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/GoogleProBox-pzm7P0LG14O3b9FiLDYVu4G9F4d9jD.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/BasicWeb-PJFJ4BmQiAcLVTqOT5XEfX7uLwZs4h.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/BusinessWeb-nE554B3RNWAYQ393YyUoaGj8vHiEJ7.webp",
    "https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/drone-produksiyon-isM6NcKICdm5pyvcLhrobPQzJSKwFM.webp"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 2 }}
    >
      <section className="flex flex-col items-center py-20 ">
        <div className="BgColorGradient text-white text-center mx-auto font-semibold text-xl sm:text-2xl md:text-2xl px-4 py-2 shadow-lg max-w-md">
          <h2>{t("subtitle2A")}</h2>
        </div>
        <p className="styled-paragraph my-12 mx-auto max-w-3xl px-4">
          {t("description2")}
        </p>
        <div className="container mb-14 relative">
          <Carousel opts={{ align: "start" }} className="w-full mx-auto">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={src}
                          alt={`Service Image ${index + 1}`}
                          width={1080}
                          height={1080}
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Butonları içeri alma ve mobilde küçültme */}
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
          </Carousel>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceSlider;

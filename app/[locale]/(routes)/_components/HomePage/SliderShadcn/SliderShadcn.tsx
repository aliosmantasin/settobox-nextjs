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
    "/MetaMiniBox.webp",
    "/MetaMegaBox.webp",
    "/MetaProBox.webp",
    "/GoogleMiniBox.webp",
    "/GoogleMegaBox.webp",
    "/GoogleProBox.webp",
    "/BasicWeb.webp",
    "/BusinessWeb.webp",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 2 }}
    >
      <section className="flex flex-col items-center pb-10">
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

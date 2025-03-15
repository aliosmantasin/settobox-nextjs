'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselExampleProps {
  teritory: string;
}

const CarouselExample: React.FC<CarouselExampleProps> = ({ teritory }) => {
  const t = useTranslations("DronePage");

  const slides = [
    { href: "/instagram-sponsorlu-reklam", src: "/MetaMiniBox.webp", alt: "MetaMiniBox" },
    { href: "/google-ads-reklam-yonetimi", src: "/GoogleMiniBox.webp", alt: "GoogleMiniBox" },
    { href: "/web-sitesi-yaptirma", src: "/BasicWeb.webp", alt: "BasicWeb" },
  ];

  return (
    <section className='my-20 ocean-Cardshadow'>
      <div className="flex flex-col items-center">
        <div className="text-center mx-auto font-semibold text-xl px-4 py-2 shadow-lg max-w-md bg-secondary primary">
          {t(`${teritory}.swiperExample.span`)}
        </div>
        <p className="styled-paragraph my-12 mx-auto max-w-3xl px-4 text-center">
          {t(`${teritory}.swiperExample.p`)}
        </p>
        <div className="container mx-auto mb-14 relative">
          <Carousel opts={{ align: "start" }} className="w-full mx-auto">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Link href={slide.href} className="flex w-full h-full">
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1080}
                            height={1080}
                            className="object-cover"
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Butonları içeri al ve mobilde küçült */}
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

CarouselExample.displayName = "CarouselExample";

export default CarouselExample;

"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BrandId = () => {
  const brandSections = [
    {
      title: "1. Marka Stratejisi ve Temel Unsurlar",
      items: [
        {
          heading: "Hedef Kitle Analizi",
          description:
            "Ürün ya da hizmetin hitap edeceği müşteri profili belirlenmelidir. Hedef kitlenin beklentileri ve alışkanlıkları analiz edilmelidir.",
        },
        {
          heading: "Marka Değerleri",
          description:
            "İşletmenin temel değerleri, vizyonu ve misyonu net bir şekilde tanımlanmalıdır.",
        },
        {
          heading: "Marka Konumlandırması",
          description:
            "Rakipler arasında işletmenizi farklılaştıran özellikler belirlenmeli ve bir değer önerisi oluşturulmalıdır.",
        },
      ],
    },
    {
      title: "2. Görsel Kimlik",
      items: [
        { heading: "Logo Tasarımı", description: "Markayı temsil edecek özgün, akılda kalıcı ve sade bir logo tasarımı." },
        { heading: "Renk Paleti", description: "Marka ile özdeşleşen renklerin belirlenmesi." },
        { heading: "Tipografi", description: "Markanın yazı fontunun seçimi." },
        { heading: "Kurumsal Slogan", description: "Markanın özünü ve mesajını taşıyan kısa, etkileyici bir ifade." },
      ],
    },
    {
      title: "3. Basılı ve Dijital Materyaller",
      items: [
        { heading: "Kartvizit, Antetli Kağıt ve Zarf Tasarımı", description: "İş dünyasında markayı temsil eden unsurlar." },
        { heading: "Broşür, Katalog ve Tanıtım Dosyaları", description: "Ürün veya hizmetlerin tanıtımı için tasarlanan materyaller." },
        { heading: "E-posta İmzaları", description: "Markanın yazı fontunun seçimi." },
        { heading: "Sosyal Medya Şablonları", description: "Instagram, Facebook platformlarında tutarlı bir görünüm sağlamak için." },
      ],
    },
    {
      title: "4. Web Sitesi ve Dijital Varlıklar",
      items: [
        { heading: "Web Sitesi ve Dijital Varlıklar", description: "Kullanıcı dostu, mobil uyumlu, SEO optimizasyonu yapılmış bir web sitesi." },
        { heading: "Dijital Kimlik", description: "Sosyal medya profilleri, Google My Business hesabı gibi dijital varlıkların markaya uygun şekilde tasarlanması." },
      ],
    },
  ];

  return (
    <section className="mx-auto bg-cover  bg-no-repeat bg-[url(/images/BrandId.webp)] my-10">
      <div>
        <h2 className="text-3xl text-center p-10">Marka Kimliği</h2>
      </div>
      <div className="container mx-auto">
        <Carousel opts={{ align: "start" }} className="w-full mx-auto">
          <CarouselContent>
            {brandSections.map((section, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="max-w-[350px] mx-auto">
                  <Card>
                    <CardContent className="shadow-lg rounded-lg text-black min-h-[430px] p-0">
                      <h3 className="p-4 text-white bg-[#373737] rounded-t-lg text-center">
                        {section.title}
                      </h3>
                      <ul className=" ">
                        {section.items.map((item, i) => (
                          <li key={i} className="list-disc ml-5 my-5">
                            <h4 className="font-bold">{item.heading}</h4>
                            <p>{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
         <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default BrandId;

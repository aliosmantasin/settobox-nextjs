
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";

export const GoogleAdsCard = () => {
 

  return (
    <section className="my-20 mx-2">
      <div className="container flex flex-wrap justify-center mx-auto p-2">
        {/* İlk Kart */}
        <div className="w-3/4 sm:w-3/5 md:w-1/2">
        <div className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
          <Image
            src="/images/HowToMake.webp"
            alt="Nasıl Yapıyoruz?"
            className="w-full h-36 object-cover rounded-t-lg"
            width={400}
            height={400}
          />
                  <div className="p-4 text-center mx-auto">
                      <h5 className="text-xl font-semibold text-gray-900">Nasıl Yapıyoruz?</h5>
                      <p className="text-sm text-gray-600 mt-2">
                          Sektörlere özel dijital pazarlama metriklerini nasıl kullanıyoruz? Google ads reklam yönetimi ve google haritalara kayıt gibi işletmelerin hedef kitlelerine ulaşmasını sağlayan pazarlama metrikleri nelerdir? Sektörlere göre inceleyelim.
                      </p>

                      <div className="flex justify-between items-center mt-5">
                      <div className="flex">
                          <Link
                              href="/settobox-referanslar"
                              target="_blank"
                              className="text-blue-600 hover:underline"
                          >
                              Referanslar
                          </Link>
                      </div>

                      <DropdownMenu>
                          <DropdownMenuTrigger >
                             <span className="flex items-center gap-2">Sektörler<MdOutlineMoreVert />
                             </span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>Sektörünüz Nedir?</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuRadioGroup>
                       
                              <Link href="dijital-pazarlama-donusum-kutusu/hizmetsektoru"><DropdownMenuRadioItem className="cursor-pointer" value="top">Hizmet Sektörü</DropdownMenuRadioItem></Link>
                             
                              <Link href="dijital-pazarlama-donusum-kutusu/egitimsektoru"><DropdownMenuRadioItem className="cursor-pointer" value="bottom">Eğitim Sektörü</DropdownMenuRadioItem></Link>

                              <Link href="#"><DropdownMenuRadioItem className="cursor-pointer" value="bottom">Sağlık Sektörü</DropdownMenuRadioItem></Link>

                              
                              </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                      </DropdownMenu>
                      </div>
                      </div>

                  </div>
        </div>

        {/* İkinci Kart */}
        <div className="w-3/4 sm:w-3/5 md:w-1/2">
        <div className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mx-auto">
          <Image
            src="/images/ReklamHarcamasi.webp"
            alt="Reklam Bütçesi Ne Kadar Olmalı?"
            className="w-full h-36 object-cover rounded-t-lg"
            width={400}
            height={400}
          />
          <div className="p-2 text-center">
            <h5 className="text-xl font-semibold text-gray-900">Reklam Bütçesi Ne Kadar Olmalı?</h5>
            <p className="text-sm text-gray-600 mt-2">
              Potansiyel müşterileriniz sizi arama motorlarında nasıl arıyorlar? Örneğin &quot;Google Ads Reklam Yönetimi&quot; gibi bir anahtar kelimenin günlük, haftalık ve aylık maliyetini söyleyebiliriz.
            </p>
            <div className="mt-10">
              <a
                href="https://api.whatsapp.com/send?phone=05437214839&amp;text=Merhabalar SetToBox web sitesinden iletişime geçiyorum google ads reklam bütçesi hakkında bilgi edinebilir miyim?"
                target="_blank"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Ücretsiz Bilgi Al
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

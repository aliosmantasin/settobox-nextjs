'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

const SwiperExample = () => {
  return (
    <section className='my-20'>
    <div className="flex flex-col items-center">
      <div className="text-center mx-auto font-semibold text-xl sm:text-2xl md:text-2xl px-4 py-2 shadow-lg max-w-md bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      Opsiyonel Hizmetlerden Faydalan
      </div>
      <p className="styled-paragraph my-12 mx-auto max-w-3xl px-4 text-center">
      Drone ve tanıtım videolarına ek olarak temin edebileceğiniz diğer hizmetlerimizi inceleyebilirsiniz
      </p>
      <div className="container mx-auto mb-14">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          navigation
    
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            500: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
        
          <Link href="/instagram-sponsorlu-reklam"><Image src="/MetaMiniBox.webp" alt="MetaMiniBox" width={1080} height={1080} /></Link>

          </SwiperSlide>


          <SwiperSlide>
          <Link href="/google-ads-reklam-yonetimi"><Image src="/GoogleMiniBox.webp" alt="GoogleMiniBox" width={1080} height={1080} /></Link>
          </SwiperSlide>
    

          <SwiperSlide>
          <Link href="/web-sitesi-yaptirma"><Image src="/BasicWeb.webp" alt="BasicWeb" width={1080} height={1080} /></Link>
          </SwiperSlide>
     
        </Swiper>
      </div>
    </div>
    </section>
  );
};

SwiperExample.displayName = "SwiperExample";

export default SwiperExample;

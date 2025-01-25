import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const ServiceSlider = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="BgColorGradient text-white text-center mx-auto font-semibold text-xl sm:text-2xl md:text-3xl px-4 py-2 shadow-lg max-w-md">
        SetToBox Hizmet İçerikleri
      </div>
      <p className="styled-paragraph my-12 mx-auto max-w-3xl px-4">
        Size uygun olan meta, google, web sitesi hizmet kutusunu seçerek dijital medya kanallarınıza yön verebilirsiniz.
      </p>
      <div className="container mb-14">
      <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       navigation
      //  onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log('slide change')}

       breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1,
        
        },
      }}
    >
      <SwiperSlide><Image src="/MetaMiniBox.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/MetaMegaBox.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/MetaProBox.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/GoogleMiniBox.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/GoogleMegaBox.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/GoogleProBox.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/BasicWeb.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
      <SwiperSlide><Image src="/BusinessWeb.webp" alt='MetaMiniBox' width={1080} height={1080}/></SwiperSlide>
  
    </Swiper>

      </div>
    </div>
  );
};

export default ServiceSlider;

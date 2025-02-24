'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MiniDroneBox from './DroneBoxes/MiniDroneBox';
import MegaDroneBox from './DroneBoxes/MegaDroneBox';
import ProDroneBox from './DroneBoxes/ProDroneBox';

interface DroneBoxessProps {
  teritory: string;
}


const DroneBoxess: React.FC<DroneBoxessProps> = ({ teritory }) => {


  return (
    <section className='my-10 p-2 sm:p-0'>
    <div className="flex flex-col items-center">
     
      <div className="container mx-auto mb-14 r">
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
          {/* slider 1 */}
          <SwiperSlide className='flex justify-center items-center'>       
          <MiniDroneBox teritory={teritory}/>
          </SwiperSlide>

          {/* slider 2 */}
          <SwiperSlide>
          <MegaDroneBox teritory={teritory}/>
          </SwiperSlide>

          {/* slider 3 */}
          <SwiperSlide>
          <ProDroneBox teritory={teritory}/>
          </SwiperSlide>
     
        </Swiper>
      </div>
    </div>
    </section>
  );
};

DroneBoxess.displayName = "SwiperExample";

export default DroneBoxess;

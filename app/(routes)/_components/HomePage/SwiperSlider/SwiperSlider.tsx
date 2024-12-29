import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; // Slick tema CSS
import MetaMiniBox from '../MetaBox/MetaMiniBox';

const ServiceSlider = () => {
  const settings = {
    dots: true,            // Sayfalama noktaları
    infinite: true,        // Sonsuz kaydırma
    speed: 500,            // Geçiş hızı (ms)
    slidesToShow: 3,       // Varsayılan 3 slayt göster
    slidesToScroll: 1,     // 1 slayt kaydır
    responsive: [
      {
        breakpoint: 1024,  // 1024px'den büyük ekranlarda 3 slayt göster
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,   // 768px - 1024px arasında (tablet) 2 slayt göster
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,   // 640px ve daha küçük ekranlarda (mobil) 1 slayt göster
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full px-4">
        <Slider {...settings}>
          {/* Slaytlar */}
          <div className="p-5">
            <MetaMiniBox />
          </div>
          <div className="p-5">
          <MetaMiniBox />
          </div>
          <div className="p-5">
          <MetaMiniBox />
          </div>
          <div className="p-5">
          <MetaMiniBox />
          </div>
          <div className="p-5">
          <MetaMiniBox />
          </div>
          <div className="p-5">
          <MetaMiniBox />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSlider;

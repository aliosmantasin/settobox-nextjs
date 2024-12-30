import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // react-multi-carousel CSS
import MetaMiniBox from '../MetaBox/MetaMiniBox';
import MetaMegaBox from '../MetaBox/MetaMegaBox';
import MetaProBox from '../MetaBox/MetaProBox';
import GoogleMiniBox from '../GoogleBox/GoogleMiniBox';
import GoogleMegaBox from '../GoogleBox/GoogleMegaBox';
import GoogleProBox from '../GoogleBox/GoogleProBox';

const ServiceSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 }, // 1024px'den büyük ekranlar için
      items: 3, // 3 slayt göster
      slidesToSlide: 1, // Her seferinde 1 slayt kaydır
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 }, // 768px - 1024px arası tablet ekranlar
      items: 2, // 2 slayt göster
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 }, // 768px'den küçük ekranlar için
      items: 1, // 1 slayt göster
      slidesToSlide: 1,
    },
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div>
       <div className="bg-primary text-white text-center mx-auto font-semibold text-xl sm:text-2xl md:text-3xl px-4 py-2 shadow-lg max-w-md">
        SetToBox Hizmet İçerikleri
      </div>
      <p className="text-lg sm:text-xl text-center my-12 mx-auto max-w-3xl text-gray-800 px-4">
        Size uygun olan meta, google, web sitesi hizmet kutusunu seçerek dijital medya kanallarınıza yön verebilirsiniz
      </p>

    
      <div className="container px-4">
        <Carousel
          swipeable={true} // Dokunmatik kaydırmayı etkinleştir
          draggable={true} // Fare ile kaydırmayı etkinleştir
          showDots={true} // Sayfalama noktalarını göster
          responsive={responsive} // Duyarlı yapılandırma
          infinite={true} // Sonsuz kaydırma
          autoPlay={false} // Otomatik oynatma
          keyBoardControl={true} // Klavye kontrolü
          transitionDuration={500} // Geçiş süresi (ms)
          containerClass="carousel-container" // Ana kapsayıcı sınıfı
          removeArrowOnDeviceType={["tablet", "mobile"]} // Tablet ve mobilde okları kaldır
          dotListClass="custom-dot-list-style" // Nokta liste sınıfı
          itemClass="carousel-item-padding-40-px" // Öğe sınıfı
        >
          {/* Slaytlar */}
          <div className="p-5">
            <MetaMiniBox />
          </div>
          <div className="p-5">
            <MetaMegaBox />
          </div>
          <div className="p-5">
            <MetaProBox />
          </div>
          <div className="p-5">
            <GoogleMiniBox />
          </div>
          <div className="p-5">
            <GoogleMegaBox />
          </div>
          <div className="p-5">
            <GoogleProBox />
          </div>
        </Carousel>
      </div>
      </div>
    </div>
  );
};

export default ServiceSlider;

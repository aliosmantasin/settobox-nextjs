'use client';

import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import './GoogleInfo.css';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

interface GoogleInfoProps {
  onLoad?: () => void;
}

const GoogleInfo: React.FC<GoogleInfoProps> = ({ onLoad }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const animInstance = Lottie.loadAnimation({
        container: animationContainer.current, 
        renderer: "svg", 
        loop: true, 
        autoplay: true, 
        path: "/data/ManageGoogleAnimation.json", 
      });

      if (onLoad) {
        onLoad();
      }

      return () => {
        animInstance.destroy(); 
      };
    }
  }, [onLoad]);




  return (
    <section className="pt-14 sm:pt-20 relative">
      <div className="container mx-auto">
     

        <div className="flex col-span-12 text-center justify-center">
          <div className='w-2/2 sm:w-1/2'>
          <h1 className="text-3xl font-extrabold primary tracking-wider">
            Herkese Göre{' '}
            <span className="google-span">G</span>
            <span className="google-span">o</span>
            <span className="google-span">o</span>
            <span className="google-span">g</span>
            <span className="google-span">l</span>
            <span className="google-span">e</span>{' '}
            Sponsorlu Reklam Hizmeti
          </h1>
          <p className="mt-4">
            İşletmenizin Google`da öne çıkmasını sağlayacak profesyonel reklam hizmetleri sunuyoruz.
             Arama ağı reklamları, görsel reklamlar ve maksimum performans stratejileriyle google ads`te
              reklam vererek potansiyel müşterilere ulaşın. Tam hesap kurulum desteği ve kişiselleştirilmiş
               kampanya yönetimimizle, dijital reklamcılıkta başarıya ulaşın.
              
          </p>
          <MdKeyboardDoubleArrowDown className="text-4xl primary-light mx-auto mt-3 animate-pulse"/>
          </div>
        </div>

        {/* Animation Section */}
        <div className="flex col-span-12 text-center justify-center my-5">
        <div className='w-2/2 sm:w-1/2'>
        <div
            ref={animationContainer}
            style={{ maxWidth:"600px" }}  
          />
      
        </div>
        </div>
        </div>
   
    </section>
  );
};

export default GoogleInfo;

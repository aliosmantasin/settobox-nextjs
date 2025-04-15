"use client"

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

// Animasyon dosyalarının yollarını tanımlıyoruz
export const ANIMATION_PATHS = {
  WEBSITE_MANAGE: '/data/WebsiteManage.json',
  DIGITAL_MARKETING: '/data/DigitalMarketing.json',
  GOOGLE_ADS: '/data/GoogleAds.json',
  LOCAL_MARKETING: '/data/LocalMarketing.json',
  META_ADS: '/data/MetaAds.json',
  // Diğer animasyonlar buraya eklenebilir
};

interface LottiePlayerProps {
  animationPath: string;
  width?: string | number;
  height?: string | number;
  onLoad?: () => void;
}

const LottiePlayer = ({ animationPath, width = '100%', height = '100%', onLoad }: LottiePlayerProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
      });

      anim.addEventListener('DOMLoaded', () => {
        if (onLoad) onLoad();
      });

      return () => anim.destroy();
    }
  }, [animationPath, onLoad]);

  return (
    <div 
      ref={containerRef} 
      style={{ width, height }} 
    />
  );
};

export default LottiePlayer; 
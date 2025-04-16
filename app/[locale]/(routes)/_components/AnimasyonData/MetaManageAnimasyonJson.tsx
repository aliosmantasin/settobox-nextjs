"use client"

import React, { useEffect, useRef, useState } from 'react';
import type { AnimationItem } from 'lottie-web';
import { getAnimationUrl } from '../libs/AnimationUrls';

interface MetaManageAnimasyonProps {
  animationData?: Record<string, unknown>;
  onLoad?: () => void;
  useBlob?: boolean; // Vercel Blob kullanılıp kullanılmayacağını belirten prop
}

const MetaManageAnimasyonJson: React.FC<MetaManageAnimasyonProps> = ({ 
  animationData, 
  onLoad,
  useBlob = false // Varsayılan olarak false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<typeof import('lottie-web') | null>(null);
  const [isBlobLoaded, setIsBlobLoaded] = useState(false);

  // Lottie'yi dynamic import ile yükle
  useEffect(() => {
    import('lottie-web').then((LottieModule) => {
      setLottie(LottieModule);
    });
  }, []);

  useEffect(() => {
    if (!lottie || !containerRef.current) return;
    
    // useBlob true ise animationData kontrolünü atla
    if (!useBlob && !animationData) return;

    let anim: AnimationItem | null = null;

    if (useBlob) {
      // Vercel Blob URL'sini kullan
      const blobUrl = getAnimationUrl('META_ADS');
      console.log('Vercel Blob URL kullanılıyor:', blobUrl);
      
      if (blobUrl) {
        anim = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: blobUrl,
        });
        
        // Blob URL başarıyla yüklendiğinde
        anim.addEventListener('DOMLoaded', () => {
          setIsBlobLoaded(true);
        });
      }
    } else if (animationData) {
      // Yerel animasyon verisini kullan
      console.log('Yerel animasyon verisi kullanılıyor');
      
      anim = lottie.default.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    if (onLoad) {
      onLoad();
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [lottie, animationData, onLoad, useBlob]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        style={{ height: 500 }}
      />
      {isBlobLoaded && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          Vercel Blob
        </div>
      )}
    </div>
  );
};

export default MetaManageAnimasyonJson; 
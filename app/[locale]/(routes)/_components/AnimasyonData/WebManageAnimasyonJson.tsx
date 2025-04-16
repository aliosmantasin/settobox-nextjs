"use client"

import React, { useEffect, useRef, useState } from 'react';
import type { AnimationItem } from 'lottie-web';
import { getAnimationUrl } from '../libs/AnimationUrls';

interface WebManageAnimasyonProps {
  animationData?: Record<string, unknown>;
  onLoad?: () => void;
  useBlob?: boolean;
}

const WebManageAnimasyonJson: React.FC<WebManageAnimasyonProps> = ({ 
  animationData, 
  onLoad,
  useBlob = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<typeof import('lottie-web') | null>(null);
  const [isBlobLoaded, setIsBlobLoaded] = useState(false);

  useEffect(() => {
    import('lottie-web').then((LottieModule) => {
      setLottie(LottieModule);
    });
  }, []);

  useEffect(() => {
    if (!lottie || !containerRef.current) return;
    
    if (!useBlob && !animationData) return;

    let anim: AnimationItem | null = null;

    if (useBlob) {
      const blobUrl = getAnimationUrl('WEBSITE_MANAGE');
      console.log('Vercel Blob URL kullanılıyor:', blobUrl);
      
      if (blobUrl) {
        anim = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: blobUrl,
        });
        
        anim.addEventListener('DOMLoaded', () => {
          setIsBlobLoaded(true);
        });
      }
    } else if (animationData) {
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
        className="height-500"
      />
      {isBlobLoaded && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          Vercel Blob
        </div>
      )}
    </div>
  );
};

export default WebManageAnimasyonJson; 
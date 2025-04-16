"use client"

import React, { useEffect, useRef, useState } from 'react';
import type { AnimationItem, AnimationConfigWithData } from 'lottie-web';
import { getAnimationUrl } from '../libs/AnimationUrls';

interface ListedObjectGoogleAnimasyonProps {
  animationData: AnimationConfigWithData['animationData'];
  isPlaying: boolean;
  onLoad?: () => void;
  useBlob?: boolean;
}

const ListedObjectGoogleAnimasyonJson: React.FC<ListedObjectGoogleAnimasyonProps> = ({
  animationData,
  isPlaying,
  onLoad,
  useBlob = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<typeof import('lottie-web') | null>(null);
  const [animInstance, setAnimInstance] = useState<AnimationItem | null>(null);
  const [isBlobLoaded, setIsBlobLoaded] = useState(false);

  // Lottie'yi dynamic import ile yükle
  useEffect(() => {
    import('lottie-web').then((LottieModule) => {
      setLottie(LottieModule);
    });
  }, []);

  useEffect(() => {
    if (!lottie || !containerRef.current || !animationData) return;

    let anim: AnimationItem | null = null;

    if (useBlob) {
      // Vercel Blob URL'sini kullan
      const blobUrl = getAnimationUrl('GOOGLE_ADS');
      console.log('ListedObjectGoogle: Vercel Blob URL kullanılıyor:', blobUrl);
      
      if (blobUrl) {
        anim = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: isPlaying,
          path: blobUrl,
        });
        
        // Blob URL başarıyla yüklendiğinde
        anim.addEventListener('DOMLoaded', () => {
          setIsBlobLoaded(true);
        });
      }
    } else {
      // Yerel animasyon verisini kullan
      console.log('ListedObjectGoogle: Yerel animasyon verisi kullanılıyor');
      
      anim = lottie.default.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: isPlaying,
        animationData: animationData,
      });
    }

    setAnimInstance(anim);

    if (onLoad) {
      onLoad();
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [lottie, animationData, isPlaying, onLoad, useBlob]);

  useEffect(() => {
    if (animInstance) {
      if (isPlaying) {
        animInstance.play();
      } else {
        animInstance.pause();
      }
    }
  }, [isPlaying, animInstance]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        style={{
          height: 500,
          display: isPlaying ? 'block' : 'none',
        }}
      />
      {isBlobLoaded && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          Vercel Blob
        </div>
      )}
    </div>
  );
};

export default ListedObjectGoogleAnimasyonJson; 
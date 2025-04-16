"use client"

import React, { useEffect, useRef, useState, memo } from 'react';
import type { AnimationItem } from 'lottie-web';
import { getAnimationUrl } from './AnimationUrls';

// Animasyon dosyalarının yollarını tanımlıyoruz
export const ANIMATION_PATHS = {
  WEBSITE_MANAGE: '/data/WebsiteManage.json',
  GOOGLE_ADS: '/data/GoogleAds.json',
  META_ADS: '/data/MetaAds.json',
  GOOGLE_MANAGE: '/data/ManageGoogleAnimation.json',
  INSTAGRAM_SERVICE: '/data/InstagramService.json',
  CONVERSION: '/data/Conversion.json',
  ALL_IN_SETTOBOX: '/data/All-in-SetToBox.json',
  LOADER_BOX: '/data/loaderBox.json',
  // Diğer animasyonlar buraya eklenebilir
} as const;

// Animasyon anahtarlarının tipini tanımlıyoruz
export type AnimationPathKey = keyof typeof ANIMATION_PATHS;
export type AnimationPathValue = typeof ANIMATION_PATHS[AnimationPathKey];

interface LottiePlayerProps {
  animationPath: string;
  width?: string | number;
  height?: string | number;
  onLoad?: () => void;
  useBlob?: boolean; // Vercel Blob kullanılıp kullanılmayacağını belirten prop
  loop?: boolean; // Animasyonun döngüde çalışıp çalışmayacağını belirten prop
}

/**
 * LottiePlayer bileşeni, animasyonları yerel dosyalardan veya Vercel Blob'dan yükleyerek gösterir.
 * useBlob=true olduğunda, animasyonları Vercel Blob'dan çeker.
 * useBlob=false olduğunda (varsayılan), animasyonları yerel dosyalardan çeker.
 */
const LottiePlayer = memo(({ 
  animationPath, 
  width = '100%', 
  height = '100%', 
  onLoad,
  useBlob = false,
  loop = true
}: LottiePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<typeof import('lottie-web') | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lottie'yi dynamic import ile yükle
  useEffect(() => {
    // Performans için mevcut bir instance varsa yeniden yükleme
    if (lottie) return;
    
    import('lottie-web')
      .then((LottieModule) => {
        setLottie(LottieModule);
      })
      .catch(err => {
        console.error("Failed to load lottie-web:", err);
        setError("Animasyon kütüphanesi yüklenemedi");
      });
  }, [lottie]);

  // Animasyon yükleme ve konfigürasyon
  useEffect(() => {
    if (!lottie || !containerRef.current) return;

    let anim: AnimationItem | null = null;
    setError(null);

    try {
      if (useBlob) {
        // Vercel Blob URL'sini kullanarak animasyon yükleme
        let blobUrl: string | undefined;

        // animationPath'i doğrudan kullanmak yerine ANIMATION_PATHS içindeki değerlerle karşılaştırma yapma
        const animKey = Object.entries(ANIMATION_PATHS).find(
          ([, path]) => path === animationPath
        )?.[0] as AnimationPathKey | undefined;

        if (animKey) {
          blobUrl = getAnimationUrl(animKey);
          
          if (blobUrl) {
            console.log(`Animasyon Vercel Blob'dan yükleniyor: ${animKey}`);
            
            anim = lottie.default.loadAnimation({
              container: containerRef.current,
              renderer: 'svg',
              loop,
              autoplay: true,
              path: blobUrl,
            });
          } else {
            setError(`"${animKey}" için Blob URL bulunamadı`);
            console.error(`Blob URL bulunamadı: ${animKey}`);
          }
        } else {
          // Eşleşen anahtar bulunamadığında yerel dosya yolunu kullanma
          console.warn(`Vercel Blob URL için eşleşen anahtar bulunamadı, yerel yol kullanılıyor: ${animationPath}`);
          
          anim = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop,
            autoplay: true,
            path: animationPath,
          });
        }
      } else {
        // Yerel dosya yolunu kullanma
        console.log(`Animasyon yerel dosyadan yükleniyor: ${animationPath}`);
        
        anim = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay: true,
          path: animationPath,
        });
      }

      // Animasyon olaylarını dinleme
      if (anim) {
        anim.addEventListener('DOMLoaded', () => {
          console.log("Animasyon başarıyla yüklendi");
          setIsLoaded(true);
          if (onLoad) onLoad();
        });

        anim.addEventListener('data_failed', () => {
          console.error(`Animasyon verisi yüklenemedi: ${animationPath}`);
          setError("Animasyon verisi yüklenemedi");
        });
      }
    } catch (err) {
      console.error("Animasyon ayarlanırken hata oluştu:", err);
      setError("Animasyon ayarlanırken hata oluştu");
    }

    // Temizleme işlemi
    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [lottie, animationPath, onLoad, useBlob, loop]);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ width, height }}
      data-loaded={isLoaded}
    >
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500 bg-white/80 text-sm text-center p-2 rounded">
          {error}
        </div>
      )}
    </div>
  );
});

// displayName ekleyerek debugging için isim verelim
LottiePlayer.displayName = "LottiePlayer";

export default LottiePlayer; 
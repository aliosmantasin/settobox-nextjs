"use client"

import React, { useEffect, useRef, useState, memo } from 'react';
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

interface LottiePlayerProps {
  animationPath: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  onLoad?: () => void;
  onError?: () => void;
  useBlob?: boolean; // Vercel Blob kullanılıp kullanılmayacağını belirten prop
  loop?: boolean; // Animasyonun döngüde çalışıp çalışmayacağını belirten prop
  rendererSettings?: {
    preserveAspectRatio?: string;
    clearCanvas?: boolean;
    progressiveLoad?: boolean;
    hideOnTransparent?: boolean;
  };
}

interface LottiePlayerElement extends HTMLElement {
  play(): void;
}

const loadLottieScript = async (): Promise<void> => {
  if (document.querySelector('script[src*="lottie-player"]')) return;

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@lottiefiles/lottie-player@2.0.2/dist/lottie-player.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (e) => {
      console.error('Failed to load Lottie script:', e);
      reject(new Error('Failed to load Lottie player script'));
    };
    document.head.appendChild(script);
  });
};

/**
 * LottiePlayer bileşeni, animasyonları yerel dosyalardan veya Vercel Blob'dan yükleyerek gösterir.
 * useBlob=true olduğunda, animasyonları Vercel Blob'dan çeker.
 * useBlob=false olduğunda (varsayılan), animasyonları yerel dosyalardan çeker.
 */
const LottiePlayer = memo(({ 
  animationPath, 
  width = '100%', 
  height = '100%',
  maxWidth,
  onLoad,
  onError,
  useBlob = true,
  loop = true,
  rendererSettings,
}: LottiePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    let isMounted = true;
    let player: HTMLElement | null = null;

    const initAnimation = async () => {
      try {
        if (!containerRef.current) return;
        
        await loadLottieScript();

        if (!isMounted) return;

        // Clear existing content
        containerRef.current.innerHTML = '';

        // Create and configure player
        player = document.createElement('lottie-player') as LottiePlayerElement;
        player.setAttribute('background', 'transparent');
        player.setAttribute('speed', '1');
        if (loop) player.setAttribute('loop', '');
        player.setAttribute('mode', 'normal');
        player.setAttribute('style', `width: ${width}; height: ${height}; max-width: ${maxWidth || '100%'}; display: block;`);

        if (rendererSettings) {
          if (rendererSettings.preserveAspectRatio) {
            player.setAttribute('preserveAspectRatio', rendererSettings.preserveAspectRatio);
          }
          if (rendererSettings.clearCanvas) {
            player.setAttribute('clear-canvas', String(rendererSettings.clearCanvas));
          }
          if (rendererSettings.progressiveLoad) {
            player.setAttribute('progressive-load', String(rendererSettings.progressiveLoad));
          }
          if (rendererSettings.hideOnTransparent) {
            player.setAttribute('hide-on-transparent', String(rendererSettings.hideOnTransparent));
          }
        }

        // Set source based on useBlob flag
        const source = useBlob 
          ? await getAnimationSource() 
          : animationPath;
        
        player.setAttribute('src', source);

        // Add event listeners
        player.addEventListener('ready', handleLoad);
        player.addEventListener('error', handleError);
        player.addEventListener('load', handleLoad);

        containerRef.current.appendChild(player);

        // Force play after a short delay
        setTimeout(() => {
          if (player && 'play' in player) {
            (player as LottiePlayerElement).play();
          }
        }, 100);

      } catch (err) {
        handleError(err);
      }
    };

    const getAnimationSource = async (): Promise<string> => {
      const animKey = Object.entries(ANIMATION_PATHS).find(
        ([, path]) => path === animationPath
      )?.[0] as AnimationPathKey;

      if (!animKey) {
        throw new Error(`Invalid animation path: ${animationPath}`);
      }

      const blobUrl = getAnimationUrl(animKey);
      if (!blobUrl) {
        throw new Error(`Animation URL not found for: ${animKey}`);
      }

      return blobUrl;
    };

    const handleLoad = () => {
      if (!isMounted) return;
      setError(null);
      if (onLoad) onLoad();
    };

    const handleError = (err: Error | unknown) => {
      if (!isMounted) return;
      console.error('Animation error:', err);
      
      const errorMessage = err instanceof Error ? err.message : 'Animation failed to load';
      setError(errorMessage);

      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initAnimation();
        }, 1000 * (retryCount + 1));
      } else if (onError) {
        onError();
      }
    };

    initAnimation();

    return () => {
      isMounted = false;
      if (player) {
        player.removeEventListener('ready', handleLoad);
        player.removeEventListener('error', handleError);
        player.removeEventListener('load', handleLoad);
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [animationPath, width, height, maxWidth, onLoad, onError, useBlob, loop, retryCount]);

  if (error) {
    return (
      <div 
        style={{ width, height }}
        className="flex items-center justify-center text-red-500 text-sm"
      >
        {error}
        {retryCount < maxRetries && ` (Yeniden deneniyor... ${retryCount + 1}/${maxRetries})`}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      style={{ 
        width, 
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      data-testid="lottie-container"
    />
  );
});

// displayName ekleyerek debugging için isim verelim
LottiePlayer.displayName = "LottiePlayer";

export default LottiePlayer; 
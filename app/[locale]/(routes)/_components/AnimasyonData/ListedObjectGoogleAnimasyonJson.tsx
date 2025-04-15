"use client"

import React, { useEffect, useRef, useState } from 'react';
import type { AnimationItem, AnimationConfigWithData } from 'lottie-web';

interface ListedObjectGoogleAnimasyonProps {
  animationData: AnimationConfigWithData['animationData'];
  isPlaying: boolean;
  onLoad?: () => void;
}

const ListedObjectGoogleAnimasyonJson: React.FC<ListedObjectGoogleAnimasyonProps> = ({
  animationData,
  isPlaying,
  onLoad,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<typeof import('lottie-web') | null>(null);
  const [animInstance, setAnimInstance] = useState<AnimationItem | null>(null);

  // Lottie'yi dynamic import ile yükle
  useEffect(() => {
    import('lottie-web').then((LottieModule) => {
      setLottie(LottieModule);
    });
  }, []);

  useEffect(() => {
    if (!lottie || !containerRef.current || !animationData) return;

    const anim = lottie.default.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: isPlaying,
      animationData: animationData,
    });

    setAnimInstance(anim);

    if (onLoad) {
      onLoad();
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [lottie, animationData, isPlaying, onLoad]);

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
    <div
      ref={containerRef}
      style={{
        height: 500,
        display: isPlaying ? 'block' : 'none',
      }}
    />
  );
};

export default ListedObjectGoogleAnimasyonJson; 
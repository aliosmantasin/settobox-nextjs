"use client"
import React, { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

const Loading: React.FC = () => {
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
    if (!lottie || !containerRef.current) return;

    // Loader animasyonunu dynamic import ile yükle
    import('@/public/data/loaderBox.json').then((loaderBox) => {
      const anim = lottie.default.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loaderBox.default,
      });

      setAnimInstance(anim);
    });

    return () => {
      if (animInstance) {
        animInstance.destroy();
      }
    };
  }, [lottie, animInstance]);

  return (
    <div
      ref={containerRef}
      style={{ height: 100, width: 100, display: "flex", margin: "auto" }}
    />
  );
};

export default Loading;

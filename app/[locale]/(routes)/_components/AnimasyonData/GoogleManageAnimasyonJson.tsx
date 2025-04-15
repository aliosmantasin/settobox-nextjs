"use client"

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

interface GoogleManageAnimasyonProps {
  animationData: Record<string, unknown>;
  onLoad?: () => void;
}

const GoogleManageAnimasyonJson: React.FC<GoogleManageAnimasyonProps> = ({ animationData, onLoad }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationData && animationContainer.current) {
      const animInstance = Lottie.loadAnimation({
        container: animationContainer.current,
        animationData,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });

      if (onLoad) {
        onLoad();
      }

      return () => animInstance.destroy();
    }
  }, [animationData, onLoad]);

  return (
    <div
      ref={animationContainer}
      style={{ height: 500 }}
    />
  );
};

export default GoogleManageAnimasyonJson; 
"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface WebManageAnimasyonProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const WebManageAnimasyonJson: React.FC<WebManageAnimasyonProps> = ({ 
  onLoad,
  useBlob = true
}) => {
  return (
    <div className="relative w-full h-full">
      <LottiePlayer
        animationPath={ANIMATION_PATHS.WEBSITE_MANAGE}
        width="100%"
        height="100%"
        onLoad={onLoad}
        useBlob={useBlob}
        loop={true}
      />
    </div>
  );
};

export default WebManageAnimasyonJson; 
"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface ListedObjectGoogleAnimasyonProps {
  onLoad?: () => void;
  useBlob?: boolean;
  isPlaying?: boolean;
}

const ListedObjectGoogleAnimasyonJson: React.FC<ListedObjectGoogleAnimasyonProps> = ({
  onLoad,
  useBlob = true,
  isPlaying = true
}) => {
  return (
    <div className="w-full h-full">
      <LottiePlayer
        animationPath={ANIMATION_PATHS.GOOGLE_ADS}
        width="100%"
        height="100%"
        onLoad={onLoad}
        useBlob={useBlob}
        loop={isPlaying}
      />
    </div>
  );
};

export default ListedObjectGoogleAnimasyonJson; 
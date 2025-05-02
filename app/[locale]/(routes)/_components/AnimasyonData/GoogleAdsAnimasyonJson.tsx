"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface FirstGlanceProps {
  onLoad?: () => void;
  useBlob?: boolean; // Vercel Blob kullanılıp kullanılmayacağını belirten prop
}

const GoogleAdsAnimasyonJson: React.FC<FirstGlanceProps> = ({ onLoad, useBlob = false }) => {
  return (
    <LottiePlayer
      animationPath={ANIMATION_PATHS.GOOGLE_ADS}
      max-width="600px"
      onLoad={onLoad}
      useBlob={useBlob}
    />
  )
}

export default GoogleAdsAnimasyonJson 
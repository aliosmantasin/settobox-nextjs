"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface FirstGlanceProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const GoogleAdsAnimasyonJson: React.FC<FirstGlanceProps> = ({ onLoad, useBlob = true }) => {
  return (
    <LottiePlayer
      animationPath={ANIMATION_PATHS.GOOGLE_ADS}
      maxWidth="600px"
      height="auto"
      onLoad={onLoad}
      useBlob={useBlob}
    />
  )
}

export default GoogleAdsAnimasyonJson 
"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface FirstGlanceProps {
  onLoad?: () => void;
}

const GoogleAdsAnimasyonJson: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  return (
    <LottiePlayer
      animationPath={ANIMATION_PATHS.GOOGLE_ADS}
      width="600px"
      onLoad={onLoad}
    />
  )
}

export default GoogleAdsAnimasyonJson 
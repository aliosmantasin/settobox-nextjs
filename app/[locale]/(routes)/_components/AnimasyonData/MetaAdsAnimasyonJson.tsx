"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface FirstGlanceProps {
  onLoad?: () => void;
}

const MetaAdsAnimasyonJson: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  return (
    <LottiePlayer
      animationPath={ANIMATION_PATHS.META_ADS}
      width="600px"
      onLoad={onLoad}
    />
  )
}

export default MetaAdsAnimasyonJson 
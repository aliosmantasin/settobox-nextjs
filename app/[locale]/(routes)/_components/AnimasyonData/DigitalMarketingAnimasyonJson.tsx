"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface FirstGlanceProps {
  onLoad?: () => void;
}

const DigitalMarketingAnimasyonJson: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  return (
    <LottiePlayer
      animationPath={ANIMATION_PATHS.DIGITAL_MARKETING}
      width="600px"
      onLoad={onLoad}
    />
  )
}

export default DigitalMarketingAnimasyonJson 
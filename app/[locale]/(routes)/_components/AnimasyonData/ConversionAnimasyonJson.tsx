"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface ConversionAnimasyonProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const ConversionAnimasyonJson: React.FC<ConversionAnimasyonProps> = ({ onLoad, useBlob = true }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LottiePlayer
        animationPath={ANIMATION_PATHS.CONVERSION}
        max-width="600px"
        height="100%"
        onLoad={onLoad}
        useBlob={useBlob}
      />
    </div>
  )
}

export default ConversionAnimasyonJson 
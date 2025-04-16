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
        width="100%"
        height="100%"
        onLoad={onLoad}
        useBlob={useBlob}
      />
    </div>
  )
}

export default ConversionAnimasyonJson 
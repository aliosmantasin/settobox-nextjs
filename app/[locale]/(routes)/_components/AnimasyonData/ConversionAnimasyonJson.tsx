"use client"

import React from 'react'
import LottiePlayer from '../libs/LottiePlayer'

interface ConversionAnimasyonProps {
  onLoad?: () => void;
}

const ConversionAnimasyonJson: React.FC<ConversionAnimasyonProps> = ({ onLoad }) => {
  return (
    <LottiePlayer
      animationPath="/data/Conversion.json"
      width="700px"
      height="500px"
      onLoad={onLoad}
    />
  )
}

export default ConversionAnimasyonJson 
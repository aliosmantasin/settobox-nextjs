"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface AllInSetToBoxProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const AllInSetToBoxAnimasyonJson: React.FC<AllInSetToBoxProps> = ({ onLoad, useBlob = true }) => {
  return (
    <div className="flex justify-center items-center">
      <LottiePlayer
        animationPath={ANIMATION_PATHS.ALL_IN_SETTOBOX}
        width="400px"
        height="auto"
        onLoad={onLoad}
        useBlob={useBlob}
      />
    </div>
  )
}

export default AllInSetToBoxAnimasyonJson 
"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface AllInSetToBoxProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const AllInSetToBoxAnimasyonJson: React.FC<AllInSetToBoxProps> = ({ onLoad, useBlob = true }) => {
  return (
    <div className="flex justify-center items-center mx-auto w-[350px] sm:w-[400px]">
      <LottiePlayer
        animationPath={ANIMATION_PATHS.ALL_IN_SETTOBOX}
        maxWidth="600px"
        height="auto"
        onLoad={onLoad}
        useBlob={useBlob}
        loop={false}
      />
    </div>
  )
}

export default AllInSetToBoxAnimasyonJson 
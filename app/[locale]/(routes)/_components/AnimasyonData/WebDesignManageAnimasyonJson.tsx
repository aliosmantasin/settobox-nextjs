"use client"

import React from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'

interface WebDesignManageProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const WebDesignManageAnimasyonJson: React.FC<WebDesignManageProps> = ({ onLoad, useBlob = true }) => {
  return (
    <div className="flex justify-center items-center">
      <LottiePlayer
        animationPath={ANIMATION_PATHS.WEBSITE_MANAGE}
        maxWidth="600px"
        height="auto"
        onLoad={onLoad}
        useBlob={useBlob}
        loop={true}
      />
    </div>
  )
}

export default WebDesignManageAnimasyonJson
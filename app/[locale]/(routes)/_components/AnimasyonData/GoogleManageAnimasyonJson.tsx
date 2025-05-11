"use client"

import React, { useState } from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'
import Loading from '../Loadling/Loading'

interface GoogleManageAnimasyonProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const GoogleManageAnimasyonJson: React.FC<GoogleManageAnimasyonProps> = ({ onLoad, useBlob = true }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  return (
    <div className="w-full flex justify-center items-center h-full">
      {isLoading && <Loading />}
      <div style={{ display: isLoading ? "none" : "block", width: "100%", margin: "auto"}}>
        <LottiePlayer
          animationPath={ANIMATION_PATHS.GOOGLE_MANAGE}
          maxWidth="600px"
          height="auto"
          onLoad={handleAnimationLoad}
          useBlob={useBlob}
          loop={true}
        />
      </div>
    </div>
  )
}

export default GoogleManageAnimasyonJson 
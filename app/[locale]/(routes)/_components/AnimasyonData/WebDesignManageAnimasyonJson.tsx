"use client"

import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react'

interface FirstGlanceProps {
    onLoad?: () => void;
  }
  

const WebDesignManageAnimasyonJson: React.FC<FirstGlanceProps> = ({onLoad}) => {
    const animationContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (animationContainer.current) {
        const animInstance = Lottie.loadAnimation({
          container: animationContainer.current, 
          renderer: "svg", 
          loop: true, 
          autoplay: true, 
          path: "/data/WebsiteManage.json", 
        });
  
        if (onLoad) {
          onLoad();
        }
  
        return () => {
          animInstance.destroy(); 
        };
      }
    }, [onLoad]);
  



  return (
  
    <div
      ref={animationContainer}
      style={{ maxWidth:"600px" }}
    />

  )
}

export default WebDesignManageAnimasyonJson
"use client"
import React from 'react'
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import Loading from '../Loadling/Loading';

interface GoogleAnimationProps {
    onLoad?: () => void;
  }
  
  
  const GoogleAnimation: React.FC<GoogleAnimationProps> = ({ onLoad }) => {
    const animationContainer = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true); // Başlangıçta yüklenme durumu true
  
    useEffect(() => {
      if (animationContainer.current) {
        const animInstance = Lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/data/ManageGoogleAnimation.json",
        });
  
        animInstance.addEventListener("DOMLoaded", () => {
          setIsLoading(false); // Animasyon yüklenince Loading'i kaldır
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
    <section className='my-10'>
        <div className='container flex mx-auto justify-center'>
      
            <div className="w-2/2 sm:w-1/2 min-h-auto sm:min-h-[600] ">
            <div>
            {isLoading && <Loading />}
            </div>
              <div
                ref={animationContainer}
                style={{
                  maxWidth: "600px",
          
                  display: isLoading ? "none" : "block",
                }}
              />
            </div>
     
            
        </div>
    </section>
  )
}

export default GoogleAnimation
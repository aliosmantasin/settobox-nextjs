"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import "./StartGuide.css";


const FirstGlanceBrandId = () => {
  const [showEffect, setShowEffect] = useState(false);
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;


      useEffect(() => {
        const timer = setTimeout(() => {
          setShowEffect(true);
        }, 1); 
    
        return () => clearTimeout(timer); // Cleanup on unmount
      }, []);

      
  return (
    <section className='pb-20'>


        <div className='container mx-auto text-center relative my-10 pt-5'>
        <span className='font-semibold secondary font-mono uppercase'> - Başlangıç ​​Kılavuzu - </span>
        <h1 className='text-2xl sm:text-3xl mt-2'>Bir Markanın Dijital Pazarlamaya Girişi</h1>
        <p className='mt-3 max-w-[700] mx-auto styled-paragraph'>Öncelikle bir markayla işbirliğine girmeden önce nasıl bir stratejiye ihtiyacı olduğunu anlamaya çalışıyoruz.
          Ardından sistememizde mevcut olan hizmetlerle markanın ihtiyaçları örtüşüyorsa hizmetimizi belirtiyor ve plan doğrultusunda ilerliyoruz.</p>
        </div>

         
      
            <div className=  {`${currentTheme === "dark" ? "digital-gridlineDark overflow-x-auto flex sm:justify-center pt-5" : "digital-gridline"}`}> 
            {showEffect && (
        
              <div className="all-service flex justify-center overflow-x-auto ">
                

                {/* Meta Section */}
                <div className="mask-card">
                  <div className="three-mask-svg">
                    <div className={`${currentTheme === "dark" ? "three-mask-objectDark" : "three-mask-object"}`}></div>
                    <div className="objective">
                   
                      <p className={`${currentTheme === "dark" ? "icon-textDark" : ""}`}>Marka Kimliği</p>
                    </div>
                    <div className="motion-box motion-box-meta"></div>
                  </div>
                </div>
      
             
      
                {/* Google Section */}
                <div className="mask-card">
                  <div className="three-mask-svg">
                  <div className={`${currentTheme === "dark" ? "three-mask-objectDark" : "three-mask-object"}`}></div>
                    <div className="objective">
                   
                      <p className={`${currentTheme === "dark" ? "icon-textDark" : ""}`}>Hizmet Seçme</p>
                    </div>
                    <div className="motion-box motion-box-web"></div>
                  </div>
                </div>
      
                {/* Adım - 1 */}
              

          
              </div>
       
            )}
      
            </div>
      
        
    </section>
  )
}

export default FirstGlanceBrandId



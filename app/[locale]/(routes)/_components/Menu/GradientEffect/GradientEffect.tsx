"use client"

import { useState, useEffect } from "react";
import './GradientEffect.css'
import { useTheme } from "next-themes";
const GradientEffect = () => {
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
    <>
      {showEffect && (
        <div className="flex items-center ">
          <div  className={`${currentTheme === "dark" ? "b-gridlineDark" : "b-gridline"}`}></div>
          <div className="gradient-efect ">
            <div className="boxPurple purple-grad"></div>
            <div className="boxBlue blue-grad"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GradientEffect;
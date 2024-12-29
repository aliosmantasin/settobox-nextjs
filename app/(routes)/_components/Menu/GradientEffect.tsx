"use client"

import { useState, useEffect } from "react";


const GradientEffect = () => {
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEffect(true);
    }, 8000); // 4 saniye

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {showEffect && (
        <div className="flex items-center">
          <div className="b-gridline"></div>
          <div className="gradient-efect">
            <div className="boxPurple purple-grad"></div>
            <div className="boxBlue blue-grad"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default GradientEffect;
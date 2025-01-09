import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import loaderBox from "../../../../public/data/loaderBox.json";

const Loading: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const animInstance = lottie.loadAnimation({
        container: animationContainer.current, // HTML element
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loaderBox,
      });

      return () => {
        animInstance.destroy(); // Cleanup animation on unmount
      };
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{ height: 100, width: 100, display: "flex", margin: "auto" }}
    />
  );
};

export default Loading;

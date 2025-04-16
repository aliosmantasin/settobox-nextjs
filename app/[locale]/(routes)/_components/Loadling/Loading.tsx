"use client"
import React from "react";
import LottiePlayer, { ANIMATION_PATHS } from "../libs/LottiePlayer";

const Loading: React.FC = () => {
  return (
    <div style={{ height: 100, width: 100, display: "flex", margin: "auto" }}>
      <LottiePlayer
        animationPath={ANIMATION_PATHS.LOADER_BOX}
        width="100px"
        height="100px"
        useBlob={true}
      />
    </div>
  );
};

export default Loading;

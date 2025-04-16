"use client"
import React, { lazy, Suspense } from "react";
import { ANIMATION_PATHS } from "../libs/LottiePlayer";

// LottiePlayer bileşenini lazy loading ile yüklüyoruz
const LottiePlayer = lazy(() => import("../libs/LottiePlayer"));

// Performans için memorize edilmiş Loading komponenti
const Loading: React.FC = React.memo(() => {
  return (
    <div className="flex h-[100px] w-[100px] m-auto">
      <Suspense fallback={<div className="h-[100px] w-[100px] animate-pulse bg-gray-200 rounded-full m-auto"></div>}>
        <LottiePlayer
          animationPath={ANIMATION_PATHS.LOADER_BOX}
          width="100px"
          height="100px"
          useBlob={true}
        />
      </Suspense>
    </div>
  );
});

// displayName ekleyerek debugging için isim verelim
Loading.displayName = "Loading";

export default Loading;

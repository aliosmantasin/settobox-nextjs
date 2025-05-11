"use client"

import React, { useState, useCallback } from 'react'
import LottiePlayer, { ANIMATION_PATHS } from '../libs/LottiePlayer'
import Loading from '../Loadling/Loading'

interface MetaManageAnimasyonProps {
  onLoad?: () => void;
  useBlob?: boolean;
}

const MetaManageAnimasyonJson: React.FC<MetaManageAnimasyonProps> = ({ onLoad, useBlob = true }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleLoad = useCallback(() => {
    console.log('MetaManage: Animation loaded successfully');
    setIsLoading(false);
    setHasError(false);
    setErrorDetails(null);
    if (onLoad) onLoad();
  }, [onLoad]);

  const handleError = useCallback((error?: string) => {
    console.error('MetaManage: Animation error:', error);
    setIsLoading(false);
    setHasError(true);
    setErrorDetails(error || null);
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full" style={{ maxWidth: '600px' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 z-10">
            <Loading />
          </div>
        )}
        {hasError ? (
          <div className="flex flex-col items-center justify-center text-red-500 p-4 space-y-2">
            <div>Animasyon yüklenemedi</div>
            {errorDetails && (
              <div className="text-xs bg-red-50 p-2 rounded w-full">
                Hata detayı: {errorDetails}
              </div>
            )}
          </div>
        ) : (
          <LottiePlayer
            animationPath={ANIMATION_PATHS.META_ADS}
            width="100%"
            height="auto"
            useBlob={useBlob}
            loop={true}
            onLoad={handleLoad}
            onError={handleError}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid meet',
              clearCanvas: true,
              progressiveLoad: true,
              hideOnTransparent: false
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MetaManageAnimasyonJson; 
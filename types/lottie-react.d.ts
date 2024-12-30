declare module "lottie-react" {
    import React from "react";
  
    interface LottieProps {
      animationData: object;
      loop?: boolean;
      autoplay?: boolean;
      style?: React.CSSProperties;
      className?: string;
      onComplete?: () => void;
      onLoopComplete?: () => void;
      onEnterFrame?: () => void;
      onSegmentStart?: () => void;
    }
  
    const Lottie: React.FC<LottieProps>;
    export default Lottie;
  }
  
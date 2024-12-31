import Lottie from 'lottie-react';
import loaderBox from '../../../../public/data/loaderBox.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderBox,
  };

  return (
    <div>
      <Lottie 
        animationData={loaderBox}
        style={{ height: 100, width: 100, display: "flex", margin: "auto" }}
        loop={defaultOptions.loop}
        autoplay={defaultOptions.autoplay}
      />
    </div>
  );
};

export default Loading;

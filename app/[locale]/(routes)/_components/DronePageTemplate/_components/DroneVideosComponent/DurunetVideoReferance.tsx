"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

const DurunetVideoReferance = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative flex justify-center items-center mx-6 my-10 sm:my-2 md:my-10 border-l border-r border-blue-500">
      {/* Video Elementi */}
      <video
        width="100%"
        height="auto"
        controls
        muted
        className={`${isPlaying ? "block" : ""}`}
        onEnded={() => setIsPlaying(false)} 
        onPlay={() => setIsPlaying(true)} 
      
      >
        <source src="https://res.cloudinary.com/dydji2imy/video/upload/v1742061721/PrivateVideo_tzfbnu.mp4" type="video/mp4" />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>

 
      {!isPlaying && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: `url(/images/PrivateVideo-Img.png)`, 
          }}
          onClick={() => setIsPlaying(true)} // Oynatmak için tıkla
        >
          <PlayCircle className="text-white w-16 h-16" />
        </div>
      )}
    </div>
  );
};

export default DurunetVideoReferance;

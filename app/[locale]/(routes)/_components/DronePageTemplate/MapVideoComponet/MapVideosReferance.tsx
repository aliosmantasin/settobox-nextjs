"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import Head from "next/head";





const MapVideoReference = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    
    <div className="relative flex justify-center items-center mx-6 my-10 sm:my-2 md:my-10 border-l border-r border-blue-500">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Yerel Firmalara Animasyon Videosu",
        "description": "Yerel firmaların konumsal bilgilerini bir animasyon ile tanıtımını yapabiliriz. Bu sayede o bölgede yaşayan insanlara düzenli olarak reklam gösterimi sağlayarak marka bilinirliğiniz artmış olur.",
        "thumbnailUrl": "https://settobox.com/images/MapVideo-Img.png",
        "uploadDate": "2024-04-10",
        "contentUrl": "https://res.cloudinary.com/dydji2imy/video/upload/v1742061627/MapVideo_hrdmpn.mp4",
        "embedUrl": "https://settobox.com/havadan-drone-cekimleri/manavgat"
      }
      `}} />
      </Head>

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
        <source src="https://res.cloudinary.com/dydji2imy/video/upload/v1744535886/AnimasyonVideoKesit_ias4ob.mp4" type="video/mp4" />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>

 
      {!isPlaying && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: `url(/images/AnimateImage.jpg)`, 
          }}
          onClick={() => setIsPlaying(true)} // Oynatmak için tıkla
        >
          <PlayCircle className="text-white w-16 h-16" />
        </div>
      )}
    </div>
  );
};

export default MapVideoReference;

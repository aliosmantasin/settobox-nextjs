"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const ShowLocationVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <source src="https://res.cloudinary.com/dydji2imy/video/upload/v1745931170/AirplaneTOEifelVideos_p62lnz.mp4" type="video/mp4" />
          Tarayıcınız bu videoyu desteklemiyor.
        </video>

        {!isPlaying && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
            style={{
              backgroundImage: `url(/images/yerelGorseller/LocationMapImage.webp)`, 
            }}
            onClick={() => setIsModalOpen(true)}
          >
            <PlayCircle className="text-white w-16 h-16" />
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogTitle className="text-lg font-bold">Video Önizlemesi</DialogTitle>
          <div className="relative rounded-lg p-4 shadow-lg max-w-xl w-full">
            <video
              src="https://res.cloudinary.com/dydji2imy/video/upload/v1745931170/AirplaneTOEifelVideos_p62lnz.mp4"
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
            >
              Tarayıcınız video formatını desteklemiyor.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowLocationVideo;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchSectorVideos, setSectorName } from '@/store/sectorVideoSlice';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Loading from '../../Loadling/Loading';

type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

interface VideoListServiceMetaProps {
  sector: Sector;
}

const VideoListServiceMeta: React.FC<VideoListServiceMetaProps> = ({ sector }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { sectorName, videos, loading, error } = useSelector(
    (state: RootState) => state.sectorVideos
  );

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    if (sector && sector !== sectorName) {
      dispatch(setSectorName(sector));
      dispatch(fetchSectorVideos(sector));
    }
  }, [sector, sectorName, dispatch]);

  if (loading) return <div className="text-center"><Loading/></div>;
  if (error) return <div className="text-center text-red-500">Hata: {error}</div>;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
      {videos.map((src, index) => (
        <React.Fragment key={index}>
          <div
            className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            onClick={() => setSelectedVideo(src)}
          >
            <video
              src={src}
              className="w-full h-auto"
              controls={false}
              muted
              autoPlay={false}
              playsInline
          
            >
              Tarayıcınız video formatını desteklemiyor.
            </video>
          </div>
        </React.Fragment>
      ))}

      {/* Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
        <DialogContent>
          <DialogTitle className="text-lg font-bold">Örnek Video Önizlemesi</DialogTitle>
          <div className="relative rounded-lg p-4 shadow-lg max-w-xl w-full">
            {selectedVideo && (
              <video
                src={selectedVideo}
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
              >
                Tarayıcınız video formatını desteklemiyor.
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoListServiceMeta;

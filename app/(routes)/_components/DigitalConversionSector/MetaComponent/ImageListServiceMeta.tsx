import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import Image from 'next/image';
import { fetchSectorImages, setSectorName } from '@/store/sectorImageSlice';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru';

interface ImageListServiceMetaProps {
  sector: Sector;
}

const ImageListServiceMeta: React.FC<ImageListServiceMetaProps> = ({ sector }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { sectorName, images, loading, error } = useSelector(
    (state: RootState) => state.sectorImages
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  useEffect(() => {
    if (sector && sector !== sectorName) {
      dispatch(setSectorName(sector));
      dispatch(fetchSectorImages(sector));
    }
  }, [sector, sectorName, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <React.Fragment key={index}>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              className="h-auto max-w-full rounded-lg"
              alt={`Sector Image ${index + 1}`}
              width={200}
              height={200}
            />
          </div>
        </React.Fragment>
      ))}

      {/* Dialog */}
  
      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
      <div className='flex'>
        <DialogContent>
         
        <DialogTitle>Örnek Görsel Önizlemesi</DialogTitle>
          <div className="relative rounded-lg p-2 shadow-lg max-w-xl w-full">
         
            {selectedImage && (
              <Image
                src={selectedImage}
                className="w-full h-auto rounded-lg "
                alt="Selected Image"
                width={500}
                height={500}
              />
            )}
          </div>
        
        </DialogContent>
        </div>
      </Dialog>
      </div>
 
  );
};

export default ImageListServiceMeta;

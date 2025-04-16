import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RootState } from '@/store';
import Image from 'next/image';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ListedObjectGoogleAnimasyonJson from '../../AnimasyonData/ListedObjectGoogleAnimasyonJson';

const ListedObjectGoogle = () => {
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  const data = sectorData[selectedSector]?.referanceGoogle;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Animasyon oynatma kontrolü

  if (!data) return null;

  return (
    <div className="flex justify-center items-center h-full">
      <Tabs defaultValue="animation" className="max-w-[500px]" onValueChange={(value) => setIsPlaying(value === 'animation')}>
        <TabsList className="w-full flex justify-around">
          <TabsTrigger value="animation">Arama Ağı Reklam Örneği</TabsTrigger>
          <TabsTrigger value="images">Görsel Reklam Örneği</TabsTrigger>
        </TabsList>

        <hr className="my-6" />

        {/* Animasyon Sekmesi */}
        <TabsContent value="animation" className="m-1 sm:m-0">
          <div className="w-full p-2">
            {data?.animation && (
              <ListedObjectGoogleAnimasyonJson 
                animationData={JSON.parse(JSON.stringify(data.animation))}
                isPlaying={isPlaying}
                useBlob={true} // Vercel Blob kullanımını etkinleştir
              />
            )}
          </div>
        </TabsContent>

        {/* Görsel Sekmesi */}
        <TabsContent value="images" className="m-1 sm:m-0">
          <div className="w-full p-2">
            <div
              className="cursor-pointer rounded-lg overflow-hidden shadow-md"
              onClick={() => setSelectedImage(data.images.src)}
            >
              {data?.images && (
                <Image src={data.images} width={data.images.width} height={data.images.height} alt={data.images.alt} />
              )}
            </div>

            {/* Dialog */}
            <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
              <DialogContent>
                <DialogTitle>Örnek Görsel Önizlemesi</DialogTitle>
                <div className="relative rounded-lg p-2 shadow-lg max-w-xl w-full">
                  {selectedImage && (
                    <Image src={selectedImage} width={500} height={500} alt="Selected Display Ad" />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListedObjectGoogle;

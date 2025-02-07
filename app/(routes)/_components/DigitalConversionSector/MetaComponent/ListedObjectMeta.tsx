import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import ImageListServiceMeta from './ImageListServiceMeta'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import VideoListServiceMeta from './VideoListServiceMeta';


const ListedObjectMeta = () => {
    const { selectedSector } = useSelector((state: RootState) => state.sector);

    // `selectedSector` değerini kontrol et
    if (!selectedSector) return <div>Sektör seçilmedi!</div>;
  

    
  return (
    <div className='flex justify-center item-center h-full'>

    <Tabs defaultValue="images" className="max-w-[500]">
  <TabsList className=' w-full flex justify-around'>
    <TabsTrigger value="images">Görsel Örnekler</TabsTrigger>
    <TabsTrigger value="videos">Video Örnekleri</TabsTrigger>
  </TabsList>
  <div className="mt-4">
        <div className="bg-info text-blue-800 p-3 rounded-md">
        İçerikler referans paylaşımlardır. Herhangi bir güncel kampanyayı temsil etmemektedir.
        </div>
      </div>
  <hr className="my-6" />

  <TabsContent value="images" className='m-1 sm:m-0'>
  <ImageListServiceMeta sector={selectedSector} />
  </TabsContent>


  <TabsContent value="videos" className='m-1 sm:m-0'>
    <VideoListServiceMeta sector={selectedSector} />
  </TabsContent>
</Tabs>
</div>  
   
  )
}

export default ListedObjectMeta
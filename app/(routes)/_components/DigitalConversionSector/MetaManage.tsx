import { RootState } from '@/store';
import { MdFacebook } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { ReferanceMeta } from './MetaComponent/ReferenceMeta';
import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';


const MetaManage: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  const data = sectorData[selectedSector]?.metaManage;

  useEffect(() => {
    if (data?.animation && animationContainer.current) {
      const animationData = JSON.parse(JSON.stringify(data.animation)); // Deep clone
  
      const animInstance = Lottie.loadAnimation({
        container: animationContainer.current,
        animationData,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
  
      return () => animInstance.destroy();
    }
  }, [data]);


  console.log("data animasyon",data.animation);

  return (
    <section className="theme py-10 px-2">
      <div className="container flex flex-wrap mx-auto p-5 productBgColor rounded-lg">

      
          <div className="w-full sm:w-5/6 md:w-2/4 mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 p-2 rounded-md flex items-center justify-center mr-4">
                <MdFacebook className='text-2xl text-white'/>
              </div>
              <h3 className="text-2xl font-bold">{data.title}</h3>
            </div>
            <div className="bg-info rounded-md p-3 mb-4">
              <p className="font-medium">{data.generalDefinition}</p>
            </div>
            <p className="mb-6">{data.description}</p>

            <hr className="my-6" />

            {/* Metrik Listesi */}
            <ul className="space-y-3">
              <h3 className="text-sm font-semibold">{data.metricsTitle}</h3>
              {data.metaMetrics.map((metric, index) => (
                <li key={index} className="flex items-center space-x-2">
        
            
                      {index + 1} - {metric}

            
                </li>
              ))}
            </ul>
          </div>

          {/* Animasyon */}
          <div
            className="w-full sm:w-2/3 md:w-2/4 mx-auto"
            ref={animationContainer}
            style={{ height: 500 }}
          />
        
        </div>
        {/* Referans Meta */}
        <div className="mt-10">
          <ReferanceMeta />
        </div>
     
    </section>
  );
};

export default MetaManage;

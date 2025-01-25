
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import ListedObjectMeta from './ListedObjectMeta';

export const ReferanceMeta: React.FC = () => {
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  const data = sectorData[selectedSector].referanceMeta


  // `data` yüklendi mi diye kontrol edelim
  if (!data) return null;


  return (
    <div className='container flex flex-wrap mx-auto p-5'>
  
        <div className='w-full  md:w-2/5 mx-auto'>

          <div className='productBgColor w-full sm:w-3/4 flex justify-center rounded-lg mb-5 p-2 sm:p-0'>
            <div className='p-2'>
            <p className='text-2xl mb-2'>
              {data.title}
            </p>
            <p>
              {data.companyName}
            </p>
            <p >
              {data.subHeader}
            </p>
            </div>
          </div>

          <div>
            <p>
              {data.description}
            </p>
            </div>
        
            <hr className="my-6" />

          <div className="divide-y divide-dashed"/>

          {data.metricsInfo.map((item, index) => (
            
            <li key={index} className='list-none'>
              <p className='primary my-2'>{item.title}</p>
              <p>
                {item.description}
              </p>
            </li>
          ))}
        </div>
      
   
        <div className='w-full md:w-3/5 mx-auto mt-10 md:mt-0'>
          <ListedObjectMeta/>
        </div>
     
    </div>
  );
};

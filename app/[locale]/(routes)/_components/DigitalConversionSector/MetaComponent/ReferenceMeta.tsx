
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
  
        <div className='w-full  md:w-3/5 mx-auto'>

          <div className='w-full sm:w-3/4 flex sm:justify-start rounded-lg mb-5 p-2 sm:p-0'>
          <div className="rounded-lg p-4 mb-4 productBgColor">
              <span className="text-xl font-bold mb-2">{data.title}</span> <br />
              <span className="primary font-semibold mb-1">{data.companyName}</span>
              <h4 >{data.subHeader}</h4>
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
              <h4 className='primary font-semibold  my-2'>{item.title}</h4>
              <p>
                {item.description}
              </p>
            </li>
          ))}
        </div>
      
   
        <div className='w-full md:w-2/5 mx-auto mt-10 md:mt-0'>
          <ListedObjectMeta/>
        </div>
     
    </div>
  );
};

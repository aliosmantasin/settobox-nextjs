import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import ListedObjectGoogle from './ListobjectGoogle';


export const ReferanceGoogle: React.FC = () => {
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  const data = sectorData[selectedSector].referanceGoogle;

  // `data` kontrolü
  if (!data) return null;

  return (
    <div className="container flex flex-wrap mx-auto p-5 ">
      {/* Sol Bölüm */}
      <div className="w-full md:w-3/5 mx-auto">
        <div className=" w-full sm:w-3/4 flex sm:justify-start rounded-lg mb-5 p-2 sm:p-0">
         <div className="rounded-lg p-4 mb-4 productBgColor">
              <span className="text-xl font-bold mb-2">{data.title}</span> <br />
              <span className="primary font-semibold mb-1">{data.companyName}</span>
              <h4 >{data.subHeader}</h4>
            </div>
        </div>

        <div>
          <p dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>

        <hr className="my-6" />
        <div className="divide-y divide-dashed" />
        <div>
        <h5 className='mb-2 primary font-bold'>{data.subTitle}</h5>
        <p dangerouslySetInnerHTML={{ __html: data.subTitleBody }} />
        </div>
    
      </div>

      {/* Sağ Bölüm */}
      <div className="w-full md:w-2/5 mx-auto mt-10 md:mt-0">
        <ListedObjectGoogle />
      </div>
    </div>
  );
};

export default ReferanceGoogle;

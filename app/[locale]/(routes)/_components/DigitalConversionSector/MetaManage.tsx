import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { ReferanceMeta } from './MetaComponent/ReferenceMeta';
import MetaManageAnimasyonJson from '../AnimasyonData/MetaManageAnimasyonJson';

const MetaManage: React.FC = () => {
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  const data = sectorData[selectedSector]?.metaManage;

  return (
    <section className="theme py-10 px-2">
      <div className="container flex flex-wrap mx-auto p-5 productBgColor rounded-lg ">
        <div className="w-full sm:w-5/6 md:w-2/4 mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 border bg-white border-blue-600  p-2 rounded-md flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width={45} fill="#1f77bb" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 85.18 56.58"><g id="Layer_1-2" data-name="Layer_1"><path  d="M77.79,10.4C73.24,3.62,67.29,0,61.05,0c-3.72,0-7.41,1.66-10.84,4.64-2.32,2.02-4.46,4.57-6.46,7.27-2.46-3.11-4.74-5.49-6.95-7.29C32.61,1.2,28.59,0,24.54,0h0c-1.75,0-3.44.28-5.05.81-1.21.4-2.39.93-3.52,1.58-3.38,1.96-6.35,5-8.72,8.66C2.5,18.38,0,27.88,0,36.98c0,5.01.99,9.41,3,12.76,2.47,4.11,6.45,6.84,12.75,6.84,5.31,0,9.35-2.39,14.07-8.68,2.7-3.59,4.06-5.77,9.45-15.33l2.68-4.75c.22-.39.44-.78.66-1.17.22.35.43.71.65,1.08l7.64,12.76c2.57,4.3,5.91,9.07,8.76,11.76,3.71,3.5,7.07,4.33,10.87,4.33h0c6.1,0,9.73-3.22,11.59-6.44,1.93-3.33,3.06-7.55,3.06-13.29,0-9.66-2.42-19.01-7.4-26.44ZM34.65,25.55c-2.69,4.13-6.68,10.71-10.07,15.4-4.23,5.85-6.43,6.45-8.82,6.45-1.86,0-3.68-.84-4.91-2.82h0c-.93-1.51-1.65-4.01-1.65-7.26,0-7.89,2.23-16.1,5.89-21.61h0c1.13-1.71,2.36-3.16,3.68-4.24.38-.31.77-.59,1.16-.84s.8-.47,1.21-.65c.21-.09.41-.18.62-.25.84-.3,1.72-.46,2.62-.46,4.49,0,7.3,2.81,9.49,5.13,1.09,1.16,2.61,3.08,4.38,5.6l-3.62,5.56ZM64.63,43.83c-1.76-2.14-4.77-6.67-10.05-15.47l-2.19-3.65c-1.56-2.6-3.04-4.94-4.46-7.04.25-.39.5-.78.76-1.15,3.98-5.91,7.52-9.23,11.92-9.23,4.07,0,7.76,2.69,10.62,7.09,4.02,6.21,5.84,14.89,5.84,22.72h0c0,.58-.02,1.16-.05,1.72-.02.28-.04.56-.06.83-.04.47-.1.93-.17,1.38-.61,3.67-2.32,6.37-6.24,6.37h0c-2.06,0-3.64-.82-5.91-3.56Z"/></g></svg>
            </div>
            <h3 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: data.title }}/>
          </div>
          <div className="bg-info rounded-md p-3 mb-4">
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: data.generalDefinition }} />
          </div>
          <p className="mb-6">{data.description}</p>

          <hr className="my-6" />

          {/* Metrik Listesi */}
          <ul className="space-y-3">
            <h4 className="text-sm font-semibold">{data.metricsTitle}</h4>
            {data.metaMetrics.map((metric, index) => (
              <li key={index} className="flex items-center space-x-2">
                {index + 1} - {metric}
              </li>
            ))}
          </ul>
        </div>

        {/* Animasyon */}
        <div className="w-full sm:w-2/3 md:w-2/4 mx-auto">
          {data?.animation && (
            <MetaManageAnimasyonJson 
              useBlob={true}
            />
          )}
        </div>
      </div>
      {/* Referans Meta */}
      <div className="mt-10">
        <ReferanceMeta />
      </div>
    </section>
  );
};

export default MetaManage;

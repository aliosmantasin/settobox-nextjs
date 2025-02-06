import Link from 'next/link';

// import { AdsClick } from 'lucide-react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { MdAdsClick } from 'react-icons/md';

const ReferanceWeb = () => {
    const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
    const data = sectorData[selectedSector].referanceWeb

  if (!data) return null;

  return (
    <section className="py-8">
      <div className="container mx-auto ">
        <div className="p-6 flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-4">
            <div className="rounded-lg p-4 mb-4 productBgColor">
              <span className="text-xl font-bold mb-2">{data.title}</span> <br />
              <span className="primary font-semibold mb-1">{data.companyName}</span>
              <h4 >{data.subHeader}</h4>
            </div>

    

            <ul className="space-y-4">
              {data.metricsInfo.map((metric, index) => (
                <li key={index}>
                  <h5 className="text-lg font-semibold primary">{metric.title}</h5>
           
                  <p dangerouslySetInnerHTML={{ __html: metric.description }}/>
                </li>
              ))}
            </ul>
          
          </div>

          {/* Image and Link */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative p-4">
        
           <Image src={data.images} width={data.images.width} height={data.images.height} alt={data.images.alt} />

            <Link href={data.webUrl} target="_blank" rel="noopener noreferrer">
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-50 border border-blue-500 rounded-lg px-6 py-3 flex items-center space-x-2 shadow-lg">
                <span className="text-lg primary font-semibold ">{data.webname}</span>
                <MdAdsClick className="primary-light w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferanceWeb;

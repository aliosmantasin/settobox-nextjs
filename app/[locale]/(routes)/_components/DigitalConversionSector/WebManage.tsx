"use client";

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { FcTemplate } from 'react-icons/fc';
import ReferanceWeb from './WebsiteComponent/ReferanceWebsite';
import WebManageAnimasyonJson from '../AnimasyonData/WebManageAnimasyonJson';

const WebManage: React.FC = () => {
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  const data = sectorData[selectedSector]?.webManage;

  if (!data) return null;

  return (
    <section className="theme py-10 px-2">
      <div className="container flex flex-wrap mx-auto p-5 productBgColor rounded-lg">
        {/* Left Content */}
        <div className="w-full sm:w-2/3 md:w-2/4 mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white border border-blue-500 p-2 rounded-md flex items-center justify-center mr-4">
              <FcTemplate className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold">{data.title}</h3>
          </div>

          <div className="bg-info rounded-md p-3 mb-4">
            <p className="font-medium">{data.subTitle}</p>
          </div>

          <p className="mb-6">{data.description}</p>

          <hr className="my-6" />

          {/* Metrics List */}
          <ul className="space-y-3">
            <h4 className="text-sm font-semibold">{data.metricsTitle}</h4>
            {data.webMetrics.map((metric, index) => (
              <li key={index} className="flex items-center space-x-2">
                {index + 1} - {metric}
              </li>
            ))}
          </ul>
        </div>

        {/* Animation */}
        <div className="w-full sm:w-2/3 md:w-2/4 mx-auto">
          {data?.animation && (
            <WebManageAnimasyonJson 
              useBlob={true}
            />
          )}
        </div>
      </div>

      <div className="mt-10">
        <ReferanceWeb />
      </div>
    </section>
  );
};

export default WebManage;

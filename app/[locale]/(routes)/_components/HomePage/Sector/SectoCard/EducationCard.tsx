
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';


import ServiceSectorImg from '@/public/images/EducationSector.webp';
import './SectorCard.css'
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const EducationSectorCard = () => {


const t = useTranslations("HomePage");


  return (
    <div className="sector-section flex flex-col items-center ">
      <div className="cardInclusive w-full max-w-4xl rounded-lg overflow-hidden">
        <div className="card">
          <div className="card-inner relative">
            <div className="box">
              <div className="imgBox relative">
             
                <Image
                  src={ServiceSectorImg}
                  alt="Dijital Pazarlama Hizmet Sektörü"
                  width={400}
                  height={400}
                />
              </div>
              <div className="icon absolute bottom-4 right-4 theme">
              <Link href="/dijital-pazarlama-donusum-kutusu/egitimsektoru" target='blank'>
                <div
                  className="iconBox bg-blue-600 rounded-full p-4 cursor-pointer flex items-center justify-center hover:bg-[#1f77bb]"
                 
                >
                  <MdArrowOutward className="text-white w-16 h-16" />
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="content p-6 bg-transparent">
            <h4 className="text-2xl font-semibold mb-4">
              {t("subtitle4B")}
            </h4>
            <p className="mb-4">
            {t("description7")}
            </p>
            <ul className="list-disc pl-6">
              <li className="MetaPin"> {t("span4")}</li>
              <li className="GooglePin"> {t("span5")}</li>
              <li className="WebPin"> {t("span6")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSectorCard;

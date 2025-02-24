import Image from 'next/image';

import DijitalDonusumKutusu from '@/public/DigitalDonusumKutusu.webp';
import { useTranslations } from 'next-intl';


const DigitalConversiyonInfo = () => {

  const t = useTranslations("DigitalConversion");
  const listed = t.raw("digitalConversiyonInfo.list");
  return (
    <section className="py-20 relative">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
    
        <div className="w-full sm:w-1/2 lg:w-2/5 p-2 sm:p-0 justify-center">
          <h1 className="text-2xl font-bold leading-relaxed">
          {t.rich("digitalConversiyonInfo.title", {
                span: (chunks) => <span className="primary-light">{chunks}</span>,
              })}
          </h1>
          <ul className="space-y-4 mt-6">
            {listed.map((item:string, index:number) => (
                <li key={index} className="flex items-center">
                <svg 
                  className="w-4 h-4 text-green-500 flex-shrink-0 mr-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span>{item}</span>
              </li>
            
            ))}
          
          </ul>
        </div>

     
        <div className="w-full sm:w-1/2 lg:w-2/5 p-2 sm:p-0 flex justify-center items-center">
          <Image 
            src={DijitalDonusumKutusu} 
            alt="Dijital Dönüşüm Kutusu - SetToBox" 
            className="max-w-full h-auto w-3/4 sm:w-4/6"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalConversiyonInfo;

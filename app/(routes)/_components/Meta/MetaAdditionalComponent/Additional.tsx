
import { MdAccessTime, MdOutlineReduceCapacity, MdSupervisedUserCircle } from "react-icons/md";


import { FC } from 'react';

const MetaAdditional: FC = () => {
  return (
    <section className="p-4 mx-auto max-w-7xl overflow-x-auto">
      <div className="flex justify-between gap-4">
  
        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md">
          <div className="w-10 h-10 flex items-center justify-center">
   
            <MdAccessTime className="primary-light text-3xl" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center">
            RAPORLAMA
          </div>
          <div className="mt-4 text-center text-sm">
            Her hafta kutulara özel olarak reklam raporları ve önerileri alarak strateji belirleme
          </div>
        </div>


        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md">
          <div className="w-10 h-10 flex items-center justify-center">
       
            <MdOutlineReduceCapacity className="primary-light text-3xl" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center">
            KİTLE GARANTİSİ
          </div>
          <div className="mt-4 text-center text-sm">
            Kutulara özel derinlemesine kitle araştırması yaparak en doğru kitleye ulaşma garantisi
          </div>
        </div>

  
        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md">
          <div className="w-10 h-10 flex items-center justify-center">
    
            <MdSupervisedUserCircle className="primary-light text-3xl" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center">
            FARKINDALIK
          </div>
          <div className="mt-4 text-center text-sm">
            İş ortaklığında yürütülecek stratejinin farkında olarak, bilinçli ve sürdürülebilir olmasını sağlıyoruz
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaAdditional;

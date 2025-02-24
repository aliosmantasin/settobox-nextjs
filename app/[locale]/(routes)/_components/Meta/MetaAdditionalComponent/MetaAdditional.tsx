
import { MdAccessTime, MdOutlineReduceCapacity, MdSupervisedUserCircle } from "react-icons/md";


import { FC } from 'react';
import { useTranslations } from "next-intl";

const MetaAdditional: FC = () => {
  const t = useTranslations("MetaPage")

  return (
    <section className="p-4 mx-auto max-w-7xl overflow-x-auto">
      <div className="flex justify-between gap-4">
  
        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md">
          <div className="w-10 h-10 flex items-center justify-center">
   
            <MdAccessTime className="primary-light text-3xl" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center">
            {t("div1a")}
          </div>
          <div className="mt-4 text-center text-sm">
            {t("div1b")}
          </div>
        </div>


        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md">
          <div className="w-10 h-10 flex items-center justify-center">
       
            <MdOutlineReduceCapacity className="primary-light text-3xl" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center">
            {t("div2a")}
          </div>
          <div className="mt-4 text-center text-sm">
            {t("div2b")}
          </div>
        </div>

  
        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md">
          <div className="w-10 h-10 flex items-center justify-center">
    
            <MdSupervisedUserCircle className="primary-light text-3xl" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center">
            {t("div3a")}
          </div>
          <div className="mt-4 text-center text-sm">
            {t("div3b")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaAdditional;

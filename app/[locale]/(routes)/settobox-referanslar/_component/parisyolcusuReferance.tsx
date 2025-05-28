import DijitalDonusumKutusu from '../../../../../public/images/yerelGorseller/isletme.webp';
import Image from 'next/image';
import { MdCircle, MdDoneAll } from 'react-icons/md';
import { useTranslations } from 'next-intl';

const ParisYolcusuReferance = () => {

  const t = useTranslations("ReferancePage")

  return (
    <div className="max-w-screen-sm mt-5 border border-gray-300 p-4 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="flex justify-center">
          <Image src="/images/parisyolcusu/parisyolcusuLogo.webp" width={100} height={100} className="max-w-[120px]" alt="Referans Görsel" />
        </div>
   
        <span className="text-sm text-gray-400 mt-3">{t("parisyolcusuReferance.span")}</span>
      </div>

      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-auto max-w-xs">
          <nav aria-label="main mailbox folders" className="mb-2">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdCircle className="text-xs text-blue-500 mr-2" />
                <span>{t("parisyolcusuReferance.span1")}</span>
              </li>
            </ul>
          </nav>
          <hr className="my-2" />
          <nav aria-label="secondary mailbox folders">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>{t("parisyolcusuReferance.li1")}</span>
              </li>
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>{t("parisyolcusuReferance.li2")}</span>
              </li>
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>{t("parisyolcusuReferance.li3")}</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex justify-center">
          <Image
            src={DijitalDonusumKutusu}
            className="w-[150px] object-contain"
            alt="Dijital Dönüşüm Kutusu - SettoBox"
          />
        </div>
      </div>
    <div>
  
    </div>
      <p className="mt-4">
      {t.rich("parisyolcusuReferance.description", {
                a: (chunks) => <a href={t("parisyolcusuReferance.link")} className="primary-light">{chunks}</a>, // <strong> etiketini işleme
       })}
      </p>
     
      <div className="mt-4">
        <div className="bg-info text-blue-800 p-3 rounded-md">
         {t("parisyolcusuReferance.span2")}
        </div>
      </div>
    </div>
  );
};

export default ParisYolcusuReferance;

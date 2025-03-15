import Image from 'next/image';
import IhcLogo from '../../../../../public/images/İhc/ihcLogo.png';
import MetaProBox from '@/public/images/pro-box.webp';
import MegaWeb from '@/public/images/megaWeb.webp';
import { MdCircle, MdDoneAll } from 'react-icons/md';
import { useTranslations } from 'next-intl';
import { AiOutlineArrowRight } from 'react-icons/ai';

const IhcReferance = () => {

  const t = useTranslations("ReferancePage")

  return (
    <div className="max-w-screen-sm mt-5 border border-gray-300 p-4 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="flex justify-center">
          <Image src={IhcLogo} className="max-w-[50px]" alt="Referans Görsel" />
        </div>
        <h3 className="mt-2 text-lg font-semibold">International Company</h3>
        <p className="text-sm text-gray-400">{t("ihcReferance.span")}</p>
      </div>

      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-auto max-w-xs">
          <nav aria-label="main mailbox folders" className="mb-2">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdCircle className="text-xs text-blue-500 mr-2" />
                <span>ProBox Meta + Mega Web</span>
              </li>
            </ul>
          </nav>
          <hr className="my-2" />
          <nav aria-label="secondary mailbox folders">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>{t("ihcReferance.li1")}</span>
              </li>
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>{t("ihcReferance.li2")}</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-y-4">
          <Image
            src={MetaProBox}
            className="w-[100px] object-contain"
            alt="Sosyal Medya Yönetimi - SettoBox"
          />
          <Image
            src={MegaWeb}
            className="w-[100px] object-contain"
            alt="Kurumsal Web Tasarım Hizmeti - SettoBox"
          />
        </div>
      </div>
 
        <p className="mt-4">
        {t("ihcReferance.description")}
        </p>

        <div className='flex items-center gap-3 font-bold text-blue-500'>
    
        {t.rich("ihcReferance.span2", {
        a: (chunks) => <a href={t("ihcReferance.link")} target="_blank">{chunks}</a>,
        })}
        <AiOutlineArrowRight/>
        </div>
      
      <div className="mt-4">
        <div className="bg-info text-blue-800 p-3 rounded-md">
        {t("ihcReferance.span3")}
        </div>
      </div>
    </div>
  );
};

export default IhcReferance;

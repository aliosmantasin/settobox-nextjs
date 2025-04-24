import Image from 'next/image';
import Link from 'next/link';
import { MdCircle, MdDoneAll } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

const XrealnetReferance = () => {

  const t = useTranslations("ReferancePage")

  return (
    <div className="max-w-screen-sm mt-5 border border-gray-300 p-4 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="flex justify-center">
          <Image src="/images/xrealnet/xrealnetLogo.webp" width={100} height={100} className="max-w-[100px]" alt="XrealNet Logo" />
        </div>
        <p className="text-sm text-gray-400 mt-3">{t("xrealnetReferance.span")}</p>
      </div>

      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-auto max-w-xs">
          <nav aria-label="main mailbox folders" className="mb-2">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdCircle className="text-blue-500 mr-2" />
                <span>Mega Web</span>
              </li>
            </ul>
          </nav>
          <hr className="my-2" />
          <nav aria-label="secondary mailbox folders">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>{t("xrealnetReferance.li1")}</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex justify-center">
          <Image
            src="/images/miniWeb.webp"
            width={100}
            height={100}
            className="w-[100px] object-contain"
            alt="Web Tasarım Hizmeti - SetToBox"
          />
        </div>
      </div>

      <p className="mt-4">
      <span>{t("xrealnetReferance.description")}</span>
        <Link
          href={t("xrealnetReferance.link")}
          target="_blank"
          className="font-bold text-blue-500 flex items-center mt-2"
        >
         {t("xrealnetReferance.span2")}<AiOutlineArrowRight className="ml-2" />
        </Link>
      </p>

      <div className="mt-4">
        <div className="bg-info text-blue-800 p-3 rounded-md">
        {t("xrealnetReferance.span3")}
        </div>
      </div>
    </div>
  );
};

export default XrealnetReferance;
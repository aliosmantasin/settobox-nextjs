import Image from 'next/image';
import Link from 'next/link';
import { MdCircle, MdDoneAll } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';

import XrealnetLogo from '@/public/images/xrealnet/logo.png';
import MegaWeb from '@/public/images/megaWeb.webp';

const XrealnetReferance = () => {
  return (
    <div className="mt-5 border border-gray-300 p-4 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="flex justify-center">
          <Image src={XrealnetLogo} className="max-w-[100px]" alt="XrealNet Logo" />
        </div>
    
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
                <span>Web Tasarım Hizmeti</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex justify-center">
          <Image
            src={MegaWeb}
            className="w-[100px] object-contain"
            alt="SetToBox Web Tasarım Hizmeti"
          />
        </div>
      </div>

      <p className="mt-4">
      Kuzey Kıbrısta bulunan firmanın kurumsal web tasarım hizmeti tasarlandı. İçerik planlaması ve SEO alt yapısı düzenlendi.
        <Link
          href="https://xrealnet-referans.settobox.com/"
          target="_blank"
          className="font-bold text-blue-500 flex items-center mt-2"
        >
          Detaylı İncele <AiOutlineArrowRight className="ml-2" />
        </Link>
      </p>
    </div>
  );
};

export default XrealnetReferance;
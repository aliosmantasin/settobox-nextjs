

import DurunetLogo from '@/public/images/durunetGorsel/durunetLogo.png';
import DijitalDonusumKutusu from '@/public/images/DigitalDonusumKutusu.webp';
import Image from 'next/image';
import { MdCircle, MdDoneAll } from 'react-icons/md';
import Link from 'next/link';

const DurunetReferance = () => {
  return (
    <div className="max-w-screen-sm mt-5 border border-gray-300 p-4 rounded-md shadow-md">
      <div className="text-center mb-4">
        <div className="flex justify-center">
          <Image src={DurunetLogo} className="max-w-[120px]" alt="Referans Görsel" />
        </div>
   
        <p className="text-sm text-gray-400 mt-3">Hizmet Sektörü Dijital Pazarlama</p>
      </div>

      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-auto max-w-xs">
          <nav aria-label="main mailbox folders" className="mb-2">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdCircle className="text-xs text-blue-500 mr-2" />
                <span>Dijital Pazarlama Dönüşüm Kutusu</span>
              </li>
            </ul>
          </nav>
          <hr className="my-2" />
          <nav aria-label="secondary mailbox folders">
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>Facebook & Instagram Yönetimi</span>
              </li>
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>Google Ads Reklam Yönetimi</span>
              </li>
              <li className="flex items-center">
                <MdDoneAll className="text-green-500 mr-2" />
                <span>Web Tasarım Hizmeti</span>
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

      <p className="mt-4">Firmanın online varlıkları tümüyle <strong className='primary-light text-'><Link href="/dijital-pazarlama-donusum-kutusu">Dijital Pazarlama Dönüşüm Kutusu</Link> </strong>  içerik yapısı ile yönettik.</p>
      <div className="mt-4">
        <div className="bg-info text-blue-800 p-3 rounded-md">
          Referans Amaçlı Paylaşılmıştır.
        </div>
      </div>
    </div>
  );
};

export default DurunetReferance;

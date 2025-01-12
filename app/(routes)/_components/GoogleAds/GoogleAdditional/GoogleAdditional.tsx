'use client';


import { Button } from '@/components/ui/button';

import { MdAccessTime, MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard, MdOutlinePhoneForwarded, MdSupervisorAccount } from "react-icons/md";
import Link from 'next/link';
import './GoogleAdditional.css';


const GoogleAdditional = () => {
  return (
    <section>
      {/* Header Section */}
      <div className="container flex justify-center text-center mx-auto ">
        <div className='mx-auto'>

        <h3  className="text-primary text-xl mb-4">
          Bir Google Ads Uzmanı ile İletişime Geçin
        </h3>
       
          <Button>
          <Link href="tel:+905437214839" target="_blank"   className="flex items-center justify-center">
            <MdOutlinePhoneForwarded className="w-4 h-4 mr-2" />
            <p>Şimdi Ara!</p>
            
            </Link>
          </Button>
     
        </div>
      
      </div>

      {/* Scrollable Grid Section */}
      <div className="w-9/12 scroll-grid mt-8 flex mx-auto justify-evenly gap-10">
        {[
          {
            icon: MdAddToQueue,
            title: 'Ücretsiz Kurulum',
            description: 'Tüm kutularda Google Ads kurulum desteği uygulanmaktadır.',
          },
          {
            icon: MdKeyboard,
            title: 'Uygun Anahtar Kelime',
            description:
              'Uygun anahtar kelimeler üzerine odaklanarak bütçe kontrolünü sağlarız.',
          },
          {
            icon: MdHourglassTop,
            title: 'Hızlı Kurulum',
            description:
              'Reklamlarımızın yayınlanması ve verilen diğer hizmetler belirlenen sürede teslim edilir.',
          },
          {
            icon: MdAccessTime,
            title: 'Raporlama',
            description:
              'Her hafta kutulara özel olarak reklam raporları ve önerileri alarak strateji belirleme.',
          },
          {
            icon: MdSupervisorAccount,
            title: 'Farkındalık',
            description:
              'İş ortaklığında yürütülecek stratejinin farkında olarak, bilinçli ve sürdürülebilir olmasını sağlıyoruz.',
          },
          {
            icon: MdBalance,
            title: 'Sabit Fiyat',
            description: 'Fiyatlandırmalarda 1 yıl sabit fiyat garantisi uygulanır.',
          },
        ].map((item, index) => (

          <div key={index} className="item-box">
            <div className="icon-box">
              <item.icon className="w-10 h-10 primary-light" />
            </div>
            <h6  className="mt-4 text-primary">
              {item.title}
            </h6>
            <p className="mt-2 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleAdditional;


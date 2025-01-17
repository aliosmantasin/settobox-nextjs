"use client";

import { Button } from '@/components/ui/button';
import { MdAccessTime, MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard, MdOutlinePhoneForwarded, MdSupervisorAccount } from "react-icons/md";
import Link from 'next/link';

const GoogleAdditional = () => {
  const features = [
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
  ];

  return (
    <section className="p-4 mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="flex justify-center text-center mb-8">
        <div>
          <h3 className="text-primary text-xl mb-4">
            Bir Google Ads Uzmanı ile İletişime Geçin
          </h3>
          <Button>
            <Link href="tel:+905437214839" target="_blank" className="flex items-center justify-center">
              <MdOutlinePhoneForwarded className="w-4 h-4 mr-2" />
              <p>Şimdi Ara!</p>
            </Link>
          </Button>
        </div>
      </div>

      {/* Scrollable Grid Section */}
      <div className="flex overflow-x-auto space-x-20 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 cardBgColor"
          >
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <feature.icon className="text-3xl" />
            </div>
            <h6 className="mt-4 text-primary text-lg font-semibold text-center">
              {feature.title}
            </h6>
            <p className="mt-2 text-center text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleAdditional;

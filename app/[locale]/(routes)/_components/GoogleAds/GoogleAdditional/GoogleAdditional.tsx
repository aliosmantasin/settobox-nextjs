"use client";

import { Button } from '@/components/ui/button';
import { MdAccessTime, MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard, MdOutlinePhoneForwarded, MdSupervisorAccount } from "react-icons/md";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const GoogleAdditional = () => {
  const t = useTranslations("GooglePage");

  const features = [
    {
      icon: MdAddToQueue,
      title: t('googleAdditional.feature1.title'),
      description: t('googleAdditional.feature1.description'),
    },
    {
      icon: MdKeyboard,
      title: t('googleAdditional.feature2.title'),
      description: t('googleAdditional.feature2.description'),
    },
    {
      icon: MdHourglassTop,
      title: t('googleAdditional.feature3.title'),
      description: t('googleAdditional.feature3.description'),
    },
    {
      icon: MdAccessTime,
      title: t('googleAdditional.feature4.title'),
      description: t('googleAdditional.feature4.description'),
    },
    {
      icon: MdSupervisorAccount,
      title: t('googleAdditional.feature5.title'),
      description: t('googleAdditional.feature5.description'),
    },
    {
      icon: MdBalance,
      title: t('googleAdditional.feature6.title'),
      description: t('googleAdditional.feature6.description'),
    },
  ];

  return (
    <section className="p-4 mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="flex justify-center text-center mb-8">
        <div>
          <h3 className="text-primary text-xl mb-4 font-thin text-gray-900 dark:text-white">
            {t('googleAdditional.description')}
          </h3>
          <Button>
            <Link href="tel:+905437214839" target="_blank" className="flex items-center justify-center">
              <MdOutlinePhoneForwarded className="w-4 h-4 mr-2" />
              <span>{t('googleAdditional.span')}</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Scrollable Grid Section */}
      <div className="flex overflow-x-auto space-x-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 cardBgColor"
          >
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              <feature.icon className="text-3xl primary-light" />
            </div>
            <h6 className="mt-4 primary text-lg font-semibold text-center">
              {feature.title}
            </h6>
            <p className="mt-2 text-center tracking-tight text-gray-500 md:text-md dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleAdditional;

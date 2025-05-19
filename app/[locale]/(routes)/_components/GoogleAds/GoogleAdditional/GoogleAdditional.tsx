"use client";

import { MdAccessTime, MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard, MdSupervisorAccount } from "react-icons/md";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

const GoogleAdditional = () => {
  const t = useTranslations("GooglePage");

  const features = [
    {
      icon: MdAddToQueue,
      title: t('googleAdditional.features.feature1.title'),
      description: t('googleAdditional.features.feature1.description'),
    },
    {
      icon: MdKeyboard,
      title: t('googleAdditional.features.feature2.title'),
      description: t('googleAdditional.features.feature2.description'),
    },
    {
      icon: MdHourglassTop,
      title: t('googleAdditional.features.feature3.title'),
      description: t('googleAdditional.features.feature3.description'),
    },
    {
      icon: MdAccessTime,
      title: t('googleAdditional.features.feature4.title'),
      description: t('googleAdditional.features.feature4.description'),
    },
    {
      icon: MdSupervisorAccount,
      title: t('googleAdditional.features.feature5.title'),
      description: t('googleAdditional.features.feature5.description'),
    },
    {
      icon: MdBalance,
      title: t('googleAdditional.features.feature6.title'),
      description: t('googleAdditional.features.feature6.description'),
    },
  ];

  return (
    <section className="py-16 px-4 mx-auto max-w-7xl">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('googleAdditional.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('googleAdditional.subtitle')}
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GoogleAdditional;

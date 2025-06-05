"use client";

// import { MdCode, MdDevices, MdSpeed, MdSecurity, MdAutoAwesome, MdSupport } from "react-icons/md";
// import { motion } from "framer-motion";
// import { useTranslations } from 'next-intl';

const WebDesignAdditional = () => {
  // const t = useTranslations("WebsitePage");

  // const features = [
  //   {
  //     icon: MdCode,
  //     title: t('webDesignAdditional.features1.title'),
  //     description: t('webDesignAdditional.features1.description'),
  //   },
  //   {
  //     icon: MdDevices,
  //     title: t('webDesignAdditional.features2.title'),
  //     description: t('webDesignAdditional.features2.description'),
  //   },
  //   {
  //     icon: MdSpeed,
  //     title: t('webDesignAdditional.features3.title'),
  //     description: t('webDesignAdditional.features3.description'),
  //   },
  //   {
  //     icon: MdSecurity,
  //     title: t('webDesignAdditional.features4.title'),
  //     description: t('webDesignAdditional.features4.description'),
  //   },
  //   {
  //     icon: MdAutoAwesome,
  //     title: t('webDesignAdditional.features5.title'),
  //     description: t('webDesignAdditional.features5.description'),
  //   },
  //   {
  //     icon: MdSupport,
  //     title: t('webDesignAdditional.features6.title'),
  //     description: t('webDesignAdditional.features6.description'),
  //   },
  // ];

  return (
    <section className="py-16 px-4 mx-auto max-w-7xl">
      {/* Header Section */}


   

      {/* Features Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            <div className="relative my-10">
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
      </div> */}

    </section>
  );
};

export default WebDesignAdditional;

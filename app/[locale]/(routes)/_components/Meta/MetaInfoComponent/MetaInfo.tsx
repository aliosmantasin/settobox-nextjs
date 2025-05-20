"use client";

import { MdCheckBox, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneSvg from "./InfoSlider/SliderSVG/PhoneSvg";
import "./MetaInfo.css";

interface Feature {
  title: string;
  description: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    <div className="p-6 border-l-4 border-pink-500 h-full">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center">
            <MdCheckBox className="text-2xl text-pink-500 dark:text-pink-400" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </motion.li>
);

const MetaInfo: React.FC = () => {
  const features = [
    {
      title: "Marka Bilinirliği",
      description: "Hedef kitlenize uygun sponsorlu reklamlar ile markanızın bilinirliğini artırıyoruz."
    },
    {
      title: "Potansiyel Müşteri",
      description: "Doğru hedefleme stratejileri ile potansiyel müşterilerinize ulaşıp satışlarınızı artırıyoruz."
    },
    {
      title: "Etkileşim",
      description: "Özgün içerikler ve profesyonel reklam yönetimi ile hesap etkileşimlerinizi yükseltiyoruz."
    },
    {
      title: "Rekabet Avantajı",
      description: "Rakiplerinizden öne çıkmanız için etkili sosyal medya stratejileri oluşturuyoruz."
    },
  
  ];

  return (
    <>
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <h1 className="text-3xl font-extrabold primary tracking-wider text-center">
          Facebook & Instagram Sponsorlu Reklam
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-4 max-w-3xl mx-auto">
          Meta&apos;nın güçlü reklam araçlarıyla hedef kitlenize ulaşın ve dönüşümleri artırın.
        </p>

        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-5xl mx-auto">
            <ul className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <MdKeyboardDoubleArrowDown className="text-4xl text-pink-500 animate-bounce" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex justify-center items-center mt-10"
          >
            <div className="relative flex justify-center items-center mt-5 size-3/4 sm:w-1/4 lg:w-3/7 bg">
              <div className="absolute image-container top-[15%] left-[-5%]">
                <Image
                  src="/images/instagram.webp"
                  width={70}
                  height={70}
                  className="-rotate-45"
                  alt="Instagram"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div className="absolute image-container bottom-[15%] left-[-5%]">
                <Image
                  src="/images/facebook.webp"
                  width={70}
                  height={70}
                  className="-rotate-45"
                  alt="Facebook"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div className="absolute image-container right-[-5%]">
                <Image
                  src="/images/whatsapp.webp"
                  width={70}
                  height={70}
                  className="rotate-45"
                  alt="WhatsApp"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <PhoneSvg />
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Meta (Facebook & Instagram) Reklam Paketi
            </h3>
            <div className="space-y-2 text-center">
              <p className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                Aylık Yönetim: 4.500₺ KDV dahil
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                + Kurumsal Website: 4.500₺ (indirimli fiyat)
              </p>
            </div>
          </motion.div> */}
        </div>
      </section>
    </>
  );
};

export default MetaInfo;

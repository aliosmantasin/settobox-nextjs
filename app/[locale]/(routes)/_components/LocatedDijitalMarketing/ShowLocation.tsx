"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiTrendingUp } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

const features = [
  {
    icon: <FiTrendingUp className="w-8 h-8 text-blue-500" />,
    title: "İçerik Pazarlaması ve Yönetimi",
    description: "Sizden aldığımız hizmetlerinizle ilgili içerikleri düzenleyip sosyal medya ve web sitenizde paylaşarak bölgenizde organik ve kalıcı marka bilinirliği sağlıyoruz. İçerikleriniz doğru etiketleme ve stratejilerle hedef kitlenize ulaşır.",
  },
  {
    icon: <FaYoutube className="w-8 h-8 text-red-500" />,
    title: "Özel Video ve Animasyonlar",
    description: "İşletmenizin konumunu ve hizmetlerini tanıtan özel animasyonlar, drone videoları ve tanıtım filmleri hazırlıyoruz. Bu videolar hem reklamlarda kullanılarak hem de web sitenize eklenerek potansiyel müşterilerinizin sizi kolayca bulmasını sağlar.",
  },
  {
    icon: <FiCamera className="w-8 h-8 text-green-500" />,
    title: "Profesyonel Prodüksiyon Desteği",
    description: "Uzun vadede işinizle alakalı profesyonel tanıtım videoları için destek sağlıyoruz. Hizmet detayları, referans videoları ve işletme sahibi/çalışan güven videoları gibi çekimlerle markanızın hikayesini en etkili şekilde anlatıyoruz.",
  },
];

const ShowLocationComponent = () => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Marka Bilinirliğinizi Uçuracak Teknikler
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Sadece hizmet vermiyoruz, markanızın hikayesini anlatarak bölgenizde akılda kalıcı ve rekabette öncü olmanızı sağlıyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowLocationComponent;

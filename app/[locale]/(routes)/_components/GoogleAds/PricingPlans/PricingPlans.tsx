"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigRightDash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
import GoogleMiniBox from "@/public/images/GoogleMini.webp";
import GoogleMegaBox from "@/public/images/GoogleMega.webp";
import GoogleProBox from "@/public/images/GooglePro.webp";
import GoogleProduct from "../GoogleProduct/GoogleProduct";
import { useTranslations } from "next-intl";

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState("mini");
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("GooglePage");

  const plans = {
    mini: {
      name: "MiniBox",
      price: "4.500₺",
      adBudget: "7.500₺",
      description: "Küçük işletmeler için ideal başlangıç paketi",
      features: [
        "Google Ads Hesap Kurulum",
        "1 Arama Ağı Kampanyası",
        "Anahtar Kelime Araştırması",
        "Rakip Analizi",
        "Negatif Kelime Optimizasyonu",
        "Aylık Rapor",
        "09:00 - 20:00 WhatsApp Desteği",
        "SEO Uyumlu Kurumsal Web Sitesi - 4.500₺ (opsiyonel)",
        "KDV Dahil Fiyatlandırma"
      ],
      image: GoogleMiniBox,
      gradient: "from-blue-500 to-cyan-400",
      shadowColor: "shadow-blue-500/30",
      oldPrice: "5.500₺"
    },
    mega: {
      name: "MegaBox",
      price: "8.100₺",
      adBudget: "15.000₺",
      description: "Büyüyen işletmeler için profesyonel çözüm",
      features: [
        "2 Arama Ağı Kampanyası",
        "2 Display Kampanyası",
        "1 Performans Kampanyası",
        "Gelişmiş Dönüşüm Optimizasyonu",
        "Ayın 15'inde Rapor",
        "09:00 - 20:00 WhatsApp Desteği",
        "Detaylı Rakip Analizi",
        "SEO Uyumlu Kurumsal Gelişmiş Web Site - Ücretsiz",
        "KDV Dahil Fiyatlandırma"
      ],
      image: GoogleMegaBox,
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "shadow-violet-500/30",
      oldPrice: "9.000₺"
    },
    pro: {
      name: "ProBox",
      price: "14.900₺",
      adBudget: "25.000₺",
      description: "Kurumsal firmalar için tam kapsamlı hizmet",
      features: [
        "Gelişmiş Arama Ağı Kampanyası",
        "Marka Bilinirliği Kampanyaları",
        "Bölgesel Maksimum Performans Kampanyası",
        "Gelişmiş Dönüşüm Optimizasyonu Form + WhatsApp + Telefon Araması",
        "Reklamlarınız için Gelişmiş Görsel ve Videolar",
        "Haftalık Detaylı Raporlama",
        "Her Ayın Sonunda Gelecek Ay Planlaması ve Öneri - Power Point Slide ",
        "Swot Analizi",
        "Aylık Performans Toplantısı",
        "09:00 - 20:00 WhatsApp ve Telefon Desteği",
        "Google Maps ve Yerel SEO Optimizasyonu",
        "SEO Uyumlu Kurumsal Gelişmiş Web Site - Ücretsiz",
        "KDV Dahil Fiyatlandırma"
      ],
      image: GoogleProBox,
      gradient: "from-amber-500 to-orange-400",
      shadowColor: "shadow-amber-500/30",
      oldPrice: "16.500₺"
    }
  };

  return (
    <section className="py-12 productBgColor">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
        </motion.div>

        <div className="socialMediaButtons mb-12">
          <div className="container flex justify-center gap-8">
            {Object.entries(plans).map(([key, plan]) => (
              <button
                key={key}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-gradient-to-r ' + plan.gradient + ' text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md hover:scale-105 hover:shadow-lg'
                }`}
                onClick={() => setActiveTab(key as 'mini' | 'mega' | 'pro')}
              >
                <div className={`w-12 h-12 flex items-center justify-center ${activeTab !== key && 'opacity-75'}`}>
                  <Image 
                    src={plan.image} 
                    alt={`${plan.name} Paketi`}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="font-semibold">{plan.name}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          {Object.entries(plans).map(([key, plan]) => (
            activeTab === key && (
              <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Image 
                      src={plan.image} 
                      alt={`${plan.name} Paketi`}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-green-700 dark:text-green-400">Aylık Yönetim Ücreti</span>
                      <div className="flex items-center gap-3">
                        {plan.oldPrice && (
                          <span className="text-sm line-through text-red-500">{plan.oldPrice}</span>
                        )}
                        <span className="text-xl font-bold text-green-700 dark:text-green-400">{plan.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-blue-700 dark:text-blue-400">Minimum Reklam Bütçesi (aylık)</span>
                      <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{plan.adBudget}</span>
                    </div>

                  
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Paket Özellikleri</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowBigRightDash className={`w-6 h-6 mt-1 text-gray-400 flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => setShowModal(true)}
                      className="w-full py-3 px-6 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Detaylı Paket Bilgisi
                    </button>
                    <button className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}>
                      <Link
                        href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MdWhatsapp className="w-5 h-5" /> WhatsApp İletişim
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            )
          ))}
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="w-[90%] max-w-6xl max-h-[85vh] overflow-y-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl relative">
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 z-50"
                >
                  <X className="w-6 h-6" />
                </button>
                <GoogleProduct />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingPlans; 
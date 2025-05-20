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

  const buttonVariants = {
    unselected: {
      scale: 1,
      filter: "grayscale(100%)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    selected: {
      scale: 1.05,
      filter: "grayscale(0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const glowVariants = {
    unselected: {
      opacity: 0,
      scale: 1.2,
    },
    selected: {
      opacity: [0, 0.5, 0],
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const plans = {
    mini: {
      name: "MiniBox",
      price: "4.500₺",
      adBudget: "7.500₺",
      description: t("pricingPlans.mini.description"),
      features: [
        t("pricingPlans.mini.features.f1"),
        t("pricingPlans.mini.features.f2"),
        t("pricingPlans.mini.features.f3"),
        t("pricingPlans.mini.features.f4"),
        t("pricingPlans.mini.features.f5"),
        t("pricingPlans.mini.features.f6"),
        t("pricingPlans.mini.features.f7"),
        t("pricingPlans.mini.features.f8"),
        t("pricingPlans.mini.features.f9")
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
      description: t("pricingPlans.mega.description"),
      features: [
        t("pricingPlans.mega.features.f1"),
        t("pricingPlans.mega.features.f2"),
        t("pricingPlans.mega.features.f3"),
        t("pricingPlans.mega.features.f4"),
        t("pricingPlans.mega.features.f5"),
        t("pricingPlans.mega.features.f6"),
        t("pricingPlans.mega.features.f7"),
        t("pricingPlans.mega.features.f8"),
        t("pricingPlans.mega.features.f9")
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
      description: t("pricingPlans.pro.description"),
      features: [
        t("pricingPlans.pro.features.f1"),
        t("pricingPlans.pro.features.f2"),
        t("pricingPlans.pro.features.f3"),
        t("pricingPlans.pro.features.f4"),
        t("pricingPlans.pro.features.f5"),
        t("pricingPlans.pro.features.f6"),
        t("pricingPlans.pro.features.f7"),
        t("pricingPlans.pro.features.f8"),
        t("pricingPlans.pro.features.f9"),
        t("pricingPlans.pro.features.f10"),
        t("pricingPlans.pro.features.f11"),
        t("pricingPlans.pro.features.f12"),
        t("pricingPlans.pro.features.f13")
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("description")}
          </p>
        </motion.div>

        <div className="mb-8 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex justify-start lg:justify-center gap-3 min-w-max p-5">
            {Object.entries(plans).map(([key, plan]) => (
              <motion.div
                key={key}
                className="relative"
                initial="unselected"
                animate={activeTab === key ? "selected" : "unselected"}
                variants={buttonVariants}
              >
                <motion.div
                  variants={glowVariants}
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${plan.gradient} blur-lg`}
                  style={{ zIndex: -1 }}
                />
                
                <motion.button
                  className={`relative flex-none w-[140px] sm:w-[160px] flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 ${
                    activeTab === key 
                      ? 'bg-gradient-to-r ' + plan.gradient + ' text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setActiveTab(key as 'mini' | 'mega' | 'pro')}
                  whileHover={{ scale: activeTab === key ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center`}
                    animate={{ 
                      rotate: activeTab === key ? [0, 5, -5, 0] : 0,
                      scale: activeTab === key ? [1, 1.1, 1] : 1
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 1]
                    }}
                  >
                    <Image 
                      src={plan.image} 
                      alt={`${plan.name} Paketi`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <span className="font-semibold text-base">{plan.name}</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          {Object.entries(plans).map(([key, plan]) => (
            activeTab === key && (
              <div key={key} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                      <Image 
                        src={plan.image} 
                        alt={`${plan.name} Paketi`}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{plan.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-green-700 dark:text-green-400 text-sm sm:text-base">{t("pricingPlans.monthlyFee")}</span>
                      <div className="flex items-center gap-3">
                        {plan.oldPrice && (
                          <span className="text-sm line-through text-red-500">{plan.oldPrice}</span>
                        )}
                        <span className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-400">{plan.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-blue-700 dark:text-blue-400 text-sm sm:text-base">{t("pricingPlans.minimumBudget")}</span>
                      <span className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-400">{plan.adBudget}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t("pricingPlans.packageFeatures")}</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowBigRightDash className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setShowModal(true)}
                      className="flex-1 py-3 px-6 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
                    >
                      {t("pricingPlans.detailedInfo")}
                    </button>
                    <Link
                      href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 px-6 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base`}
                    >
                      <MdWhatsapp className="w-5 h-5" /> {t("pricingPlans.whatsappContact")}
                    </Link>
                  </div>
                </div>
              </div>
            )
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-[95%] max-w-6xl max-h-[90vh] overflow-y-auto">
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

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default PricingPlans; 
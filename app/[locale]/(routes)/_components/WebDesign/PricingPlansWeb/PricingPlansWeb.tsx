"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigRightDash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
import MiniWeb from "@/public/images/miniWeb.webp";
import MegaWeb from "@/public/images/megaWeb.webp";
import dynamic from "next/dynamic";
import Loading from "../../Loadling/Loading";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

const WebDesignProduct = dynamic(() => import('../WebDesignProduct/WebDesignProduct'), {
  loading: () => <div className="flex items-center justify-center min-h-[300px]"><Loading/></div>,
  ssr: true
})

type PlanType = 'mini' | 'mega';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  image: StaticImageData;
  gradient: string;
  shadowColor: string;
  oldPrice?: string;
  referenceLinks?: {
    title: string;
    url: string;
  }[];
}

interface Plans {
  [key: string]: Plan;
}

const PricingPlansWeb = () => {
  const [activeTab, setActiveTab] = useState<PlanType>('mini');
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("WebsitePage");

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

  const plans: Plans = {
    mini: {
      name: "MiniWeb",
      price: "10.000₺",
      description: t("pricingPlansWeb.mini.description"),
      features: [
        t("pricingPlansWeb.mini.features.f1"),
        t("pricingPlansWeb.mini.features.f2"),
        t("pricingPlansWeb.mini.features.f3"),
        t("pricingPlansWeb.mini.features.f4"),
        t("pricingPlansWeb.mini.features.f5"),
        t("pricingPlansWeb.mini.features.f6"),
        t("pricingPlansWeb.mini.features.f7"),
        t("pricingPlansWeb.mini.features.f8"),
        t("pricingPlansWeb.mini.features.f9")
      ],
      image: MiniWeb,
      gradient: "from-blue-500 to-cyan-400",
      shadowColor: "shadow-blue-500/30",
      referenceLinks: [
        {
          title: t("pricingPlansWeb.mini.features.f10"),
          url: t("pricingPlansWeb.mini.features.f11")
        },
        {
          title: t("pricingPlansWeb.mini.features.f12"),
          url: t("pricingPlansWeb.mini.features.f13")
        }
      ]
    },
    mega: {
      name: "MegaWeb",
      price: "17.000₺",
      description: t("pricingPlansWeb.mega.description"),
      features: [
        t("pricingPlansWeb.mega.features.f1"),
        t("pricingPlansWeb.mega.features.f2"),
        t("pricingPlansWeb.mega.features.f3"),
        t("pricingPlansWeb.mega.features.f4"),
        t("pricingPlansWeb.mega.features.f5"),
        t("pricingPlansWeb.mega.features.f6"),
        t("pricingPlansWeb.mega.features.f7"),
        t("pricingPlansWeb.mega.features.f8"),
       
      ],
      image: MegaWeb,
      gradient: "from-violet-500 to-purple-500",
      shadowColor: "shadow-violet-500/30",
      referenceLinks: [
        {
          title: t("pricingPlansWeb.mega.features.f9"),
          url: t("pricingPlansWeb.mega.features.f10")
        },
        {
          title: t("pricingPlansWeb.mega.features.f11"),
          url: t("pricingPlansWeb.mega.features.f12")
        }
      ]
    }
  };

  return (
    <>
      <section className="py-12 productBgColor">
        <div className="container px-4 mx-auto">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('webDesignAdditional.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('webDesignAdditional.subtitle')}
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
                    className={`absolute inset-0 rounded-lg  ${plan.gradient} blur-lg`}
                    style={{ zIndex: -1 }}
                  />
                  
                  <motion.button
                    className={`relative flex-none w-[140px] sm:w-[160px] flex flex-col items-center gap-2 p-3 rounded-lg transition-colors duration-300 ${
                      activeTab === key 
                        ? 'bg-gradient-to-r ' + plan.gradient + ' text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md hover:shadow-lg'
                    }`}
                    onClick={() => setActiveTab(key as PlanType)}
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
                        <span className="text-green-700 dark:text-green-400 text-sm sm:text-base">{t("pricingPlansWeb.monthlyFee")}</span>
                        <div className="flex items-center gap-3">
                          {plan.oldPrice && (
                            <span className="text-sm line-through text-red-500">{plan.oldPrice}</span>
                          )}
                          <span className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-400">{plan.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t("pricingPlansWeb.packageFeatures")}</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowBigRightDash className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-400 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {plan.referenceLinks && plan.referenceLinks.length > 0 && (
                        <ul className="flex flex-col sm:flex-row gap-3">
                          {plan.referenceLinks.map((link, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <ArrowBigRightDash className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-400 flex-shrink-0" />
                              <Link 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setShowModal(true)}
                        className="flex-1 py-3 px-6 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
                      >
                        {t("pricingPlansWeb.detailedInfo")}
                      </button>
                      <Link
                        href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-3 px-6 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm sm:text-base`}
                      >
                        <MdWhatsapp className="w-5 h-5" /> {t("pricingPlansWeb.whatsappContact")}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </div>

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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-full max-w-6xl mx-4 max-h-[90vh] flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl relative flex flex-col overflow-hidden">
              <div className="sticky top-0 bg-white dark:bg-gray-800 z-50 p-4 border-b dark:border-gray-700">
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <WebDesignProduct />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingPlansWeb; 
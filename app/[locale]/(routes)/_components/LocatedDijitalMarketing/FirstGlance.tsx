"use client"
import React from "react";
import StartContactLocated from "./StartContactLocated";
import { MdCheckCircleOutline } from "react-icons/md";
import { motion } from "framer-motion";
import AllInSetToBoxAnimasyonJson from "../AnimasyonData/AllInSetToBoxAnimasyonJson";

interface FirstGlanceProps {
  onLoad?: () => void;
}

const FirstGlance: React.FC<FirstGlanceProps> = ({ onLoad }) => {
  return (
    <section className="relative mb-10 py-10 sm:py-20 ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Side: Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AllInSetToBoxAnimasyonJson
              onLoad={onLoad}
              useBlob={true}
            />
          </motion.div>
        </div>

        {/* Right Side: Content Card */}
        <div className="w-full lg:w-1/2 max-w-xl flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-900/70 p-6 sm:p-8 rounded-2xl shadow-xl w-full backdrop-blur-sm"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-center primary dark:text-slate-200 mb-3">
              Yerel/Mikro Dijital Pazarlama
            </h1>
            <p className="my-4 text-base md:text-lg text-gray-600 dark:text-slate-400 text-center">
              Markanızın kurumsal değerlerini oturtmak ve potansiyel müşterilerinize ulaşmanızı sağlayacak temel seviyede online varlıklarınızı yönetiyoruz.
            </p>
            
            <ul className='space-y-3 my-6'>
              <li className='flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800/60 p-3 rounded-lg shadow-sm'>
                <MdCheckCircleOutline className='text-green-500 mr-3 text-2xl flex-shrink-0' /> 
                <span className="font-medium">Planlı ve Ekonomik Yönetim</span>
              </li>
              <li className='flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800/60 p-3 rounded-lg shadow-sm'>
                <MdCheckCircleOutline className='text-green-500 mr-3 text-2xl flex-shrink-0' /> 
                <span className="font-medium">Raporlama ve Öneri</span>
              </li>
              <li className='flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800/60 p-3 rounded-lg shadow-sm'>
                <MdCheckCircleOutline className='text-green-500 mr-3 text-2xl flex-shrink-0' /> 
                <span className="font-medium">Online Varlıkların Tümüyle Yönetimi</span>
              </li>
            </ul>

            <div className='flex justify-center items-end space-x-4 sm:space-x-6 my-6'>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Eski Fiyat</p>
                <h6 className="text-xl sm:text-2xl font-bold line-through text-red-500/80">
                  15.000₺
                </h6>
              </div>
              <div className="text-center p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 rounded-xl border border-green-200 dark:border-green-800/50">
                <p className="text-sm text-green-800 dark:text-green-300 font-semibold">İndirimli Fiyat (aylık)</p>
                <h6 className="text-2xl sm:text-3xl font-extrabold text-green-600 dark:text-green-400">
                  12.500₺
                </h6>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <StartContactLocated />
            </div>

            <div className="mt-4 text-center text-sm text-blue-600 dark:text-blue-400 font-semibold">KDV DAHİL</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirstGlance;

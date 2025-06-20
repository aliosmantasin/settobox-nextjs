"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiTarget, FiSmartphone, FiMail } from 'react-icons/fi';
import { FaGoogle, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BsDisplay } from "react-icons/bs";

const FunnelStrategy = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold primary dark:text-slate-200 mb-4">
                        Müşterileriniz Size Nasıl Ulaşacak?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-16">
                        Tüm dijital pazarlama çalışmalarımızı, potansiyel müşterilerinizi adım adım size yönlendiren etkili bir huni (funnel) stratejisi üzerine kuruyoruz. Organik aramalardan ve reklamlardan gelen trafik, size değerli geri dönüşler olarak döner.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="flex flex-col items-center gap-8">
                        
                        {/* Step 1: Traffic Sources */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="w-full"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-slate-300 mb-4 tracking-wide">1. Potansiyel Müşteri Trafiği</h3>
                            <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
                                <TrafficSource icon={<FaGoogle />} text="Organik Arama" color="text-blue-600" />
                                <TrafficSource icon={<FiTarget />} text="Google & Meta Reklamları" color="text-red-500" />
                                <TrafficSource icon={<FaFacebookF />} text="Facebook" color="text-blue-700" />
                                <TrafficSource icon={<FaInstagram />} text="Instagram" color="text-pink-600" />
                            </div>
                        </motion.div>
                        
                        <FiArrowDown className="text-5xl text-gray-300 dark:text-gray-600 animate-pulse" />

                        {/* Step 2: Your Hub */}
                         <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="w-full"
                        >
                             <h3 className="text-xl font-bold text-gray-800 dark:text-slate-300 mb-4 tracking-wide">2. Markanızın Dijital Merkezi</h3>
                             <div className="flex justify-center">
                                 <div className="p-6 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-slate-800 dark:to-slate-900 rounded-full inline-block shadow-lg border-2 border-white dark:border-slate-700">
                                    <BsDisplay className="text-6xl text-blue-600 dark:text-blue-400" />
                                 </div>
                             </div>
                             <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Web Siteniz ve İşletme Profilleriniz</p>
                        </motion.div>

                        <FiArrowDown className="text-5xl text-gray-300 dark:text-gray-600 animate-pulse" />

                        {/* Step 3: Conversions */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="w-full"
                        >
                            <h3 className="text-xl font-bold text-gray-800 dark:text-slate-300 mb-4 tracking-wide">3. Değerli Geri Dönüşler (Lead)</h3>
                             <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
                               <ConversionPoint icon={<FiSmartphone />} text="Telefon Araması" />
                               <ConversionPoint icon={<FaWhatsapp />} text="WhatsApp Mesajı" />
                               <ConversionPoint icon={<FiMail />} text="Bilgi Formu" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const TrafficSource = ({ icon, text, color }: { icon: React.ReactNode, text: string, color: string }) => (
    <div className="flex flex-col items-center gap-2 text-center w-32">
        <div className={`flex items-center justify-center w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${color}`}>
            <span className="text-4xl">{icon}</span>
        </div>
        <span className="font-semibold text-sm text-gray-700 dark:text-slate-300 mt-2">{text}</span>
    </div>
);

const ConversionPoint = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex flex-col items-center gap-2 text-center w-32">
        <div className="flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-4xl">{icon}</span>
        </div>
        <span className="font-semibold text-sm text-gray-700 dark:text-slate-300 mt-2">{text}</span>
    </div>
);


export default FunnelStrategy; 
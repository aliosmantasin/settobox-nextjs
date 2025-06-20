"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiBarChart2, FiCheckCircle } from 'react-icons/fi';

const ResultsHighlight = () => {
    return (
        <section className="py-20 sm:py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold primary dark:text-slate-200 mb-4">
                        Gerçek Sonuçlar, Kanıtlanmış Başarı
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        Stratejilerimizin ne kadar etkili olduğunu görmek için, spab hizmet sektöründeki bir müşterimizin sadece bir haftalık bayram döneminde elde ettiği somut sonuçlara göz atın.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center bg-gray-50 dark:bg-black/50 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
                        <div className="lg:col-span-3">
                             <Image 
                                src="/images/lead.webp"
                                alt="Google Ads Raporu - Müşteri Başarısı"
                                width={1200}
                                height={630}
                                className="rounded-xl shadow-lg object-contain"
                            />
                        </div>
                        <div className="lg:col-span-2 text-left">
                            <div className="flex items-center text-green-500 mb-3">
                                <FiBarChart2 className="w-6 h-6 mr-2" />
                                <h3 className="text-xl font-bold">
                                    Kampanya Analizi
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Bu rapor, hedefli reklam kampanyalarımız sayesinde müşterimizin düşük maliyetle ne kadar değerli geri dönüş (dönüşüm) aldığını net bir şekilde göstermektedir.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-slate-300">36 Yeni Müşteri Dönüşümü</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Sadece 7 günde 36 potansiyel müşteri işletmeyle doğrudan iletişime geçti.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-slate-300">Optimize Edilmiş Maliyet</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">€0,14 gibi rekabetçi bir tıklama başına maliyetle yüksek kaliteli trafik elde edildi.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResultsHighlight; 
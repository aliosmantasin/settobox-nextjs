"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiShield } from 'react-icons/fi';
import { FaPlaneDeparture } from "react-icons/fa";

const CaseStudyVip = () => {
    return (
        <section className="py-20 sm:py-24 bg-blue-50 dark:bg-blue-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
                        <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                               <FaPlaneDeparture className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold primary dark:text-slate-200 mb-2">
                                    Dar ve Rekabetçi Pazarlarda Bile Başarı Mümkün
                                </h2>
                                <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                                    Vaka Analizi: VIP Transfer Hizmeti
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                            <p>
                               Türkiye&apos;den Paris&apos;e seyahat eden seçkin bir kitleye VIP transfer hizmeti sunan bir müşterimiz, oldukça dar ve rekabetin yoğun olduğu bir pazarda faaliyet gösteriyordu. Peki, bu zorlu koşullarda başarıyı nasıl yakaladık?
                            </p>
                            
                            <p className="font-semibold text-gray-800 dark:text-slate-200">
                                Cevap, her detayı düşünülmüş bütünsel bir <span className="text-blue-600 dark:text-blue-400">Funnel (Huni) Stratejisi</span>&apos;nde gizli:
                            </p>
                            
                            <ul className="space-y-4 !mt-8">
                                <li className="flex items-start gap-4">
                                    <FiTarget className="w-7 h-7 text-blue-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-slate-200">Hedef Odaklı Reklamcılık</h4>
                                        <p className="text-sm sm:text-base">Arama Ağı ve Maksimum Performans reklamlarını hassas bir şekilde yapılandırarak doğru potansiyel müşterilere ulaştık.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiShield className="w-7 h-7 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-slate-200">Teknolojik Üstünlük</h4>
                                        <p className="text-sm sm:text-base">Yüksek dönüşüm oranlı bir web sitesi, akıllı takip sistemleri ve bot saldırılarına karşı geliştirdiğimiz özel koruma kalkanları ile reklam bütçesini güvence altına aldık.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <FiAward className="w-7 h-7 text-yellow-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800 dark:text-slate-200">İstikrarlı ve Planlı Süreç</h4>
                                        <p className="text-sm sm:text-base">Başarının tesadüf olmadığına inanıyoruz. İstikrarlı ve planlı bir süreçle, markanız için başarıyı kaçınılmaz hale getiriyoruz. Bu, bizim size sunduğumuz değerin ta kendisidir.</p>
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

export default CaseStudyVip; 
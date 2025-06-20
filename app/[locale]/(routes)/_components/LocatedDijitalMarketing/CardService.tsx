"use client";
import Image from 'next/image'
import React from 'react'
import { MdCheckCircleOutline } from 'react-icons/md'
import { motion } from 'framer-motion'

const serviceData = [
  {
    id: "1",
    title: "Google Ads Reklam Yönetimi",
    icon: "/images/yerelGorseller/googleAds.webp",
    features: ["Metin Reklamı", "Çağrı Uzantılı Reklam", "Konum Uzantılı Reklam"],
    description: "Google ads arama ağı reklamlarıyla potansiyel müşterilerinize ulaşma hedeflenir.",
    integrations: {
      description: "Oluşturduğumuz web sitelerine entegre ettiğimiz Google Uygulamaları Google Analytics - Google Tag Manager",
      images: [
        { src: "/images/yerelGorseller/googleAnalystic.webp", alt: "Google Analiytics Görseli" },
        { src: "/images/yerelGorseller/googleTag.webp", alt: "Google GT Görseli" },
      ],
    },
  },
  {
    id: "2",
    title: "Google İşletme Profili",
    icon: "/images/yerelGorseller/isletmeProfil.webp",
    features: ["Organik Aramalar", "Konum Bilgisi", "Müşteri Yorumları"],
    description: "İlgili aramalarda müşterilerinize görünürlüğünüzü artırmak ve işletmenizle iletişim kurmalarını sağlatmak hedeflenir.",
    integrations: {
      images: [{ src: "/images/yerelGorseller/googleMap.webp", alt: "Google Map Görseli" }],
    },
  },
  {
    id: "3a",
    title: "Meta Yönetimi",
    icon: "/images/yerelGorseller/meta.webp",
    features: ["Facebook ve İnstagram Hesapları", "Meta Business Suit", "Sosyal Medya Kurumsal Yapı", "Sosyal Medya İçerik Paylaşımı (opsiyonel +)"],
    // excludedFeatures: ["Sosyal Medya İçerik Paylaşımı"],
    description: "Meta kurulumları yapılarak potansiyel müşterilerinize kurumsal bir imaj verilmek istenmektedir.",
    integrations: {
      images: [
        { src: "/images/yerelGorseller/instagramApp.webp", alt: "Instagram Görseli" },
        { src: "/images/yerelGorseller/facebookApp.webp", alt: "Facebook Görseli" },
      ],
    },
  },
  {
    id: "3b",
    title: "Meta Reklam Yönetimi",
    icon: "/images/yerelGorseller/meta.webp",
    features: ["Meta İşletme Hesabı Kurulumu", "Meta Reklam Yönetimi", "Meta Pixel Kodu", "Haftalık Rapor ve Öneri"],
    description: "Meta'da bu kurulumları yaparak özelleştirilmiş reklam stratejileri izleyebiliyoruz.",
    integrations: {
      images: [
        { src: "/images/yerelGorseller/instagramApp.webp", alt: "Instagram Görseli" },
        { src: "/images/yerelGorseller/facebookApp.webp", alt: "Facebook Görseli" },
        { src: "/images/yerelGorseller/messengerFbApp.webp", alt: "Messenger Görseli" },
        { src: "/images/yerelGorseller/whatsappApp.webp", alt: "WhatsApp Görseli" },
      ],
    },
  },
  {
    id: "4",
    title: "Kurumsal Website Tasarım",
    icon: "/images/yerelGorseller/website.webp",
    features: ["Kurumsal Website Ücretsiz", "Temel SEO + Search Console", "Meta ve Google Entagrasyonları", "Domain Hosting İlk Yıl Ücretsiz"," Bot Saldırı Koruma, SSL Sertifikası, Firewall"],
    description: "Dijital pazarlama yapısına uygun kurumsal website tasarlıyoruz ve yönetiyoruz. Sahte tıklamalara ve bot saldırılarına önlemler alıyoruz.",
    integrations: {
      images: [
        { src: "/images/yerelGorseller/whatsappApp.webp", alt: "WhatsApp Görseli" },
        { src: "/images/yerelGorseller/phoneConversion.webp", alt: "Telefonla Arama Görseli" },
        { src: "/images/yerelGorseller/mailConversion.webp", alt: "Maille İletişim Görseli" },
      ],
    },
  },
];

const CardService = () => {
  return (
    <section className='my-20'>
      <div className="text-center mb-16">
        <h2 className='text-3xl sm:text-4xl font-extrabold primary dark:text-slate-200 mb-4'>
          Yerel Dijital Pazarlama Paketi İçerik Yapısı
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          İşletmenizin dijital dünyadaki tüm ihtiyaçlarını tek bir pakette topladık. İşte size sunduğumuz hizmetlerin detayları:
        </p>
      </div>

      <div className="space-y-4">
        {serviceData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`container mx-auto py-12 md:py-16 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? 'bg-white dark:bg-slate-800/50' : 'bg-gray-50 dark:bg-slate-900'}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  
                  <div className={`text-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className='relative inline-block group'>
                      <div className="absolute -top-3 -right-3 inline-flex items-center justify-center w-12 h-12 font-bold primary text-xl dark:text-white bg-white dark:bg-gray-900 shadow-md border-2 border-white rounded-full dark:border-gray-800 z-10">
                        {service.id}
                      </div>
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-slate-700 dark:to-slate-800 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <Image src={service.icon} alt={service.title} width={130} height={130} className='p-2' />
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <h3 className='text-2xl sm:text-3xl font-bold primary dark:text-slate-300 mb-5'>{service.title}</h3>
                    <ul className='space-y-3 mb-6'>
                      {service.features.map(feature => (
                        <li key={feature} className='flex items-center text-base sm:text-lg'>
                          <MdCheckCircleOutline className='text-green-500 mr-3 text-2xl flex-shrink-0' />
                          <span className='text-gray-700 dark:text-gray-300'>{feature}</span>
                        </li>
                      ))}
                      {/* {service.excludedFeatures?.map(feature => (
                        <li key={feature} className='flex items-center text-base sm:text-lg text-gray-400 dark:text-gray-500'>
                          <MdClose className='text-red-500 mr-3 text-2xl flex-shrink-0 rounded-full border border-red-500 p-0.5' />
                          <span className='line-through'>{feature}</span>
                        </li>
                      ))} */}
                    </ul>
                    <p className='text-gray-600 dark:text-gray-400 italic text-base sm:text-lg'>{service.description}</p>
                    {service.integrations && (
                      <div className='mt-6 pt-4 border-t border-gray-200 dark:border-gray-700'>
                        <div className='flex items-center justify-start space-x-4'>
                          {service.integrations.images.map(img => (
                            <div key={img.src} className="p-2 bg-gray-100 dark:bg-gray-700/50 rounded-full">
                              <Image src={img.src} alt={img.alt} width={35} height={35} className='opacity-90' />
                            </div>
                          ))}
                        </div>
                        {service.integrations.description && <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3'>{service.integrations.description}</p>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CardService






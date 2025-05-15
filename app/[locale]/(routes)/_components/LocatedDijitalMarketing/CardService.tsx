"use client";
import Image from 'next/image'
import React from 'react'
import { MdArrowDownward, MdCheckCircleOutline, MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardService = () => {
  return (
    <section className='my-20 p-2'>
      <div className="w-full max-w-lg flex justify-center items-center mx-auto">
        <div className='w-full mx-atuo relative flex justify-center'>

          <div className="absolute image-container top-20 left-0 animate-float">
            <Image
              src="/images/yerelGorseller/googleAds.webp"
              width={75}
              height={75}
              alt="WhatsApp"
              className="shadow-lg p-3 rounded-lg bg-slate-100 dark:bg-slate-900 -rotate-12"
            />
          </div>

          <div className="absolute image-container bottom-20 left-0 animate-float delay-150">
            <Image
              src="/images/yerelGorseller/isletmeProfil.webp"
              width={75}
              height={75}
              alt="WhatsApp"
              className="shadow-lg p-3 rounded-lg bg-slate-100 dark:bg-slate-900 rotate-12"
            />
          </div>
          <div className="absolute image-container top-20 right-0 animate-float delay-300">
            <Image
              src="/images/yerelGorseller/meta.webp"
              width={75}
              height={75}
              alt="WhatsApp"
              className="shadow-lg p-3 rounded-lg bg-slate-100 dark:bg-slate-900 -rotate-12"
            />
          </div>

          <div className="absolute image-container bottom-20 right-0 animate-float delay-300">
            <Image
              src="/images/yerelGorseller/website.webp"
              width={75}
              height={75}
              alt="WhatsApp"
              className="shadow-lg p-3 rounded-lg  bg-slate-100 dark:bg-slate-900 rotate-12"
            />
          </div>


          <div className="block max-w-md p-6">

            <Image
              src="/images/yerelGorseller/isletme.webp"
              alt="Yerel/Mikro Dijital Pazarlama"
              width={300}
              height={300}
              className="mx-auto"
            />

          
            <div className="flex text-2xl text-center primary my-4 justify-center">
  
                  <h2>360° Dijital Pazarlama</h2>
          
                 
            </div>
          </div>

        </div>

      </div>
      <div className='container flex flex-wrap mx-0 sm:mx-auto '>
        <span className='text-xl font-bold paragraphStyle'>
          Mikro Pazarlama İçerikleri
        </span>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className='w-full mx-auto'
        >
          <div className="relative px-4 py-6">
            <Carousel 
              opts={{ 
                align: "start",
                loop: true,
                containScroll: "trimSnaps"
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {/* 1.Card */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className='block p-6 theme border border-gray-200 dark:border-gray-400 rounded-lg shadow-sm relative h-full'>

                    <div className="absolute inline-flex items-center justify-center w-10 h-10 font-bold primary text-xl dark:text-white bg-white dark:bg-black shadow-md border-2 border-white rounded-full top-4 end-4 dark:border-gray-900">1</div>

                    <div className='block text-center text-[#373737] dark:text-slate-400'>
                      <div className='flex justify-center shadow-lg rounded-full w-[75px] mx-auto'>
                        <Image src="/images/yerelGorseller/googleAds.webp" alt='Google Ads Görseli' width={75} height={75} className='p-2' />
                      </div>
                      <h2 className='text-2xl font-semibold primary dark:text-slate-400 my-2'>Google Ads Reklam Yönetimi</h2>
                    </div>

                    <div className='w-full'>
                      <ul className=' w-full p-0 m-0'>
                        <li className='text-sm listStyle p-2 my-2  hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg '>
                          Metin Reklamı <MdCheckCircleOutline className='text-green-700 text-xl' />

                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Çağrı Uzantılı Reklam <MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Konum Uzantılı Reklam <MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                      </ul>

                      <div className='w-full px-2 mt-5 text-center paragraphStyle'>
                        Google ads arama ağı reklamlarıyla potansiyel müşterilerinize ulaşma hedeflenir.
                      </div>

                      <hr className="h-px my-8 bg-blue-600 border-0 dark:bg-gray-700"></hr>

                      <div className='flex justify-evenly'>
                        <Image src="/images/yerelGorseller/googleAnalystic.webp" alt='Google Analiytics Görseli' width={55} height={55}/>

                        <Image src="/images/yerelGorseller/googleTag.webp" alt='Google GT Görseli' width={55} height={55}/>
                      </div>
                      <div className='w-full flex justify-center text-xl'><MdArrowDownward /></div>
                      <p className='text-center text-sm paragraphStyle mt-2'>Oluşturduğumuz web sitelerine entegre ettiğimiz Google Uygulamaları Google Analytics - Google Tag Manager</p>

                    </div>

                  </div>
                </CarouselItem>

                {/* 2.Card */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className='block p-6 theme border border-gray-200 dark:border-gray-400 rounded-lg shadow-sm relative h-full'>

                    <div className="absolute inline-flex items-center justify-center w-10 h-10 font-bold primary text-xl dark:text-white bg-white dark:bg-black shadow-md border-2 border-white rounded-full top-4 end-4 dark:border-gray-900">2</div>

                    <div className='block text-center'>
                      <div className='flex justify-center shadow-lg rounded-full w-[75px] mx-auto'>
                        <Image src="/images/yerelGorseller/isletmeProfil.webp" alt='Google Ads Görseli' width={75} height={75} className='p-2' />
                      </div>
                      <h2 className='text-2xl font-semibold primary dark:text-slate-400 my-2'>Google İşletme Profili</h2>
                    </div>

                    <div className='w-full'>
                      <ul className=' w-full p-0 m-0'>
                        <li className='text-sm listStyle p-2 my-2  hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Organik Aramalar<MdCheckCircleOutline className='text-green-700 text-xl' />

                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Konum Bilgisi <MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Müşteri Yorumları<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                      </ul>

                      <div className='w-full px-2 mt-5 text-center paragraphStyle'>
                        İlgili aramalarda müşterilerinize görünürlüğünüzü artırmak ve işletmenizle iletişim kurmalarını sağlatmak hedeflenir.
                      </div>

                      <hr className="h-px my-8 bg-blue-600 border-0 dark:bg-gray-700"></hr>

                      <div className='flex justify-evenly'>
                        <Image src="/images/yerelGorseller/googleMap.webp" alt='Google Map Görseli' width={55} height={55} />

                      </div>

                    </div>

                  </div>
                </CarouselItem>

                {/* 3a.Card */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className='block p-6 theme border border-gray-200 dark:border-gray-400 rounded-lg shadow-sm relative h-full'>

                    <div className="absolute inline-flex items-center justify-center w-10 h-10 font-bold primary text-xl dark:text-white bg-white dark:bg-black shadow-md border-2 border-white rounded-full top-4 end-4 dark:border-gray-900">3a</div>

                    <div className='block text-center'>
                      <div className='flex justify-center shadow-lg rounded-full w-[75px] mx-auto'>
                        <Image src="/images/yerelGorseller/meta.webp" alt='Google Ads Görseli' width={75} height={75} className='p-2' />
                      </div>
                      <h2 className='text-2xl font-semibold primary dark:text-slate-400 my-2'>Meta Yönetimi</h2>
                    </div>

                    <div className='w-full'>
                      <ul className=' w-full p-0 m-0'>
                        <li className='text-sm listStyle p-2 my-2  hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Facebook ve İnstagram Hesapları<MdCheckCircleOutline className='text-green-700 text-xl' />

                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Meta Business Suit<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Sosyal Medya Kurumsal Yapı<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg line-through'>
                          Sosyal Medya İçerik Paylaşımı<MdClose className='text-red-700 text-2xl border border-red-700 rounded-sm' />
                        </li>
                      </ul>

                      <div className='w-full px-2 mt-5 text-center paragraphStyle'>
                        Meta kurulumları yapılarak potansiyel müşterilerinize kurumsal bir imaj verilmek istenmektedir.
                      </div>

                      <hr className="h-px my-8 bg-blue-600 border-0 dark:bg-gray-700"></hr>

                      <div className='flex justify-evenly'>
                        <Image src="/images/yerelGorseller/instagramApp.webp" alt='Google Map Görseli' width={55} height={55} />
                        <Image src="/images/yerelGorseller/facebookApp.webp" alt='Google Map Görseli' width={55} height={55} />
                      </div>

                    </div>

                  </div>
                </CarouselItem>

                {/* 3b.Card */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className='block p-6 theme border border-gray-200 dark:border-gray-400 rounded-lg shadow-sm relative h-full'>

                    <div className="absolute inline-flex items-center justify-center w-10 h-10 font-bold primary text-xl dark:text-white bg-white dark:bg-black shadow-md border-2 border-white rounded-full top-4 end-4 dark:border-gray-900">3b</div>

                    <div className='block text-center'>
                      <div className='flex justify-center shadow-lg rounded-full w-[75px] mx-auto'>
                        <Image src="/images/yerelGorseller/meta.webp" alt='Google Ads Görseli' width={75} height={75} className='p-2' />
                      </div>
                      <h2 className='text-2xl font-semibold primary dark:text-slate-400 my-2'>Meta Reklam Yönetimi</h2>
                    </div>

                    <div className='w-full'>
                      <ul className=' w-full p-0 m-0'>
                        <li className='text-sm listStyle p-2 my-2  hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Meta İşletme Hesabı Kurulumu<MdCheckCircleOutline className='text-green-700 text-xl' />

                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Meta Reklam Yönetimi<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Meta Pixel Kodu<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Haftalık Rapor ve Öneri<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                      </ul>

                      <div className='w-full px-2 mt-5 text-center paragraphStyle'>
                        Meta`da bu kurulumları yaparak özelleştirilmiş reklam stratejileri izleyebiliyoruz.
                      </div>

                      <hr className="h-px my-8 bg-blue-600 border-0 dark:bg-gray-700"></hr>

                      <div className='flex justify-evenly'>
                        <Image src="/images/yerelGorseller/instagramApp.webp" alt='Google Map Görseli' width={55} height={55} />
                        <Image src="/images/yerelGorseller/facebookApp.webp" alt='Google Map Görseli' width={55} height={55} />
                        <Image src="/images/yerelGorseller/messengerFbApp.webp" alt='Google Map Görseli' width={55} height={55} />
                        <Image src="/images/yerelGorseller/whatsappApp.webp" alt='Google Map Görseli' width={55} height={55} />
                      </div>

                    </div>

                  </div>
                </CarouselItem>

                {/* 4.Card */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className='block p-6 theme border border-gray-200 dark:border-gray-400 rounded-lg shadow-sm relative h-full'>

                    <div className="absolute inline-flex items-center justify-center w-10 h-10 font-bold primary text-xl dark:text-white bg-white dark:bg-black shadow-md border-2 border-white rounded-full top-4 end-4 dark:border-gray-900">4</div>

                    <div className='block text-center'>
                      <div className='flex justify-center shadow-lg rounded-full w-[75px] mx-auto'>
                        <Image src="/images/yerelGorseller/website.webp" alt='Google Ads Görseli' width={75} height={75} className='p-4' />
                      </div>
                      <h2 className='text-2xl font-semibold primary dark:text-slate-400 my-2'>Kurumsal Website Tasarım</h2>
                    </div>

                    <div className='w-full'>
                      <ul className=' w-full p-0 m-0'>
                        <li className='text-sm listStyle p-2 my-2  hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Temel Seviye Website Ücretsiz<MdCheckCircleOutline className='text-green-700 text-xl' />

                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Temel SEO + Search Console<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>

                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Meta ve Google Entagrasyonları<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                        <li className='text-sm listStyle p-2 my-2 bg-white hover:bg-gray-50 shadow-lg flex justify-between cursor-pointer rounded-lg'>
                          Domain Hosting İlk Yıl Ücretsiz<MdCheckCircleOutline className='text-green-700 text-xl' />
                        </li>
                      </ul>

                      <div className='w-full px-2 mt-5 text-center paragraphStyle'>
                        Dijital pazarlama yapısına uygun kurumsal website tasarlıyoruz ve yönetiyoruz.
                      </div>

                      <hr className="h-px my-8 bg-blue-600 border-0 dark:bg-gray-700"></hr>

                      <div className='flex justify-evenly'>
                        <Image src="/images/yerelGorseller/whatsappApp.webp" alt='Google Map Görseli' width={55} height={55} />
                        <Image src="/images/yerelGorseller/phoneConversion.webp" alt='Google Map Görseli' width={55} height={55} />
                        <Image src="/images/yerelGorseller/mailConversion.webp" alt='Google Map Görseli' width={55} height={55} />

                      </div>

                    </div>

                  </div>
                </CarouselItem>
              </CarouselContent>

              {/* Carousel Navigation Buttons */}
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CardService






import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const InfoCampaign = () => {
  return (
    <section className='relative'>


<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 relative">
                  <div className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                      <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Fırsat</span> <span className="text-sm font-medium">SetToBox Dijital Pazarlama Kampanyaları</span>
                      <MdKeyboardArrowDown className='text-xl ml-1'/>
                  </div>
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">2025 Dijital Pazarlama Kampanyaları</h1>
                  <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                  Özellikle markasını yeni oluşturmaya başlamış yeni girişimler veya küçük ve orta büyüklükteki işletmelerle işbirliği içerisindeyiz, 
                  dijital pazarlamaya etkli bir adım atabilmeniz için sizlerle faydalı kampanyalar paylaşmayı planlıyoruz.
                  </p>
                
                  <div>       
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">İnsragram Sponsorlu Reklam Kampanyası</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">Web Tasarım Kampanyaları</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Google Ads Reklam Kampanyası</span>


                  </div>

              </div>

    </section>
  )
}

export default InfoCampaign
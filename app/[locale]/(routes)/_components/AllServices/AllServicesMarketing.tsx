import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const AllServicesMarketing = () => {
  return (
    
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] ">

    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <div className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Özel</span> <span className="text-sm font-medium">360° Dijital Pazarlama Hizmetleri Küçük ve Orta Büyüklükteki Firmalar İçin Özelleştirilmiştir.</span>
            <MdKeyboardArrowDown className='text-xl ml-1'/>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Dijital Pazarlamada Bütünsel Hizmet Anlayışı</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Bütünsel yaklaşım : İşletmelerin Meta - Google ve Websitesi gibi online varlıklarının bütünüyle ele alınarak yönetilmesi işlemidir. Online varlıkların tek elden yönetilmesi bir çok konuda fayda sağlar.</p>
      

        <div>
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">Kurumsal Kimlik</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">Facebook</span>
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">İnstagram</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Google Ads</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300">Google Haritalar</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-purple-900 dark:text-purple-300">Web Tasarım</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300">SEO</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">Web Animasyon</span>


        </div>

    </div>


    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <Link href="/dijital-pazarlama-donusum-kutusu" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
               Makro | Dijital Pazarlama Dönüşüm Kutusu
            </Link>
            <h2 className="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2">Potansiyel Müşteriler ve Daha Büyük Kitlelere Ulaşmayı Hedefleyen Firmalar</h2>
            <p className="text-md font-normal text-gray-500 dark:text-gray-400 mb-6">
                  Makro dijital pazarlama, daha geniş bir hedef kitleye ulaşmak ve markanın genel bilinirliğini artırmak için yapılan daha büyük ölçekli çalışmaları ifade eder. 360° Dijital Pazarlama içerikleri olarak
                  Google - Meta ve Website yönetimi hizmetleri ile birlikte bütünsel bir yaklaşım ile uzun vadeli stratejik planlama yapılır. 
            </p>
            <Link href="/dijital-pazarlama-donusum-kutusu" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Daha Fazla İncele
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                    </svg>
                    Mikro | Yerel Dijital Pazarlama
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Yerel Hizmet Veren İşletmeler</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Yerelde tanınırlığınızı artırmak ve rakip firmaların önüne geçebilecek tekniklerle 360° Dijital Pazarlama içerikleri ile online varlıklarınızı temel seviyede yönetiyoruz.

                </p>
                <Link href="/yerel-dijital-pazarlama" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-xs inline-flex items-center">Daha Fazla İncele
                    {/* <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg> */}
                </Link>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    E-Ticaret
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">E-Ticaret Pazarlama Yönetimi</h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                    E-ticaret pazarlamasına girecek yeni işletmeler için planlanmaktadır. Google Ads Merchant Center ve Maksimum Performans reklamları üzeriine odaklanarak potansiyel müşterilere satış odaklı
                    bir yaklaşım ile her işletmenin ulaşabileği bir yönetim modeli ortaya koymayı planlıyoruz..
                </p>
                <Link href="#" className="text-orange-600 dark:text-orange-500 hover:underline font-medium text-xs inline-flex items-center animate-pulse">Planlanma Aşamasında
                    {/* <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg> */}
                </Link>
            </div>
        </div>

    </div>

</section>

  )
}

export default AllServicesMarketing
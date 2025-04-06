import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const page = () => {
  return (
      <>
          <section className='my-20 relative'>
              <div className='w-full mx-auto mb-4'>
                  <h1 className='text-center text-4xl'>SetToBox Hizmetler</h1>
              </div>

              <div className='container flex flex-wrap justify-center mx-auto'>

                  <div className='w-full pl-2 border-l-4 border-blue-400 m-10'>
                      <h2 className='text-start text-xl font-bold'>Tekil Hizmetler</h2>
                      <p>İşletmeler ihtiyaçalarına göre Meta - Google veya Website Tasarım hizmet kutularından birini seçebilir.</p>
                  </div>

                  <div className='flex w-full sm:w-3/7 md:w-4/12 mx-auto p-2'>
                      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mx-auto" >
                          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                              Meta Yönetimi
                          </h5>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Facebook - İnstagram Reklam Yönetimi Hizmet Kutuları</p>
                          <ul className="my-4 space-y-3">
                              <li>
                                  <Link href="/instagram-sponsorlu-reklam" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/mini-box.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">Meta MiniBox</span>
                                      <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Başlangıç</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/instagram-sponsorlu-reklam" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/mega-box.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">Meta MegaBox</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/instagram-sponsorlu-reklam" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/pro-box.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">Meta ProBox</span>
                                  </Link>
                              </li>


                          </ul>
                          <div>
                              <Link href="/instagram-sponsorlu-reklam" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                  <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                  </svg>
                                  Fiyatlandırma ve detaylı bilgilendirme</Link>
                          </div>
                      </div>
                  </div>

                  <div className='flex w-full sm:w-3/7 md:w-4/12 mx-auto p-2'>

                      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                              Google Yönetimi
                          </h5>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Google Ads reklam yönetimi hizmet kutuları</p>
                          <ul className="my-4 space-y-3">
                              <li>
                                  <Link href="/google-ads-reklam-yonetimi" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/GoogleMini.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">Google MiniBox</span>
                                      <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Başlangıç</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/google-ads-reklam-yonetimi" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/GoogleMega.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">Google MegaBox</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/google-ads-reklam-yonetimi" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/GooglePro.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">Google ProBox</span>
                                  </Link>
                              </li>


                          </ul>
                          <div>
                              <Link href="/google-ads-reklam-yonetimi" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                  <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                  </svg>
                                  Fiyatlandırma ve detaylı bilgilendirme</Link>
                          </div>
                      </div>
                  </div>

                  <div className='flex w-full sm:w-3/7 md:w-4/12 mx-auto p-2'>

                      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                          <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                              Website Yönetimi
                          </h5>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Web tasarım hizmet kutuları</p>
                          <ul className="my-4 space-y-3">
                              <li>
                                  <Link href="/web-sitesi-yaptirma" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/miniWeb.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">MiniBox Web</span>
                                      <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">Başlangıç</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/web-sitesi-yaptirma" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                      <Image src="/images/proWeb.webp" alt="MetaMiniBox" width={75} height={75}></Image>
                                      <span className="flex-1 ms-3 whitespace-nowrap">MegaBox Web</span>
                                  </Link>
                              </li>


                          </ul>
                          <div>
                              <Link href="/web-sitesi-yaptirma" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                  <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                  </svg>
                                  Fiyatlandırma ve detaylı bilgilendirme</Link>
                          </div>
                      </div>
                  </div>

              </div>


          </section>

          <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] relative">

              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                  <div className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                      <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Özel</span> <span className="text-sm font-medium">Küçük ve Orta Büyüklükteki Firmalar İçin Özelleştirilmiştir.</span>
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
                          Dijital Pazarlama Dönüşüm Kutusu
                      </Link>
                      <h1 className="text-gray-900 dark:text-white text-3xl md:text-3xl font-extrabold mb-2">Dijital Pazarlama da Hedeflerinize Ulaşmanın Planlı ve Ekonomik Yolu</h1>
                      <p className="text-md font-normal text-gray-500 dark:text-gray-400 mb-6">
                          Üç farklı platformun ihtiyacımız olan özelliklerini kullanarak yüksek dönüşüm elde edilmesi planlanmaktadır. Özellikle orta büyüklükteki firmaların tercih edebileceği
                          çok yönlü planlı bir hizmettir.
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
                              Yerel/Mikro Dijital Pazarlama
                          </a>
                          <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Yerel Hizmet Veren İşletmelere Özel </h2>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Yerelde tanınırlığınızı artırmak ve rakip firmaların önüne geçebilecek tekniklerle online varlıklarınızı yönetiyoruz.

                          </p>
                          <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-xs inline-flex items-center">Yakında Hizmdete Sunulacak
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
                              E-ticaret pazarlamasına girecek yeni işletmeler için planlanmaktadır.
                          </p>
                          <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-xs inline-flex items-center">Planlanma Aşamasında
                              {/* <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> */}
                          </Link>
                      </div>
                  </div>

              </div>

          </section>

      </>

 
  )
}

export default page

export async function generateStaticParams() {
    return [
      { locale: 'tr' },
    ]
  }



      {/* <div className='container flex flex-wrap justify-center mx-auto my-20 p-2'>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Hizmet Adı
                </th>
                <th scope="col" className="px-6 py-3">
                    Detaylandırma
                </th>
            
                <th scope="col" className="px-6 py-3">
                    Link
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Dijital Dönüşüm Kutusu
                </th>
                <td className="px-6 py-4">
                Tümüyle Online Varlık Yönetim Hizmeti
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
        
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Yerel/Mikro Dijital Pazarlama  
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Kurumsal Kimlik Tasarım
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Qr Code Hizmeti
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div> */}
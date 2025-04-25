import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleServices = () => {
  return (
    
    <section className='my-20 relative'>
    <div className='w-full mx-auto p-5 mb-4 my-10'>
        <h1 className='text-center text-3xl'>SetToBox Hizmetler</h1>
        <p className='styled-paragraph'>İşletmenizin gelecekteki marka konumlandırma stratejileri belirlemek için aşağıdaki tekil veya 360° dijital pazarlama hizmetlerden birini seçebilirsiniz.</p>
    </div>

    <div className='container flex flex-wrap justify-center mx-auto'>

        <div className='w-full pl-2 border-l-4 border-blue-400 m-10 shadow-lg p-3'>
            <h2 className='text-xl font-bold'>Tekil Hizmetler</h2>
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

  )
}

export default SingleServices
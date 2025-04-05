
import React from 'react'
import Image from 'next/image'

const ArmutCampaign = () => {
  return (

<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] p-2">


<div className='container dark:bg-transparent flex flex-wrap justify-center mx-auto dark:shadow-blue-800/80 m-5 rounded-md my-20'>



<div className='flex w-full sm:w-3/7 lg:w-5/12 mx-auto p-2'>

  <div className='flex'>
    <Image className='mx-auto object-contain w-[200] h-[200] sm:w-[300px] sm:h-[300px]' src="/images/armut.webp" alt="Armut Görsel" width={200} height={200}></Image>
        <span className='flex m-auto text-xl font-extrabold'>+</span>
    <Image className='mx-auto object-contain w-[200] h-[200] sm:w-[300px] sm:h-[300px]' src="/GoogleMiniBox.webp" alt="Armut Görsel" width={400} height={400}></Image>
  </div>
   
</div>

<div className='flex w-full sm:w-3/7 lg:w-6/12 m-auto p-2'>

    <div>
    <h2 className='font-bold text-3xl py-3 primary'>Armut Uygulamasına Özel İndirim</h2>
    <p>
        Bu kampanya Armut Uygulaması üzerinde iş ilanı vermiş markalar için geçerlidir. İlk 2 ay Google Ads hizmet kutusu(miniBox) 4500₺ yerine 2500₺ uyguluyoruz, diğer hizmetlerde ise (megaBox ve ProBox) %10 indirim uygulanmaktadır..
    </p>
    <div className='w-full mt-5 '>
   
    <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white ">Bilgilendirme: <span className='text-red-500 dark:text-red-200'>Pasif</span></p>
    <div className='w-full sm:w-2/3 border-b-2 border-indigo-200 my-2'></div>
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>
            Sadece Armut Uygulamasınde teklif açmış markalar için geçerlidir.
        </li>
  
    </ul>

    </div>
    </div>
    
</div>

</div>
          </section>

  
   
  )
}

export default ArmutCampaign

import React from 'react'
import Image from 'next/image'

const ArmutCampaign = () => {
  return (

<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] p-2">


<div className='container  dark:bg-transparent  flex flex-wrap justify-center mx-auto  dark:shadow-blue-800/80 m-5 rounded-md'>



<div className='flex w-full sm:w-3/7 md:w-5/12 mx-auto p-2'>

    <Image className='mx-auto' src="/images/armut.webp" alt="Armut Görsel" width={400} height={400}></Image>
   
</div>

<div className='flex w-full sm:w-3/7 md:w-6/12 m-auto p-2'>

    <div>
    <h2 className='font-bold text-3xl py-3 primary'>Armut Uygulamasına Özel İndirim</h2>
    <p>
        Bu kampanya Armut Uygulaması üzerinde iş ilanı vermiş markalar için geçerlidir. İlk 4 ay başlangıç paketlerinde(miniBox) <span className='font-bold'>Hoşgeldin Kampanyası</span>  uygulanmaktadır, diğer hizmetlerde ise (megaBox ve ProBox) %10 indirim uygulanmaktadır..
    </p>
    <div className='w-full mt-5 '>
   
    <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white ">Bilgilendirme: <span className='text-green-500 dark:text-green-200'>Aktif</span></p>
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
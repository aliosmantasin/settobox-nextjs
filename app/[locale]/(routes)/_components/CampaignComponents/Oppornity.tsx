import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { MdWhatsapp } from 'react-icons/md'

const Opportunity = () => {
  return (

<section className=" dark:bg-gray-900 p-2 ">


<div className='container dark:bg-black ocean-shadow  flex flex-wrap justify-center mx-auto m-5 rounded-md py-10'>



<div className='flex w-full sm:w-3/7 lg:w-5/12 mx-auto p-2'>

    <Image className='mx-auto' src="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/Slider/GoogleMiniBox-tHoIJeqSAtA0VrlhQjIAW70uFlWymi.webp" alt="Armut Görsel" width={500} height={500}></Image>
   
</div>

<div className='flex w-full sm:w-3/7 lg:w-6/12 m-auto p-2'>

    <div>
    <h2 className='font-bold text-3xl py-3 primary'>Google Ads Fırsat Kampanyası</h2>
    <p>
        Potansiyel müşterilerine ulaşmak isteyen firmalar için Google Ads Fırsat Kampanyası. Bu kampanyaya ek olarak <strong>Kurumsal Web Tasarım hizmetine</strong> ücretsiz sahip olabilir ve daha profesyonel adımlar atabilirsin
    </p>
    <div className='w-full mt-5 '>
   
    <span className="mb-2 text-lg font-semibold text-gray-900 dark:text-white ">Bilgilendirme: <span className='text-green-500 dark:text-red-200'>Aktif</span></span>
    <div className='w-full sm:w-2/3 border-b-2 border-indigo-200 my-2'></div>
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>
            Bu kampanya <span className='primary-light'>Google MiniBox hizmeti</span> için geçerlidir.
        </li>

        <li>
          31 Aralık 2025 tarihine kadar 10 İşletme için geçerlidir.
        </li>

        <li>
          Google Ads Reklam Hesap Yönetimi  <span className='text-red-500 line-through'>4.500₺</span> yerine <span className='text-green-500'>3.500₺</span>
        </li>

        <li>
          Bu kampanyada 10.000₺ değerinde Kurumsal Web Site Hediyemizdir. İlk yıl domain ve hosting hizmetinizi 
          biz karşılıyoruz.
        </li>
  
    </ul>
    <div className='w-full mt-5 block justify-center sm:flex sm:justify-start '>
        
    <Link href="/bilgi-alma-formu">
    <Button className='flex w-3/5 sm:w-auto mx-auto sm:mx-2 my-2 sm:my-0' variant="secondary">
      <Mail /> Online Başvuru Yap
    </Button>
    </Link>
    
    <Link 
            href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-700 flex mx-auto">
              <MdWhatsapp className="w-full" /> Whatsapp İletişim
            </Button>

     </Link>
    
    </div>
    
    </div>
    </div>
    
</div>

</div>
          </section>

  
   
  )
}

export default Opportunity
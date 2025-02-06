"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BrandId = () => {
  return (
    <section className=' mx-auto bg-cover  bg-center bg-no-repeat bg-[url(/images/BrandId.webp)]'>
             <div>
            <h2 className='text-3xl text-center p-10'>Marka Kimliği</h2>
        </div>
        <div className="container mx-auto">
   
        <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       navigation
      //  onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log('slide change')}

       breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1,
        
        },
      }}
    >
      <SwiperSlide>
    <div className='max-w-[350px] mx-auto py-5'>
                <div className='shadow-lg rounded-lg  border border-gray-100 text-black min-h-[430px] theme'>
                
                    <h3 className='p-4 text-white bg-[#373737] rounded-t-lg text-center'>1. Marka Stratejisi ve Temel Unsurlar</h3>
                    <ul className='pb-5'>
                        <li className='list-disc ml-5 my-5 '>
                            <h4 className='font-bold'>Hedef Kitle Analizi</h4>
                            <p>Ürün ya da hizmetin hitap edeceği müşteri profili belirlenmelidir.
                                 Hedef kitlenin beklentileri ve alışkanlıkları analiz edilmelidir.</p>
                        </li>
                        <li className='list-disc ml-5 my-5'>
                            <h4>Marka Değerleri</h4>
                            <p>İşletmenin temel değerleri, vizyonu ve misyonu net bir şekilde tanımlanmalıdır.</p>
                        </li>
                        <li className='list-disc ml-5 my-5'>
                            <h4>Marka Konumlandırması</h4>
                            <p>Rakipler arasında işletmenizi farklılaştıran özellikler belirlenmeli ve bir değer önerisi oluşturulmalıdır.</p>
                        </li>
                    </ul>
           
                </div>
    </div>
      </SwiperSlide>

      <SwiperSlide>
    <div className='max-w-[350px] mx-auto py-5'>
                <div className='shadow-lg rounded-lg  border border-gray-100 text-black min-h-[430px] theme'>
                
                    <h3 className='p-4 text-white bg-[#373737] rounded-t-lg text-center'>2. Görsel Kimlik</h3>
                    <ul className='pb-5'>
                        <li className='list-disc ml-5 my-5 '>
                            <h4>Logo Tasarımı</h4>
                            <p>Markayı temsil edecek özgün, akılda kalıcı ve sade bir logo tasarımı.Markayı temsil edecek özgün, akılda kalıcı ve sade bir logo tasarımı.</p>
                        </li>
                        <li className='list-disc ml-5 my-5 '>
                            <h4>Renk Paleti</h4>
                            <p>Marka ile özdeşleşen renklerin belirlenmesi. </p>
                        </li>
                        <li className='list-disc ml-5 my-5'>
                            <h4>Tipografi</h4>
                            <p>Markanın yazı fontunun seçimi.</p>
                        </li>
                        <li className='list-disc ml-5 my-5'>
                            <h4>Kurumsal Slogan</h4>
                            <p>Markanın özünü ve mesajını taşıyan kısa, etkileyici bir ifade.</p>
                        </li>
                    </ul>
           
                </div>
    </div>
      </SwiperSlide>


      <SwiperSlide>
    <div className='max-w-[350px] mx-auto py-5'>
                <div className='shadow-lg rounded-lg  border border-gray-100 text-black min-h-[430px] theme'>
                
                    <h3 className='p-4 text-white bg-[#373737] rounded-t-lg text-center'>3-Basılı ve Dijital Materyaller</h3>
                    <ul className='pb-5'>
                        <li className='list-disc ml-5 my-5 '>
                            <h4>Kartvizit, Antetli Kağıt ve Zarf Tasarımı</h4>
                            <p>İş dünyasında markayı temsil eden unsurlar.</p>
                        </li>
                        <li className='list-disc ml-5 my-5 '>
                            <h4>Broşür, Katalog ve Tanıtım Dosyaları</h4>
                            <p>Ürün veya hizmetlerin tanıtımı için tasarlanan materyaller.</p>
                        </li>
                        <li className='list-disc ml-5 my-5'>
                            <h4>E-posta İmzaları</h4>
                            <p>Markanın yazı fontunun seçimi.</p>
                        </li>
                        <li className='list-disc ml-5 my-5'>
                            <h4>Sosyal Medya Şablonları</h4>
                            <p>Instagram, Facebook platformlarında tutarlı bir görünüm sağlamak için.</p>
                        </li>
                    </ul>
           
                </div>
    </div>
      </SwiperSlide>


      <SwiperSlide>
    <div className='max-w-[350px]  mx-auto py-5  '>
                <div className='shadow-lg rounded-lg  border border-gray-100 text-black min-h-[430px] theme'>
                
                    <h3 className='p-4 text-white bg-[#373737] rounded-t-lg text-center'>4-Web Sitesi ve Dijital Varlıklar</h3>
                    <ul className='pb-5'>
                        <li className='list-disc ml-5 my-5 '>
                            <h4>Web Sitesi ve Dijital Varlıklar</h4>
                            <p>Kullanıcı dostu, mobil uyumlu, SEO optimizasyonu yapılmış bir web sitesi.</p>
                        </li>
                        <li className='list-disc ml-5 my-5 '>
                            <h4>Dijital Kimlik</h4>
                            <p>Sosyal medya profilleri, Google My Business hesabı gibi dijital varlıkların markaya uygun şekilde tasarlanması.</p>
                        </li>
                    </ul>
           
                </div>
    </div>
      </SwiperSlide>




   
  
  
    </Swiper>

         


           

            


            

        </div>
    </section>
  )
}

export default BrandId
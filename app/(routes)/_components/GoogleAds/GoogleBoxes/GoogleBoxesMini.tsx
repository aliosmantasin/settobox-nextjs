
import miniBox from "../../../../../public/mini-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


import GoogleBusinessMini from "./Modal/GoogleBusinessMini";
import StartContactGoogle from "./Modal/StartContactGoogle";
import HareketPlaniGoogle from "./Modal/HareketPlani";


const GoogleBoxesMini = () => {
  return (
    <>

        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">MiniBox Google Reklam Yönetimi</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                              
                                  <h3 className="text-lg font-medium">Potansiyel Müşteri Odaklı</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              Bir aylık google ads Arama Ağı reklam yönetimidir. MiniBox içeriğinde google ads hesap kurulum desteği vardır.
                               
                              </div>

                              <div className="flex justify-center md:justify-start items-center">

                                <GoogleBusinessMini/>

                              </div>
                             
                          </div>


                      <div className="flex mt-2 p-5  justify-evenly">

                       
                              <div className="p-3 border border-red-500 rounded-[5px]">
                                  <h6 className="line-through text-red-500 flex justify-center">
                                      6.000₺
                                  </h6>
                              </div>
               

                              <div className="p-3 border border-green-500 rounded-[5px]">
                                  <h6 className="text-green-500 flex justify-center">
                                      5.400₺
                                  </h6>
                              </div>
                              
                      </div>

                          </div>

                            <div className="p-0 sm:p-2 w-full sm:w-6/12">
                                
                            <StartContactGoogle/>
                            
                      <div id="alert-1" className="flex items-center p-4 my-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                %10 İndirim Avantajı
                          </div>
                      </div>

                      <div id="alert-1" className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div>

                            </div>
                      
                      </div>

                      
                   <div className="p:0 sm:px-14">  

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">Detaylı Bilgilendirme</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Hareket Planı</li>
                          <li><p>Yedi gün hareket planı vardır. Yedi gün ardından reklam kreatifleri hazır olur. Planlanan zaman diliminde reklam aktif olur. 
                        <HareketPlaniGoogle/></p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Süresi</li>
                          <li> Google MiniBox içeriğinde aylık yönetim uygulanmaktadır.(1 AY)</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Türleri</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                                 Metin Reklamı (Text Ads)
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                                Çağrı Reklamı (Call Ads)
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                                 Konum Uzantılı Arama Ağı Reklamı
                                            </p>

                                        </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kampanya Kurulumu</li>
                          <li>Arama ağı reklam bütünlüğünden faydalanarak, bir kampanya içerisinde reklam türlerinin hepsinden faydalanabiliyoruz.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Anahtar Kelime Araştırması, Eşleme Türü</li>
                          <li>Reklam gösteriminin, ilgili arama yapan doğru kişiler tarafından tıklanabilmesi için anahtar kelime optimizasyonu ve ihtiyacımız olan (geniş - sıralı veya tam) eşleme türlerini kullanmaktayız.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Negatif Kelime Optimizasyonu</li>
                          <li>Potansiyel müşterilerinize aradıkları kelimeler doğrultusunda doğru ürün/hizmet gösterebilmek hem bütçe hem de reklam performansı için önemlidir. Dolayısıyla google negatif kelime optimizasyonu size sunduğumuz her hizmet kutularında mevcuttur.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Metni Oluşturma</li>
                          <li>
                          Arama motorlarında potansiyel müşterilerinizin ilgisini çekecek reklam metinleri oluşturarak, sunduğunuz ürün ve hizmetlerin öne çıkmasını sağlıyoruz. Başlıklar, açıklamalar ve diğer önemli unsurlar üzerinde titizlikle çalışarak, reklamlarınızın hedef kitlenize en iyi şekilde ulaşmasını ve iyi sonuçlar almanızı sağlıyoruz.
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Site Bağlantıları ve Ek Snipetler</li>
                          <li>Site bağlantıları ve ek snippet`lerle, reklamlarınızın görünürlüğünü artırarak kullanıcıların doğrudan ilgilendikleri sayfalara yönelmelerini sağlıyoruz. Bu yapılar, reklam performansınızı optimize eder ve dönüşüm oranlarınızı yükseltir.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Raporu ve Optimizasyon</li>
                          <li>Aylık reklam raporu: Tıklama - Maliyet olarak size iletilmektedir.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Metni Oluşturma</li>
                          <li>İşletmenizle alakalı hedef kitlenizi harekete geçirici metin çalışmaları oluşturma.(Satış odaklı metin yazarlığı) Ve bunu kreatifte uygulama</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Raporu ve Optimizasyon</li>
                          <li>Aylık reklam raporu: Tıklama - Maliyet olarak size iletilmektedir.</li>
                        </ul>

                        <ul>
                          <li><span><Image src={miniBox} width={35} alt="Google AdsReklamı: Mini Kutu" /></span>Google MiniBox İçeriği</li>
                          <li>Reklamlar, kullanıcıların belirli anahtar kelimeleri aradığında sonuç sayfasının üstünde veya altında görünür. Temel olarak düşük bütçe ile doğrudan müşteriye odaklanan google arama ağı reklam türüne odaklanıyoruz.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Uygun  Görülen Bütçe </li>
                          <li>Arama Ağı reklamları aylık minumum 5.000TL bütçe uygun görülmektedir. Bütçe anahtar kelime fiyatına, rekabete ve talebe göre değişkenlik gösterir..</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Google Ads Setup</li>
                          <li>Bir Google Ads hesabınız yok ise ücretsiz kurulum sağlıyoruz. Reklam yapılandırması google ads hesabı üzerinden yapılmaktadır. Bir web siteniz var ise web sitenize yönlendiren arama ağı reklamı da oluşturabiliriz.
                          </li>
                        

                        </ul>

                      </div>
                      
                      </AccordionContent>
                      </AccordionItem>
                      </Accordion>
                      </div> 


        </div>


    </>
  )
}

export default GoogleBoxesMini
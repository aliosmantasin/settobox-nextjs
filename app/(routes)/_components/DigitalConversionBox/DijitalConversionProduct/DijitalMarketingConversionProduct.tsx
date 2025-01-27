
import MetaProBox from "@/public/images/pro-box.webp";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ConversionBusiness from "../Modal/ConversionBusiness";
import StartContactConversion from "../Modal/StartContactConversion";
import AdvantageConversion from "../Modal/AdvantageConversion";
import HareketPlaniDonusumKutusu from "../Modal/HareketPlani";
import { MdAddBusiness, MdAdsClick, MdAppShortcut, MdAssessment, MdBalance, MdContentPasteSearch, MdControlPoint, MdCurrencyLira, MdDiversity1, MdDiversity2, MdFilter1, MdFilter2, MdGroupAdd, MdOutlineAdsClick, MdOutlineDirectionsRun, MdOutlineKeyboardDoubleArrowDown, MdOutlineStore, MdOutlineTag, MdPhonelinkSetup, MdWeb } from "react-icons/md";
import "./DijitalMarketingConversionProduct.css"


const DijitalMarketingConversionProduct = () => {
  return (
    <>

        <div className="boxTable">
                
                      <div className="headerTable">Dijital Dönüşüm Kutusu: Google, Meta ve Web Sitesi Entegrasyonu</div>
                   
                      <div className="container mx-auto">
                        <div className="flex flex-wrap">
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                 
                                  <h3 className="text-lg font-medium">Google, Meta ve Web Sitesi Bütünsel Yönetimi</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              Bu hizmette dijital pazarlamanın bir çok yönünü değerlendirerek dönüşüm odaklı bir hedef belirlenmektedir. Üç farklı platformun ihtiyacımız olan özelliklerini kullanarak bütünsel bir yaklaşımla orta ve uzun vadede istediğimiz noktaya ulaşabilmek hedeflenmektedir.
                               
                              </div>

                              <div className="flex justify-center md:justify-start items-center">

                              <ConversionBusiness/>

                              </div>
                             
                          </div>


                      <div className="flex mt-2 p-5  justify-evenly ">

                       
                              <div className="p-3 border border-red-500 rounded-[5px]">
                                  <h6 className="line-through text-red-500 flex justify-center">
                                      32.000₺
                                  </h6>
                              </div>
               

                              <div className="p-3 border border-green-500 rounded-[5px]">
                                  <h6 className="text-green-500 flex justify-center">
                                      20.000₺
                                  </h6>
                              </div>
                              
                      </div>

                          </div>

                            <div className="p-0 sm:p-2 w-full sm:w-6/12">
                                
                            <StartContactConversion/>
                            
              

                      <div id="alert-1" className="flex items-center p-3 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 my-2" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div>

                      <div id="alert-" className="flex items-center p-3 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400 border border-green-400 my-1" role="alert">
                          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                            <span className="sr-only">Info</span>
                          <div className="ms-2 text-sm font-medium">
                          Açılışa Özel Özel İndirim Fırsatı | Sınırlı
                          </div>
                      </div>


                      <AdvantageConversion/>


                            </div>
                      
                            </div>
                            </div>
                      
                   <div className="p:0 sm:px-14">  

                    <Accordion type="single" collapsible className="w-full mx:2 sm:mx-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">Detaylı Bilgilendirme</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2">
                        <ul>
                          <li><span><MdBalance className="text-4xl"/></span>Dengeli ve Aşamalı İlerleme</li>
                          <li><p>Dijital Dönüşüm Kutusunda 3 farklı derinlikte hizmet mevcut. Bu hizmetleri dengeli bir şekilde yöneterek aşamalı ilerleme planlanmaktadır.

                       
                        </p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><MdOutlineDirectionsRun className="text-4xl"/></span>Hareket Planı</li>
                          <li>Yedi gün hareket planı vardır. Yedi gün ardından uygulanacak birinci adım işleyişi başlar. <HareketPlaniDonusumKutusu/></li>
                        </ul>

                        <div className="headerTable gap-2">Birinci Adım <MdOutlineKeyboardDoubleArrowDown/></div>
                      
                        <ul>
                          <li><span><MdFilter1 className="text-4xl"/></span>Birinci Adım | Online Varlıkların
                          Kurulumu ve Yönetimi</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                              Meta Hesap Kurulumları + Kurumsal Tasarım
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                              İnstagram | Facebook Hesapları Yönetimi
                                              </p>

                                          </div>

                                        <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                             İnstagram | Facebook Hesapları Reklam Yönetimi
                                            </p>

                                        </div>

                                        <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                            Web Site Tasarımı
                                            </p>

                                        </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><MdOutlineTag className="text-4xl"/></span>Sosyal Medya Yönetimi</li>
                          <li>Sosyal medya yönetimi haftalık işlenen bir konudur. Hafalık toplam 2-3 adet görsel paylaşım ve video(reels) paylaşımı ile desteklenmektedir. Bizim tarafımızca özelleştirilmiş `merhaba` hikayeleri haftanın 4 gönü paylaşılmaktadır. Sosyal medya içerik planlaması tamamen kurumsal bir yapıya hizmet etmektedir. Sosyal medya, reklamlar ve website içerik yapılanması bir bütünsel çalışmadan ibarettir.</li>
                        </ul>

                        <ul>
                                      <li><span><MdOutlineStore className="text-4xl"/></span>İnstagram | Facebook Kurumsal Tasarım</li>
                                      <li>  &#x25C6;Facebook & İnstagram profesyonel hesaplarının açılması
                                      &#x25C6;Meta hesapların biyografi bilgilerinin oluşturulması
                                      &#x25C6;profil ve kapak görsellerinin oluşturulması
                                      &#x25C6;CTA butonunun oluşturulması
                                      &#x25C6;görsel şablonu oluşturuyoruz
                                      &#x25C6;kalıcı hikayelerin ikonik yapılarını hazırlıyoruz
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                      <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  3750₺
                                              </p>
                                              <p className="text-primary font-normal">
                                                  değerinde mevcut hizmet
                                              </p>
                                          </div>
                                      </li>

                          </ul>


                        <ul>
                          <li><span><MdContentPasteSearch className="text-4xl"/></span>Sosyal Medya Yapısal İçerik Planlaması</li>
                          <li>Bir internet kullanıcısının hesabımıza girdiğinde aradığı iletişim bilgilerine ulaşabilmesi sosyal medya düzeni, içerik planlaması ve işletmenin verdiği hizmetleri görebilmesini sağlamaktayız. Genel olarak detaylı bilgi edinmelerini sağlıyoruz. Tüm özellikleri beraber kullanarak aktif bir sosyal medya ile potansiyel müşterimizin güvenini kazanmak hedeflenir</li>
                        </ul>


                        <ul>
                          <li><span><MdAppShortcut className="text-4xl"/></span>Sosyal Medya Özel Günler Paylaşımı</li>
                          <li>
                          Birçok özel günün paylaşımı görsel olarak yapılmaktadır.
                          </li>
                        </ul>
                        <ul>
                          <li><span><MdGroupAdd className="text-4xl"/></span>Sosyal Medya Kitle Artırmak Hakkında</li>
                          <li>Özellikle instagram işletme hesabınızda ki takipci kitlesi işletmenizle alakalı bir kitle olmalı. Bu kitle algoritmanızı beslemektedir. Algoritmanız mevcudiyedinizde kitlenin özelliklerine göre genişlemektedir.
                          Tarafımızca oluşturulmuş reklam kreatifleri ile doğru kitleye ulaşıyoruz. Bu kitleleride mevcut sayfamızı takip etmelerini sağlatıyoruz.</li>
                        </ul>
                        <ul>
                                      <li><span><svg xmlns="http://www.w3.org/2000/svg" width={35} fill="#2a59a9" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 85.18 56.58"><g id="Layer_1-2" data-name="Layer_1"><path  d="M77.79,10.4C73.24,3.62,67.29,0,61.05,0c-3.72,0-7.41,1.66-10.84,4.64-2.32,2.02-4.46,4.57-6.46,7.27-2.46-3.11-4.74-5.49-6.95-7.29C32.61,1.2,28.59,0,24.54,0h0c-1.75,0-3.44.28-5.05.81-1.21.4-2.39.93-3.52,1.58-3.38,1.96-6.35,5-8.72,8.66C2.5,18.38,0,27.88,0,36.98c0,5.01.99,9.41,3,12.76,2.47,4.11,6.45,6.84,12.75,6.84,5.31,0,9.35-2.39,14.07-8.68,2.7-3.59,4.06-5.77,9.45-15.33l2.68-4.75c.22-.39.44-.78.66-1.17.22.35.43.71.65,1.08l7.64,12.76c2.57,4.3,5.91,9.07,8.76,11.76,3.71,3.5,7.07,4.33,10.87,4.33h0c6.1,0,9.73-3.22,11.59-6.44,1.93-3.33,3.06-7.55,3.06-13.29,0-9.66-2.42-19.01-7.4-26.44ZM34.65,25.55c-2.69,4.13-6.68,10.71-10.07,15.4-4.23,5.85-6.43,6.45-8.82,6.45-1.86,0-3.68-.84-4.91-2.82h0c-.93-1.51-1.65-4.01-1.65-7.26,0-7.89,2.23-16.1,5.89-21.61h0c1.13-1.71,2.36-3.16,3.68-4.24.38-.31.77-.59,1.16-.84s.8-.47,1.21-.65c.21-.09.41-.18.62-.25.84-.3,1.72-.46,2.62-.46,4.49,0,7.3,2.81,9.49,5.13,1.09,1.16,2.61,3.08,4.38,5.6l-3.62,5.56ZM64.63,43.83c-1.76-2.14-4.77-6.67-10.05-15.47l-2.19-3.65c-1.56-2.6-3.04-4.94-4.46-7.04.25-.39.5-.78.76-1.15,3.98-5.91,7.52-9.23,11.92-9.23,4.07,0,7.76,2.69,10.62,7.09,4.02,6.21,5.84,14.89,5.84,22.72h0c0,.58-.02,1.16-.05,1.72-.02.28-.04.56-.06.83-.04.47-.1.93-.17,1.38-.61,3.67-2.32,6.37-6.24,6.37h0c-2.06,0-3.64-.82-5.91-3.56Z"/></g></svg></span>Meta Kurulumları</li>
                                      <li>&#x25C6;Meta Business Suit kurulumu
                                      &#x25C6;Meta Business Manager kurulumu
                                      &#x25C6;Meta Pixel Kodu kurulumu
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                      <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  2500₺
                                              </p>
                                              <p className="text-primary font-normal">
                                              değerinde mevcut hizmet
                                              </p>
                                          </div>
                                      </li>

                          </ul>

                      

                          <ul>
                          <li><span><MdOutlineAdsClick className="text-4xl"/></span>Meta Reklam Türleri</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                              İnstagram Profiline Git
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                              Yeniden Hedefleme (Retargeting)
                                              </p>

                                          </div>

                                        <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                            Trafik Reklamı
                                            </p>

                                        </div>

                                        <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                            Dönüşüm Kampanyası (Opsiyonel)
                                            </p>

                                        </div>

                                          </div>
                                      
                        </ul>
                          
                        <ul>
                          <li><span><svg xmlns="http://www.w3.org/2000/svg" width={35} viewBox="0 0 640 512"><path d="M144 0c-13.3 0-24 10.7-24 24V142.1L97 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V24c0-13.3-10.7-24-24-24zM360 200a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM184 296a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm312 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM200 441.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 345.5V400c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V345.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 441.5V480c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V441.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 468.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 441.5V480c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V441.5zM415 153l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V142.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" /></svg></span>Meta Kitle Araştırması</li>
                          <li>
                          Kreatif odaklı yapay zeka destekli hedef kitleye ulaşıyor ve geliştiriyoruz..</li>
                        </ul>

                        <ul>
                          <li><span><MdDiversity1 className="text-4xl"/></span>Meta Özel Hedef Kitle</li>
                          <li> Meta reklam yönetiminde özel hedef kitle reklam stratejisine göre tercih edilebilir.</li>
                        </ul>

                        <ul>
                          <li><span><MdDiversity2 className="text-4xl"/></span>Meta Benzer Hedef Kitle</li>
                          <li>Meta reklam yönetiminde benzer hedef kitle kullanılmaktadır.</li>
                        </ul>
                    
                        <ul>
                          <li><span><svg xmlns="http://www.w3.org/2000/svg" width={35} viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></span>Reklam Süresi ve Optimizasyonu</li>
                          <li>Strateji odaklı reklam planlaması yapılmaktadır.Her reklam aylık bazda planlanır, haftalık değerlendirilir ve optimize edilir.</li>
                        </ul>

                        <ul>
                          <li><span><Image src={MetaProBox} width={35} alt="Google AdsReklamı: Mini Kutu" /></span>Meta Reklam İçeriği</li>
                          <li>Reklam içerik çalışması, çalışılan şirketin kurumsal kimliği baz alınarak ve trend kreatifler göz önünde bulundurularak yapılmaktadır. Aynı zamanda sektörel tecrübeler de dahil edilerek uygun görsel kreatifler farklı formatlarda ortaya çıkarılmaktadır. Ayrıca reklam içeriğinde kanca metin ve kanca görsel uygulanmaktadır.</li>
                        </ul>

                        <ul>
                          <li><span><svg xmlns="http://www.w3.org/2000/svg" width={35} viewBox="0 0 576 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg></span>Meta Reklam Metni Oluşturma</li>
                          <li>İşletmenizle alakalı hedef kitlenizi harekete geçirici metin çalışmaları oluşturulmaktadır..</li>
                        </ul>

                        <ul>
                          <li><span><MdAssessment className="text-4xl"/></span>Reklam Raporu ve Öneri</li>
                          <li>
                          Haftalık reklam raporu: Gösterim - Erişim - Tıklama - Maliyet olarak size iletilmektedir. Reklam hedefi ve önerileri paylaşılmaktadır.</li>
                        </ul>

                        <ul>
                                      <li><span><MdPhonelinkSetup className="text-4xl"/></span>Google Hesap Kurulumları</li>
                                      <li>
                                        <div  style={{display:"block"}}>
                                        &#x25C6; Google Ads 
                                        &#x25C6; Google Analystic
                                        &#x25C6; Google Tag Manager
                                        &#x25C6; Google Search Console 
                                        </div> 
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  2500₺
                                              </p>
                                              <p className="text-primary font-normal">
                                                  değerinde mevcut hizmet
                                              </p>
                                          </div>
                                      </li>
                                  </ul>

                                  <ul>
                                    <li><span><MdWeb className="text-4xl"/></span>Website Tasarım</li>
                                    <li>
                                    <p>Website Tasarım
                                    Dijital Dönüşüm Kutumuzda,  Website Tasarım Hizmeti referans alınmaktadır, bu hizmette ücretsiz sunulmaktadır.
                                     Kısacası; dijital pazarlama araçları ile entegre kullanılarak dönüşüm odaklı bir web sitesi kurmak,
                                      işletmenizle alakalı gelişmiş içerik planlaması ve SEO hizmeti verilmek hedeflenmektedir.</p>
                                    </li>
                                  </ul>
                                  
                                  <ul>
                                    <li><span><MdCurrencyLira className="text-4xl"/></span>Uygun Görülen Bütçe</li>
                                    <li>
                                    <p>Dijital Dönüşüm Kutusunda reklam bütçesi; meta reklamları ve google ads reklamlarını kapsamakatadır.
                                     Lakin bu hizmet küçük ve orta büyüklükteki firmalar için tasarlanmıştır. Hizmetin işleyişi ve bütçe
                                      yönetimi belirli bir stratejiye göre yapılmaktadır. Online varlıkları geliştirmeye bağlı olarak ilk
                                       zamanlarda Meta Reklamlarına bütçe ayrılması planlanır. <span className="primary-light">Bu bütçe minimum 10.000₺`dir.</span></p>
                                    </li>
                                  </ul>

                                  <ul>
                                    <li><span><MdAddBusiness className="text-4xl"/></span>Google İşletme Hesabı Kurulumu</li>
                                    <li>
                                    <p>Google işletme hesabınız oluşturularak sizden aldığımız bilgiler neticesinde doldurulur.
                                       Organik aramalarda işletmenizin konum bilgisi vermesi çok önem arz etmektedir. Arama sonuçlarında logonuzun,
                                        iletişim bilgilerinizin ve işletmenizle alakalı görsellere yer verilmesi potansiyel müşterileriniz için
                                         fayda sağlamaktadır. Aynı zamanda google işletme kaydı olan işletmelerin google ads reklamlarında da konum gösteren
                                          reklamları yayınlanabilmesi münkün olabilmektedir.</p>
                                    </li>
                                  </ul>

        {/* İkinci Adım */}
                                  <div className="headerTable gap-2">İkinci Adım <MdOutlineKeyboardDoubleArrowDown/></div>

                                  <ul>
                          <li><span><MdFilter2 className="text-4xl"/></span>İkinci Adım | Tüm Dijital Varlıkların Bütünsel Kullanımı</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                              Website Dönüşümlerinin Kurulması
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                              Google Ads Reklamlarının Yönetimi
                                              </p>

                                          </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><MdControlPoint className="text-4xl"/></span>Bütçenin Kontollu Kullanımı</li>
                          <li>İşletmenin geliştirme adımı aşamasında oturmuş kurumsal bir kimlik olduğu işletmenin artık birçok pontasiyel müşterisinin olduğu çeşitli kampanyalarla desteklendiği bir süreç olduğu varsayılır. Geliştirme adımında mevcut bütçeyi meta reklamlarına ve google reklamlarına reklam stratejisine göre optimize etmek hedeflenir. İşletmenin hedefleri bu aşamada daha fazla potansiyel müşterilere ulaşmak olur.</li>
                        </ul>

                        <ul>
                          <li><span><MdAdsClick className="text-4xl"/></span>Google Ads Reklam Türleri</li>

                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                      <div className="w-full sm:w-2/5 m-2 ">

                        <p className="flex justify-center p-4 productListColor">
                        Arama Ağı Reklmaları (PPC)
                        </p>

                      </div>

                      <div className="w-full sm:w-2/5 m-2">

                        <p className="flex justify-center  p-4 productListColor">
                        Yeniden Hedefleme (opsiyonel)
                        </p>

                      </div>
                      <div className="w-full sm:w-2/5 m-2">

                        <p className="flex justify-center  p-4 productListColor">
                        Görüntülü Reklam Ağı
                        </p>

                      </div>

                      <div className="w-full sm:w-2/5 m-2">

                        <p className="flex justify-center  p-4 productListColor">
                        Maksimum Performans Reklamları
                        </p>

                      </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><MdAddBusiness className="text-4xl"/></span>Bütünsel Yaklaşım</li>
                          <li>Pazarlama yöntemlerimizi tamamladıktan sonra nihai hedefimiz, potansiyel müşterilerimizle doğrudan etkileşim kurmaktır. Bu, müşterilerimizin bizi araması, WhatsApp üzerinden sohbet başlatması ya da form doldurarak başvuru veya randevu oluşturması gibi farklı yollarla gerçekleşebilir. Bu süreci desteklemek için bütçemizi Meta ve Google reklamlarında dengeli bir şekilde kullanarak adım adım ilerliyor, doğru hedeflemelerle etkili sonuçlar almayı amaçlıyoruz.</li>
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

export default DijitalMarketingConversionProduct
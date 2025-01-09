
import ProBox from "../../../../../public/pro-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HareketPlani from "./modal/HareketPlani";
import BusinessPro from "./modal/BuissinessPro";
import StartContactMeta from "./modal/StartContactMeta";
import SocialMediaManageModalPro from "./modal/SocialMediaManageModal";




const MetaBoxesPro = () => {
  return (
    <>

        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">ProBox Meta Reklam Yönetimi</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 m-1 sm:m-0" role="alert">
                              <div className="flex items-center ">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                  <span className="sr-only">Info</span>
                                  <h3 className="text-lg font-medium">Stratejik Reklam ve Sosyal Medya Desteği</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              Aylık facebook/instagram reklam yönetimidir. ProBox içeriğinde hesap kurulum desteği vardır. Kurumsal tasarım desteği vardır. Sosyal medya yönetim desteği vardır.
                              </div>
                          <div className="flex justify-center md:justify-start items-center">

                              <BusinessPro />

                          </div>
                             
                          </div>


                      <div className="flex mt-2 p-5 justify-evenly">

                       
                              <div className="p-3 border border-red-500 rounded-[5px]">
                                  <h6 className="line-through text-red-500 flex justify-center">
                                      16.000₺
                                  </h6>
                              </div>
               

                    

                              <div className="p-3 border border-green-500 rounded-[5px]">
                                  <h6 className="text-green-500 flex justify-center">
                                      14.400₺
                                  </h6>
                              </div>
                              
                         

                      </div>

                          </div>

                            <div className="p-0 sm:p-2 w-full sm:w-6/12">
                                
                            <StartContactMeta/>
                            
                      <div id="alert-1" className="flex items-center p-3 my-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                %10 İndirim Avantajı
                          </div>
                      </div>

                      <div id="alert-1" className="flex items-center p-3 mb-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div>

                      <div id="alert-" className="flex items-center p-3 m-1  text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400 border border-green-400" role="alert">
                          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                            <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Ücretsiz Web Tasarım Hizmeti
                          </div>
                      </div>

                      <SocialMediaManageModalPro/>

                            </div>
                      
                      </div>

                      
                   <div className="p:0 sm:px-14 m-1 sm:m-0">  

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">Detaylı Bilgilendirme</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2 ">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Hareket Planı</li>
                          <li><p>Yedi gün hareket planı vardır. Yedi gün ardından reklam kreatifleri hazır olur. Planlanan zaman diliminde reklam aktif olur. 
                        <HareketPlani/></p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Süresi</li>
                          <li>Probox içeriğinde bir ay reklam süresi belirlenmiştir. Reklam süresi bütçeye göre optimize edilebilir.</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Türleri</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2">

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
                                                Dönüşüm Kampanyası
                                            </p>

                                            </div>
                                                                                    
                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kampanya Kurulumu</li>
                          <li>ProBox`ta maksimum 4 adet kampanya kurulumu yapılmaktadır.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kampanya Denetimi</li>
                          <li>4 adet kampanyaya göre denetim yapılmaktadır. Kampanyalarınızın performansını izlemek, optimize etmek ve iyileştirmek için yapılan çeşitli analiz ve ayar işlemlerini içerir.
                            Bunlar içerisinde kampanya bütçe optimizasyonu ve kreatif değişimi gibi önemli optimizasyonlarda dahildir. 
                          </li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kitle Araştırması</li>
                          <li>Kretif odaklı çalışmalarımızı ön planda tutarak, özel hedef kitle ve benzer hedef kitlerler oluşturmaktayız. Nihai hedef; altın hedef kitle tespiti yaparak faydalı kitleye ulaşmaktır.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Özel Hedef Kitle</li>
                          <li>
                          Probox Meta reklam yönetiminde özel hedef kitle kullanılmaktadır.
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Benzer Hedef Kitle</li>
                          <li>Probox Meta reklam yönetiminde benzer hedef kitle kullanılmaktadır.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam İçeriği</li>
                          <li>Reklam içerik çalışması, çalışılan şirketin kurumsal kimliği baz alınarak ve trend kreatifler göz önünde bulundurularak yapılmaktadır. Aynı zamanda sektörel tecrübeler de dahil edilerek uygun görsel kreatifler farklı formatlarda ortaya çıkarılmaktadır. Ayrıca reklam içeriğinde kanca metin ve kanca görsel uygulanmaktadır.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Metni Oluşturma</li>
                          <li>İşletmenizle alakalı hedef kitlenizi harekete geçirici metin çalışmaları oluşturmaktayız.</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Raporu</li>
                          <li>Haftalık reklam raporu sizin için oluşturduğumuz bulut üzerinden pdf ile görüntüleyebileceksiniz.Rapor içeriğinde reklam gösterim - erişim - tıklama - maliyet olarak temel bilgiler size iletilmektedir.Ve her ayın sonunda gelecek ayın reklam planlaması ve önerileri yapılmaktadır.</li>
                        </ul>

                        <ul>
                          <li><span><Image src={ProBox} width={35} alt="Sosyal Medya Reklamı: Mini Kutu" /></span>Probox İçeriği</li>
                          <li>
                          Verimlilik esaslı bu yönetimde hem sosyal medya hem de web sitesi sayesinde SEO - Marka Bilinirliği konusunda öne çıkacak planlamaları hayata geçiriyoruz. Reklam kreatiflerinin dışında işletmeye fayda sağlayacak bütünsel bir yaklaşım ile rekabet içerisinde olduğunuz firmaların önüne geçebilme imkanı kazanacaksınız</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Uygun  Görülen Bütçe </li>
                          <li>ProBox için minimum 15.000₺ bütçe uygun görülmektedir. Bütçe; işlenen reklam stratejisine göre belirlenmektedir. 1 Ay`ın her gününe göre ya da belirlenen günlere göre bütçe optimizasyonu yapılarak bütçeye göre de uygun strateji uygulanabilmektedir.</li>
                        </ul>

                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>Meta Setup</li>
                                      <li>  &#x25C6;Facebook & İnstagram profesyonel hesaplarının açılması &#x25C6; Meta Business Suit kurulumu &#x25C6; Meta Business Manager kurulumu
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
                                      <li><span><ArrowBigRightDash /></span>Kurumsal Tasarım</li>
                                      <li>  &#x25C6;Meta hesaplarının biyografi bilgilerinin oluşturulması  &#x25C6; profil ve kapak görsellerinin oluşturulması
                                          &#x25C6; CTA butonunun oluşturulması &#x25C6; 2 gönderi ve 2 hikaye görseli oluşturuyoruz &#x25C6; kalıcı hikayeler kısmı hazırlıyoruz
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
                                      <li><span><ArrowBigRightDash /></span>Web Tasarım (opsiyonel)</li>
                                      <li>  &#x25C6;MiniWeb - Temel Düzeyde Website Tasarım
                                      Web sitenizin olmaması durumunda işletmeniz için temel düzeyde bir web sitesi tasarlıyoruz. Bu kampanyada ilk yıl domain ücretinizi ve hosting barındırma hizmetinizin ücretini biz karşılıyoruz.
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  ÜCRESTSİZ HİZMET
                                              </p>
                                              

                                          </div>
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

export default MetaBoxesPro
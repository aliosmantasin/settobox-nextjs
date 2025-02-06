
import miniBox from "@/public/images/mini-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BusinessMini from "./modal/BusinessMini";
import StartContactMeta from "./modal/StartContactMeta";
import HareketPlaniMeta from "./modal/HareketPlani";


const MetaBoxesMini = () => {
  return (
    <>

        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">MiniBox Meta Reklam Yönetimi</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                  <span className="sr-only">Info</span>
                                  <h3 className="text-lg font-medium">İhtiyaca Yönelik Reklam Yaklaşımı</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                                  Aylık facebook/instagram reklam yönetimidir. MiniBox içeriğinde hesap kurulum desteği yoktur. Kurumsal tasarım desteği yoktur. Opsiyonel olarak temin edebilirsiniz.
                               
                              </div>

                              <div className="flex justify-center md:justify-start items-center">

                                <BusinessMini/>

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
                                
                            <StartContactMeta/>
                            
                      <div id="alert-1" className="flex items-center p-4 my-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                %10 İndirim Avantajı
                          </div>
                      </div>

                      {/* <div id="alert-1" className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div> */}

                            </div>
                      
                      </div>

                      
                   <div className="p:0 sm:px-1">  

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">Detaylı Bilgilendirme</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Hareket Planı</li>
                          <li><p>Yedi gün hareket planı vardır. Yedi gün ardından reklam kreatifleri hazır olur. Planlanan zaman diliminde reklam aktif olur. 
                        <HareketPlaniMeta/></p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Süresi</li>
                          <li>MiniBox içeriğinde kısa süreli reklam gösterimi uygulanmaktadır. Bu süreyi reklamveren belirlemektedir.(7gün - 15 gün)</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Türleri</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                                  İnstagram Profiline Git
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                                  Trafik Reklamı(opsiyonel)
                                              </p>

                                          </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kampanya Kurulumu</li>
                          <li>İşletme hesabı (Meta Business Manager) hesabınız mevcut ise Minibox`ta 2 adet kampanya kurulumu yapılmaktadır.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kampanya Denetimi</li>
                          <li>2 adet kampanyaya göre denetim yapılmaktadır. Kampanyalarınızın performansını izlemek, optimize etmek ve iyileştirmek için yapılan çeşitli analiz ve ayar işlemlerini içerir.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kitle Araştırması</li>
                          <li>Kreatif odaklı yapay zeka destekli hedef kitleye ulaşıyor ve geliştiriyoruz.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Özel Hedef Kitle</li>
                          <li>
                          Minibox meta reklam yönetiminde özel hedef kitle reklam stratejisine göre tercih edilebilir.
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Benzer Hedef Kitle</li>
                          <li>MiniBox Meta reklam yönetiminde benzer hedef kitle destelenmiyor</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam İçeriği</li>
                          <li>Reklam içerik çalışması, çalışılan şirketin kurumsal kimliği baz alınarak ve trend kreatifler göz önünde bulundurularak yapılmaktadır. Aynı zamanda sektörel tecrübeler de dahil edilerek uygun görsel kreatifler farklı formatlarda ortaya çıkarılmaktadır. Ayrıca reklam içeriğinde kanca metin ve kanca görsel uygulanmaktadır. </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Metni Oluşturma</li>
                          <li>İşletmenizle alakalı hedef kitlenizi harekete geçirici metin çalışmaları oluşturma.(Satış odaklı metin yazarlığı) Ve bunu kreatifte uygulama</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Raporu</li>
                          <li>Haftalık reklam raporu: Gösterim - Erişim - Tıklama - Maliyet olarak size iletilmektedir.</li>
                        </ul>

                        <ul>
                          <li><span><Image src={miniBox} width={35} alt="Sosyal Medya Reklamı: Mini Kutu" /></span>MiniBox İçeriği</li>
                          <li>Başlangıç facebook/instagram reklam yönetimidir. İşletmeniz için hazırlanan kreatif ile temel olarak mesaj başlatmak, trafik çekmek ve etkileşim oluşturmak hedeflenir. Bu kutu içeriğinde detaylı hedefleme ve pazarlama yöntemleri kullanılmadığı için pixel koduna ihtiyaç yoktur. Daha çok web sitesi kullanmayan müşterilerimiz için planlanmıştır. </li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Uygun  Görülen Bütçe </li>
                          <li>Minibox içeriğimizde düşük bütçeli belirli süreli reklamlar kullanılmaktadır. Dolayısıyla reklam bütçesini ve reklam süresini (minumum 7gün) reklam veren belirlemektedir.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Meta Setup
                            (opsiyonel)</li>
                          <li>  &#x25C6;Facebook & İnstagram profesyonel hesaplarının açılması &#x25C6; Meta Business Suit kurulumu &#x25C6; Meta Business Manager kurulumu
                          </li>
                          <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                          <div className="p-[0.3rem] rounded-[5px]">
                            <h6 className="mx-auto flex justify-center">
                                2500₺
                            </h6>
                                      <p className="text-primary font-normal">
                                          hizmet aktif edilebilir
                                      </p>

                            </div>
                          </li>

                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kurumsal Tasarım
                            (opsiyonel)</li>
                          <li>  &#x25C6;Meta hesaplarının biyografi bilgilerinin oluşturulması  &#x25C6; profil ve kapak görsellerinin oluşturulması
                            &#x25C6; CTA butonunun oluşturulması &#x25C6; 2 gönderi ve 2 hikaye görseli oluşturuyoruz &#x25C6; kalıcı hikayeler kısmı hazırlıyoruz
                          </li>
                          
                          <li style={{ width: "100%", display: "flex", justifyContent: "center",}}>
                          <div className="p-[0.3rem] rounded-[5px]">
                            
                          <p className="mx-auto flex justify-center">
                                3750₺
                              </p>
                            <p className="text-primary font-normal">
                                          hizmet aktif edilebilir
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

export default MetaBoxesMini

import GoogleProBox from "@/public/images/pro-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StartContactGoogle from "./Modal/StartContactGoogle";
import HareketPlaniGoogle from "./Modal/HareketPlani";
import GoogleBusinessPro from "./Modal/GoogleBusinessPro";



const GoogleBoxesPro = () => {
  return (
    <>

      <section>

        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">ProBox Google Reklam Yönetimi</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                 
                                  <h3 className="text-lg font-medium">İstikrarlı Bütçe - Derinlemesine Hedefleme - Yüksek Dönüşüm</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              Bir aylık google ads Arama Ağı & Görüntülü Reklam Ağı yönetimidir. ProBox içeriğinde google ads hesap kurulum desteği vardır.
                               
                              </div>

                              <div className="flex justify-center md:justify-start items-center">

                                <GoogleBusinessPro/>

                              </div>
                             
                          </div>


                      <div className="flex mt-2 p-5  justify-evenly">

                       
                              <div className="p-3 border border-red-500 rounded-[5px]">
                                  <h6 className="line-through text-red-500 flex justify-center">
                                      14.000₺
                                  </h6>
                              </div>
               

                              <div className="p-3 border border-green-500 rounded-[5px]">
                                  <h6 className="text-green-500 flex justify-center">
                                      12.600₺
                                  </h6>
                              </div>
                              
                      </div>

                          </div>

                            <div className="p-0 sm:p-2 w-full sm:w-6/12">
                                
                            <StartContactGoogle/>
                            
                      <div id="alert-1" className="flex items-center p-4 my-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                %10 İndirim Avantajı
                          </div>
                      </div>

                      {/* <div id="alert-1" className="flex items-center p-4 mb-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div> */}

                      <div id="alert-" className="flex items-center p-4 m-1 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400 border border-green-400 " role="alert">
                          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                            <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                                Ücretsiz Web Tasarım Hizmeti
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
                          <li>Google ProBox içeriğinde aylık yönetim uygulanmaktadır.(1 AY)</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Türleri</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                              Arama Ağı Reklamı (Metin - Çağrı - Konum)
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                              Görüntülü Reklam Ağı (Duyarlı Görüntülü Reklam)
                                              </p>

                                          </div>

                                        <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                            Retargeting Reklam (Yeniden Hedefleme)
                                            </p>

                                        </div>

                                        <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                            Maksimum Performans Reklamı
                                            </p>

                                        </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Kampanya Kurulumu</li>
                          <li>Toplam 4 kampanya gösterimi hedeflenmektedir. Kurulum önceliği Arama Ağı reklamıdır. Algoritma uygun bir seviye geldikçe diğer reklam türleride kullanıma sunulacaktır.</li>
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
                          <li><span><ArrowBigRightDash/></span>Duyarlı Reklam Ağı</li>
                          <li>Duyarlı reklam ağı hizmetimizle, reklamlarınızı farklı cihaz ve platformlarda otomatik olarak optimize ederek, her kullanıcıya en uygun formatta ulaşmanızı sağlıyoruz. Bu sayede, geniş bir kitleye etkili bir şekilde erişerek marka bilinirliğinizin artmasını sağlamış oluyoruz. İşletmenize ait kare logo ve yatay logo kullanılacaktır. Duyarlı reklam ağında 2 görsel kreatif, kare ve yatay formatta tasarlanacaktır. 1 adet slide video kare ve yatay formatlarda kreatif oluşturulacaktır. Reklamlarınıza ayrıca başlıklar, açıklamalar ve harekete geçirecek button eklenecektir.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Hedefleme</li>
                          <li>Hedefleme stratejilerimizle, reklamlarınızı doğru kitleye ulaştırarak etkili sonuçlar elde etmenizi sağlıyoruz. Demografik veriler, ilgi alanları ve davranış analizlerine dayalı olarak özelleştirilmiş hedefleme yöntemleri kullanarak, reklamlarınızın performansını maksimize ediyoruz.</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Retergating Hedefleme</li>
                          <li>Retargeting hizmetimizle, web sitenizi ziyaret eden ancak dönüşüm sağlamayan kullanıcıları yeniden hedefleyerek, satış ve dönüşüm oranlarınızı artırıyoruz.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Dönüşüm Yapılanması</li>
                          <li>Web sitesi üzerinde kurulan dönüşüm yapılandırması ile makine öğrenimini sağlayarak potansiyel müşterilerinizin ürün/hizmet satın alımını artırmak hedeflenmektedir.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Öneri</li>
                          <li>Dijital reklam konularında çeşitli öneriler verilmektedir.</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>Reklam Raporu ve Optimizasyon</li>
                          <li>Aylık reklam raporu: Tıklama - Maliyet olarak size iletilmektedir.</li>
                        </ul>

                        <ul>
                          <li><span><Image src={GoogleProBox} width={35} alt="Google AdsReklamı: Mini Kutu" /></span>Google ProBox İçeriği</li>
                          <li>ProBox içeriği; ilk olara Arama Ağı reklamı ile başlayarak müşterilerinin karşısına çıkar ve algoritmayı besler... Duyarlı Görüntülü Reklam ile sektörel bir marka bilinirliği kazanılmak hedeflenir. Ardından Maksimum Performans Reklamı ile dönüşüm ortalamasını artırmak hedeflenir. Bu kutu içeriğimizde oturmuş alt yapı ve algoritma ile sahip olduğumuz web sitesinden form - whatsapp veya telefon araması dönüşümlerini artırmak hedeflenmektedir.</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>Uygun Görülen Bütçe </li>
                          <li>Google ProBox Reklam içeriğinde Arama Ağı - Duyarlı Reklam Ağı ve Retargeting reklamları kullanılmaktadır. Gösterime sunulacak reklamın çeşitli değişkenlikleri göz önünde bulundurulunca minumum ihtiyaç duyulan aylık bütçe 10.000(+) TL`dir.</li>
                        </ul>

                        <ul>
                                      <li><span><ArrowBigRightDash /></span>Google Araçları</li>
                                      <li>
                                        <div  style={{display:"block"}}>
                                        <p><strong>Google Analystic | Google Search Console</strong></p> <br />
                                        <p>Optimizsayonu iyileştirimek daha iyi hedeflemeler yapabilmek için web sitenize bu araçların kodlarını (etiket) bağlıyoruz.</p> 
                                        </div> 
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  1500₺
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
                                                  ÜCRETSİZ HİZMET
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

        </section>
    </>
  )
}

export default GoogleBoxesPro
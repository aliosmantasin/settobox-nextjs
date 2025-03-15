
import miniWeb from "@/public/images/miniWeb.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BusinessMiniWeb from "./Modal/MiniBusinessWeb";
import StartContactWeb from "./Modal/StartContactWeb";
import ContentMiniWeb from "./Modal/ContentMiniWeb";
import { useTranslations } from "next-intl";


const WebDesignBoxesMini = () => {

  const t = useTranslations("WebsitePage")

  return (
    <>

        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">{t("webDesignProduct.miniBox.title")}</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                
                                  <h3 className="text-lg font-medium">{t("webDesignProduct.miniBox.subtitle")}</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              {t("webDesignProduct.miniBox.description")}
                              </div>

                              <div className="flex justify-center md:justify-start items-center">
                              <BusinessMiniWeb/>
                              </div>
                             
                          </div>


                      <div className="flex mt-2 p-5  justify-evenly">

                       
                            
               

                              <div className="p-3 border border-green-500 rounded-[5px]">
                                  <h6 className="text-green-500 flex justify-center">
                                      6.000₺
                                  </h6>
                              </div>
                              
                      </div>

                          </div>

                            <div className="p-0 sm:p-2 w-full sm:w-6/12">
                                
                            <StartContactWeb/>
                            
                            {/* <div id="alert-1" className="flex items-center p-3 my-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                      
                          <div className="ms-3 text-sm font-medium">
                          {t("webDesignProduct.miniBox.discountWeb")}
                          </div>
                      </div> */}

                      {/* <div id="alert-1" className="flex items-center p-3 mb-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                        
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div> */}

                      <div id="alert-" className="flex items-center p-3 m-1  text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400 border border-green-400" role="alert">
                          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          
                          <div className="ms-3 text-sm font-medium">
                          {t("webDesignProduct.miniBox.span1")}
                          </div>
                      </div>

                            </div>
                      
                      </div>

                      
                   <div className="p:0 sm:px-14">  

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">{t("webDesignProduct.miniBox.span2")}</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span3")}</li>
                          <li><p>
                          {t("webDesignProduct.miniBox.p1")}
                        </p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span> {t("webDesignProduct.miniBox.span4")}</li>
                          <li>{t("webDesignProduct.miniBox.p2")}</li>
                        </ul>

                      

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span5")}</li>
                          <li>
                          {t("webDesignProduct.miniBox.p3")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span6")}</li>
                          <li>{t("webDesignProduct.miniBox.p4")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span7")}</li>
                          <li>{t("webDesignProduct.miniBox.p5")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span8")}</li>
                          <li>{t("webDesignProduct.miniBox.p6")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span9")}</li>
                          <li>{t("webDesignProduct.miniBox.p7")}</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span10")}</li>
                          <li>
                          {t("webDesignProduct.miniBox.p8")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("webDesignProduct.miniBox.span11")}</li>
                          <li>
                            <p>{t("webDesignProduct.miniBox.p9")}<ContentMiniWeb/></p> 
                          </li>
                        </ul>

                        <ul>
                          <li><span><Image src={miniWeb} width={35} alt="Sosyal Medya Reklamı: Mini Kutu" /></span>MiniWeb İçeriği</li>
                          <li>Hızlı, ekonomik ve belirli standartlara bağlı kalarak bir web sitesi hizmetinize sunuyoruz. Basit yapısıyla ilgili hedef kitlenizin arama motorlarında sizlere rahatça ulaşmaları ve bilgi almaları sağlanmaktadır.</li>
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

export default WebDesignBoxesMini
import ProBox from "@/public/images/pro-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BusinessPro from "./modal/BuissinessPro";
import StartContactMeta from "./modal/StartContactMeta";
import SocialMediaManageModalPro from "./modal/SocialMediaManageModal";
import { useTranslations } from "next-intl";




const MetaBoxesPro = () => {

  const t = useTranslations("MetaPage")
  
  return (
    <>
        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">{t("proBox.subtitle1")}</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 m-1 sm:m-0" role="alert">
                              <div className="flex items-center ">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                 
                                  <h3 className="text-lg font-medium">{t("proBox.subtitle2")}</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              {t("proBox.p1")}
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
                      
                          <div className="ms-3 text-sm font-medium">
                                {t("proBox.discount")}
                          </div>
                      </div>

                      {/* <div id="alert-1" className="flex items-center p-3 mb-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                        
                          <div className="ms-3 text-sm font-medium">
                                Fiyatlarımıza KDV dahildir
                          </div>
                      </div> */}


                      <SocialMediaManageModalPro/>


                      <div id="alert-" className="flex items-center p-3 m-1  text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400 border border-green-400" role="alert">
                          <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          
                          <div className="ms-3 text-sm font-medium">
                               {t("proBox.span2")}
                          </div>
                      </div>

                            </div>
                      
                      </div>

                      
                   <div className="p:0 sm:px-14 m-1 sm:m-0">  

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">{t("proBox.span3")}</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2 ">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span4")}</li>
                          <li><p>{t("proBox.p2")} 
                      </p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span5")}</li>
                          <li>{t("proBox.p3")}</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span6")}</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center p-4 productListColor">
                                              {t("proBox.p4")}
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                              {t("proBox.p5")}
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                              {t("proBox.p6")}
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                            <p className="flex justify-center  p-4 productListColor">
                                            {t("proBox.p7")}
                                            </p>

                                            </div>
                                                                                    
                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span7")}</li>
                          <li>{t("proBox.p8")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span8")}</li>
                          <li>{t("proBox.p9")}
                          </li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span9")}</li>
                          <li>{t("proBox.p10")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span10")}</li>
                          <li>
                          {t("proBox.p11")}
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span> {t("proBox.span11")}</li>
                          <li> {t("proBox.p12")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span12")}</li>
                          <li>{t("proBox.p13")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span13")}</li>
                          <li>{t("proBox.p14")}</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span14")}</li>
                          <li>{t("proBox.p15")}</li>
                        </ul>

                        <ul>
                          <li><span><Image src={ProBox} width={35} alt="Sosyal Medya Reklamı: Mini Kutu" /></span>{t("proBox.span15")}</li>
                          <li>
                          {t("proBox.p16")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("proBox.span16")}</li>
                          <li>{t("proBox.p17")}</li>
                        </ul>

                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>{t("proBox.span17")}</li>
                                      <li>{t("proBox.p18")}
                                      </li>
                                      <li className="flex-center-full">
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  2500₺
                                              </p>
                                              <p className="text-primary font-normal">
                                              {t("proBox.p19")}
                                              </p>

                                          </div>
                                      </li>

                                  </ul>

                  
                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>{t("proBox.span18")}</li>
                                      <li>{t("proBox.p20")}
                                      </li>
                                      <li className="flex-center-full">
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  3750₺
                                              </p>
                                              <p className="text-primary font-normal">
                                              {t("proBox.p21")}
                                              </p>
                                          </div>
                                      </li>
                                  </ul>

                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>{t("proBox.span19")}</li>
                                      <li>
                                      {t("proBox.p22")}
                                      </li>
                                      <li className="flex-center-full">
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                              {t("proBox.p23")}
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
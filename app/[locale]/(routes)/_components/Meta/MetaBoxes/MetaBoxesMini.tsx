import miniBox from "@/public/images/mini-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BusinessMini from "./modal/BusinessMini";
import StartContactMeta from "./modal/StartContactMeta";
import { useTranslations } from "next-intl";


const MetaBoxesMini = () => {

  const t = useTranslations("MetaPage")

  return (
    <>
        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable">
                        {t("sub2")}
                      </div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                  <span className="sr-only">Info</span>
                                  <h3 className="text-lg font-medium">
                                  {t("sub4")}
                                  </h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm"> 
                              {t("description2")}
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
                              {t("span4")}
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
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">{t("p3")}</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span6")}</li>
                          <li><p>{t("p4")} 
                        </p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span7")}</li>
                          <li>{t("p5")}</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span8")}</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          <div className="w-full sm:w-2/5 m-2 ">

                                              <p className="flex justify-center p-4 productListColor">
                                                  {t("p6")}
                                              </p>

                                          </div>

                                          <div className="w-full sm:w-2/5 m-2">

                                              <p className="flex justify-center  p-4 productListColor">
                                                  {t("p7")}
                                              </p>

                                          </div>

                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span9")}</li>
                          <li>{t("p8")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span10")}</li>
                          <li>{t("p9")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span11")}</li>
                          <li>{t("p10")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span12")}</li>
                          <li>
                          {t("p11")}
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span13")}</li>
                          <li>{t("p12")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span14")}</li>
                          <li>{t("p13")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span15")}</li>
                          <li>{t("p14")}</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span16")}</li>
                          <li>{t("p15")}</li>
                        </ul>

                        <ul>
                          <li><span><Image src={miniBox} width={35} alt="Sosyal Medya Reklamı: Mini Kutu" /></span>{t("span17")}</li>
                          <li>{t("p16")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span18")}</li>
                          <li>{t("p17")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span19")}</li>
                          <li> {t("p18")}
                          </li>
                          <li className="flex-center-full">
                          <div className="p-[0.3rem] rounded-[5px]">
                            <h6 className="mx-auto flex justify-center">
                                2500₺
                            </h6>
                                      <p className="text-primary font-normal">
                                          {t("p19")}
                                      </p>

                            </div>
                          </li>

                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("span20")}</li>
                          <li>
                            {t("p20")}
                          </li>
                          
                          <li className="flex-center-full">
                          <div className="p-[0.3rem] rounded-[5px]">
                            
                          <p className="mx-auto flex justify-center">
                                3750₺
                              </p>
                            <p className="text-primary font-normal">
                              {t("p21")}
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
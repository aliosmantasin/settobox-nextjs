
import miniBox from "@/public/images/mini-box.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GoogleBusinessMini from "./Modal/GoogleBusinessMini";
import StartContactGoogle from "./Modal/StartContactGoogle";
import { useTranslations } from "next-intl";


const GoogleBoxesMini = () => {

  const t = useTranslations("GooglePage")
  const listItems = t.raw("miniBox.listItems")
  return (
    <>
        <div className="boxTable">
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">{t("miniBox.title1")}</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800  m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                              
                                  <h3 className="text-lg font-medium">{t("miniBox.subtitle1")}</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              {t("miniBox.description1")}
                               
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
                          {t("miniBox.span1")}
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

                      
                   <div className="p:0 sm:px-14">  

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">{t("miniBox.span2")}</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.spanHareketPlani")}</li>
                          <li><p>{t("miniBox.p1")} 
                        </p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span3")}</li>
                          <li>{t("miniBox.p2")}</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span4")}</li>

                    <div className="container flex flex-wrap justify-center m-auto">

                      {listItems.map((item: string, index: number) => (
                        <p key={index} className="sm:w-2/5 m-2  flex justify-center p-4 productListColor">
                          {item}
                        </p>
                      ))}
                    </div>

                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span5")}</li>
                          <li>{t("miniBox.p3")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span6")}</li>
                          <li>{t("miniBox.p4")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span7")}</li>
                          <li>{t("miniBox.p5")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span8")}</li>
                          <li>
                          {t("miniBox.p6")}
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span8")}</li>
                          <li>{t("miniBox.p7")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span10")}</li>
                          <li>{t("miniBox.p8")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span11")}</li>
                          <li>{t("miniBox.p9")}</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span12")}</li>
                          <li>{t("miniBox.p10")}</li>
                        </ul>

                        <ul>
                          <li><span><Image src={miniBox} width={35} alt="Google AdsReklamı: Mini Kutu" /></span>{t("miniBox.span13")}</li>
                          <li>{t("miniBox.p11")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span14")}</li>
                          <li>{t("miniBox.p12")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("miniBox.span15")}</li>
                          <li>{t("miniBox.p13")}
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
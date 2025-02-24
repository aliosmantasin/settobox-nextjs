
import MegaBox from "@/public/images/megaWeb.webp";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BusinessMega from "./modal/BusinessMega";
import StartContactMeta from "./modal/StartContactMeta";
import { useTranslations } from "next-intl";



const MetaBoxesMega = () => {
  const t = useTranslations("MetaPage")
  const ListItems = t.raw("megaBox.MegaBoxService");

  return (
    <>
        <div className="boxTable">
                  
                      <div className="container flex flex-wrap  justify-center mx-auto">
                      <div className="headerTable ">{t("megaBox.subtitle1A")}</div>
                          <div className="p-0 sm:p-2 w-full sm:w-6/12">
                            
                          <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 m-1 sm:m-0" role="alert">
                              <div className="flex items-center">
                                  <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                  </svg>
                                
                                  <h3 className="text-lg font-medium">{t("megaBox.subtitle2A")}</h3>
                              </div>
                              <div className="mt-2 mb-4 text-sm">
                              {t("megaBox.description1A")}
                              </div>

                            <div className="flex justify-center md:justify-start items-center">

                                <BusinessMega />

                            </div>
                             
                          </div>


                      <div className="flex mt-2 p-5 justify-evenly">

                       
                              <div className="p-3 border border-red-500 rounded-[5px]">
                                  <h6 className="line-through text-red-500 flex justify-center">
                                      12.000₺
                                  </h6>
                              </div>
               

                    

                              <div className="p-3 border border-green-500 rounded-[5px]">
                                  <h6 className="text-green-500 flex justify-center">
                                      10.800₺
                                  </h6>
                              </div>
                              
                         

                      </div>

                          </div>

                            <div className="p-0 sm:p-2 w-full sm:w-6/12">
                                
                            <StartContactMeta/>
                            
                      <div id="alert-1" className="flex items-center p-4 my-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="sr-only">Info</span>
                          <div className="ms-3 text-sm font-medium">
                               {t("megaBox.span0")}
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
                              {t("megaBox.span01")}
                          </div>
                      </div>

                            </div>
                      
                      </div>

                      
                      <div className="p:0 sm:px-1 m-1 sm:m-0">    

                    <Accordion type="single" collapsible className="w-full px:2 sm:px-0 productBgBodyColor">
                    <AccordionItem value="item-4"> 
                        <AccordionTrigger className="p-4 sm:px-5 text-lg">{t("megaBox.span02")}</AccordionTrigger>
                    <AccordionContent>

                      <div className="bodyTable p-2 ">
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span")}</li>
                          <li><p> {t("megaBox.p1")}
                     </p>
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span2")}</li>
                          <li>{t("megaBox.p2")}</li>
                        </ul>
                      
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span3")}</li>

                                        <div className="container flex flex-wrap justify-center m-auto"> 
                                      
                                          {ListItems.map((item:string, index:number) => (
                                            <p key={index} className="sm:w-2/5 m-2 flex justify-center p-4 productListColor">
                                               {item}
                                            </p>
                                       ))}                                     
                                          </div>
                                      
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span4")}</li>
                          <li>{t("megaBox.p3")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span5")}</li>
                          <li>
                            {t("megaBox.p4")} 
                          </li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span6")}</li>
                          <li>{t("megaBox.p5")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span7")}</li>
                          <li>
                          {t("megaBox.p6")}
                          </li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span8")}</li>
                          <li>{t("megaBox.p7")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span9")}</li>
                          <li>{t("megaBox.p8")}</li>
                        </ul>
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span10")}</li>
                          <li>{t("megaBox.p9")}</li>
                        </ul>
                    
                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span11")}</li>
                          <li>{t("megaBox.p10")}.</li>
                        </ul>

                        <ul>
                          <li><span><Image src={MegaBox} width={35} alt="Sosyal Medya Reklamı: Mini Kutu" /></span>{t("megaBox.span12")}</li>
                          <li>
                          {t("megaBox.p11")}</li>
                        </ul>

                        <ul>
                          <li><span><ArrowBigRightDash/></span>{t("megaBox.span13")}</li>
                          <li>{t("megaBox.p12")}</li>
                        </ul>

                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>{t("megaBox.span14")}</li>
                                      <li> {t("megaBox.p13")}
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  2500₺
                                              </p>
                                              <p className="text-primary font-normal">
                                              {t("megaBox.p14")}
                                              </p>

                                          </div>
                                      </li>

                                  </ul>

                  
                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>{t("megaBox.span15")}</li>
                                      <li>
                                      {t("megaBox.p15")}
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                                  3750₺
                                              </p>
                                              <p className="text-primary font-normal">
                                              {t("megaBox.p16")}
                                              </p>
                                          </div>
                                      </li>
                                  </ul>

                                  <ul>
                                      <li><span><ArrowBigRightDash /></span>{t("span16")}</li>
                                      <li> 
                                      {t("megaBox.p17")}
                                      </li>
                                      <li style={{ width: "100%", display: "flex", justifyContent: "megaBox.center"}}>
                                          <div className="p-[0.3rem] rounded-[5px]">
                                              <p className="mx-auto flex justify-center">
                                              {t("megaBox.p18")}
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

export default MetaBoxesMega
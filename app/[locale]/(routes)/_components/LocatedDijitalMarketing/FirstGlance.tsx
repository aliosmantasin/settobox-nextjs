"use client"
import React from "react";
import StartContactLocated from "./StartContactLocated";
import { MdCheckCircleOutline } from "react-icons/md";
import { motion } from "framer-motion";
import AllInSetToBoxAnimasyonJson from "../AnimasyonData/AllInSetToBoxAnimasyonJson";

interface FirstGlanceProps {
    onLoad?: () => void;
  }

const FirstGlance: React.FC<FirstGlanceProps> = ({onLoad}) => {
  return (
    <section className="relative ocean-shadow">
      <div className="container flex m-auto flex-wrap relative justify-evenly py-20">
              <div className="w-full sm:w-1/2 min-h-[500px] relative max-w-lg flex justify-center items-center">
                <AllInSetToBoxAnimasyonJson 
                  onLoad={onLoad}
                  useBlob={true}
                />
              </div>

       
        <div className="w-full sm:w-1/2 relative max-w-lg  flex justify-center  bg-slate-50 dark:bg-black p-2 m-2 shadow-sm dark:ocean-shadow rounded-sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>
              <div>
              <h1 className="text-3xl text-center bg-slate-100 dark:bg-slate-800 primary dark:text-slate-400 rounded-sm p-2 ">
                Yerel/Mikro Dijital Pazarlama
            </h1>
                <p className="my-4 text-md text-gray-900 dark:text-slate-400 text-center">
                Markanızın kurumsal değerlerini oturtmak ve potansiyel müşterilerinize ulaşmanızı sağlayacak temel seviyede online varlıklarınızı yönetiyoruz
                </p>
                <div>
                        <ul className=' w-full p-0 m-0'>
                                    

                                  <li className='text-sm listStyle p-3 my-2  hover:bg-gray-50 shadow-sm flex justify-between cursor-pointer rounded-lg items-center'>
                                   Planlı ve Ekonomik Yönetim<MdCheckCircleOutline className='text-green-700 text-xl' />                    
                                  </li>
                    
                                  <li className='text-sm listStyle p-3 my-2  hover:bg-gray-50 shadow-sm flex justify-between cursor-pointer rounded-lg items-center'>
                                   Raporlama ve Öneri<MdCheckCircleOutline className='text-green-700 text-xl' />                 
                                  </li>
                    
                                  <li className='text-sm listStyle p-3 my-2  hover:bg-gray-50 shadow-sm flex justify-between cursor-pointer rounded-lg items-center'>
                                  Online Varlıkların Tümüyle Yönetimi<MdCheckCircleOutline className='text-green-700 text-xl' />        
                                  </li>

                                 
                                </ul>

                                    <div className='text-xl  text-center w-full listStyle p-3 my-2  hover:bg-gray-50 shadow-sm flex justify-evenly cursor-pointer rounded-lg items-center'>
                                 

                       
                                <div className="p-1 border border-red-500 rounded-[5px]">
                                    <h6 className="line-through text-red-500 flex justify-center">
                                        15.000₺
                                    </h6>
                                </div>


                                <div className="p-1 border border-green-500 rounded-[5px]">
                                    <h6 className="text-green-500 flex justify-center">
                                        10.000₺
                                    </h6>
                                </div>

                               
                                  </div>
                </div>
                <div className="my-10">
                <StartContactLocated/>
                </div>
                 
              </div>
              </motion.div>
                 
        </div>
 
      </div>

      {/* Animasyon CSS */}

    </section>
  );
};

export default FirstGlance;

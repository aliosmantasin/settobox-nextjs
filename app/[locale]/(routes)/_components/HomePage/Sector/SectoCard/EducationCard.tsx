"use client"
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import './SectorCard.css'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

const EducationSectorCard = () => {


const t = useTranslations("HomePage");


  return (

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }} // Görünür olma koşulunu daha hassas yap
    transition={{ duration: 2 }}
    className="flex sm-full md:w-1/2"
  >
    <div className="sector-section flex flex-col items-center ">
      <div className="cardInclusive w-full max-w-4xl rounded-lg overflow-hidden">
        <div className="card">
          <div className="card-inner relative">
            <div className="box">
              <div className="imgBox relative">
             
                <Image
                  src="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/1-%20HomePage/SektorAll/EducationSector-pW0XjlW00I2UL5CStO24pRHgn7l3P8.webp"
                  alt="Dijital Pazarlama Hizmet Sektörü"
                  width={400}
                  height={400}
                />
              </div>
              <div className="icon absolute bottom-4 right-4 theme">
              <Link href="/dijital-pazarlama-donusum-kutusu/egitimsektoru" target='blank'>
                <div
                  className="iconBox bg-blue-600 rounded-full p-4 cursor-pointer flex items-center justify-center hover:bg-[#1f77bb]"
                 
                >
                  <MdArrowOutward className="text-white w-16 h-16" />
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="content p-6 bg-transparent">
            <h4 className="text-2xl font-semibold mb-4">
              {t("subtitle4B")}
            </h4>
            <p className="mb-4">
            {t("description7")}
            </p>
            <ul className="list-disc pl-6">
              <li className="MetaPin"> {t("span4")}</li>
              <li className="GooglePin"> {t("span5")}</li>
              <li className="WebPin"> {t("span6")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default EducationSectorCard;

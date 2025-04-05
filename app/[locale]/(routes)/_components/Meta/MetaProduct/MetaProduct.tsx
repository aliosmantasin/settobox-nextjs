"use client"

import { useState } from "react";
import Image from "next/image";
import miniBox from "@/public/images/mini-box.webp";
import megaBox from "@/public/images/mega-box.webp";
import proBox from "@/public/images/pro-box.webp";
import MetaBoxesMini from "../MetaBoxes/MetaBoxesMini";
import MetaBoxesMega from "../MetaBoxes/MetaBoxesMega";
import MetaBoxesPro from "../MetaBoxes/MetaBoxesPro";
import "./MetaProduct.css";
import { useTranslations } from "next-intl";




const MetaProduct = () => {
  const [miniBoxProduct, setMiniBoxProduct] = useState(true);
  const [megaBoxProduct, setMegaBoxProduct] = useState(false);
  const [proBoxProduct, setProBoxProduct] = useState(false);

  const t = useTranslations("MetaPage");

  return (
    <section className=" my-28 productBgColor mx-1 sm:m-10">
        
  
     <div>
      <h2 className=" text-center mx-auto font-semibold text-xl sm:text-2xl md:text-3xl px-4 py-2 ">
      {t("sub1")}
      </h2>
      <p className="text-center my-8 text-lg">
        {t("description1")}
      </p>
      </div>


   
      <div className="socialMediaButtons ">

    <div className="container flex">

      <div className="flex mx-auto items-center">
            {/* Button 1 */}
            <button
              className={miniBoxProduct ? "active" : ""}
              onClick={() => {
                setMiniBoxProduct(true);
                setMegaBoxProduct(false);
                setProBoxProduct(false);
              }}
            >

              <span>MiniBox</span><Image src={miniBox} alt="Sosyal Medya Reklamı: Mini Kutu" />

            </button>
         </div>

        {/* Button 2 */}
        <div className="flex mx-auto items-center">

            <button
              className={megaBoxProduct ? "active" : ""}
              onClick={() => {
                setMiniBoxProduct(false);
                setMegaBoxProduct(true);
                setProBoxProduct(false);
              }}
            >
              <span>MegaBox</span><Image src={megaBox} alt="Sosyal Medya Reklamı: Mega Kutu" />

            </button>
          </div>

        {/* Button 3 */}
        <div className="flex mx-auto items-center">
        
            <button
              className={proBoxProduct ? "active" : ""}
              onClick={() => {
                setMiniBoxProduct(false);
                setMegaBoxProduct(false);
                setProBoxProduct(true);
              }}
            ><span>ProBox</span><Image src={proBox} alt="Sosyal Medya Reklamı: Pro Kutu" />
            </button>
          </div>

          </div>

          </div>

        <div className="mt-8">

        {/* Button 1 content */}
        {miniBoxProduct && <MetaBoxesMini />}

        {/* Button 2 content */}
        {megaBoxProduct &&   <MetaBoxesMega/>}

        {/* Button 3 content */}
        {proBoxProduct && <MetaBoxesPro/>}

        </div>


     
    
    </section>
  );
};

export default MetaProduct;

"use client"

import { useState } from "react";
import Image from "next/image";
import MiniWeb from "@/public/images/miniWeb.webp";
import GoogleMegaBox from "@/public/images/megaWeb.webp";
import WebDesignBoxesMini from "../WebBoxes/WebDesignBoxesMini";
import WebDesignBoxesMega from "../WebBoxes/WebDesighnBoxesMega";
import './WebDesignProduct.css'
import { useTranslations } from "next-intl";

const WebDesignProduct = () => {
  const [miniBoxProduct, setMiniBoxProduct] = useState(true);
  const [megaBoxProduct, setMegaBoxProduct] = useState(false);

  const t = useTranslations("WebsitePage")

  return (
    <section className=" my-28 productBgColor mx-1 sm:m-10">
        
  
     <div className="">
      <h2  className=" text-center mx-auto font-semibold text-xl sm:text-2xl md:text-3xl px-4 py-2 ">
        {t("webDesignProduct.title")}
      </h2>
      <p className="text-center my-8 text-lg">
        {t("webDesignProduct.subtitle")}
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
               
              }}
            >

              <span>MiniBox</span><Image src={MiniWeb} alt="Sosyal Medya Reklamı: Mini Kutu" />

            </button>
         </div>

        {/* Button 2 */}
        <div className="flex mx-auto items-center">

            <button
              className={megaBoxProduct ? "active" : ""}
              onClick={() => {
                setMiniBoxProduct(false);
                setMegaBoxProduct(true);
              
              }}
            >
              <span>MegaBox</span><Image src={GoogleMegaBox} alt="Sosyal Medya Reklamı: Mega Kutu" />

            </button>
          </div>

          </div>

          </div>

        <div className="mt-8">

        {/* Button 1 content */}
        {miniBoxProduct && <WebDesignBoxesMini />}

        {/* Button 2 content */}
        {megaBoxProduct &&   <WebDesignBoxesMega/>}

    

        </div>


     
    
    </section>
  );
};

export default WebDesignProduct;

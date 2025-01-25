"use client"

import { useState } from "react";
import Image from "next/image";
import GoogleMiniBox from "@/public/images/GoogleMini.webp";
import GoogleMegaBox from "@/public/images/GoogleMega.webp";
import GoogleProBox from "@/public/images/GooglePro.webp";
import GoogleBoxesMini from "../GoogleBoxes/GoogleBoxesMini";
import GoogleBoxesMega from "../GoogleBoxes/GoogleMegaBox";
import GoogleBoxesPro from "../GoogleBoxes/GoogleProBox";
import "./GoogleProduct.css"

const GoogleProduct = () => {
  const [miniBoxProduct, setMiniBoxProduct] = useState(true);
  const [megaBoxProduct, setMegaBoxProduct] = useState(false);
  const [proBoxProduct, setProBoxProduct] = useState(false);

  return (
    <section className=" my-28 productBgColor mx-1 sm:m-10">
        
  
     <div className="">
      <h2  className=" text-center mx-auto font-semibold text-xl sm:text-2xl md:text-3xl px-4 py-2 ">
        Google Ads Hizmet Kutuları
      </h2>
      <p className="text-center my-8 text-lg">
        Google Ads reklam yönetimi detaylı bilgilendirme ve fiyatlandırma listemiz aşağıdadır.
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

              <span>MiniBox</span><Image src={GoogleMiniBox} alt="Sosyal Medya Reklamı: Mini Kutu" />

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
              <span>MegaBox</span><Image src={GoogleMegaBox} alt="Sosyal Medya Reklamı: Mega Kutu" />

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
            ><span>ProBox</span><Image src={GoogleProBox} alt="Sosyal Medya Reklamı: Pro Kutu" />
            </button>
          </div>

          </div>

          </div>

        <div className="mt-8">

        {/* Button 1 content */}
        {miniBoxProduct && <GoogleBoxesMini />}

        {/* Button 2 content */}
        {megaBoxProduct &&   <GoogleBoxesMega/>}

        {/* Button 3 content */}
        {proBoxProduct && <GoogleBoxesPro/>}

        </div>


     
    
    </section>
  );
};

export default GoogleProduct;

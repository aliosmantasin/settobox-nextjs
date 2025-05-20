"use client";

import { useState } from "react";
import Image from "next/image";
import GoogleMiniBox from "@/public/images/GoogleMini.webp";
import GoogleMegaBox from "@/public/images/GoogleMega.webp";
import GoogleProBox from "@/public/images/GooglePro.webp";
import GoogleBoxesMini from "../GoogleBoxes/GoogleBoxesMini";
import GoogleBoxesMega from "../GoogleBoxes/GoogleMegaBox";
import GoogleBoxesPro from "../GoogleBoxes/GoogleProBox";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const GoogleProduct = () => {
  const [miniBoxProduct, setMiniBoxProduct] = useState(true);
  const [megaBoxProduct, setMegaBoxProduct] = useState(false);
  const [proBoxProduct, setProBoxProduct] = useState(false);

  const t = useTranslations("GooglePage");
  
  return (
    <>
      <style jsx global>{`
        .socialMediaButtons button img {
          width: 50px;
          filter: grayscale(100%);
        }

        .socialMediaButtons button {
          display: flex;
        }

        .socialMediaButtons span {
          font-size: 1.5rem;
          margin-right: 10px;
          padding: 3px 2px 3px 2px;
          border-radius: 3px;
          margin: auto;
        }

        .socialMediaButtons button.active {
          background-color: #1e74bd;
          border: 2px solid #2b29e6;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        }

        .socialMediaButtons button.active span {
          font-size: 1.6rem;
          margin-right: 10px;
          color: white;
        }

        .socialMediaButtons button.active img {
          width: 100px;
          filter: none;
        }

        .boxTable {
          width: 100%;
          margin-bottom: 50px;
        }

        .headerTable {
          width: 100%;
          margin: 1.5rem 0 3px 0;
          padding: 0.5rem;
          display: flex;
          justify-content: center;
          font-size: larger;
          font-weight: 700;
          background-color: #1e74bd;
          color: white;
        }

        .bodyTable ul {
          display: flex;
          margin: 2px 0 2px 0;
        }

        .bodyTable ul li {
          margin: 0 2px 0 2px;
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          @apply productListColor;
        }

        .bodyTable ul li:first-child {
          min-width: 25%;
          justify-content: left;
        }

        .bodyTable ul li:first-child span {
          border-right: 1px solid #1e74bd;
          border-radius: 0;
          width: 20%;
          margin-right: 5px;
        }

        .bodyTable ul li:first-child svg {
          padding-right: 10px;
          fill: #1e74bd;
          margin: 0 10px 0 15px;
        }

        .bodyTable img {
          padding-right: 10px;
          margin: 0 10px 0 15px;
        }

        .bodyTable ul li:nth-child(2) {
          width: 100%;
          justify-content: flex-start;
          height: auto;
        }

        @media screen and (max-width: 770px) {
          .socialMediaButtons .row div {
            width: auto;
          }
          
          .socialMediaButtons button {
            width: auto !important;
          }

          .socialMediaButtons button img {
            width: 25px;
            filter: grayscale(100%);
          }

          .socialMediaButtons span {
            font-size: 0.5rem;
            background-color: var(--color-black-200);
            margin-right: 0;
            padding: 3px 2px 3px 2px;
            color: var(--color-black-400);
          }

          .socialMediaButtons button.active span {
            font-size: 1rem;
            margin-right: -10px;
            padding: 2px;
          }

          .socialMediaButtons button.active img {
            width: 85px; 
            filter: none;
          }

          .bodyTable ul {
            display: block;
            margin-bottom: 1rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
              rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
            border-bottom: 0.4px solid #1e74bd;
          }

          .bodyTable ul li {
            width: 100% !important;
            justify-content: center;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2 }}
        className="flex col-span-12 justify-center"
      >
        <section className="my-28 productBgColor mx-1 sm:m-10">
          <div>
            <h2 className="text-center mx-auto font-semibold text-xl sm:text-2xl md:text-3xl px-4 py-2">
              {t("title")}
            </h2>
            <p className="text-center my-8 text-lg">
              {t("description")}
            </p>
          </div>

          <div className="socialMediaButtons">
            <div className="container flex">
              <div className="flex mx-auto items-center">
                <button
                  className={miniBoxProduct ? "active" : ""}
                  onClick={() => {
                    setMiniBoxProduct(true);
                    setMegaBoxProduct(false);
                    setProBoxProduct(false);
                  }}
                >
                  <span>MiniBox</span>
                  <Image src={GoogleMiniBox} alt="Sosyal Medya Reklamı: Mini Kutu" />
                </button>
              </div>

              <div className="flex mx-auto items-center">
                <button
                  className={megaBoxProduct ? "active" : ""}
                  onClick={() => {
                    setMiniBoxProduct(false);
                    setMegaBoxProduct(true);
                    setProBoxProduct(false);
                  }}
                >
                  <span>MegaBox</span>
                  <Image src={GoogleMegaBox} alt="Sosyal Medya Reklamı: Mega Kutu" />
                </button>
              </div>

              <div className="flex mx-auto items-center">
                <button
                  className={proBoxProduct ? "active" : ""}
                  onClick={() => {
                    setMiniBoxProduct(false);
                    setMegaBoxProduct(false);
                    setProBoxProduct(true);
                  }}
                >
                  <span>ProBox</span>
                  <Image src={GoogleProBox} alt="Sosyal Medya Reklamı: Pro Kutu" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            {miniBoxProduct && <GoogleBoxesMini />}
            {megaBoxProduct && <GoogleBoxesMega />}
            {proBoxProduct && <GoogleBoxesPro />}
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default GoogleProduct;

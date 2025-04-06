import Image from "next/image";
import PhoneSvg from "./InfoSlider/SliderSVG/PhoneSvg";
import "./MetaInfo.css";
import { useTranslations } from "next-intl";

function MetaInfo() {

   const t = useTranslations("MetaPage")

  return (
    <section className="mb-20 callToAction">

      <div className="container mx-auto p-4 ocean-shadow relative ">

        <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap ">

          <div className="flex flex-col items-center sm:w-1/2 text-center lg:text-left">
            <h1 className="text-primary text-2xl font-bold tracking-widest text-center">
              {t("title")}    
            </h1>
            <p className="mt-4 text-center">
              {t("description")}    
            </p>
          </div>


          <div className="relative flex justify-center items-center mt-5 size-3/4 sm:w-1/4 lg:w-3/7 bg">
            <div className="absolute image-container" style={{ top: "15%", left: "-5%" }}>
              <Image
                src="/images/instagram.webp"
                width={70}
                height={70}
                style={{ rotate: "-45deg" }}
                alt="Instagram"
                quality={90}
                loading="lazy"
              />
            </div>
            <div className="absolute image-container" style={{ bottom: "15%", left: "-5%" }}>
              <Image
                src="/images/facebook.webp"
                width={70}
                height={70}
                style={{ rotate: "-45deg" }}
                alt="Facebook"
                quality={90}
                loading="lazy"
              />
            </div>
            <div className="absolute image-container" style={{ right: "-5%" }}>
              <Image
                src="/images/whatsapp.webp"
                width={70}
                height={70}
                style={{ rotate: "45deg" }}
                alt="WhatsApp"
                quality={90}
                loading="lazy"
              />
            </div>

            {/* Telefon SVG */}
            <PhoneSvg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetaInfo;

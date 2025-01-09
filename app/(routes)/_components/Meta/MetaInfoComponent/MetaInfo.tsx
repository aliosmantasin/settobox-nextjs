import Image from "next/image";
import PhoneSvg from "./InfoSlider/SliderSVG/PhoneSvg";
import "./MetaInfo.css";

function MetaInfo() {
  return (
    <section className="mb-20 callToAction">

      <div className="container mx-auto p-4 ocean-shadow relative ">

        <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap ">

          <div className="flex flex-col items-center sm:w-1/2 text-center lg:text-left">
            <h1 className="text-primary text-2xl font-bold tracking-widest text-center">
              Facebook <span className="secondary">Instagram</span> Sponsorlu Reklam Verme ve Hesap Yönetimi
            </h1>
            <p className="mt-4 text-center">
              Etkili sosyal medya stratejileri, kurumsal kimlik ve yaratıcı içerikler marka bilinirliğini artırır,
              müşteri etkileşimini güçlendirir ve dönüşüm oranlarını yükseltir. Hedef kitlenize ulaşmak ve etkileşim
              sağlamak için Meta uygulamalarından ve reklam gücünden yararlanın.
            </p>
          </div>


          <div className="relative flex justify-center items-center mt-5 size-3/4 sm:w-1/4 lg:w-3/7 bg">
            <div className="absolute image-container" style={{ top: "15%", left: "-5%" }}>
              <Image
                src="/instagram.webp"
                width={70}
                height={70}
                style={{ rotate: "-45deg" }}
                alt="Instagram"
            
              />
            </div>
            <div className="absolute image-container" style={{ bottom: "15%", left: "-5%" }}>
              <Image
                src="/facebook.webp"
                width={70}
                height={70}
                style={{ rotate: "-45deg" }}
                alt="Facebook"
              />
            </div>
            <div className="absolute image-container" style={{ right: "-5%" }}>
              <Image
                src="/whatsapp.webp"
                width={70}
                height={70}
                style={{ rotate: "45deg" }}
                alt="WhatsApp"
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

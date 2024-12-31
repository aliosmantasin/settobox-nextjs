import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "../../Loadling/Loading";
import "./DijitalDonusumKutusu.css";
import { useTheme } from "next-themes";

const DijitalDonusumKutusu = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;

  return (
    <section className="py-10 flex">
      <div className="container flex flex-wrap mx-auto p-10">
        
        {/* Mobile title */}
        <div className="block sm:hidden text-center mb-6">
          <h3 className="text-xl text-primary">
            İşletmenizin Online Varlıklarının Tümüyle Yönetilmesini İster misin?
          </h3>
        </div>

        {/* Image section */}
        <div className={`flex sm:w-1/2 lg:w-2/4 justify-center items-center ${currentTheme === "dark" ? "gridBoxDark" : "gridBox"} relative`}>
          {!isImageLoaded && <Loading />}
          <Image
            src="/DigitalDonusumKutusu.webp"
            alt="DijitalDonusumKutusu Hizmet Kutusu"
            className={`w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px] transition-opacity duration-300 ease-in-out ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
            width={500}
            height={500}
          />
          <div className="boxContent">
            <span className="w-2/4 boxBlueContent" />
            <span className="w-2/4 boxPurpleContent" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex sm:w-1/2 lg:w-2/4 xl:w-2/4 justify-center items-center">
          <div className="p-6 sm:p-8">
            <h3 className="text-3xl text-primary hidden sm:block mb-6">
              İşletmenizin Online Varlıklarının Tümüyle Yönetilmesini İster misin?
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-base mb-2">
                <span className="text-primary">Kullanıcı deneyimi ile tasarlanmış ücretsiz bir website</span>
              </li>
              <li className="text-base mb-2">
                <span className="text-primary">Facebook | Instagram yönetimi ve reklam hizmeti</span>
              </li>
              <li className="text-base mb-2">
                <span className="text-primary">Google haritalar kayıt + Google Ads reklam hizmeti</span>
              </li>
            </ul>
            <p className="text-base mb-4">
              Dijital dönüşüm kutusu küçük ve orta büyüklükteki işletmeler için tasarlanmıştır.
            </p>
            <Link href="/dijital-pazarlama-donusum-kutusu">
              <button className="mt-4 px-6 py-2 border-2 border-primary text-primary font-semibold w-full sm:w-auto">
                Daha Fazla İncele
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DijitalDonusumKutusu;

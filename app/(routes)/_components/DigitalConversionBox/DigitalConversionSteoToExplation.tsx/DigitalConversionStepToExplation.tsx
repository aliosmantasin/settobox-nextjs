"use client"
import { MdAdd, MdOutlineDragHandle } from "react-icons/md";
import { FcGoogle, FcTemplate } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "./DigitalConversionStepToExplation.css";

const DigitalConversionStepToExplation = () => {
  const [showEffect, setShowEffect] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEffect(true);
    }, 1); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);


  return (
    <section className="step-to-explation-section">

      <div className="header">
        <span className="secondary">Plansız Adımlar Atmak Yerine</span>
        <h2 className="step-title">Dijital Pazarlamayı Bir Strateji Haline Getirin</h2>
      </div>

      <div className="overflow-x-auto "> 
      {showEffect && (
      <div className=  {`${currentTheme === "dark" ? "w-full mx-auto digital-gridlineDark" : "w-full mx-auto digital-gridline"}`}>
        <div className="all-service flex md:justify-center">
          {/* Meta Section */}
          <div className="mask-card">
            <div className="three-mask-svg">
            <div className={`${currentTheme === "dark" ? "three-mask-objectDark" : "three-mask-object"}`}></div>
              <div className="objective">
                <div>
                    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 85.18 56.58" width={35} height={35}>
                                      <g id="Layer_1-2" data-name="Layer_1">
                                          <path fill='#217ceb' d="M77.79,10.4C73.24,3.62,67.29,0,61.05,0c-3.72,0-7.41,1.66-10.84,4.64-2.32,2.02-4.46,4.57-6.46,7.27-2.46-3.11-4.74-5.49-6.95-7.29C32.61,1.2,28.59,0,24.54,0h0c-1.75,0-3.44.28-5.05.81-1.21.4-2.39.93-3.52,1.58-3.38,1.96-6.35,5-8.72,8.66C2.5,18.38,0,27.88,0,36.98c0,5.01.99,9.41,3,12.76,2.47,4.11,6.45,6.84,12.75,6.84,5.31,0,9.35-2.39,14.07-8.68,2.7-3.59,4.06-5.77,9.45-15.33l2.68-4.75c.22-.39.44-.78.66-1.17.22.35.43.71.65,1.08l7.64,12.76c2.57,4.3,5.91,9.07,8.76,11.76,3.71,3.5,7.07,4.33,10.87,4.33h0c6.1,0,9.73-3.22,11.59-6.44,1.93-3.33,3.06-7.55,3.06-13.29,0-9.66-2.42-19.01-7.4-26.44ZM34.65,25.55c-2.69,4.13-6.68,10.71-10.07,15.4-4.23,5.85-6.43,6.45-8.82,6.45-1.86,0-3.68-.84-4.91-2.82h0c-.93-1.51-1.65-4.01-1.65-7.26,0-7.89,2.23-16.1,5.89-21.61h0c1.13-1.71,2.36-3.16,3.68-4.24.38-.31.77-.59,1.16-.84s.8-.47,1.21-.65c.21-.09.41-.18.62-.25.84-.3,1.72-.46,2.62-.46,4.49,0,7.3,2.81,9.49,5.13,1.09,1.16,2.61,3.08,4.38,5.6l-3.62,5.56ZM64.63,43.83c-1.76-2.14-4.77-6.67-10.05-15.47l-2.19-3.65c-1.56-2.6-3.04-4.94-4.46-7.04.25-.39.5-.78.76-1.15,3.98-5.91,7.52-9.23,11.92-9.23,4.07,0,7.76,2.69,10.62,7.09,4.02,6.21,5.84,14.89,5.84,22.72h0c0,.58-.02,1.16-.05,1.72-.02.28-.04.56-.06.83-.04.47-.1.93-.17,1.38-.61,3.67-2.32,6.37-6.24,6.37h0c-2.06,0-3.64-.82-5.91-3.56Z" />
                                      </g>
                     </svg>
                </div>
                <p className={`${currentTheme === "dark" ? "icon-textDark" : "icon-text"}`}>Meta</p>
              </div>
              <div className="motion-box motion-box-meta"></div>
            </div>
          </div>

          <div className="custom-icon-card">
            <MdAdd className="text-3xl mx-auto" />
          </div>

          {/* Google Section */}
          <div className="mask-card">
            <div className="three-mask-svg">
            <div className={`${currentTheme === "dark" ? "three-mask-objectDark" : "three-mask-object"}`}></div>
              <div className="objective">
                <div className="">
                <FcGoogle className="text-3xl mx-auto"/>
                </div>
                <p className={`${currentTheme === "dark" ? "icon-textDark" : "icon-text"}`}>Google</p>
              </div>
              <div className="motion-box motion-box-google"></div>
            </div>
          </div>

          <div className="custom-icon-card">
            <MdAdd className="text-3xl mx-auto" />
          </div>

          {/* Web Section */}
          <div className="mask-card">
            <div className="three-mask-svg">
            <div className={`${currentTheme === "dark" ? "three-mask-objectDark" : "three-mask-object"}`}></div>
              <div className="objective">
                <div>
                  <FcTemplate className="text-3xl mx-auto"/>
                </div>
                <p className={`${currentTheme === "dark" ? "icon-textDark" : "icon-text"}`}>Web</p>
              </div>
              <div className="motion-box motion-box-web"></div>
            </div>
          </div>

          <div className="custom-icon-card">
            <MdOutlineDragHandle className="text-3xl mx-auto" />
          </div>

          {/* High Conversion Section */}
          <div className="mask-card high-conversion rounded-sm">
            <p>
           Yüksek Dönüşüm
            </p>
          </div>
        </div>
      </div>
      )}

      </div>

      <div className="description">
        <p>
          Müşteri çekmek, satışları artırmak, marka bilinirliği oluşturmak, hedef kitleye ulaşmak, rekabet avantajı
          sağlamak gibi pazarlama amaçlarımız, belirli bir hedef doğrultusunda kullandığımız dijital pazarlama araçlarıyla
          sağlanmaktadır. Dijital pazarlamayı bir strateji haline getirerek kontrollü reklam planlamaları yaparak orta ve uzun
          vadede hem bütçe optimizasyonu yapmış oluyoruz hem de marka bilinirliğini artırarak hedeflenen dönüşümü sağlamış
          oluyoruz. Dijital Dönüşüm Kutusu tamamen{" "}
          <span className="highlight">küçük ve orta büyüklükteki işletmeler</span> için tasarlanmıştır.
        </p>
      </div>
      
    </section>
  );
};

export default DigitalConversionStepToExplation;

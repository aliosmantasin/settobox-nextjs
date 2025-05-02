"use client";
import { AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import ShowLocationVideo from "./LocalMarketingComponent/ShowLocationVideo";
import { MdCheckCircle } from "react-icons/md";



const ShowLocationComponent = () =>{

  const { theme, resolvedTheme } = useTheme();
  const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;
 

  
  return (
    <section className="py-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6">
   
          {/* Sol Kutu */}
          <div className={`flex w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5  justify-center items-center mx-auto ${currentTheme === "dark" ? "gridBoxDark" : "gridBox"} relative`}>
          <ShowLocationVideo/>
          <div className="boxContent">
            <span className="w-2/4 boxBlueContent" />
            <span className="w-2/4 boxPurpleContent" />
          </div>
        </div>

    
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5 justify-center items-center mx-auto">
     
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
              Marka Bilinirliği Reklam Kreatifi
            </h2>

         
            <div className="space-y-2 mb-4">
            <li className="flex items-center text-lg">
              <MdCheckCircle
                className="text-green-500 min-w-5 min-h-5 mr-2" />
              İşletmenin konum bilgisi animasyon tanıtım videosu veya işinizle alakalı bir kesit
            </li>

            <li className="flex items-center text-lg">
              <MdCheckCircle
                className="text-green-500 min-w-5 min-h-5 mr-2" />
              Bölgesel potansiyel müşterilerinizin tarafından bilinme
            </li>

         

            <li className="flex items-center text-lg">
              <MdCheckCircle
                className="text-green-500 min-w-5 min-h-5 mr-2" />
              Rekabette belirleyici marka olma
            </li>

           
            
            {/* Açıklama */}
            <p>
              Bölgesel rekabet belirleyici marka olma ve potansiyel müşterilerinizin tarafından bilinmek, hatırlanmak akla ilk gelen marka olabilecek
            </p>

           

            </div>

           

            {/* Uyarı Mesajı */}
            <div
              className={cn(
                "flex items-center p-4 my-3 rounded-lg bg-blue-50 border border-blue-400 text-blue-800 text-sm font-medium"
              )}
              role="alert"
            >
              <AlertCircle className="min-w-5 minh-5 mr-2 text-blue-500" />
              <span>Bu video referans amaçlı paylaşılmıştır. İşletmenizin reklamı için bu tarz konum bilgisi veren videolar seslendirme yaparak ve alt yazı ekleyerekte tanıtım videosu oluşuturulabilir..</span>
   
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default ShowLocationComponent;

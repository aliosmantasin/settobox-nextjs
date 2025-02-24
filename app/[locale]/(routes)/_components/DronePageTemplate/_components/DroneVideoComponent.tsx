"use client";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import DurunetVideoReferance from "./DroneVideosComponent/DurunetVideoReferance";
import { useTranslations } from "next-intl";


interface DroneVideoComponentProps {
  teritory:string;
}

const DroneVideoComponent: React.FC<DroneVideoComponentProps> = ({ teritory }) =>{

  const { theme, resolvedTheme } = useTheme();
  const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;
 
  const t = useTranslations("DronePage")
  const listed = t.raw(`${teritory}.droneVideoComponent.list`)
  return (
    <section className="py-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6">
   
          {/* Sol Kutu */}
          <div className={`flex w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5  justify-center items-center mx-auto ${currentTheme === "dark" ? "gridBoxDark" : "gridBox"} relative`}>
          <DurunetVideoReferance/>
          <div className="boxContent">
            <span className="w-2/4 boxBlueContent" />
            <span className="w-2/4 boxPurpleContent" />
          </div>
        </div>

    
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5 justify-center items-center mx-auto">
     
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
              {t(`${teritory}.droneVideoComponent.title`)}
            </h2>

         
            <div className="space-y-2 mb-4">
              {listed.map((item:string, index:number) => (
                <li key={index} className="flex items-center text-lg">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                    {item}
                </li>
              ))}
            </div>

            {/* Açıklama */}
            <p>
            {t.rich(`${teritory}.droneVideoComponent.description`, {
                strong: (chunks) =><strong>{chunks}</strong>,
                })}
            </p>

            {/* Uyarı Mesajı */}
            <div
              className={cn(
                "flex items-center p-4 my-3 rounded-lg bg-blue-50 border border-blue-400 text-blue-800 text-sm font-medium"
              )}
              role="alert"
            >
              <AlertCircle className="w-5 h-5 mr-2 text-blue-500" />
              <span>{t(`${teritory}.droneVideoComponent.span`)}</span>
   
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default DroneVideoComponent;

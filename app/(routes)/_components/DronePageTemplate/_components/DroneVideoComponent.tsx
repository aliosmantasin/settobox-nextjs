"use client";

import { AlertCircle, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import DurunetVideoReferance from "./DroneVideosComponent/DurunetVideoReferance";


interface DroneVideoComponentProps {
  droneVideoData: {
    title: string,
    subtitle: string[],
    description:string
  };
}

const DroneVideoComponent: React.FC<DroneVideoComponentProps> = ({ droneVideoData }) =>{
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;

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
              {droneVideoData.title}
            </h2>

         
            <div className="space-y-2 mb-4">
              {droneVideoData.subtitle.map((subtitle, index) => (
                <p key={index} className="flex items-center text-lg">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                  {subtitle}
                </p>
              ))}
            </div>

            {/* Açıklama */}
            <p
              className="text-base mb-4" dangerouslySetInnerHTML={{ __html: droneVideoData.description }}
            ></p>

            {/* Uyarı Mesajı */}
            <div
              className={cn(
                "flex items-center p-4 rounded-lg bg-blue-50 border border-blue-400 text-blue-800 text-sm font-medium"
              )}
              role="alert"
            >
              <AlertCircle className="w-5 h-5 mr-2 text-blue-500" />
              <span>Bu tanıtım videosu referans amaçlı paylaşılmıştır.</span>
   
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default DroneVideoComponent;

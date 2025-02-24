"use client";

import { AlertCircle, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

import MapVideoReference from "../MapVideoComponet/MapVideosReferance";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

interface MapVideoComponentProps {
  teritory: string;
}

const MapVideoComponent: React.FC<MapVideoComponentProps> = ({ teritory }) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;

  const t = useTranslations("DronePage")
  const listed = t.raw(`${teritory}.mapVideoComponent.list`)

  return (
    <section className="py-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6">
       
       
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5 justify-center items-center mx-auto">
          
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
              {t(`${teritory}.mapVideoComponent.title`)}
            </h2>

   
            <div className="space-y-2 mb-4">
              {listed.map((item:string, index:number) => (
                <p key={index} className="flex items-center text-lg">
                  <Circle className="text-primary w-4 h-4 mr-2" />
                  {item}
                </p>
              ))}
            </div>

   
            <p>
            {t.rich(`${teritory}.mapVideoComponent.description`, {
              strong: (chunks) => <strong className="underline">{chunks}</strong>,
            })}
            </p>

            {/* Uyarı Mesajı */}
            <div
              className={cn(
                "flex items-center p-4 mt-3 rounded-lg bg-blue-50 border border-blue-400 text-blue-800 text-sm font-medium"
              )}
              role="alert"
            >
              <AlertCircle className="w-5 h-5 mr-2 text-blue-500" />
              <span>{t(`${teritory}.mapVideoComponent.span`)}</span>
            </div>
          </div>

              
          <div className={`w-full sm:w-3/4 md:w-3/4 lg:w-3/6 justify-center items-center mx-auto ${currentTheme === "dark" ? "gridBoxDark" : "gridBox"} relative`}>
          <MapVideoReference/>
      
          <div className="boxContent">
            <span className="w-2/4 boxBlueContent" />
            <span className="w-2/4 boxPurpleContent" />
          </div>
          </div>
      
      </div>
    </section>
  );
};

export default MapVideoComponent;

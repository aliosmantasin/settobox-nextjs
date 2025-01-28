"use client"
import { useEffect, useRef } from "react";
import { MdArrowDropDownCircle, MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import Link from "next/link";
import Lottie from "lottie-web";


    // Props tipini tanımlıyoruz
    interface AllinBoxProps {
        onSubjectSelect: (section: "meta") => void;
        onLoad?: () => void;
    }


const AllinBox: React.FC<AllinBoxProps> = ({ onSubjectSelect, onLoad }) => {
    const animationContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (animationContainer.current) {
        const animInstance = Lottie.loadAnimation({
          container: animationContainer.current, 
          
          renderer: "svg", 
          loop: false, 
          autoplay: true, 
          path: "/data/All-in-SetToBox.json", 
        });
  
        if (onLoad) {
          onLoad();
        }
  
        return () => {
          animInstance.destroy(); 
        };
      }
    }, [onLoad]);

   
    // Redux store'dan verileri çekiyoruz
    const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
    const data = sectorData[selectedSector].allInBox;

    console.log("Gelen Data verisi",data);
    // `data` yüklendi mi diye kontrol edelim
    if (!data) return null;

    return (
        <section className="my-10 relative">

            <div className="max-w-screen-xl flex flex-wrap mx-auto items-center">

             <div  className="flex mx-auto p-5  sm:w-2/4 md:w-2/4 md:p-10 lg:w-2/5 lg:p-10"
                ref={animationContainer} 
                style={{height:500}}/> 
         
 
            <div className="w-full p-2 sm:w-3/4 md:w-2/4 lg:w-3/5 items-center sm:items-start sm:text-center md:text-left mx-auto">
                <h1         
                    className="text-3xl font-bold text-primary text-center sm:text-start p-2 sm:p-0"
                >
                    {data.headerTitle}
                </h1>

                <p
                
                    className="mt-4"
                >
                    {data.headerDescription}
                </p>

                <div className="mt-10 flex sm:flex-row justify-center md:justify-start items-center">
                    {/* "Nasıl Yapıyoruz?" butonuna tıklandığında onSubjectSelect('meta') çağrılıyor */}
                    <Button
                        variant="ghost"
                        className="text-primary  sm:mb-0 sm:mr-4 flex items-center"
                        onClick={() => onSubjectSelect("meta")}
                    >
                
                        <MdArrowDropDownCircle className="mr-2" /> Nasıl Yapıyoruz?
                    </Button>

                    <Link href="/dijital-pazarlama-donusum-kutusu">
                        <Button variant="outline" className="">
                            Dijital Dönüşüm Kutusu
                            <MdKeyboardArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
            </div>
        </section>
    );
};

export default AllinBox;

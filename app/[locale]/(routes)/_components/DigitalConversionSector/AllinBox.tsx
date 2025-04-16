"use client"
import { MdArrowDropDownCircle, MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import Link from "next/link";
import ConversionAnimasyonJson from "../AnimasyonData/ConversionAnimasyonJson";

// Props tipini tanımlıyoruz
interface AllinBoxProps {
    onSubjectSelect: (section: "meta") => void;
    onLoad?: () => void;
}

const AllinBox: React.FC<AllinBoxProps> = ({ onSubjectSelect, onLoad }) => {
    // Redux store'dan verileri çekiyoruz
    const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
    const data = sectorData[selectedSector].allInBox;
    

    // `data` yüklendi mi diye kontrol edelim
    if (!data) return null;

    return (
        <section className="my-10 relative">
            <div className="max-w-screen-xl flex flex-wrap mx-auto items-center">
                <div className="w-full sm:w-3/4 md:w-1/2 flex mx-auto p-5">
                {data?.animation && (
                    <div className="w-full">
                        <ConversionAnimasyonJson 
                            useBlob={true}
                            onLoad={onLoad}
                        />
                    </div>
                )}
                </div>
                <div className="w-full md:w-2/4 items-center sm:items-start sm:text-center md:text-left mx-auto">
                    <h1         
                        className="text-3xl font-bold text-primary text-center sm:text-center md:text-start p-2 sm:p-0" dangerouslySetInnerHTML={{ __html: data.headerTitle }}
                    />

                    <p
                        className="mt-2 text-center sm:text-center md:text-start p-1"
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
                                Dijital Dönüşüm Kutusu İncele
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

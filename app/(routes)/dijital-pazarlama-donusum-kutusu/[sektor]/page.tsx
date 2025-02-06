"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSector } from "@/store/sectorSlice";
import { RootState } from "@/store";
import SectorTemplate from "../../_components/DigitalConversionSector/SectorTemplate";


type Sector = "hizmetsektoru" | "egitimsektoru" | "sagliksektoru";

interface PageProps {
  params: Promise<{ sektor: Sector }>; // params artık bir Promise
}

const SectorPage = ({ params }: PageProps) => {
  const dispatch = useDispatch();
  const [sektor, setSektor] = useState<Sector | null>(null);



  // Promise olan params'ı çözmek için useEffect kullanımı
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setSektor(resolvedParams.sektor);
    };

    unwrapParams();
  }, [params]);

  // Redux state'i güncelle
  useEffect(() => {
    if (sektor) {
      dispatch(setSector(sektor));
    }
  }, [sektor, dispatch]);

  // Redux store'dan veriyi çek
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);

  console.log("Seçilen Sektör:",selectedSector)

  // Eğer veri mevcut değilse hata sayfası
  if (!sectorData || !selectedSector) {
    return <div>404 - Sektör Bulunamadı</div>;
  }

  return <SectorTemplate />;
};

export default SectorPage;

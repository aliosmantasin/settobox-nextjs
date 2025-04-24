"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSector } from "@/store/sectorSlice";
import { RootState } from "@/store";
import dynamic from 'next/dynamic';

// Lazy load SectorTemplate
const SectorTemplate = dynamic(
  () => import("../../_components/DigitalConversionSector/SectorTemplate").then(mod => {
    console.log('SectorTemplate component yüklendi');
    return mod;
  }),
  {
    loading: () => <div>Yükleniyor...</div>,
    ssr: false
  }
);

type Sector = "hizmetsektoru" | "egitimsektoru" | "sagliksektoru";

interface PageProps {
  params: { sektor: Sector };
}

const SectorPage = ({ params }: PageProps) => {
  const dispatch = useDispatch();
  const [sektor, setSektor] = useState<Sector | null>(null);

  console.log('Page Component - Gelen params:', params);

  useEffect(() => {
    console.log('useEffect[params] - params değişti:', params);
    if (params?.sektor) {
      console.log('useEffect[params] - Sektör state\'i güncelleniyor:', params.sektor);
      setSektor(params.sektor);
    }
  }, [params]);

  useEffect(() => {
    console.log('useEffect[sektor] - sektor değişti:', sektor);
    if (sektor) {
      console.log('useEffect[sektor] - Redux store güncelleniyor:', sektor);
      dispatch(setSector(sektor));
    }
  }, [sektor, dispatch]);

  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  console.log('Redux store\'dan alınan veriler:', { sectorData, selectedSector });

  if (!sectorData || !selectedSector) {
    console.log('Hata: Sektör verileri bulunamadı');
    return <div>404 - Sektör Bulunamadı</div>;
  }

  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <SectorTemplate />
    </Suspense>
  );
};

export default SectorPage;

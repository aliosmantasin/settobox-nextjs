"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSector } from "@/store/sectorSlice";
import { RootState } from "@/store";
import dynamic from 'next/dynamic';

// Lazy load SectorTemplate
const SectorTemplate = dynamic(
  () => import("../../_components/DigitalConversionSector/SectorTemplate"),
  {
    loading: () => <div>Yükleniyor...</div>,
    ssr: false
  }
);

type Sector = "hizmetsektoru" | "egitimsektoru" | "sagliksektoru";

interface PageProps {
  params: Promise<{ sektor: Sector }>; // 🚨 `params` artık bir Promise
}

const SectorPage = ({ params }: PageProps) => {
  const dispatch = useDispatch();
  const [sektor, setSektor] = useState<Sector | null>(null);

  // ✅ `params` bir Promise olduğu için `React.use()` ile çöz
  const resolvedParams = React.use(params);

  useEffect(() => {
    if (resolvedParams) {
      setSektor(resolvedParams.sektor);
    }
  }, [resolvedParams]);

  useEffect(() => {
    if (sektor) {
      dispatch(setSector(sektor));
    }
  }, [sektor, dispatch]);

  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);

  if (!sectorData || !selectedSector) {
    return <div>404 - Sektör Bulunamadı</div>;
  }

  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <SectorTemplate />
    </Suspense>
  );
};

export default SectorPage;

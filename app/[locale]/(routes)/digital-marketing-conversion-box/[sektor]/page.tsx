"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSector } from "@/store/sectorSlice";
import { RootState } from "@/store";
import SectorTemplate from "../../_components/DigitalConversionSector/SectorTemplate";

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

  return <SectorTemplate />;
};

export default SectorPage;

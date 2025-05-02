"use client";

import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setSector } from "@/store/sectorSlice";
import { RootState } from "@/store";
import SectorTemplate from "../../_components/DigitalConversionSector/SectorTemplate";
import { validSectors } from '../_lib/generateParams';
import type { Sector } from '../_lib/generateParams';

interface SectorClientPageProps {
  params: {
    sektor: string;
    locale: string;
  };
}

export default function SectorClientPage({ params }: SectorClientPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { sectorData, selectedSector } = useSelector((state: RootState) => state.sector);
  
  console.log('Debug - Client component params:', { 
    sektor: params?.sektor,
    locale: params?.locale,
    validSectors
  });
  
  const isValidSector = useMemo(() => {
    if (!params?.sektor) return false;
    
    try {
      const result = validSectors.includes(params.sektor as Sector);
      console.log('Debug - Client validation:', { 
        sektor: params.sektor, 
        result,
        validSectors
      });
      return result;
    } catch (error) {
      console.error('Error in sector validation:', error);
      return false;
    }
  }, [params?.sektor]);

  useEffect(() => {
    if (!params?.locale || !params?.sektor) {
      console.error('Missing required params:', params);
      return;
    }

    if (!isValidSector) {
      const notFoundPath = `/${params.locale}/dijital-pazarlama-donusum-kutusu/404`;
      console.log('Debug - Client redirecting to:', notFoundPath);
      router.replace(notFoundPath);
      return;
    }

    try {
      dispatch(setSector(params.sektor as Sector));
    } catch (error) {
      console.error('Error dispatching sector:', error);
      const notFoundPath = `/${params.locale}/dijital-pazarlama-donusum-kutusu/404`;
      router.replace(notFoundPath);
    }
  }, [params?.sektor, params?.locale, dispatch, router, isValidSector]);

  if (!params?.sektor || !params?.locale || !isValidSector || !sectorData || !selectedSector) {
    return <div>Yükleniyor...</div>;
  }

  return <SectorTemplate />;
} 
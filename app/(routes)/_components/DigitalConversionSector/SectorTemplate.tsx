"use client"

import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllinBox from '../../_components/DigitalConversionSector/AllinBox';
import ChooseSubject from '../../_components/DigitalConversionSector/ChooseService';
import BlobsAnimations from '../../_components/DigitalConversionSector/AllinBoxComponents/BlobsAnimations';
import { MaskSvg } from '../../_components/libs/Mask/Mask';
import MetaManage from '../../_components/DigitalConversionSector/MetaManage';
import GoogleManage from '../../_components/DigitalConversionSector/GoogleManage';
import WebManage from '../../_components/DigitalConversionSector/WebManage';
import { setSector } from '@/store/sectorSlice';
import { RootState } from '@/store';

// import { sectorImgDataStore } from '../component/SectorComponent/sectorImgDataStore';
// import { sectorVideoDataStore } from '../component/SectorComponent/sektorVideoDataStore'


const SectorTemplate: React.FC = () => {
    const dispatch = useDispatch();
    const sectorData = useSelector((state: RootState) => state.sector.sectorData);
    const selectedSector = useSelector((state: RootState) => state.sector.selectedSector);

    useEffect(() => {
        // Örnek olarak "hizmetsektoru" set ediliyor
        dispatch(setSector('hizmetsektoru'));
      }, [dispatch]);


    // Mevcut sektöre göre conditional rendering yapılması için data alıyoruz
    const sector = sectorData[selectedSector];
    const hasMetaManage = sector?.metaManage;
    const hasGoogleManage = sector?.googleManage;
    const hasWebManage = sector?.webManage;


  const handleScrollToSection = (section: 'meta' | 'google' | 'web') => {
    const refMap = {
      meta: metaManageRef,
      google: googleManageRef,
      web: webManageRef,
    };
    refMap[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const metaManageRef = useRef<HTMLDivElement | null>(null);
  const googleManageRef = useRef<HTMLDivElement | null>(null);
  const webManageRef = useRef<HTMLDivElement | null>(null);


  return (
    <>
      <AllinBox onSubjectSelect={handleScrollToSection} />
      <section>
        <BlobsAnimations />
      </section>
      <MaskSvg />
      <ChooseSubject onSubjectSelect={handleScrollToSection} />

      {/* MetaManage bileşeni sadece metaManage verisi varsa render edilecek */}
      {hasMetaManage && (
        <section ref={metaManageRef}>
          <MetaManage />
        </section>
      )}

      {/* GoogleManage bileşeni sadece googleManage verisi varsa render edilecek */}
      {hasGoogleManage && (
        <section ref={googleManageRef}>
          <GoogleManage />
        </section>
      )}

      {/* WebManage bileşeni sadece webManage verisi varsa render edilecek */}
      {hasWebManage && (
        <section ref={webManageRef}>
          <WebManage />
        </section>
      )}
    </>
  );
};

export default SectorTemplate;

"use client"

import React, { useRef, Suspense } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { RootState } from '@/store';

// Lazy load components
const AllinBox = dynamic(() => import('../../_components/DigitalConversionSector/AllinBox'), {
  loading: () => <div>Yükleniyor...</div>
});

const ChooseSubject = dynamic(() => import('../../_components/DigitalConversionSector/ChooseService'), {
  loading: () => <div>Yükleniyor...</div>
});

const BlobsAnimations = dynamic(() => import('../../_components/DigitalConversionSector/AllinBoxComponents/BlobsAnimations'), {
  loading: () => <div>Yükleniyor...</div>
});

const MaskSvg = dynamic(() => import('../../_components/libs/Mask/Mask').then(mod => ({ default: mod.MaskSvg })), {
  loading: () => <div>Yükleniyor...</div>
});

const MetaManage = dynamic(() => import('../../_components/DigitalConversionSector/MetaManage'), {
  loading: () => <div>Yükleniyor...</div>
});

const GoogleManage = dynamic(() => import('../../_components/DigitalConversionSector/GoogleManage'), {
  loading: () => <div>Yükleniyor...</div>
});

const WebManage = dynamic(() => import('../../_components/DigitalConversionSector/WebManage'), {
  loading: () => <div>Yükleniyor...</div>
});

const SectorTemplate: React.FC = () => {
    const sectorData = useSelector((state: RootState) => state.sector.sectorData);
    const selectedSector = useSelector((state: RootState) => state.sector.selectedSector);

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
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <AllinBox onSubjectSelect={handleScrollToSection} />
            </Suspense>
            
            <section>
                <Suspense fallback={<div>Yükleniyor...</div>}>
                    <BlobsAnimations />
                </Suspense>
            </section>
            
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <MaskSvg />
            </Suspense>
            
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <ChooseSubject onSubjectSelect={handleScrollToSection} />
            </Suspense>

            {hasMetaManage && (
                <section ref={metaManageRef}>
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <MetaManage />
                    </Suspense>
                </section>
            )}

            {hasGoogleManage && (
                <section ref={googleManageRef}>
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <GoogleManage />
                    </Suspense>
                </section>
            )}

            {hasWebManage && (
                <section ref={webManageRef}>
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <WebManage />
                    </Suspense>
                </section>
            )}
        </>
    );
};

export default SectorTemplate;

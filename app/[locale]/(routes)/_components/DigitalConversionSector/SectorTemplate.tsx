"use client";

// Server component olarak kalacak ana dosya

import dynamic from 'next/dynamic';

// Tüm componentleri dynamic import ile yükleyelim

// const BlobsAnimations = dynamic(() => import("./AllinBoxComponents/BlobsAnimations"), { ssr: false });
const ClientSideInteractions = dynamic(() => import("./ClientSideInteractions"), { ssr: false });
const GoogleManage = dynamic(() => import("./GoogleManage"), { ssr: false });
const MetaManage = dynamic(() => import("./MetaManage"), { ssr: false });
const WebManage = dynamic(() => import("./WebManage"), { ssr: false });

export default function SectorTemplate() {
    return (
        <div className="min-h-screen">
            <ClientSideInteractions />
            {/* <BlobsAnimations /> */}
           
            <section id="metaManage">
                <MetaManage />
            </section>
            <section id="googleManage">
                <GoogleManage />
            </section>
            <section id="webManage">
                <WebManage/>
            </section>
        </div>
    );
}

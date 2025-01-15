"use client"

import React, { useState } from 'react';
import Image from 'next/image'; // Next.js resim optimizasyonu
import Link from 'next/link';
import { Button } from '@/components/ui/button';


interface HeaderDroneProps {
  headerData: {
    headerTitle: string;
    headerDescription: string;
    alt: string;
  };
}

const HeaderDrone: React.FC<HeaderDroneProps> = ({ headerData }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative my-20">
      <div className='container max-w-screen-xl mx-auto p-4 flex flex-wrap justify-center'>

      <div className="w-full sm:w-8/12">
  
          {/* Resim Yüklenme Durumu */}
          {!isImageLoaded && <div className="loader">Loading...</div>}
          <Image
            src="/images/drone/drone.webp" // Static image path
            alt={headerData.alt}
            width={800}
            height={500}
            onLoad={() => setImageLoaded(true)}
            className="max-w-full"
          />
       
        </div>
        
        <div className="w-full sm:w-8/12 flex justify-center">
        <div className='text-center'>
          <h1 className="text-3xl font-bold text-primary mt-6">{headerData.headerTitle}</h1>
          <p className="mt-4">{headerData.headerDescription}</p>
        
            <Link href="tel:+905437214839">
              <Button className="btn btn-primary">Şimdi Ara!</Button>
            </Link>
        
          </div>
        </div>
        </div>
    </section>
  );
};

export default HeaderDrone;

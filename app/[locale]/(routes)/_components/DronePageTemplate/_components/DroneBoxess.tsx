'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import MiniDroneBox from './DroneBoxes/MiniDroneBox';
import MegaDroneBox from './DroneBoxes/MegaDroneBox';
import ProDroneBox from './DroneBoxes/ProDroneBox';

interface DroneBoxessProps {
  teritory: string;
}

const DroneBoxess: React.FC<DroneBoxessProps> = ({ teritory }) => {
  return (
    <section className='my-10 p-2 sm:p-0'>
      <div className='flex flex-col items-center'>
        <div className='container mx-auto mb-14 relative'>
          <Carousel opts={{ align: 'start' }} className='w-full'>
            <CarouselContent>
              {[MiniDroneBox, MegaDroneBox, ProDroneBox].map((BoxComponent, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex items-center justify-center p-6'>
                        <BoxComponent teritory={teritory} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Butonları içeri al ve mobilde küçült */}
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 shadow-md rounded-full md:p-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

DroneBoxess.displayName = 'DroneBoxess';

export default DroneBoxess;

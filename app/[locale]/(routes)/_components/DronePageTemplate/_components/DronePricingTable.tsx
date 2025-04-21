'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { MdCircle } from "react-icons/md";

interface DronePricingTableProps {
  teritory?: string;
}

const DronePricingTable: React.FC<DronePricingTableProps> = ({ teritory }) => {
  const t = useTranslations("DronePage");

  // Use translations for features
  const features = [
    t(`${teritory}.dronePricingTable.features.li1`),
    t(`${teritory}.dronePricingTable.features.li2`),
    t(`${teritory}.dronePricingTable.features.li3`),
    t(`${teritory}.dronePricingTable.features.li4`),
    t(`${teritory}.dronePricingTable.features.li5`),
    t(`${teritory}.dronePricingTable.features.li6`),
    t(`${teritory}.dronePricingTable.features.li7`),
    t(`${teritory}.dronePricingTable.features.li8`)
  ];

  return (
    <section className="my-10 p-2 sm:p-0">
      <div className="container mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg border cardBgColor">
          <div className="px-6 py-4 border-b">
            <h3 className="text-xl font-semibold text-center primary-light">{t(`${teritory}.dronePricingTable.title`)}</h3>
            <p className="text-center mt-2">{t(`${teritory}.dronePricingTable.subtitle`)}</p>
            <p className="font-bold text-center mt-4 text-xl">{t(`${teritory}.dronePricingTable.priceRange`)}</p>
          </div>

          {/* Mobile view - List format */}
          <div className="md:hidden">
            <ul className="py-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center py-3 px-4 cardHover">
                  <MdCircle className="mr-3 text-xs text-gray-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop view - Table format */}
          <div className="hidden md:block p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">{t(`${teritory}.dronePricingTable.tableHeader`)}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, index) => (
                  <TableRow key={index} className="cardHover">
                    <TableCell className="flex items-center py-3">
                      <MdCircle className="mr-3 text-xs text-gray-400" />
                      <span>{feature}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="px-6 py-4 ocean-shadow">
            <Link
              href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">
                {t(`${teritory}.dronePricingTable.whatsappContact`)}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DronePricingTable; 
"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Alert } from "@/components/ui/alert";
import { MdAdsClick } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Meta from "@/public/images/pro-box.webp";
import Google from "@/public/images/GooglePro.webp";
import Web from "@/public/images/megaWeb.webp";


const data = {
  meta: [
    { type: "Meta Setup", frequency: "2500₺ değerinde ücretsiz kurulum" },
    { type: "Reklam Türleri", frequency: "4 Adet" },
    { type: "Kurumsal Tasarım", frequency: "3750₺ değerinde ücretsiz tasarım" },
    { type: "Sosyal Medya İçerik Yönetimi", frequency: "Desteklenmektedir" },
  ],
  google: [
    { type: "Google Ads Hesabı", frequency: "Ücretsiz kurulum" },
    { type: "Reklam Türleri", frequency: "4 adet reklam türü" },
    { type: "Google İşletmem Hesabı", frequency: "1500₺ değerinde ücretsiz kurulum" },
  ],
  web: [
    { type: "Website Tasarım", frequency: "Ücretsiz sunulmaktadır" },
    { type: "Domain - Hosting", frequency: "İlk sene ücretsiz" },
    { type: "SSL Sertifikası", frequency: "Ücretsiz" },
  ],
};

export default function AdvantageConversion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);






  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderTable = (title: React.JSX.Element, rows: any[]) => (
    <div className="my-4 p-2 productBgBodyColor rounded-lg">
      <div className="flex items-center mb-2">{title}</div>
      <Table className="w-full">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.frequency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <>
      <div className="w-full p-1 sm:p-0">
        <Alert
          onClick={handleOpen}
          className="w-full text-left justify-start flex items-center cursor-pointer"
        >
          <Button variant="ghost">
            <MdAdsClick className="ml-2 rotate-12 text-blue-600" />
            Dijital Dönüşüm Kutusunun Avantajları
          </Button>
        </Alert>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg overflow-y-auto max-h-[80vh] sm:max-h-[%80] sm:h-auto">
            <DialogHeader>

              <DialogTitle className="flex items-center justify-between">
                <span>Dijital Dönüşüm Kutusunun Avantajları</span>
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm">
              Dijital Dönüşüm Kutusunda 3 farklı hizmetin bütünüyle ele alınarak
              işlenmesi ve yönetilmesi birçok avantaj sağlamıştır.
            </div>

            <div>
              {renderTable(
                <div className="flex items-center">
                  <Image src={Meta} width={35} alt="Meta ProBox" className="mr-2" />
                  <span className="text-blue-600 font-semibold">Meta - Instagram ve Facebook</span>
                </div>,
                data.meta
              )}
            </div>

            <div className="text-sm mt-4">
              <Link
                href="/instagram-sponsorlu-reklam"
                target="_blank"
                className="text-blue-600 flex items-center"
              >
                <MdAdsClick className="mr-2 rotate-12 text-blue-600" />
                ProBox Meta reklam kutusu referans alınmıştır.
              </Link>
            </div>

            <div>
              {renderTable(
                <div className="flex items-center">
                  <Image src={Google} width={35} alt="Google ProBox" className="mr-2" />
                  <span className="text-blue-600 font-semibold">Google Ads</span>
                </div>,
                data.google
              )}
            </div>

            <div className="text-sm mt-4">
              <Link
                href="/google-ads-reklam-yonetimi"
                target="_blank"
                className="text-blue-600 flex items-center"
              >
                <MdAdsClick className="mr-2 rotate-12 text-blue-600" />
                ProBox Google reklam kutusu referans alınmıştır.
              </Link>
            </div>

            <div>
              {renderTable(
                <div className="flex items-center">
                  <Image src={Web} width={35} alt="MegaWeb" className="mr-2" />
                  <span className="text-blue-600 font-semibold">Website Tasarım</span>
                </div>,
                data.web
              )}
            </div>

            <div className="text-sm mt-4">
              <Link
                href="/web-sitesi-yaptırma"
                target="_blank"
                className="text-blue-600 flex items-center"
              >
                <MdAdsClick className="mr-2 rotate-12 text-blue-600" />
                MegaWeb reklam kutusu referans alınmıştır.
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

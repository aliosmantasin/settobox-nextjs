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
import { useTranslations } from "next-intl";


export default function AdvantageConversion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const t = useTranslations("DigitalConversion")


  const data = {
    meta: [
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features1.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features1.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features2.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features2.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features3.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features3.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features4.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features4.frequency') },
    ],
    google: [
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features5.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features5.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features6.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features6.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features7.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features7.frequency') },
    ],
    web: [
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features8.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features8.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features9.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features9.frequency') },
      { type: t('dijitalMarketingConversionProduct.advantageConversion.features10.type'), frequency: t('dijitalMarketingConversionProduct.advantageConversion.features10.frequency') },
    ],
  };


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
          {t("dijitalMarketingConversionProduct.advantageConversion.title")}
          </Button>
        </Alert>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg overflow-y-auto max-h-[80vh] sm:max-h-[%80] sm:h-auto">
            <DialogHeader>

              <DialogTitle className="flex items-center justify-between">
                <span>{t("dijitalMarketingConversionProduct.advantageConversion.span")}</span> 
              </DialogTitle>
            </DialogHeader>
            <div className="text-sm">
            {t("dijitalMarketingConversionProduct.advantageConversion.description")}
            </div>

            <div>
              {renderTable(
                <div className="flex items-center">
                  <Image src={Meta} width={35} alt="Meta ProBox" className="mr-2" />
                  <span className="text-blue-600 font-semibold">
                    {t("dijitalMarketingConversionProduct.advantageConversion.span4")}
                  </span>
                </div>,
                data.meta
              )}
            </div>

            <div className="text-sm mt-4">
              <Link
                href= {t('dijitalMarketingConversionProduct.advantageConversion.link1')}
                target="_blank"
                className="text-blue-600 flex items-center"
              >
                <MdAdsClick className="mr-2 rotate-12 text-blue-600" />
                {t("dijitalMarketingConversionProduct.advantageConversion.span1")}
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
                href= {t('dijitalMarketingConversionProduct.advantageConversion.link2')}
                target="_blank"
                className="text-blue-600 flex items-center"
              >
                <MdAdsClick className="mr-2 rotate-12 text-blue-600" />
                {t("dijitalMarketingConversionProduct.advantageConversion.span3")}
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
                href= {t('dijitalMarketingConversionProduct.advantageConversion.link3')}
                target="_blank"
                className="text-blue-600 flex items-center"
              >
                <MdAdsClick className="mr-2 rotate-12 text-blue-600" />
                {t("dijitalMarketingConversionProduct.advantageConversion.span4")}
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

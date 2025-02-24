import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

export default function ContentMiniWeb() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const t = useTranslations("WebsitePage")

  const listed = t.raw("webDesignProduct.miniBox.contentMiniWeb.list1")
  const listed2 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list2")
  const listed3 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list3")
  const listed4 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list4")
  const listed5 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list5")
  const listed6 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list6")
  const listed7 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list7")
  const listed8 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list8")
  const listed9 = t.raw("webDesignProduct.miniBox.contentMiniWeb.list9")
  return (
    <>
      <span onClick={handleOpen} className=" underline cursor-pointer primary ml-1">
       {t("webDesignProduct.miniBox.contentMiniWeb.span1")}
      </span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">

           <DialogTitle>
          <p className="text-base">
          {t("webDesignProduct.miniBox.contentMiniWeb.description")}
          </p>
          </DialogTitle>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
            {t("webDesignProduct.miniBox.contentMiniWeb.subtitle1")}
            </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {listed.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle2")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {listed2.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle3")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed3.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle4")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed4.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle5")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed5.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle6")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed6.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle7")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed7.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
      
          </ul>
        
          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle8")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed8.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
         
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">
          {t("webDesignProduct.miniBox.contentMiniWeb.subtitle9")}
          </h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
          {listed9.map((item:string, index:number) => (
                <li key={index}>{item}</li>
            ))}
          </ul>

           <p>
            {t("webDesignProduct.miniBox.contentMiniWeb.description1")}
            </p>
           <p>
           {t.rich("webDesignProduct.miniBox.contentMiniWeb.description2", {
                strong: (chunks) => <strong className="primary-light">{chunks}</strong>, // <strong> etiketini işleme
              })}
           </p>
          
        </DialogContent>
      </Dialog>
    </>
  );
}

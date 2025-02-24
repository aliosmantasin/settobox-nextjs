import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";



export default function BusinessPro() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const t = useTranslations("MetaPage")
  const listItems = t.raw("proBox.bussinessPro.list"); // 🔹 `t.raw` 
  return (
    <>
      <Button variant="outline" onClick={handleOpen}>
        <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>                      
        <span>{t("proBox.bussinessPro.span")}</span>
      </Button>
   
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
      <DialogTitle><span>{t("proBox.bussinessPro.dialogTitle")}</span></DialogTitle>
      
          <p className="text-base ">
          {t("proBox.bussinessPro.p")}
          </p>
          <h2 className="mt-4 mb-2 text-lg font-semibold"> {t("proBox.bussinessPro.title")}</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            {listItems.map((item:string, index:number) =>(
                 <li key={index}>{item}</li>
            ))}
          </ul>
        </DialogContent>
       
      </Dialog>
    </>
  );
}

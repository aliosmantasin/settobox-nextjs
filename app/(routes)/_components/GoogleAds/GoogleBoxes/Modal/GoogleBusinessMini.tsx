import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export default function GoogleBusinessMini() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);


  return (
    <>
      <Button variant="outline" onClick={handleOpen}>
        <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>                      
        <p>MiniBox Kimler Tercih Edebilir?</p>
      </Button>
   
   
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
      <DialogTitle>Potansiyel Müşteri Odaklı</DialogTitle>
      
          <p className="text-base ">
          Özellikle bütçesi kısıtlı, online reklamcılığa yeni başlamak isteyen küçük işletmelerin
           en çok tercih ettiği reklam türü Google Arama Ağı reklam türüdür. Bu reklam türünde ürün/hizmet
            arayan internet kullacıları google arama ağı motorunda arama yaptıklarında karşılarına çıkan arama ağı
             reklam türüdür. Potansiyel müşteriler için önemli bir reklam türüdür.</p>
          <h2 className="mt-4 mb-2 text-lg font-semibold ">Kimler için uygundur?</h2>
          <ul className="max-w-md space-y-1  list-disc list-inside">
            <li>Özellikle yerel hizmet veren işletmeler için uygundur</li>
           
          </ul>
        
        </DialogContent>
       
      </Dialog>
    </>
  );
}

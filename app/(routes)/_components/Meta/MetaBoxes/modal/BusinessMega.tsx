import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export default function BusinessMega() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);


  return (
    <>
       <Button variant="outline" onClick={handleOpen}>
        <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>                      
        <p>MegaBox Kimler Tercih Edebilir?</p>
      </Button>
   
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-auto h-[80%]">
      <DialogTitle>Stratejik Reklam Yaklaşımı</DialogTitle>
      
          <p className="text-base ">
          MegaBox Meta Reklam kutusunun sunduğu reklam hizmetinde derinlemesine reklam stratejilerine önem verilir.
           Hem Meta uygulamarı hem de bir web site kullanılarak iletişim araçlarına trafik çekmek hedeflenir. Bunlar 
           arasında whatsapp iletişim, form doldurmak ve telefon aramaları da dahildir... Bu doğrultuda işletmeler 
           web siteleri sayesinde kurumsallığıda ön planda tutarak reklamlarda dönüşümleri artırmış olmaktadırlar.
            Aşağıdaki sektörlerin MegaBox reklam içeriğini kullanması uygundur.
          </p>
          <h2 className="mt-4 mb-2 text-lg font-semibold">Hangi Sektörker İçin Uygundur?</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Hizmet Sektörü</li>
            <li>Eğitim Sektörü</li>
            <li>Sağlık Sektörü</li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Not:</strong> Bu hizmeti web sitesi olmadan da kullanmak mümkündür.
          </p>
        </DialogContent>
       
      </Dialog>
    </>
  );
}

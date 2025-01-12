"use client"

import React, {useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export default function ConversionBusiness() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <Button variant="outline" onClick={handleOpen}>
        <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>                      
        <p>  Dijital Dönüşüm Kutusu Kimler Tercih Edebilir?</p>
      </Button>
   
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
      <DialogTitle> Dijital Dönüşüm Kutusu: Google, Meta ve Web Sitesi Entegrasyonu ve Bütünsel Yönetimi</DialogTitle>
      
          <p className="text-base ">
          İşletmenizin dijital dünyada sürdürülebilir başarıya ulaşmasını hedefleyen bu kutu hizmeti, Google ve Meta platformlarında
           stratejik reklam kampanyalarını profesyonel bir web sitesiyle entegre eder. Kısa vadeli kazançların ötesine geçerek, orta 
           ve uzun vadede markanızın bilinirliğini artırmayı, müşteri kitlenizi genişletmeyi ve online varlığınızı güçlendirmeyi amaçlar.
            Dijital pazarlama uzmanlarımız, bütçenizi etkili bir şekilde yönetip uzun vadeli büyüme sağlayacak sonuçlar elde etmenizi sağlar.
             Dijital Dönüşüm Kutusu hizmetine aşağıda ki gibi firmalar etkin olarak katılabilir.
          </p>
          <h2 className="mt-4 mb-2 text-lg font-semibold">Hangi Sektörker İçin Uygundur?</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Hizmet Sektörü</li>
            <li>Eğitim Sektörü</li>
            <li>Sağlık Sektörü</li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Not:</strong> Orta ve uzun vadede online varlığını güçlendirmek isteyen işletmeler Dijital Dönüşüm kutusundan faydalanabilir.
          </p>
        </DialogContent>
       
      </Dialog>
    </>
  );
}

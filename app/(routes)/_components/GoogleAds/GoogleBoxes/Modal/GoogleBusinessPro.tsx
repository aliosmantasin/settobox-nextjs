import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export default function GoogleBusinessPro() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);


  return (
    <>
      <Button variant="outline" onClick={handleOpen}>
        <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>                      
        <p>ProBox Kimler Tercih Edebilir?</p>
      </Button>
   
   
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
      <DialogTitle>İstikrarlı Bütçe - Derinlemesine Hedefleme - Yüksek Dönüşüm</DialogTitle>
      
          <p className="text-base ">
          ProBox hizmeti; uzun vadeli pazarlama stratejisi anlayışıyla bir çok reklam türünü kullanarak marka bilinirliğini artırmak,
           ürün/hizmet satışını en yüksek seviyelere ulaştırmak isteyen işletmelerin tercih edebileceği bir hizmettir.
            Bu hizmet`te reklam türleri aşama aşama ilerleyerek makina öğrenimini tamamlayarak gelecekte karmaşık hedeflemeler
             yapmadan yapay zekanın katkılarıyla en iyi hefeflemeleri bulmasını sağlatmaktır.</p>
             <p>Google ProBox hizmeti marka odaklı uzun vadeli reklam stratejileri ile gelişmeyi benimsemiş küçük ve orta büyüklükteki
                 tüm işletmeler için faydalıdır.Not: Maksimum performans reklamı google`e ait Arama Ağı - Görüntülü Reklam Ağı - Gmail - Youtube - Discover - Haritalar
                  gibi platformları kapsamaktadır. Reklam makina öğrenimi sayesinde ürün/hizmetiniz ile ilgilenebilecek internet kullancılarına gösterilmektedir.</p>
          <h2 className="mt-4 mb-2 text-lg font-semibold ">Kimler için uygundur?</h2>
          <ul className="max-w-md space-y-1  list-disc list-inside">
            <li>Hizmet Sektörü</li>
            <li>Sağlık Sektörü</li>
            <li>Eğitim Sektörü</li>
           
          </ul>
        
        </DialogContent>
       
      </Dialog>
     
    </>
  );
}

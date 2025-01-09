import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export default function BusinessPro() {
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
      <DialogContent className="overflow-y-auto h-[80%]">
      <DialogTitle>Stratejik Reklam ve Sosyal Medya Desteğiı</DialogTitle>
      
          <p className="text-base ">
          Facebook ve Instagram reklamlarının gücünü, zenginleştirilmiş sosyal medya içerikleriyle destekleyerek kurumsal kimliği
           ön planda tutmak isteyen işletmeler için ProBox ideal bir tercihtir.Sosyal medya düzeni ve reklam stratejileri oluşturulduktan sonra,
            işletmenin hedef kitlesine uygun şekilde reklamlar planlanır. Ayrıca, bu süreçte bir web sitesinin SEO gücünden faydalanarak daha etkili sonuçlar elde edilir.
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

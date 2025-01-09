import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



export default function BusinessMini() {
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
      <DialogContent>
      <DialogTitle>İhtiyaca Yönelik Reklam Yaklaşımı</DialogTitle>
      
          <p className="text-base ">
            Genellikle bütçe kısıtlaması olan veya anlık ihtiyaca göre tercih edilebilecek bir reklam yönetimi işletmeler tarafından tercih edilebilmektedir. İstenilen hedef doğrultusunda bir gönderiyi öne çıkararak chat (WhatsApp - DM) veya telefon araması başlatabilir, görseli veya videoyu etkileşime sokarak marka bilgisini/değerini artırabilir.
          </p>
          <h2 className="mt-4 mb-2 text-lg font-semibold ">Kimler için uygundur?</h2>
          <ul className="max-w-md space-y-1  list-disc list-inside">
            <li>Kampanya ve etkinlik tanıtımı yapan işletmeler</li>
            <li>Belirli tarihler, özel gün veya tatiller için reklam veren işletmeler</li>
            <li>Yerel ve küçük işletmelerin tanıtımları</li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Not:</strong> Reklam öğrenim süresi belirli bir zaman alır. Belirli zaman aralıklarında bir reklam gösterimi planlıyorsanız 7 gün önceden planlanması gerekmektedir.
          </p>
        </DialogContent>
       
      </Dialog>
    </>
  );
}

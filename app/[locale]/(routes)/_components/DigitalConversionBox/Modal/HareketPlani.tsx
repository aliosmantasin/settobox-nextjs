import * as React from 'react';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


export default function HareketPlaniDonusumKutusu() {


  return (
    <>
    <Dialog>
      <DialogTrigger className='underline mx-2'>Hareket Planı Dital Dönüşüm</DialogTrigger>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
        <DialogTitle>Hareket Planı Dital Dönüşüm</DialogTitle>
        <DialogDescription>
        Sisteme dahil olunmadan önce öncelikle nasıl bir hizmete dahil olduğunuzu bilmenizi isteriz,
         hareket planını bir hafta olarak belirledik. Bu süre zarfında sizlerden almamız gereken bilgileri
          almış ve sürece başlamış olmamız gerekir. Başvuru formunda ihtyacımız olan temel bilgileri bizlere
           aktarmış oluyorsunuz, seçmiş olduğunuz hizmete göre yapıyı oluşturmaya başlıyoruz. Hareket planı
            sizlerden aldığımız bilgiler neticesinde değişebilir. Lütfen bizimle iletişime geçmekten çekinmeyin.
        </DialogDescription>
      </DialogContent>
    </Dialog>
    </>
  );
}

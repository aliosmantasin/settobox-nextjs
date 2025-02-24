import * as React from 'react';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


export default function HareketPlaniWebDesign() {


  return (
    <>
    <Dialog>
      <DialogTrigger className='underline mx-2'>Hareket Planı</DialogTrigger>
      <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
        <DialogTitle>Web Tasarım Hareket Planı</DialogTitle>
        <DialogDescription>
        Web tasarım hizmet kutularımızı işletmelerin ihtiyaçlarına göre planlanmaktadır.Dolayısıyla hareket planını 2 gün olarak belirledik. Bu süre zarfında sizlerden almamız gereken bilgileri almış ve sürece başlamış olmamız gerekir. Başvuru formunda ihtyacımız olan temel bilgileri bizlere aktarmış oluyorsunuz, seçmiş olduğunuz hizmete göre yapıyı oluşturmaya başlıyoruz. Hareket planı sizlerden aldığımız bilgiler neticesinde değişebilir.
        </DialogDescription>
      </DialogContent>
    </Dialog>


  
    </>
  );
}

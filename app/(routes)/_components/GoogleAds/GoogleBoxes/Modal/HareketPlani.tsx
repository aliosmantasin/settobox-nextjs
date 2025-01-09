import * as React from 'react';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


export default function HareketPlaniGoogle() {


  return (
    <>
    <Dialog>
      <DialogTrigger className='underline mx-2'>Hareket Planı</DialogTrigger>
      <DialogContent>
        <DialogTitle>Hareket Planı Detayları</DialogTitle>
        <DialogDescription>
          Sisteme dahil olunmadan önce öncelikle nasıl bir hizmete dahil olduğunuzu bilmenizi isteriz, hareket planını bir hafta olarak belirledik. 
          Bu süre zarfında sizlerden almamız gereken bilgileri almış ve sürece başlamış olmamız gerekir. Başvuru formunda ihtiyacımız olan temel bilgileri 
          bizlere aktarmış oluyorsunuz. Seçmiş olduğunuz hizmete göre yapıyı oluşturmaya başlıyoruz. Hareket planı sizlerden aldığımız bilgiler neticesinde değişebilir. 
          Lütfen bizimle iletişime geçmekten çekinmeyin.
        </DialogDescription>
      </DialogContent>
    </Dialog>


  
    </>
  );
}

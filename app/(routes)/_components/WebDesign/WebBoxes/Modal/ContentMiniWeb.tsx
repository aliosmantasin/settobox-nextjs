import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function ContentMiniWeb() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <span onClick={handleOpen} className=" underline cursor-pointer primary">
        Sayfa yapısı içeriği
      </span>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-y-auto max-h-[80vh] sm:max-h-full sm:h-auto">
          <p className="text-base">
            Tek sayfa (Landing page) yapısı olarak oluşturulmaktadır. İçerik yapısında hangi başlıkları
            kullanacağımıza bağlı olarak slider yapısı, çağrıya yönlendiren butonlar (Call-to-Action - CTA),
            ve kullanıcıyı bilgilendiren temel bölümler tasarlanabilmektedir. Bu tür bir sayfanın genel yapısında şu başlıklar yer alabilir:
          </p>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Hero Bölümü</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Dikkat çekici bir başlık (Headline).</li>
            <li>Destekleyici alt başlık (Subheadline).</li>
            <li>Harekete geçirici bir buton (CTA).</li>
            <li>Görsel veya arka plan videosu ile görsel etki yaratılması..</li>
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Hizmetler veya Ürünler Bölümü</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Sunulan ürün veya hizmetlerin kısa ve öz açıklamaları.</li>
            <li>Her bir ürün/hizmet için ikonlar veya görseller.</li>
            <li>Detaylı bilgi için bir bağlantı veya yönlendirme.</li>
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Özellikler ve Avantajlar</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Kullanıcının ilgisini çekecek, çözümler sunan başlıklar.</li>
            <li>Neden bu ürünü/hizmeti tercih etmeleri gerektiğine dair maddeler.</li>
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Müşteri Yorumları (Testimonials)</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Daha önce hizmet almış müşterilerin yorumları.</li>
            <li>Güven oluşturmak adına isim, pozisyon ve görsel kullanılabilir.</li>
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Referanslar veya İş Ortakları</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>İş birliği yapılan markaların logoları.</li>
            <li>Önceki projelerden öne çıkan örnekler.</li>
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Harekete Geçirici Bir Son Bölüm (Footer CTA)</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>İletişim bilgileri veya formu.</li>
            <li>Sosyal medya bağlantıları.</li>
            <li>Şimdi bizimle iletişime geçin gibi güçlü bir çağrı mesajı.</li>
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Sıkça Sorulan Sorular (FAQ)</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Kullanıcıların aklındaki temel sorulara cevap vererek güven oluşturmak.</li>
      
          </ul>
        
          <h2 className="mt-4 mb-2 text-lg font-semibold">Avantajları nelerdir?</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Kullanıcıyı doğrudan hedefe yönlendirme</li>
            <li>Basit ve anlaşılır yapı ile yüksek dönüşüm oranı</li>
         
          </ul>

          <h2 className="mt-4 mb-2 text-lg font-semibold">Nasıl bir yapı ile hazırlanır?</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside">
            <li>Hedef kitlenin ihtiyaçlarına yönelik içerik planlaması</li>
            <li>SEO uyumlu metinler ve hızlı yüklenen görseller</li>
            <li>Harekete geçirici tasarım unsurları (CTA, formlar, görseller)</li>
          </ul>

          <p>Bu yapılar, kullanıcının dikkatini çekmek, site içi gezinmeyi kolaylaştırmak ve dönüşüm
             oranını artırmak için özenle düzenlenir.</p>
            <p>Ayrıca renk paleti, yazı tipleri ve genel tasarım dilinin markanın kimliğiyle uyumlu
                 olmasına dikkat etmekteyiz... Markanızın <strong>kurumsal kimlik</strong> yapısı yoksa oluşturmakta fayda vardır.</p>
        </DialogContent>
      </Dialog>
    </>
  );
}

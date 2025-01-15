"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


interface AccordionDroneProps {
  headerData: {
    header: string,
  };
}

const AccordionDrone: React.FC<AccordionDroneProps> = ({headerData }) => {


  return (
    <section className="py-10">
      <div className="container mx-auto max-w-screen-xl px-6">
        <h2 className="text-lg font-bold text-center mb-6">Sıkça Sorulanlar ve Merak Edilenler</h2>

        <div className="space-y-4">
          {/* Accordion Items */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Opsiyonel Hizmetler Neden Tercih Edilebilir?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">
                    <p>Tanıtım videoları ile marka bilinirliği artırılabilir potansiyel hedef kitlenize ulaşabilirsiniz.</p>
                  </li>
                  <li className="text-gray-700">
                    <p>Meta reklamlarıyla düzenli reklamlar ile marka bilinirliği artırılabilir.</p>
                  </li>
                  <li className="text-gray-700">
                    <p>Google Ads reklamlarıyla potansiyel müşterilerinize anlık ulaşabilirsiniz.</p>
                  </li>
                  <li className="text-gray-700">
                    <p>Website tasarım hizmeti ile organik olarak müşterilerinize sürekli görünür olunabilir.</p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger><p>{headerData.header}</p></AccordionTrigger>
              <AccordionContent>
                <p><strong>Paket 1 :</strong> 3.500₺ - 5.000₺ | <strong>Paket 2 :</strong> 8.000₺ | <strong>Paket 3 :</strong> 13.000₺</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Drone Model Özellikleri ve Kullanılan Ekipmanlar</AccordionTrigger>
              <AccordionContent>
                <p>
                  Drone olarak DJI marka tercih etmekteyiz. 4k video kalitesinde görüntü alabilmektedir. İçerik bakımından
                  sosyal medya ve YouTube gibi dijital platformlarda paylaşabileceğiniz 1920*1080 HD ölçülerinde yatay
                  ve dikey çekim yapılmaktadır. Drone çekimlerinin dışında Dji Gimble + iPhone 15 Pro Max normal çekimler
                  için kullanılmaktadır. Bu iki cihazı beraber kullanarak hareketten kaynaklı videoda titreşim gibi
                  olumsuz durumları stabilize etmiş oluyoruz.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Video Düzenlemeyi Nasıl Yapıyorsunuz?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Ham videolarda önemli kesitler ve renk ayarları Adobe Premiere Pro kullanılarak yapılmaktadır. Animasyonlar
                  için Adobe After Effects kullanılmaktadır. Kampanya tasarım görselleri de Adobe Illustrator kullanılmaktadır.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Randevu Hakkında</AccordionTrigger>
              <AccordionContent>
                <p>
                  Drone ve operatörün uygunluğu halihazırda yapılan işlerden dolayı özellikle aynı gün içerisinde randevu
                  veremiyoruz.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Güvenli Drone Uçurabilme Durumları</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">
                    <p>
                      Hava şartlarının uygunluğu: Yağmurlu ve fırtınalı havalarda çekim yapamıyoruz. Drone çekimlerimizde
                      olumlu içerikler oluşturabilmek için gün içerisinde ışık kırılma anlarında görüntü alıyoruz. Yani
                      öğleden önce ve öğleden sonra.
                    </p>
                  </li>
                  <li className="text-gray-700">
                    <p>
                      Uçuşa uygun bölgeler: Sivil Havacılık Genel Müdürlüğü`nün izne tabi tuttuğu yerlerde güvenli uçuş
                      tedbirlerini göz önünde bulundurmaktayız. Bu bölgeler izne tabi tutulan yerler olsa bile risk
                      unsurlarını göz önünde bulundurmaktayız.
                    </p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Tanıtım Videoları Ne Zaman Hazır Olur?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Drone çekimlerinin tamamlanmasının ardından belirlenen senaryo düzenlenip en kısa sürede iletilmektedir.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AccordionDrone;

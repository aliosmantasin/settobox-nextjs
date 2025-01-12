import { MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard } from "react-icons/md";

import './WebDesignAdditional.css';


const WebDesignAdditional = () => {
  return (
    <section>


      {/* Scrollable Grid Section */}
      <div className="w-9/12 scroll-grid mt-8 flex mx-auto justify-evenly gap-10">
        {[
          {
            icon: MdAddToQueue,
            title: 'SEO Yapısı',
            description: 'Hizmet kutularımızda temel SEO alt yapısı uygulanmaktadır',
          },
          {
            icon: MdKeyboard,
            title: 'Ücretsiz SSL Sertifikası',
            description:
              'Tarayıcılar tarafından güvenli olarak tespit edilen websitleri arama motorlarında ön planda olmaktadır',
          },
          {
            icon: MdHourglassTop,
            title: 'Modern Teknoloji',
            description:
              'React teknolojisinin esnek yapısı ve geniş ekosistemi sayesinde, kullanıcı deneyimini zenginleştiren dinamik ve ölçeklenebilir arayüzler oluşturuyoruz',
          },
          {
            icon: MdBalance,
            title: 'Sabit Fiyat',
            description:
              'Fiyatlandırmalarda 1 yıl sabit fiyat garantisi uygulanır',
          }
         
        ].map((item, index) => (

          <div key={index} className="item-box">
            <div className="icon-box">
              <item.icon className="w-10 h-10 primary-light" />
            </div>
            <h6  className="mt-4 text-primary">
              {item.title}
            </h6>
            <p className="mt-2 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDesignAdditional;


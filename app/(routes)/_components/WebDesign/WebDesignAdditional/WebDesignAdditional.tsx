import { MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard } from "react-icons/md";
import './WebDesignAdditional.css';

const WebDesignAdditional = () => {
  const features = [
    {
      icon: MdAddToQueue,
      title: 'SEO Yapısı',
      description: 'Hizmet kutularımızda temel SEO alt yapısı uygulanmaktadır',
    },
    {
      icon: MdKeyboard,
      title: 'Üretsiz SSL Sertifikası',
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
  ];

  return (
    <section className="p-4 mx-auto max-w-7xl">
      {/* Scrollable Grid Section */}
      <div className="w-11/12 scroll-grid mt-8 flex mx-auto justify-evenly gap-10 overflow-x-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="item-box w-64 h-56 p-4 flex flex-col items-center flex-shrink-0  rounded-lg cardBgColor"
          >
            <div className="icon-box w-10 h-10 flex items-center justify-center text-primary">
              <feature.icon className="text-3xl" />
            </div>
            <h6 className="mt-4 text-primary text-lg font-semibold text-center">
              {feature.title}
            </h6>
            <p className="mt-2 text-center text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDesignAdditional;

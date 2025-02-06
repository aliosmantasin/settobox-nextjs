import { FC } from 'react';
import { Md4K, MdCloudDownload, MdEditAttributes, MdHd, MdLibraryAddCheck, MdSportsEsports } from 'react-icons/md';


const DroneAdditional: FC = () => {
  const features = [
    {
      icon: <Md4K className="text-3xl primary-light" />, 
      title: '4K Yüksek Kalite',
      description:
        'İsteğe bağlı olarak 4K yüksek kalitede çekim yapılabilmektedir.'
    },

    {
      icon: <MdHd className="text-3xl primary-light" />, 
      title: 'Sosyal Medya Uyumlu',
      description:
        'Sosyal medya uyarlu görüntü kalitesinde video çekim hizmeti'
    },
    {
      icon: <MdCloudDownload className="text-3xl primary-light" />,
      title: '2 Ay Data Garantisi',
      description:
        'Ham ve işlenmiş video ve görsel içerikleri 2 Ay süresince indirebilme garantisi.'
    },
    {
      icon: <MdLibraryAddCheck className="text-3xl primary-light" />,
      title: 'Ehliyetli Operatör',
      description:
        'Önce güvenlik prensibini benimseyerek Dji drone kullanımına hakim operatör.'
    },
    {
      icon: <MdSportsEsports className="text-3xl primary-light" />,
      title: 'DJI Mini 3',
      description:
        'Çok iyi görüntüler sağlayan gimble kamerası ve story çekebilme özelliği ile çekimlerimizde Dji tercih ediyoruz.'
    },
    {
      icon: <MdEditAttributes className="text-3xl primary-light" />,
      title: 'Opsiyonel Hizmetler',
      description:
        'Tanıtım videolarınıza ek olarak opsiyonel hizmet tercihi yapabilirsiniz.'
    }
  ];

  return (
    <section className="p-4 mx-auto max-w-7xl overflow-x-auto">
      <div className="flex justify-between space-x-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 cardBgColor"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {feature.icon}
            </div>
            <div className="mt-4 text-xl font-medium  text-center">
              {feature.title}
            </div>
            <div className="mt-4 text-center text-sm">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DroneAdditional;

import { FC } from 'react';
import { MdCloudDownload, MdEditAttributes, MdHd, MdLibraryAddCheck, MdSportsEsports } from 'react-icons/md';


const DroneAdditional: FC = () => {
  const features = [
    {
      icon: <MdHd className="text-3xl primary-light" />, // Tailwind class names for styling
      title: '1080p HD Kalite',
      description:
        'İsteğe bağlı olarak 4k yüksek çözünürlü video kalitesinde görüntüler alabiliriz.'
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

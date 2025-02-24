import { useTranslations } from 'next-intl';

import { Md4K, MdCloudDownload, MdEditAttributes, MdHd, MdLibraryAddCheck, MdSportsEsports } from 'react-icons/md';


interface DroneAdditionalProps {
  teritory: string;
}

const DroneAdditional: React.FC<DroneAdditionalProps> = ({ teritory }) => {

  const t = useTranslations('DronePage');

  const features = [
    {
      icon: <Md4K className="text-3xl primary-light" />, 
      title: t(`${teritory}.droneAdditional.features1.title`),
      description:
      t(`${teritory}.droneAdditional.features1.description`)
    },

    {
      icon: <MdHd className="text-3xl primary-light" />, 
      title: t(`${teritory}.droneAdditional.features2.title`),
      description:
      t(`${teritory}.droneAdditional.features2.description`)
    },
    {
      icon: <MdCloudDownload className="text-3xl primary-light" />,
      title: t(`${teritory}.droneAdditional.features3.title`),
      description:
      t(`${teritory}.droneAdditional.features3.description`)
    },
    {
      icon: <MdLibraryAddCheck className="text-3xl primary-light" />,
      title: t(`${teritory}.droneAdditional.features4.title`),
      description:
      t(`${teritory}.droneAdditional.features4.description`)
    },
    {
      icon: <MdSportsEsports className="text-3xl primary-light" />,
      title: t(`${teritory}.droneAdditional.features5.title`),
      description:
      t(`${teritory}.droneAdditional.features5.description`)
    },
    {
      icon: <MdEditAttributes className="text-3xl primary-light" />,
      title: t(`${teritory}.droneAdditional.features6.title`),
      description:
      t(`${teritory}.droneAdditional.features6.description`)
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

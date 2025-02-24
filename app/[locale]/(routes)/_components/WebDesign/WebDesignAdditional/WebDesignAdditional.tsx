import { MdAddToQueue, MdBalance, MdHourglassTop, MdKeyboard } from "react-icons/md";
import './WebDesignAdditional.css';
import { useTranslations } from "next-intl";


const WebDesignAdditional = () => {

  const t = useTranslations("WebsitePage")

  const features = [
    {
      icon: MdAddToQueue,
      title: t('webDesignAdditional.features1.title'),
      description: t('webDesignAdditional.features1.description'),
    },
    {
      icon: MdKeyboard,
      title: t('webDesignAdditional.features2.title'),
      description: t('webDesignAdditional.features2.description'),
    },
    {
      icon: MdHourglassTop,
      title: t('webDesignAdditional.features3.title'),
      description: t('webDesignAdditional.features3.description'),
    },
    {
      icon: MdBalance,
      title: t('webDesignAdditional.features4.title'),
      description: t('webDesignAdditional.features4.description'),
    }
  ];

  return (
    <section className="p-4 mx-auto max-w-7xl">
      {/* Scrollable Grid Section */}
      <div className="w-11/12 scroll-grid mt-8 flex mx-auto justify-evenly gap-10 overflow-x-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="item-box p-4 flex items-center rounded-lg cardBgColor"
          >
            <div className="icon-box">
              <feature.icon className="text-3xl primary-light"/>
            </div>
            <h6 className="mt-4 text-primary text-lg font-semibold text-center">
              {feature.title}
            </h6>
            <p className="mt-2 text-center text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDesignAdditional;

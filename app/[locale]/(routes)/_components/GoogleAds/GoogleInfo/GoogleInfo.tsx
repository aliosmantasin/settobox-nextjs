"use client";
import { MdCheckBox, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DiscountModal from "../../libs/Campaign/DiscountModalGoogle";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import "./GoogleInfo.css";


interface Feature {
  title: string;
  description: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    <div className="p-6 border-l-4 border-blue-500 h-full">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
            <MdCheckBox className="text-2xl text-blue-500 dark:text-blue-400" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </motion.li>
);

const GoogleInfo: React.FC = () => {
  const t = useTranslations("GooglePage");
  const features = t.raw("googleInfo.features") as Feature[];

  return (
    <>
      <DiscountModal />
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <h1 className="text-3xl font-extrabold primary tracking-wider text-center sr-only">
          {t("googleInfo.srOnlyh1")}
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t("googleInfo.sub1")} {" "}
          <span className="google-span">G</span>
          <span className="google-span">o</span>
          <span className="google-span">o</span>
          <span className="google-span">g</span>
          <span className="google-span">l</span>
          <span className="google-span">e</span> {t("googleInfo.sub2")}
        </motion.p>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ul className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <MdKeyboardDoubleArrowDown className="text-4xl text-blue-500 animate-bounce" aria-hidden="true" />
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex w-1/2 sm:w-1/5 lg:w-2/7 mx-auto my-10"
          >
            <div
              className="relative group"
              onClick={(e) => {
                e.stopPropagation();
                const video = e.currentTarget.querySelector('video') as HTMLVideoElement & {
                  webkitRequestFullscreen?: () => Promise<void>;
                  mozRequestFullScreen?: () => Promise<void>;
                  webkitEnterFullscreen?: () => Promise<void>;
                };

                if (video) {
                  if (video.requestFullscreen) {
                    video.requestFullscreen();
                  } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                  } else if (video.mozRequestFullScreen) {
                    video.mozRequestFullScreen();
                  } else if (video.webkitEnterFullscreen) {
                    video.webkitEnterFullscreen();
                  }
                  video.play();
                }
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <video
                  src="https://res.cloudinary.com/dydji2imy/video/upload/v1744549340/GoogleAdsKutuTan%C4%B1t%C4%B1mVideosu_zuvcc8.mp4"
                  className="w-full h-auto rounded-lg cursor-pointer shadow-xl transform transition duration-300 hover:scale-[1.02]"
                  controls
                  preload="none"
                  title="Google Ads Reklam Yönetimi Tanıtım Videosu"
                  aria-label="Google Ads reklam yönetimi hizmetlerimizin bilgilendime videosu"
                  poster="https://res.cloudinary.com/dydji2imy/video/upload/v1744549340/GoogleAdsKutuTan%C4%B1t%C4%B1mVideosu_zuvcc8.jpg"
                  controlsList="nodownload"
                >
                  <track
                    kind="captions"
                    label="Türkçe"
                    srcLang="tr"
                    src="/captions/google-ads-tanitim.vtt"
                    default
                  />
                  Tarayıcınız video formatını desteklemiyor.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GoogleInfo;

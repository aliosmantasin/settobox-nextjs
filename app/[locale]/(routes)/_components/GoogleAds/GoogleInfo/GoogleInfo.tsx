"use client";
import { MdCheckBox, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DiscountModal from "../../libs/Campaign/DiscountModal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import RightComponentContactUs from "../../StartGuide/ContactUs/_component/RightComponentContactUs";
import "./GoogleInfo.css";

interface Feature {
  title: string;
  description: string;
}

const GoogleInfo: React.FC = () => {
  const t = useTranslations("GooglePage");
 
  const features = t.raw("googleInfo.features") as Feature[];

  return (
    <>
      <DiscountModal />
      <section className="my-10 relative ocean-shadow pb-10">
        <h1 className="text-3xl font-extrabold primary tracking-wider text-center sr-only">{t("googleInfo.srOnlyh1")}</h1>
        <p className="text-3xl font-extrabold primary tracking-wider text-center">
          {t("googleInfo.sub1")} {""}
          <span className="google-span">G</span>
          <span className="google-span">o</span>
          <span className="google-span">o</span>
          <span className="google-span">g</span>
          <span className="google-span">l</span>
          <span className="google-span">e</span> {t("googleInfo.sub2")}
        </p>
        <div className="container mx-auto justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mx-auto"
          >
            <div>
              <div className="max-w-xl mt-10 mx-auto dark:ocean-shadow">
                <h2 className="sr-only">{t("googleInfo.description")}</h2>
                <ul className="list-none p-0">
                  {features.map((feature, index) => (
                    <li key={index} className="w-full flex items-center justify-between dark:bg-black hover:bg-gray-50 relative p-5 border border-gray-100">
                      <div className="flex items-center">
                        <div>
                          <h3 className="block text-md text-gray-900 dark:text-white">{feature.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                      <MdCheckBox className="text-2xl text-gray-400 dark:text-gray-300" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </div>
              <MdKeyboardDoubleArrowDown className="text-4xl primary-light mx-auto mt-10 animate-pulse" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex w-full sm:w-1/2 lg:w-2/6 mx-auto my-10"
          >
            <RightComponentContactUs />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GoogleInfo;

import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import { useTranslations } from "next-intl"
import ServiceSectorCard from "./SectoCard/ServiceSectorCard"
import EducationSectorCard from "./SectoCard/EducationCard"
import HealtySectorCard from "./SectoCard/HealtyCard"



const SectorAll = () => {

  const t = useTranslations("HomePage")

  return (
    <section className="py-10">
      <div className="w-full bg-[#373737] rounded-lg">
        <h2 className="text-white text-2xl p-2 text-center mx-auto">
          {t("subtitle3")}
        </h2>
      </div>
      <div className="mx-auto text-center mt-5">
        <h6 className="text-2xl primary mt-3">
          {t.rich("description4", {
            u: (chunks) => <span className="primary">{chunks}</span>, // <strong> etiketini işleme
          })}
        </h6>
        <MdKeyboardDoubleArrowDown className="text-4xl primary-light mx-auto mt-3 animate-pulse" />
      </div>
        <div className="container mx-auto flex flex-wrap justify-center">
        <ServiceSectorCard/>
        <EducationSectorCard/>
        <HealtySectorCard/>
        </div>
    </section>
  )
}

export default SectorAll
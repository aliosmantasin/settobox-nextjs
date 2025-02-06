import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import EducationSectorCard from "./SectoCard/EducationCard"
import HealtySectorCard from "./SectoCard/HealtyCard"
import ServiceSectorCard from "./SectoCard/ServiceSectorCard"

const SectorAll = () => {
  return (
    <section className="py-10 flex">
        <div className="container mx-auto">
            <div className="flex max-w-xxl bg-[#373737] rounded-lg mx-2">
            <h2 className="text-white text-2xl p-2 text-center mx-auto">Sektörünüz Nedir?</h2>
            </div>

            <div className="mx-auto text-center mt-5">
            <h6  className="text-2xl primary mt-3"><span className="underline">Dijital dönüşüm hizmet kutusu</span> ile sektörlere göre online varlıkları nasıl yönettiğimizi inceleyin...</h6>
            <MdKeyboardDoubleArrowDown className="text-4xl primary-light mx-auto mt-3 animate-pulse"/>
            </div>
      
        <ServiceSectorCard/>
        <EducationSectorCard/>
        <HealtySectorCard/>
        </div>
    </section>
  )
}

export default SectorAll
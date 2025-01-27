import EducationSectorCard from "./SectoCard/EducationCard"
import HealtySectorCard from "./SectoCard/HealtyCard"
import ServiceSectorCard from "./SectoCard/ServiceSectorCard"

const SectorAll = () => {
  return (
    <section className="py-10 flex">
        <div className="container mx-auto">
            <div className="flex max-w-xxl bg-[#373737] mx-auto rounded-lg" >
            <h3 className="text-white text-2xl p-2 text-center mx-auto">Sektörünüz Nedir?</h3>
            </div>

            <div className="mx-auto text-center mt-5">
            <h6  className="text-xl">Dijital dönüşüm hizmet kutusu ile sektörlere göre online varlıkları nasıl yönettiğimizi inceleyin</h6>
            </div>
      
        <ServiceSectorCard/>
        <EducationSectorCard/>
        <HealtySectorCard/>
        </div>
    </section>
  )
}

export default SectorAll
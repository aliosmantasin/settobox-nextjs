import { MdKeyboardArrowUp } from "react-icons/md"
import Footer from "./_components/Footer"
import Navbar from "./_components/Menu/Navbar"
import ScrollTop from "./_components/ScrollTop/ScrollTop"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "SetToBox | Dijital Pazarlama Ajansı",
  description: "Küçük ve orta büyüklükte firmalar için sosyal medya yönetimi, instagram sponsorlu reklam, google adwords reklam, profesyonel web tasarım, pazarlama danışmanlığı ve havadan drone çekimleri gibi özelleştirilmiş hizmetler veriyoruz.",
  verification: {
    google: "AQAg3wR11Ya_TOJEBFdusZZ9BKvUJLf8tT6kRnGALKc",
  },
};


interface RoutesLayout  {
    children: React.ReactNode
}

const RoutesLayout = ({children}: RoutesLayout) => {
  return (
    <>
       <Navbar/>
    <div className="min-h-screen">   
        {children}
        <ScrollTop>
          <MdKeyboardArrowUp />
        </ScrollTop>
    </div>
    <Footer/>
    </>
  )
}

export default RoutesLayout
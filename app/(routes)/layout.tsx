import { MdKeyboardArrowUp } from "react-icons/md"
import Footer from "./_components/Footer"
import Navbar from "./_components/Menu/Navbar"
import ScrollTop from "./_components/ScrollTop/ScrollTop"
import { Metadata } from "next";
import Head from "next/head";


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
     <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="author" content="SetToBox | Ali Osman Taşın" />
      </Head>
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
import Footer from "./_components/Footer"
import Navbar from "./_components/Menu/Navbar"




interface RoutesLayout  {
    children: React.ReactNode
}

const RoutesLayout = ({children}: RoutesLayout) => {
  return (
    <>
       <Navbar/>
    <div className="min-h-screen">
     
        {children}
     
    </div>
    <Footer/>
    </>
  )
}

export default RoutesLayout
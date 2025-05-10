import React from 'react'
import FirstGlance from '../_components/LocatedDijitalMarketing/FirstGlance'
import GoogleAds from '../_components/LocatedDijitalMarketing/CardService'
import ShowLocationComponent from '../_components/LocatedDijitalMarketing/ShowLocation'
import { MaskSvg } from '../_components/libs/Mask/Mask'
// import ContactUs from '../_components/StartGuide/ContactUs/ContactUs'
// import BlobsAnimations from '../_components/DigitalConversionSector/AllinBoxComponents/BlobsAnimations'


const LocalDigitalMarketing = () => {
  return (
    <>
        <FirstGlance/>
        <MaskSvg/>
        <GoogleAds/>
        <ShowLocationComponent/>
        {/* <section className='py-20 relative'>
        <ContactUs/>
        <BlobsAnimations/>
      </section> */}

    </>
  )
}

export default LocalDigitalMarketing

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
    { locale: 'en' },
  ]
}
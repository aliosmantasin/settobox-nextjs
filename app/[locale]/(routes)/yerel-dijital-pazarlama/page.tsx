import React from 'react'
import FirstGlance from '../_components/LocatedDijitalMarketing/FirstGlance'
import GoogleAds from '../_components/LocatedDijitalMarketing/CardService'
// import ContactUs from '../_components/StartGuide/ContactUs/ContactUs'
// import BlobsAnimations from '../_components/DigitalConversionSector/AllinBoxComponents/BlobsAnimations'
import { GoogleAdsCard } from '../_components/GoogleAds/GoogleAdsCard/GoogleAdsCard'

const LocalDigitalMarketing = () => {
  return (
    <>
        <FirstGlance/>
        <GoogleAds/>
         <GoogleAdsCard/>
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
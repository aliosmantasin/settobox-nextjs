import React from 'react'
import FirstGlanceBrandId from '../_components/StartGuide/FirstGlanceStartGuide/StartGuide'
import BrandId from '../_components/StartGuide/BrandId/BrandId'
import ChooseService from '../_components/StartGuide/ChooseService/ChooseSevice'
import ContactUs from '../_components/StartGuide/ContactUs/ContactUs'
import BlobsAnimations from '../_components/DigitalConversionSector/AllinBoxComponents/BlobsAnimations'


const StartGuide = () => {
  return (
    <>
      <FirstGlanceBrandId/>
      <BrandId/>
      <ChooseService/>
      <section className='py-20 relative'>
      <ContactUs/>
      <BlobsAnimations/>
      </section>
    </>
  )
}

export default StartGuide
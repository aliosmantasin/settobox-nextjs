import React from 'react'
import GoogleInfo from '../_components/GoogleAds/GoogleInfo/GoogleInfo'
import { MaskSvg } from '../_components/libs/Mask/Mask'
import GoogleAdditional from '../_components/GoogleAds/GoogleAdditional/GoogleAdditional'
import GoogleProduct from '../_components/GoogleAds/GoogleProduct/GoogleProduct'

const GoogleAdsPage = () => {
  return (
    <>
        <GoogleInfo/>
        <MaskSvg/>
        <GoogleAdditional/>
        <GoogleProduct/>
    </>
  )
}

export default GoogleAdsPage
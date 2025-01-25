import React from 'react'
import WebDesignInfo from '../_components/WebDesign/WebDesignInfo/WebDesignInfo'
import { MaskSvg } from '../_components/libs/Mask/Mask'
import WebDesignAdditional from '../_components/WebDesign/WebDesignAdditional/WebDesignAdditional'
import WebDesignProduct from '../_components/WebDesign/WebDesignProduct/WebDesignProduct'



const WebDesignPage = () => {
  return (
    <>
       <WebDesignInfo/>
       <MaskSvg/>
       <WebDesignAdditional/>
       <WebDesignProduct/>
    </>
  )
}

export default WebDesignPage
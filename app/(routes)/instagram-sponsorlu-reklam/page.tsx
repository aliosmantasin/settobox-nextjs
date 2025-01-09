import React from 'react'
import MetaInfo from '../_components/Meta/MetaInfoComponent/MetaInfo'
import MetaAdditional from '../_components/Meta/MetaAdditionalComponent/MetaAdditional';
import MetaProduct from '../_components/Meta/MetaProduct/MetaProduct';


const MetaPage = () => {
  return (
    <>
        <MetaInfo/>
        <MetaAdditional/>
        <MetaProduct/>
    </>
  )
}

export default MetaPage
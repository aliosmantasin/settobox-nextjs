import React from 'react'
import MetaInfo from '../_components/Meta/MetaInfo'


console.log(MetaInfo); // Eğer undefined ise bir sorun var demektir.

const page = () => {
  return (
    <>
        <MetaInfo/>
    </>
  )
}

export default page
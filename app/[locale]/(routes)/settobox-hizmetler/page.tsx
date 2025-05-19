import React from 'react'
import AllServicesMarketing from '../_components/AllServices/AllServicesMarketing'
import SingleServices from '../_components/AllServices/SingleServices'


const page = () => {
  return (
      <>
        <SingleServices/>
        <AllServicesMarketing />
      </>

 
  )
}

export default page

export async function generateStaticParams() {
    return [
      { locale: 'tr' },
    ]
  }

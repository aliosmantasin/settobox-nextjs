import React from 'react'
import InfoCampaign from '../_components/CampaignComponents/InfoCampaign'
import ArmutCampaign from '../_components/CampaignComponents/ArmutCampaign'
import FreeWebSite from '../_components/CampaignComponents/FreeWeb'
import WelcomeCampaign from '../_components/CampaignComponents/WelcomeCampaign'
import Opportunity from '../_components/CampaignComponents/Oppornity'

const page = () => {
  return (
    <>
        <InfoCampaign/>
        <Opportunity/>
        <WelcomeCampaign/>
        <FreeWebSite/>
        <ArmutCampaign/> 
    </>
  )
}

export default page

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
    { locale: 'en' },
  ]
}
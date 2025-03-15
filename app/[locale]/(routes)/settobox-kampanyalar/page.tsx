import React from 'react'
import InfoCampaign from '../_components/CampaignComponents/InfoCampaign'
import ArmutCampaign from '../_components/CampaignComponents/ArmutCampaign'
import FreeWebSite from '../_components/CampaignComponents/FreeWeb'
import WelcomeCampaign from '../_components/CampaignComponents/WelcomeCampaign'

const page = () => {
  return (
    <>
        <InfoCampaign/>
        <WelcomeCampaign/>
        <FreeWebSite/>
        <ArmutCampaign/>
       
    </>
  )
}

export default page
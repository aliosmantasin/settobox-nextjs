import React from 'react';
import HeaderDrone from './_components/HeaderDrone';
import DroneBoxess from './_components/DroneBoxess';
import DroneAdditional from './_components/DroneAdditional';
import DroneVideoComponent from './_components/DroneVideoComponent';
import MapVideoComponent from './_components/MapVideoComponent';
import AccordionDrone from './_components/AccordionDrone';
import OtherServices from './_components/OtherServices';


interface DronePageTemplateProps {
  data: {

    title:string,
    description:string,
    keywords:string,
  
    headerDrone : {
      headerTitle: string,
      headerDescription: string,
      alt: string,
    }
  
    droneVideoComponent : {
        title: string,
        subtitle: string[],
        description:string
    }
  
    mapVideoComponent : {
        title: string,
        subtitle: string[],
        description:string
    }
  
    SSSComponent : {
      header: string,
    }

  }

}

const DronePageTemplate: React.FC<DronePageTemplateProps> = ({ data }) => {
  return (
    <>
      <HeaderDrone headerData={data.headerDrone} />
      <DroneAdditional/>
      <DroneBoxess/> 
      <DroneVideoComponent droneVideoData={data.droneVideoComponent} />
      <MapVideoComponent mapData={data.mapVideoComponent} />
      <OtherServices/>
      <AccordionDrone headerData={data.SSSComponent} />
    </>
  );
};

export default DronePageTemplate;

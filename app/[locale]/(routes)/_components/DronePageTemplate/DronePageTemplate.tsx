import HeaderDrone from './_components/HeaderDrone';
// import DroneBoxess from './_components/DroneBoxess';
import DroneAdditional from './_components/DroneAdditional';
import DroneVideoComponent from './_components/DroneVideoComponent';
import MapVideoComponent from './_components/MapVideoComponent';
import AccordionDrone from './_components/AccordionDrone';
import OtherServices from './_components/OtherServices';
import OfferComponent from './_components/OfferComponent';
import DronePricingTable from './_components/DronePricingTable';


interface DronePageTemplateProps {
  teritory: string;
}

const DronePageTemplate: React.FC<DronePageTemplateProps> = ({ teritory }) => {
  return (
    <>
      <HeaderDrone teritory={teritory} />
      <DroneAdditional  teritory={teritory}/>
      {/* <DroneBoxess teritory={teritory}/> */}
      <DronePricingTable teritory={teritory} />
      <DroneVideoComponent teritory={teritory}/>
      <MapVideoComponent teritory={teritory}/>
      <OfferComponent teritory={teritory}/>
      <OtherServices teritory={teritory}/>
      <AccordionDrone teritory={teritory}/> 
    </>
  );
};

export default DronePageTemplate;

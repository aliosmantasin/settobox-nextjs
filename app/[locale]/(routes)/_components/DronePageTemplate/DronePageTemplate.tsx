import dynamic from 'next/dynamic';
import Loading from '../../_components/Loadling/Loading';

// Lazy loaded components
const HeaderDrone = dynamic(() => import('./_components/HeaderDrone'), {
  loading: () => <div><Loading/></div>
});

const DroneAdditional = dynamic(() => import('./_components/DroneAdditional'), {
  loading: () => <div><Loading/></div>
});

const DroneVideoComponent = dynamic(() => import('./_components/DroneVideoComponent'), {
  loading: () => <div><Loading/></div>
});

const MapVideoComponent = dynamic(() => import('./_components/MapVideoComponent'), {
  loading: () => <div><Loading/></div>
});

const AccordionDrone = dynamic(() => import('./_components/AccordionDrone'), {
  loading: () => <div><Loading/></div>
});

const OtherServices = dynamic(() => import('./_components/OtherServices'), {
  loading: () => <div><Loading/></div>
});

const OfferComponent = dynamic(() => import('./_components/OfferComponent'), {
  loading: () => <div><Loading/></div>
});

const DronePricingTable = dynamic(() => import('./_components/DronePricingTable'), {
  loading: () => <div><Loading/></div>
});

interface DronePageTemplateProps {
  teritory: string;
}

const DronePageTemplate: React.FC<DronePageTemplateProps> = ({ teritory }) => {
  return (
    <main aria-label="Drone Services Page">
      <article className="drone-content">
        <HeaderDrone teritory={teritory} />
        <DroneAdditional teritory={teritory}/>
        <DronePricingTable teritory={teritory} />
        <DroneVideoComponent teritory={teritory}/>
        <MapVideoComponent teritory={teritory}/>
        <OfferComponent teritory={teritory}/>
        <OtherServices teritory={teritory}/>
        <AccordionDrone teritory={teritory}/> 
      </article>
    </main>
  );
};

export default DronePageTemplate;

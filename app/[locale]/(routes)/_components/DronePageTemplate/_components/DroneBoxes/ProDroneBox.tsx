import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MdAddCircleOutline, MdCircle } from 'react-icons/md';

interface ProDroneProps {
  teritory: string;
}


const ProDroneBox: React.FC<ProDroneProps> = ({teritory}) => {


  const t = useTranslations("DronePage")

  const listed = [
    t(`${teritory}.droneBoxes.proDroneBox.list.li1`),
    t(`${teritory}.droneBoxes.proDroneBox.list.li2`),
    t(`${teritory}.droneBoxes.proDroneBox.list.li3`),
    t(`${teritory}.droneBoxes.proDroneBox.list.li4`),
    t(`${teritory}.droneBoxes.proDroneBox.list.li5`),
    t(`${teritory}.droneBoxes.proDroneBox.list.li6`),
  ];


  const Addsfeatures = [
    t(`${teritory}.droneBoxes.proDroneBox.list2.li5`),
    t(`${teritory}.droneBoxes.proDroneBox.list2.li6`),
    t(`${teritory}.droneBoxes.proDroneBox.list2.li7`),
    t(`${teritory}.droneBoxes.proDroneBox.list2.li8`)
  ];


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto cardBgColor">

       <div className="px-6 py-4 border border-b-2">
        <h3 className="text-lg font-semibold text-center primary-light">{t(`${teritory}.droneBoxes.proDroneBox.title`)}</h3>
        <p className="text-center mt-2">{t(`${teritory}.droneBoxes.proDroneBox.subtitle`)}</p>
        <p className="font-semibold text-center mt-4">{t(`${teritory}.droneBoxes.proDroneBox.princeRange`)}</p>
      </div>
    <ul className="px-6 py-4 space-y-2">
            {listed.map((Dronefeature, index) => (
              <li key={index} className="flex items-center py-3 cardHover">
                 <MdCircle className='mx-5 text-xs text-gray-400'/>
                {Dronefeature}
              </li>
            ))}
    
            {Addsfeatures.map((Addsfeature, index) => (
              <li key={index} className="flex items-center py-3 cardHover">
                 <MdAddCircleOutline className='mx-5 text-md text-green-400 min-w-[18px]'/>
                {Addsfeature}
              </li>
            ))}
          </ul>
      <div className="px-6 py-4">
        <Link
          href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full">
            {t(`${teritory}.droneBoxes.proDroneBox.whatsaAppContact`)}
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default ProDroneBox;

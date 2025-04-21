import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MdCircle } from "react-icons/md";

interface MiniDroneProps {
  teritory: string 
}
const MiniDroneBox: React.FC<MiniDroneProps> = ({ teritory }) => {

  const t = useTranslations("DronePage")

  const listed = [
    t(`${teritory}.droneBoxes.miniDroneBox.list.li1`),
    t(`${teritory}.droneBoxes.miniDroneBox.list.li2`),
    t(`${teritory}.droneBoxes.miniDroneBox.list.li3`),
    t(`${teritory}.droneBoxes.miniDroneBox.list.li4`),
    t(`${teritory}.droneBoxes.miniDroneBox.list.li5`),
    t(`${teritory}.droneBoxes.miniDroneBox.list.li6`),
  ];



  return ( 
    <div className="max-w-sm rounded overflow-hidden mx-auto cardBgColor">
     
      <div className="px-6 py-4 border border-b-2">
        <h3 className="text-lg font-semibold text-center primary-light">{t(`${teritory}.droneBoxes.miniDroneBox.title`)}</h3>
        <p className="text-center mt-2">{t(`${teritory}.droneBoxes.miniDroneBox.subtitle`)}</p>
        <p className="font-semibold text-center mt-4">{t(`${teritory}.droneBoxes.miniDroneBox.princeRange`)}</p>
      </div>
      <ul className="py-4">
        {listed.map((item, index) => (
          <li key={index} className="flex items-center py-3 cardHover">
           <MdCircle className='mx-5 text-xs text-gray-400'/>
            {item}
          </li>
        ))}
      </ul>
      <div className="px-6 py-4 ocean-shadow">
        <Link
          href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full">
            {t(`${teritory}.droneBoxes.miniDroneBox.whatsaAppContact`)}
          </Button>
        </Link>
      </div>

      </div>
   
  );
};

export default MiniDroneBox;

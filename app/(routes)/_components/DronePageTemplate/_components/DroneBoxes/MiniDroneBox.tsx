import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdCircle } from "react-icons/md";


const MiniDroneBox = () => {
  const title = "Drone Çekimi | Ham Video - Görsel";
  const subtitle = "0 - 4 Saat Arası Günlük Drone Çekimi";
  const priceRange = "3.500₺ - 5.000₺";
  const fixedDronefeatures = [
    "Yatay Drone Çekimi",
    "Dikey Drone Çekimi (story için)",
    "Emlak Drone Çekimi",
    "Arsa Drone Çekimi",
    "Öncesi ve Sonrası Drone Çekimi",
    "Drone Operatör Desteği"
  ];

  return ( 
    <div className="max-w-sm rounded overflow-hidden mx-auto cardBgColor">
     
      <div className="px-6 py-4 border border-b-2">
        <h3 className="text-lg font-semibold text-center primary-light">{title}</h3>
        <p className="text-center mt-2">{subtitle}</p>
        <p className="font-semibold text-center mt-4">{priceRange}</p>
      </div>
      <ul className="py-4">
        {fixedDronefeatures.map((fixedDronefeature, index) => (
          <li key={index} className="flex items-center py-3 cardHover">
           <MdCircle className='mx-5 text-xs text-gray-400'/>
            {fixedDronefeature}
          </li>
        ))}
      </ul>
      <div className="px-6 py-4 ocean-shadow">
        <Link href="https://api.whatsapp.com/send?phone=05437214839&text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum..">
          <Button className="w-full">Whatsapp İletişim</Button>
        </Link>
      </div>
      </div>
   
  );
};

export default MiniDroneBox;

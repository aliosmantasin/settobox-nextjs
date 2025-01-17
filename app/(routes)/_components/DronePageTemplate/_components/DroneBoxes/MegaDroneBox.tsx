import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdAddCircleOutline, MdCircle } from 'react-icons/md';

const MegaDroneBox = () => {
  const title = "Drone Çekimi | Sosyal Medya İçerik";
  const subtitle = "0 - 4 Saat Arası Günlük Drone Çekimi";
  const price = "8.000₺";
  const Dronefeatures = [
    "Yatay Drone Çekimi",
    "Dikey Drone Çekimi (story için)",
    "Emlak Drone Çekimi",
    "Arsa Drone Çekimi",
    "Öncesi ve Sonrası Drone Çekimi",
    "Drone Operatör Desteği",

  ];

  const Addsfeatures = [
    "3 Adet Story Video ve Görsel",
    "Yatay ve Dikey Video 1 Adet"
  ];


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto cardBgColor">
      <div className="px-6 py-4 border border-b-2">
        <h3 className="text-lg font-semibold text-center primary-light">{title}</h3>
        <p className="text-center  mt-2">{subtitle}</p>
        <p className="font-semibold text-center mt-4">{price}</p>
      </div>
      <ul className="px-6 py-4 space-y-2">
        {Dronefeatures.map((Dronefeature, index) => (
          <li key={index} className="flex items-center py-3 cardHover">
             <MdCircle className='mx-5 text-xs text-gray-400'/>
            {Dronefeature}
          </li>
        ))}

        {Addsfeatures.map((Addsfeature, index) => (
          <li key={index} className="flex items-center py-3 cardHover">
             <MdAddCircleOutline className='mx-5 text-md text-green-400'/>
            {Addsfeature}
          </li>
        ))}
      </ul>
      <div className="px-6 py-4">
        <Link href="https://api.whatsapp.com/send?phone=05437214839&text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum..">
          <Button className="w-full">Whatsapp İletişim</Button>
        </Link>
      </div>
    </div>
  );
};

export default MegaDroneBox;

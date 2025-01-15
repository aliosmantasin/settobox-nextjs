import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProDroneBox = () => {
  const title = "Drone Çekimi | Prodüksiyon | Özel Video";
  const subtitle = "0 - 4 Saat Arası Günlük Drone Çekimi";
  const price = "13.000₺";
  const features = [
    "Yatay Drone Çekimi",
    "Dikey Drone Çekimi (story için)",
    "Emlak Drone Çekimi",
    "Arsa Drone Çekimi",
    "Öncesi ve Sonrası Drone Çekimi",
    "Drone Operatör Desteği",
    "3 Adet Story Video ve Görsel",
    "Yatay ve Dikey Video 1 Adet",
    "Özel Video Dikey & Yatay"
  ];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-center text-gray-900">{title}</h3>
        <p className="text-center text-gray-600 mt-2">{subtitle}</p>
        <p className="font-semibold text-center mt-4">{price}</p>
      </div>
      <ul className="px-6 py-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            {feature}
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

export default ProDroneBox;

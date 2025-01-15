import { MdAccessTime, MdOutlineReduceCapacity, MdSupervisedUserCircle } from "react-icons/md";

const DroneAdditional = () => {
  return (
    <section className="p-4 mx-auto max-w-7xl overflow-x-auto">
      <div className="flex gap-4">
        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-10 h-10 flex items-center justify-center">
            <MdAccessTime className="text-3xl text-primary-light" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center text-primary-light">
            1080p HD Kalite
          </div>
          <div className="mt-4 text-center text-sm">
            İsteğe bağlı olarak 4k yüksek çözünürlü video kalitesinde görüntüler alabiliriz.
          </div>
        </div>

        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-10 h-10 flex items-center justify-center">
            <MdOutlineReduceCapacity className="text-3xl text-primary-light" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center text-primary-light">
            2 Ay Data Garantisi
          </div>
          <div className="mt-4 text-center text-sm">
            Ham ve işlenmiş video ve görsel içerikleri 2 Ay süresince indirebilme garantisi.
          </div>
        </div>

        <div className="w-64 h-56 p-4 flex flex-col items-center flex-shrink-0 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="w-10 h-10 flex items-center justify-center">
            <MdSupervisedUserCircle className="text-3xl text-primary-light" />
          </div>
          <div className="mt-4 text-lg font-semibold text-center text-primary-light">
            Ehliyetli Operatör
          </div>
          <div className="mt-4 text-center text-sm">
            Önce güvenlik prensibini benimseyerek Dji drone kullanımına hakim operatör.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneAdditional;

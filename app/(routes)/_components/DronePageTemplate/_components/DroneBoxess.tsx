import React from 'react';
import MiniDroneBox from './DroneBoxes/MiniDroneBox';
import MegaDroneBox from './DroneBoxes/MegaDroneBox';
import ProDroneBox from './DroneBoxes/ProDroneBox';


const DroneBoxess = () => {
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mx-auto">
        <div className="flex justify-center">
          <MiniDroneBox />
        </div>
        <div className="flex justify-center">
          <MegaDroneBox />
        </div>
        <div className="flex justify-center">
          <ProDroneBox />
        </div>
      </div>
    </section>
  );
};

export default DroneBoxess;

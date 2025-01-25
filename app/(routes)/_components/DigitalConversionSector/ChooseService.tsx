"use client"

import React, { useState } from 'react';
import { FcGoogle, FcTemplate } from 'react-icons/fc';
import { MdFacebook } from 'react-icons/md';



interface ChooseSubjectProps {
  onSubjectSelect: (section: 'meta' | 'google' | 'web') => void;
}

const ChooseSubject: React.FC<ChooseSubjectProps> = ({ onSubjectSelect }) => {
    const [activeSection, setActiveSection] = useState<'meta' | 'google' | 'web' | null>(null);

  const handleSelect = (section: 'meta' | 'google' | 'web') => {
    setActiveSection(section);
    onSubjectSelect(section);
  };

  return (
    <section className="py-10 theme">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-600">Online Varlıkların Tümüyle Yönetimi</h2>
        <p className="mt-4">
          Küçük ve orta büyüklükteki firmalar için oluşturduğumuz dijital dönüşüm kutusu hizmetini hangi araçları kullanarak yaptığımızı detaylandırıyoruz.
        </p>
      </div>


 
      <div className="overflow-x-auto mt-8 mx-auto p-2">
        {/* Meta Yönetimi */}

        <div className='flex justify-evenly space-x-10'>

        <div
          className={`flex flex-col items-center justify-center p-6 border rounded-lg min-w-[300px] cursor-pointer transition-colors ${
            activeSection === 'meta' ? 'bg-blue-100 border-blue-500' : 'cardBgColor hover:bg-sky-100 transition ease-in-out delay-150'
          }`}
          onClick={() => handleSelect('meta')}
        >
          <div className="w-12 h-12 border border-blue-600  flex items-center justify-center rounded-md">
          <MdFacebook className='text-2xl text-blue-600'/>
          </div>

          <p className="text-blue-600 font-medium mt-2">Meta Yönetimi</p>
        </div>


        <div
          className={`flex flex-col items-center justify-center p-6 border rounded-lg min-w-[300px] cursor-pointer transition-colors ${
            activeSection === 'google' ? 'bg-blue-100 border-blue-500' : 'cardBgColor hover:bg-sky-100 transition ease-in-out delay-150'
          }`}
          onClick={() => handleSelect('google')}
        >
          <div className="w-12 h-12 border border-blue-600 flex items-center justify-center rounded-md">
          <FcGoogle className='text-xl'/>
          </div>
          <p className="text-blue-600 font-medium mt-2">Google Yönetimi</p>
        </div>


        <div
          className={`flex flex-col items-center justify-center p-6 border rounded-lg min-w-[300px] cursor-pointer transition-colors ${
            activeSection === 'web' ? 'bg-blue-100 border-blue-500' : 'cardBgColor hover:bg-sky-100 transition ease-in-out delay-150'
          }`}
          onClick={() => handleSelect('web')}
        >
          <div className="w-12 h-12 border border-blue-600  flex items-center justify-center rounded-md">
            <FcTemplate className='text-2xl text-blue-600'/>
          </div>
          <p className="text-blue-600 font-medium mt-2">Web Site Yönetimi</p>
        </div>

        </div>
   
      </div>
    </section>
  );
};

export default ChooseSubject;

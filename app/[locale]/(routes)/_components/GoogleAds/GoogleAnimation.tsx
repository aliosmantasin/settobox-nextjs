"use client"
import React from 'react'
import GoogleManageAnimasyonJson from '../AnimasyonData/GoogleManageAnimasyonJson';

interface GoogleAnimationProps {
  onLoad?: () => void;
}

const GoogleAnimation: React.FC<GoogleAnimationProps> = ({ onLoad }) => {
  return (
    <section className='my-10'>
      <div className='container flex mx-auto justify-center'>
        <div className="w-2/2 sm:w-1/2 min-h-auto sm:min-h-[600]">
          <GoogleManageAnimasyonJson 
            onLoad={onLoad}
            useBlob={true}
          />
        </div>
      </div>
    </section>
  )
}

export default GoogleAnimation
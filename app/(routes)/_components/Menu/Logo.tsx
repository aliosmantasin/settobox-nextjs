import Image from 'next/image'
import React from 'react'
import SetToBoxLogo from '../../../../public/logoImage/SetToBoxLogo.webp'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Link href="/">
        <Image src={SetToBoxLogo} alt="SetToBox Logo" width={150} height={150}/>
      </Link>
    </div>
  )
}

export default Logo
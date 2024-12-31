import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center relative'>
      <Link href="/">
        <Image src="/SetToBoxLogo.webp" alt="SetToBox Logo" width={150} height={150}/>
      </Link>
    </div>
  )
}

export default Logo
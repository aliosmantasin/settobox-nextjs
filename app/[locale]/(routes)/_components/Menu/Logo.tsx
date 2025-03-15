import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center relative mx-3 md:mx-0'>
      <Link href="/">
        <Image src="/logoImage/SetToBoxLogo.webp" alt="SetToBox Logo" width={150} height={150}/>
      </Link>
    </div>
  )
}

export default Logo
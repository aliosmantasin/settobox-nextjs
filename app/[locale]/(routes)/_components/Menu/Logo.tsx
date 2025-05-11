import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center relative mx-3 md:mx-0'>
      <Link href="/">
        <Image src="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/logo/SetToBoxLogo-ljDLmFPfU54gx46FHgdJxBm346DVAu.webp" alt="SetToBox Logo" width={150} height={150}/>
      </Link>
    </div>
  )
}

export default Logo
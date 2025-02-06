import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'

import React from 'react'
import { MobilMenu } from './MobilMenu'
import Link from 'next/link'

const Settings = () => {
  return (
    // Büyük Ekran
    <div className='flex items-center space-x-3 relative'> 
    <div className='hidden sm:flex mx-auto items-center'><ModeToggle/></div>
     <Link href="/dijital-pazarlama-baslagic-kilavuzu"> <Button className='hidden sm:flex mx-auto items-center'>Başlangıç ​​Kılavuzu</Button></Link>
    <MobilMenu/>
    </div>
  )
}

export default Settings
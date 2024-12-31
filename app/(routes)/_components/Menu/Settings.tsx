import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'

import React from 'react'
import { MobilMenu } from './MobilMenu'

const Settings = () => {
  return (
    // Büyük Ekran
    <div className='flex items-center space-x-3 relative'> 
    <div className='hidden sm:flex mx-auto items-center'><ModeToggle/></div>
    <Button className='hidden sm:flex mx-auto items-center'>Marka Kimliği</Button>
    <MobilMenu/>
    </div>
  )
}

export default Settings
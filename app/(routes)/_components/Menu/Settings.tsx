import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex items-center space-x-3'>
    <ModeToggle/>
    <Button>Marka Kimliği</Button>
    </div>
  )
}

export default Settings
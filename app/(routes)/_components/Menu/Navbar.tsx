import React from 'react'
import { Menu } from './Menu'
import Logo from './Logo'
import Settings from './Settings'
import GradientEffect from './GradientEffect/GradientEffect'



const Navbar = () => {
  return (
   <>
   <header className='flex items-center h-24'>
   <GradientEffect/>
        <div className='container flex item-center justify-between mx-auto px-4 relative'>
            <Logo/>
            <Menu/>
            <Settings/>
        </div>
   </header>
   </>
  )
}

export default Navbar
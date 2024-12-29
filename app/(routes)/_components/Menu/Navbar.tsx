import React from 'react'
import { Menu } from './Menu'
import Logo from './Logo'
import Settings from './Settings'
// import GradientEffect from './GradientEffect'



const Navbar = () => {
  return (
   <>
   <header className='flex items-center h-24'>
        <div className='container flex item-center justify-between mx-auto px-4'>
            {/* <GradientEffect/> */}
            <Logo/>
            <Menu/>
            <Settings/>
        </div>
   </header>
   </>
  )
}

export default Navbar
import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayoutProps = ({children}:AuthLayoutProps) => {
  return (
    <div className='h-screen flex justify-center items-center '>
      <div>
      {children}
      </div>
   
    </div>
  )
}

export default AuthLayoutProps
import React from 'react'

export const Navbar = () => {
  return (
    <div className=' h-28 flex lg:justify-between max-xl:justify-center items-center px-20 text-2xl'>
      <div className='font-titulo cursor-pointer'>
        <span className='text-[#ff0f0f] font-bold'>Movie</span>
        <span className='text-[#ffffff] font-bold'>Culture</span>
      </div>
      <div className='flex gap-10 font-titulo max-xl:hidden '>
        <h3 className='text-[#ffffff] font-semibold  '><a href='#footer'>Contacto</a></h3>
        <h3 className='text-[#ff0f0f] cursor-pointer '>By Jerovega</h3>
      </div>
    </div>
  )
}

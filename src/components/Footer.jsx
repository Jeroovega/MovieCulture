import React from 'react'
import foto from "/archivos/m2.png"

export const Footer = () => {
    return (
        <div id='footer' className='bg-[#000123] max-lg:h-96 h-56 px-20 py-3 border-t'>
            <div className='flex justify-between max-lg:flex-col max-lg:justify-center'>
                <div className='flex flex-col max-lg:items-center'>
                    <div className='flex items-center gap-4'>
                        <img src={foto} className='max-lg:hidden w-24 h-24' />
                        <h2 className='font-titulo text-2xl'><span className='text-[#ff0f0f] font-semibold'>Movie</span>Culture</h2>
                    </div>
                    <p className='mt-2 font-otromas max-lg:hidden'>*Las películas trabajan con su nombre original</p>
                    <p className='font-titulo py-2 max-lg:hidden'>© copyright</p>
                    <p className='font-titulo max-lg:hidden'>Todos los derechos reservados</p>
                </div>
                <div className='flex flex-col justify-around font-titulo items-center max-lg:pt-6'>
                    <a className='font-bold max-lg:mb-3 max-lg:text-2xl' href='https://www.linkedin.com/in/jeronimo-vega-42375b196/' target={'_blank'}>Linkedin</a>
                    <a className='font-bold max-lg:mb-3 max-lg:text-2xl' href='https://github.com/Jeroovega' target={'_blank'}>Github</a>
                    <p className='text-[#ff0f0f] font-bold max-lg:text-center max-lg:text-2xl'>by jerovega</p>
                    <p className='mt-2 max-lg:mt-4 font-otromas max-lg:text-center max-lg:pb-2  lg:hidden'>*Las películas trabajan con su nombre original</p>
                    <p className='font-otromas xl:py-2 lg:hidden'>© copyright</p>
                    <p className='font-otromas lg:hidden'>Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import act1 from '../image/act1.jpg'
import act2 from '../image/act2.jpg'
import act3 from '../image/act3.jpg'

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img 
            className='w-full h-full object-cover relative border-4 border-white shadow-lg'
            src={act1} alt='/'/>
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
            <img 
             className='w-full h-full object-cover relative border-4 border-white shadow-lg'
            src={act2} alt='/'/>
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursion</h3>
            <img 
             className='w-full h-full object-cover relative border-4 border-white shadow-lg'
            src={act3} alt='/'/>
        </div>
    </div>
  )
}

export default Activities
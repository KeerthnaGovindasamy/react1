import React from 'react'
import bg from '../image/bg.jpg'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img src={bg} alt='bgg' className='w-full h-full object-cover'/>
      
       <div className='max-w-[1140px] m-auto'>
       <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find your special trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>
                    Say GoodBye to machine life and just explore the wonders of nature!
                </p>
            </div>
  </div>
    </div>
  )
}

export default Hero
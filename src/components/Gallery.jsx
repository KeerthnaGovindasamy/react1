import React from 'react'
import gimg1 from '../image/gimg1.jpg'
import gimg2 from '../image/gimg2.jpg'
import gimg3 from '../image/gimg3.jpg'
import gimg4 from '../image/gimg4.jpg'
import gimg5 from '../image/gimg5.jpg'

function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src={gimg2} />
        </div>
        <div>
            <img className='w-full h-full object-cover' src={gimg1} />
        </div>
        <div>
            <img className='w-full h-full object-cover' src={gimg3} />
        </div>
        <div>
            <img className='w-full h-full object-cover' src={gimg5} />
        </div>
        <div>
            <img className='w-full h-full object-cover' src={gimg4} />
        </div>
        </div>
    </div>
  )
}

export default Gallery
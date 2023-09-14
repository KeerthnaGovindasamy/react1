import React from 'react'
import cimg from '../image/cimg.jpg'

function Contact() {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2'>
        <img src={cimg}
        className='w-full md:h-full object-cover p-2 max-h-[500px] h-[400px]' 
        />
        <form>
            <div className='grid grid-cols-2'>
            <input className='border m-2 p-2' type='text' placeholder='First name' />
            <input className='border m-2 p-2' type='text' placeholder='Last name' />
            <input className='border m-2 p-2' type='email' placeholder='Email' />
            <input className='border m-2 p-2' type='tel' placeholder='Phone' />
            <input className='border col-span-2 m-2 p-2' type='text' placeholder='Address'/>
            <textarea className='border m-2 p-2 col-span-2' cols={30} rows={10} placeholder='Query'></textarea>
            <button className='col-span-2 m-2'>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Unmatched text-to-image wizardry</p>
            <img src={assets.star_icon} alt="" />
        </div>
        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[600px] mx-auto mt-10'>From text to <span className='text-purple-700'>visual</span>, in seconds.</h1>
        
        <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI — transform your imagination into stunning artwork in seconds - type it, see it, believe it</p>
        
        <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex item-center gap-4 rounded-full'>
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </button>

        <div className='flex flex-wrap justify-center gap-3 mt-16'>
            {Array(6).fill('').map((item, index) => (  
              < img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-20' 
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} 
              alt="" key={index} width={70}/>
            ))}
        </div>

        <p className='mt-2 textneutral-600'>Generated images from MystiSketch</p>
    </div>
  )
}

export default Header
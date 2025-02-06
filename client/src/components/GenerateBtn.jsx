import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-16 text-center'>
        <h1 className='text-3xl sm:text-4xl font-semibold text-neutral-800 py-6 md:py-16'>See the Magic, Try now 🧙🏻 </h1>

        <button className="inline-flex items-center gap-2 bg-black text-white px-12 py-3 rounded-full m-auto hover:scale-105 transition-all duration-500">
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </button>
    </div>
  )
}

export default GenerateBtn
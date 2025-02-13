import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between gap-4 items-center py-3 mt-20'>

        <img src={assets.logo} alt="" width={150} />

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @MystiSketch | All rights reserved.</p>

        <div className='flex gap-2.5'>
            <a className='hover:scale-105' href="">
              <img src={assets.facebook_icon_2} alt="" width={35} />
            </a>
            
            <a className='hover:scale-105' href="">
              <img src={assets.twitter_icon_2} alt="" width={35} />
            </a>
            <a className='hover:scale-105' href="">
              <img src={assets.instagram_icon_2} alt="" width={35} />
            </a>

        </div>
    </div>
  )
}

export default Footer
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const{user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if(user){
      navigate('/result')
  }
  else{
    setShowLogin(true);
  }
}

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{ opacity: 0.2,y:100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1,y:0 }}
    viewport={{ once: true }}
    >

        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial={{ opacity: 0,y:-20 }}
        transition={{ duration: 0.8,delay:0.2 }}
        animate={{ opacity: 1,y:0 }}
        >
            <p>Unmatched text-to-image wizardry</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[600px] mx-auto mt-10'
        initial={{ opacity: 0 }}
        transition={{ duration: 2,delay:0.4 }}
        animate={{ opacity: 1}}
        >
          From text to <span className='text-purple-700'>visual</span>, in seconds.</motion.h1>
        
        <motion.p className='text-center max-w-xl mx-auto mt-5'
         initial={{ opacity: 0,y:20 }}
         transition={{ duration: 0.8,delay:0.6}}
         animate={{ opacity: 1,y:0 }}
        
        >Unleash your creativity with AI — transform your imagination into stunning artwork in seconds - type it, see it, believe it</motion.p>
        
        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex item-center gap-4 rounded-full'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition = {{default: {duration: 0.5},opacity:{delay:1,duration:0.8}}}
        >
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </motion.button>

        <motion.div className='flex flex-wrap justify-center gap-3 mt-16'
        initial={{ opacity: 0}}
        transition={{ duration: 1,delay:1}}
        animate={{ opacity: 1}}
        >
            {Array(6).fill('').map((item, index) => (  
              < motion.img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-20' 
              whileHover={{ scale: 1.05,duration: 0.3 }}

              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} 
              alt="" key={index} width={70}/>
            ))}
        </motion.div>

        <motion.p className='mt-2 textneutral-600'
        initial={{ opacity: 0}}
        transition={{ duration: 0.8,delay:1.2 }}
        animate={{ opacity: 1}}
        >Generated images from MystiSketch</motion.p>
    </motion.div>
  )
}

export default Header
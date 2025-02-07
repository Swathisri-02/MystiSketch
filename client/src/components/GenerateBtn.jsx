import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

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
    <motion.div className='pb-16 text-center'
    initial={{ opacity: 0,y:100 }}
    transition={{ duration: 1, delay: 0.2 }}
    whileInView={{ opacity: 1,y:0 }}
    viewport={{ once: true }}
    >
        <h1 className='text-3xl sm:text-4xl font-semibold text-neutral-800 py-6 md:py-16'>See the Magic, Try now 🧙🏻 </h1>

        <button onClick={onClickHandler} className="inline-flex items-center gap-2 bg-black text-white px-12 py-3 rounded-full m-auto hover:scale-105 transition-all duration-500">
            Generate Images
            <img className='h-6' src={assets.star_group} alt="" />
        </button>
    </motion.div>
  )
}

export default GenerateBtn